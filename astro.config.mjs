// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

export default defineConfig({
  site: "https://wiki.minehouse.pro",
  integrations: [
    starlight({
      title: "MineHouse Вики",
      description: "Вики Vanilla+ сервера MineHouse: как зайти, правила, особенности, моды.",
      logo: { src: "./src/assets/logo.png", alt: "MineHouse" },
      favicon: "/favicon.png",
      locales: { root: { label: "Русский", lang: "ru" } },
      social: [
        { icon: "discord", label: "Discord", href: "https://discord.gg/gCYGxDzaCb" },
        { icon: "github", label: "GitHub", href: "https://github.com/MinehouseHQ/minehouse-wiki" },
      ],
      editLink: { baseUrl: "https://minehouse.pro/wiki-edit/" },
      lastUpdated: true,
      // Картинка для превью ссылок и поисковиков, одна на все страницы.
      head: [
        { tag: "meta", attrs: { property: "og:image", content: "https://wiki.minehouse.pro/og.png" } },
        { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
        { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
        { tag: "meta", attrs: { name: "twitter:image", content: "https://wiki.minehouse.pro/og.png" } },
      ],
      customCss: ["./src/styles/theme.css"],
      sidebar: [
        { label: "На сайт MineHouse", link: "https://minehouse.pro", attrs: { target: "_self" } },
        {
          label: "Начало",
          items: ["join", "rules", "faq"],
        },
        {
          label: "Игра на сервере",
          items: ["features", "chat", "mods"],
        },
        {
          label: "Механики",
          items: [{ autogenerate: { directory: "mechanics" } }],
        },
        { label: "Как править вики", link: "/contributing/" },
      ],
    }),
  ],
})
