# FSD App

Проект на React с TypeScript, структурированный по методологии **Feature-Sliced Design (FSD)**.

## 🚀 Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Запуск в режиме разработки
```bash
npm run dev
```

### Сборка для продакшена
```bash
npm run build
```

### Предварительный просмотр сборки
```bash
npm run preview
```

## 📁 Структура проекта (FSD)

```
cursor-guide/
├── app/                    # 🚀 Слой приложения
│   ├── providers/          # Провайдеры (Router, Theme, etc.)
│   ├── routing/            # Конфигурация маршрутов
│   ├── styles/            # Глобальные стили
│   └── App.tsx            # Корневой компонент
├── pages/                  # 📄 Слой страниц
│   └── home/              # Домашняя страница
├── widgets/               # 🧩 Слой виджетов
│   └── header/            # Компонент хедера
├── features/              # ⚡ Слой фичей
│   └── auth/              # Функционал авторизации
├── entities/              # 🎯 Слой сущностей
│   └── user/              # Сущность пользователя
└── shared/                # 🔧 Переиспользуемый код
    ├── ui/                # UI компоненты
    ├── lib/               # Утилиты и хуки
    ├── api/               # API клиент
    ├── config/            # Конфигурация
    └── assets/            # Статичные ресурсы
```

## 🏗️ Архитектура слоёв

### 1. **App** - Инициализация приложения
- Настройка провайдеров
- Конфигурация роутинга
- Глобальные стили

### 2. **Pages** - Страницы приложения
- Композиция виджетов и фичей
- Роутинг на уровне страниц

### 3. **Widgets** - Сложные UI блоки
- Самостоятельные компоненты
- Композиция features и entities

### 4. **Features** - Бизнес-функции
- Конкретная пользовательская функциональность
- Взаимодействие с entities

### 5. **Entities** - Бизнес-сущности
- Модели данных
- API для работы с сущностями

### 6. **Shared** - Переиспользуемый код
- UI Kit
- Утилиты и хелперы
- Общие конфигурации

## 🛠️ Технологии

- **React 18** - UI библиотека
- **TypeScript** - Типизация
- **Vite** - Сборщик и dev-сервер
- **React Router** - Маршрутизация
- **ESLint** - Линтинг кода

## 📝 Правила импортов

Импорты следуют принципу: слои могут импортировать только из нижележащих слоёв.

```typescript
// ✅ Правильно
import { Button } from "shared/ui";
import { userApi } from "entities/user";

// ❌ Неправильно
import { SomeWidget } from "widgets/some"; // из features
```

## 🎯 Алиасы путей

Настроены алиасы для удобного импортирования:

```typescript
import { HomePage } from "pages/home";
import { Header } from "widgets/header";
import { LoginForm } from "features/auth";
import { User } from "entities/user";
import { Button } from "shared/ui";
```

