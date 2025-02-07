## Подготовка

Подключаемся к серверу и устанавливаем докер
`curl -fsSL https://get.docker.com | bash`

Устанавливаем nodejs
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

corepack enable

pnpm -v # проверяем что pnpm работает
```

## Запуск
1. Запускаем контейнер с базой `docker compose up -d`

2. Создаем файлик `.env` по примеру с `.env.example` и прописываем адрес до базы.
4. Устанавливаем зависимости в `./back` и `./front`
`pnpm i`

5. Готовим данные
```
pnpm db:migrate # создаем схему сданными в нашей базе
pnpm db:seed # заполняем базу данными
```

6. Запускаем сервер
`pnpm serve`
