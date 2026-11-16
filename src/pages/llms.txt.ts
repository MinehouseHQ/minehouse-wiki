import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

// llms.txt (https://llmstxt.org): оглавление вики для ИИ-поисковиков и ассистентов.
// Черновики (draft: true) не попадают ни в сборку, ни сюда.
export const GET: APIRoute = async ({ site }) => {
  const docs = (await getCollection("docs"))
    .filter((entry) => !entry.data.draft && entry.id !== "contributing")
    .sort((a, b) => a.id.localeCompare(b.id))

  const url = (id: string) => new URL(id === "index" ? "/" : `/${id}/`, site).toString()
  const line = (entry: (typeof docs)[number]) =>
    `- [${entry.data.title}](${url(entry.id)})${entry.data.description ? `: ${entry.data.description}` : ""}`

  const mechanics = docs.filter((entry) => entry.id.startsWith("mechanics/"))
  const basics = docs.filter((entry) => !entry.id.startsWith("mechanics/"))

  const text = `# MineHouse Вики

> Вики Vanilla+ сервера Minecraft MineHouse: как зайти, правила, особенности и механики. Сервер: play.minehouse.pro, Minecraft Java 26.3 (Fabric), без доната, вход без лицензии через Discord.

- Сайт сервера: https://www.minehouse.pro/ (краткая справка: https://www.minehouse.pro/llms.txt)
- Discord: https://discord.gg/gCYGxDzaCb

## Основное

${basics.map(line).join("\n")}

## Механики

${mechanics.map(line).join("\n")}
`

  return new Response(text, { headers: { "content-type": "text/markdown; charset=utf-8" } })
}
