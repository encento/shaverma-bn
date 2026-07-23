# Архитектура проекта

## Назначение

«Шаверма БН» — сервис анонимного предзаказа еды на самовывоз.

Основной путь:

```text
клиентская PWA → backend → база → Telegram → сотрудник
```

---

## Текущая версия

Сейчас PWA работает как статический клиент:

```mermaid
flowchart LR
    A[Браузер клиента] --> B[Статические файлы PWA]
    A --> C[localStorage]
```

Работают меню, корзина, допы, время и локальный экран заказа.

Ограничения:

- заказ не отправляется на точку;
- нет общей нумерации;
- наличие и цены зашиты в коде;
- статусы не синхронизируются;
- слот не проверяется централизованно.

---

## Целевая архитектура MVP

```mermaid
flowchart LR
    PWA[Клиентская PWA] -->|HTTPS API| API[Backend API]
    API --> DB[(PostgreSQL)]
    API --> BOT[Telegram Bot]
    BOT --> STAFF[Сотрудники точки]
    STAFF -->|Inline-кнопки| BOT
    BOT --> API
    API --> PWA
```

### Клиентская PWA

Отвечает за:

- отображение меню;
- корзину;
- выбор времени;
- создание заказа;
- номер и статус;
- сохранение ссылки на последний заказ.

Не хранит секреты и не принимает окончательных бизнес-решений.

### Backend API

Центральный источник истины:

- меню и наличие;
- слоты;
- создание заказа;
- расчёт суммы;
- уникальный номер;
- публичный токен;
- смена статуса;
- Telegram-уведомления;
- защита от дублей;
- дальнейшая интеграция с оплатой.

### PostgreSQL

Хранит:

- категории;
- товары;
- допы;
- доступность;
- настройки точки;
- заказы;
- позиции заказов;
- статусы;
- журнал действий.

Персональные данные клиентов не хранятся.

### Telegram-бот

Используется как операционная панель:

- новые заказы;
- «Принять»;
- «Обработан»;
- аварийная отмена;
- стоп-лист;
- пауза заказов;
- настройки слотов.

---

## Базовая модель данных

```mermaid
erDiagram
    CATEGORY ||--o{ PRODUCT : contains
    PRODUCT ||--o{ PRODUCT_ADDON : supports
    ADDON ||--o{ PRODUCT_ADDON : linked
    ORDER ||--|{ ORDER_ITEM : contains
    ORDER_ITEM ||--o{ ORDER_ITEM_ADDON : contains
    ORDER ||--o{ ORDER_EVENT : has

    PRODUCT {
        uuid id
        string name
        int price
        bool is_available
        string availability_text
        bool is_visible
    }

    ORDER {
        uuid id
        int public_number
        string public_token
        datetime pickup_at
        string status
        int total
        datetime created_at
        datetime updated_at
    }

    ORDER_ITEM {
        uuid id
        uuid order_id
        uuid product_id
        string product_name_snapshot
        int unit_price_snapshot
        int quantity
    }

    ORDER_EVENT {
        uuid id
        uuid order_id
        string event_type
        string source
        datetime created_at
    }
```

Цена и название товара копируются в заказ, чтобы старый заказ не менялся после обновления меню.

---

## Статусы

Основной флоу:

```text
created → accepted → processed
```

Аварийный:

```text
cancelled
```

Где:

- `created` — заказ создан сервером;
- `accepted` — сотрудник принял заказ;
- `processed` — заказ обработан и готов к получению;
- `cancelled` — заказ отменён сотрудником.

Статуса `issued` нет.

---

## Идентификаторы

У заказа три идентификатора:

- UUID для базы;
- короткий номер для выдачи;
- случайный токен для страницы заказа.

Номер нельзя использовать как единственный ключ доступа.

---

## Обновление статуса

Для MVP достаточно polling:

```text
GET /api/orders/{token}
```

Раз в 10–15 секунд.

WebSocket или SSE добавляются только при реальной необходимости.

---

## Предлагаемый стек

### Frontend

- текущий HTML/CSS/JavaScript;
- переход на фреймворк только при росте сложности.

### Backend

- Node.js + Fastify/NestJS;
- либо Python + FastAPI.

### Infrastructure

- небольшой VDS;
- PostgreSQL;
- Docker Compose;
- Nginx или Caddy;
- HTTPS;
- резервное копирование базы.

---

## Безопасность

Минимум:

- HTTPS;
- секреты только в environment variables;
- серверная проверка цены, наличия и слота;
- idempotency key при оформлении;
- rate limiting;
- Telegram-доступ только для разрешённой группы;
- ротация или анонимизация access-логов;
- резервные копии базы.
