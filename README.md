# Aaron Scott, personal website

Live at **https://scottvaaron-ctrl.github.io/Website/** once GitHub Pages is turned on (steps below).

Built with [Astro](https://astro.build). Every push to `main` rebuilds and publishes the site automatically (`.github/workflows/deploy.yml`).

## Where things live

| To change… | Edit this file |
|---|---|
| Name, tagline, email, LinkedIn, headshot, homepage numbers, the four homepage doors | `src/data/site.ts` |
| Experience, education, skills | `src/data/site.ts` |
| The look (A editorial / B bold) | `THEME` at the top of `src/data/site.ts` |
| Show or hide the dashed "coming soon" placeholders | `SHOW_PLACEHOLDERS` near the top of `src/data/site.ts` |
| About page text | `src/pages/about.astro`; your own answers go in `aboutAnswers` in `src/data/site.ts` |
| Résumé download button | `resume` in `src/data/site.ts` (PDF in `public/files/`) |
| A writing sample | copy `src/content/projects/writing-sample-template.md` |
| The Now page (what you're working on) | `now` at the bottom of `src/data/site.ts` |
| Contact form key | `web3formsKey` in `src/data/site.ts` (see below) |
| A project | `src/content/projects/<name>.md` |
| Colors and fonts | `src/styles/global.css` (top of the file) |

## Add a new project

1. Copy any file in `src/content/projects/`, for example `trade-bot.md`, and rename it, for example `my-new-thing.md`. The file name becomes the address: `/Website/projects/my-new-thing/`.
2. Edit the block between the `---` lines at the top:
   - `title`, `summary` (one line, shown on cards), `role`, `period`
   - `category`: `Operations`, `Media` or `Tech`
   - `status`: `Live`, `Active`, `Completed`, `In development`, `Paused`, `Planned` or `Idea`
   - `statusNote`: optional short note shown on the project page, e.g. `Version 4`
   - `tags`: list used by the Projects page filter, e.g. `[AI agents, Operations]`
   - `flow`: optional "How it works" steps, e.g. `[Read data, Decide, Act]`
   - `image`: optional picture in `public/images/`, e.g. `images/my-thing.jpg`, plus `imageAlt` describing it
   - `quote`: optional line in your own words, shown large
   - `featured: true` puts it in the homepage "Featured work" section (the first 3 by `order` show)
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

## Turn on the contact form

1. Go to https://web3forms.com and create an access key with the email address that should receive messages. The key arrives by email.
2. Paste it into `web3formsKey: ''` in `src/data/site.ts`, between the quotes. The key is public by design, so it's safe to commit.
3. Commit and push. Until a key is there, the Contact page shows an "Email me" button instead.

## Preview on your computer (optional)

Needs Node 22.23.4 or newer (Node 24 recommended).

```powershell
npm install
npm run dev
```

Open http://localhost:4321/Website/ . On Windows PowerShell, use `npm.cmd` if `npm` is blocked.

## Turn on GitHub Pages (one time)

Repo → **Settings** → **Pages** → under **Build and deployment**, set **Source** to **GitHub Actions**.
