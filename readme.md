## Подготовка

1. Подключаемся к серверу и устанавливаем докер
`curl -fsSL https://get.docker.com | bash`

2. Устанавливаем nodejs
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

corepack enable

pnpm -v # проверяем что pnpm работает
```

3. Устанавливаем и настраиваем caddy как reverse proxy дял доступа к нашему приложению извне
```
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -fsSL https://dl.cloudsmith.io/public/caddy/stable/gpg.key | sudo tee /usr/share/keyrings/caddy-stable-archive-keyring.asc
echo "deb [signed-by=/usr/share/keyrings/caddy-stable-archive-keyring.asc] https://dl.cloudsmith.io/public/caddy/stable/deb/debian any-version main" | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install caddy -y

caddy version # проверяем что caddy установлен

sudo nano /etc/caddy/Caddyfile

// Caddyfile
yourdomain.com {
    reverse_proxy localhost:3000
}

sudo systemctl restart caddy

sudo systemctl status caddy # проверяем статус работы caddy
```

теперь если бы запустим наш сервер на 3000 порту, то он будет доступен по адресу `yourdomain.com`

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
