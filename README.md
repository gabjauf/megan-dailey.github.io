# megan-dailey.github.io

Personal website, built with [Astro](https://astro.build) and published to https://megan-dailey.github.io.

## Editing content

| What                         | File                          |
| ---------------------------- | ----------------------------- |
| About text                   | `src/data/about.md`           |
| Publications                 | `src/data/publications.ts`    |
| Name, role, profile links    | `src/data/site.ts`            |
| Profile photo                | `public/prof_pic.jpg`         |
| Styles                       | `src/styles/global.css`       |

Pushing to `main` builds and deploys the site automatically (`.github/workflows/deploy.yml`).

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```
