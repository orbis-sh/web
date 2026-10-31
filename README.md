# orbis.sh

Landing page for orbis.sh, open-source Hytale mods for MMO RPG servers. Built with Astro and Tailwind, deployed to Cloudflare Workers.

## Commands

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `pnpm install`    | Install dependencies                            |
| `pnpm dev`        | Start the dev server at `localhost:4321`        |
| `pnpm build`      | Build the site to `./dist/`                     |
| `pnpm preview`    | Preview the build in the Workers runtime        |
| `pnpm run deploy` | Build and deploy to Cloudflare with Wrangler    |
| `pnpm cf-typegen` | Generate types for the Worker bindings          |

Site name, description and community links live in `src/site.ts`.
