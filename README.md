# MineHouse Вики

Вики сервера MineHouse: https://wiki.minehouse.pro. Сделана на [Starlight](https://starlight.astro.build/).

Страницы лежат в `src/content/docs/` обычными Markdown-файлами, меню настраивается в `astro.config.mjs`. Как предложить правку, написано на странице [Как править вики](https://wiki.minehouse.pro/contributing/).

## Локально

```sh
pnpm install
pnpm dev     # http://localhost:4321
pnpm build   # проверка, что всё собирается
```

Вики не на Vercel: это статика на своём VPS `62.83.44.100` (`/opt/minehouse-wiki`, раздаёт Caddy). Пуш в `main` вызывает вебхук, и `mh-deploy wiki` сам собирает и выкладывает её на wiki.minehouse.pro примерно за минуту. Предпросмотра у pull request нет: проверяй локально (`pnpm dev` или `pnpm build && pnpm preview`), сборку проверяет CI.
