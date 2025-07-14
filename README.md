# Frontend Template

Шаблон для быстрого старта frontend-приложения на базе Vite.

## После клонирования шаблона:
1. **Обновите все зависимости** в `package.json` до последних версий:
   ```bash
   npm install -g npm-check-updates
   ncu -u
   yarn install
2. **Обновите зависимости** в `Dockerfile` на последние LTS версии Node и yarn
2. **Измените путь к API** в `vite.config.ts.`
3. **Добавьте стили** проекта в директорию app/styles.
4. **Замените favicon** в папке public.

## Навигация:
- [Архитектура и code-style проекта](https://www.figma.com/design/tWmC20kw6gHZzKHB4uBFLP/Work-%7C-Presentations?node-id=0-1&t=1C6Wlr0E6U6tRZKX-1)
- [Storybook](docstorybook.md)

## Local deploy:
- sudo docker compose build --build-arg API_URL=https://dev-ai-agent.org/ --build-arg VITE_WEBSOCKET_URL=wss://dev-ai-agent.org
- docker rm -f work-ai-agent-frontend-frontend && docker run -p 4173:4173 -d --name work-ai-agent-frontend-frontend work-ai-agent-frontend-frontend
