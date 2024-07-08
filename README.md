# CI/CD
Данный проект используется GitHub Actions для сборки docker контейнеров, пуша в Container Registry и запуска обновления контейнеров на сервере.

# Pipelines
[`docker-dev.yml`](./.github/workflows/docker-dev.yml) - сборка для dev среды
- Trigger: пуш в main ветку
- Собирает docker контейнеры с тегом `:dev`
- После сборки запускает процесс обновления контейнеров на сервере (Watchtower)

[`docker-staging.yml`](./.github/workflows/docker-staging.yml) - сборка для staging среды
- Trigger: создание pre-release
- Собирает docker контейнеры с тегом `:staging` и `:%release%`
- После сборки запускает процесс обновления контейнеров на сервере (Watchtower)

[`docker-prod.yml`](./.github/workflows/docker-prod.yml) - сборка для staging среды
- Trigger: создание release
- Собирает docker контейнеры с тегом `:prod` и `:%release%`
- После сборки запускает процесс обновления контейнеров на сервере (Watchtower)

# Настройки
Для корректной работы, необходимо создать secrets для GitHub Actions:

`Repo -> Settings -> Secrets and variables -> Actions`

Необходимые параметры:
- `DOCKER_REGISTRY` - адрес Container Registry, например `ghcr.io`
- `DOCKER_USERNAME` - логин Container Registry
- `DOCKER_TOKEN` - токен Container Registry
- `WATCHTOWER_ENDPOINT` - endpoint для запуска обновления на сервере, по-умолчанию: `https://pro.gulmarket.com/watchtower/v1/update`
- `WATCHTOWER_TOKEN` - токен для запуска обновления на сервере (указан в docker репозитории)
