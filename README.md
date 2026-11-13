# Aaron Scott, personal website

Live at **https://scottvaaron-ctrl.github.io/Website/** once GitHub Pages is turned on (steps below).

Built with [Astro](https://astro.build). Every push to `main` rebuilds and publishes the site automatically (`.github/workflows/deploy.yml`).

## Where things live

| To change… | Edit this file |
|---|---|
| Name, tagline, email, headshot, homepage numbers, the three homepage doors | `src/data/site.ts` |
| Experience, education, skills | `src/data/site.ts` |
| The look (A editorial = cream, B bold = dark navy) | `THEME` at the top of `src/data/site.ts` |
| About page text | `src/pages/about.astro` |
| A project | `src/content/projects/<name>.md` |
| Colors and fonts | `src/styles/global.css` (top of the file) |

## Add a new project

1. Copy any file in `src/content/projects/`, for example `trade-bot.md`, and rename it, for example `my-new-thing.md`. The file name becomes the address: `/Website/projects/my-new-thing/`.
2. Edit the block between the `---` lines at the top:
   - `title`, `summary` (one line, shown on cards), `role`, `period`
   - `category`: `Operations`, `Media` or `Tech`
   - `status`: `Live`, `Active`, `Completed`, `In development`, `Paused`, `Planned` or `Idea`
   - `featured: true` puts it on the homepage (the first 3 by `order` show)
   - `order`: lower numbers appear first
   - `hidden: true` keeps the file but leaves it off the site
   - optional `links:` list, for example:
     ```yaml
     links:
       - label: Watch on YouTube
         url: https://youtube.com/...
     ```
3. Write the page below the second `---` in plain Markdown (`## Heading`, `- bullet`).
4. Commit and push. The site updates in a few minutes.

If a required field is missing or misspelled, the build fails and the live site stays as it was. Check the **Actions** tab on GitHub to see the error.

## Add your headshot

Put a square photo at `public/headshot.jpg`, then in `src/data/site.ts` change `headshot: ''` to `headshot: 'headshot.jpg'`.

## Preview on your computer (optional)

Needs Node 22.23.4 or newer (Node 24 recommended).

```powershell
npm install
npm run dev
```

Open http://localhost:4321/Website/ . On Windows PowerShell, use `npm.cmd` if `npm` is blocked.

## Turn on GitHub Pages (one time)

Repo → **Settings** → **Pages** → under **Build and deployment**, set **Source** to **GitHub Actions**.
