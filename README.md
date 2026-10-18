# megan-dailey.github.io

This is the source of the website at **https://megan-dailey.github.io**.

You don't need to install anything or know any programming to update it. Everything below can be done from the GitHub website in your browser.

## How updating works

1. Open the file you want to change on GitHub (the list below says which one).
2. Click the **pencil icon** (✏️ "Edit this file") at the top right of the file.
3. Make your change.
4. Click the green **Commit changes…** button, keep "Commit directly to the `main` branch" selected, and confirm.

That's it. GitHub rebuilds the website automatically, and your change is online **about 2 minutes later**. You can watch the progress in the **Actions** tab at the top of the repository: a yellow dot means it's still working, a green check means it's online, and a red cross means something went wrong (see [If something goes wrong](#if-something-goes-wrong)).

## Which file to edit

| I want to change…                               | Edit this file                                            |
| ----------------------------------------------- | --------------------------------------------------------- |
| The "About" text                                | [`src/data/about.md`](src/data/about.md)                  |
| The list of publications                        | [`src/data/publications.ts`](src/data/publications.ts)    |
| My name, job title, university, links, contact  | [`src/data/site.ts`](src/data/site.ts)                    |
| My photo                                        | [`public/prof_pic.jpg`](public/prof_pic.jpg)              |

You can ignore every other file.

---

## Changing the "About" text

Open [`src/data/about.md`](src/data/about.md) and type as you would in a normal text editor.

- Leave **one empty line** between paragraphs.
- `**bold**` gives **bold**, `*italic*` gives *italic*.
- A link is written `[text shown](https://example.com)`.

## Adding a publication

Open [`src/data/publications.ts`](src/data/publications.ts). Each publication is a block between `{` and `},`. The easiest way to add one is to **copy an existing block, paste it right after `export const publications: Publication[] = [`, and change the text**.

Here is a complete example with every possible field:

```ts
  {
    title: "Title of the paper",
    authors: ["Megan M. Dailey", "Second Author", "Third Author"],
    year: 2025,
    type: "Article",
    venue: "<i>Journal Name</i>, 12(3), 45–67",
    doi: "10.1177/02676583231234567",
    pdf: "/my-paper.pdf",
  },
```

What each line means:

| Line      | Required? | What to write                                                                                                   |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `title`   | yes       | The title, between quotes.                                                                                      |
| `authors` | yes       | Each author between quotes, separated by commas, all inside `[ ]`. Your name is shown in bold automatically.    |
| `year`    | yes       | A number, **without** quotes. Publications are grouped by year, newest first.                                   |
| `type`    | yes       | One of: `"Article"`, `"Ph.D. thesis"`, `"Conference"`, `"Chapter"`.                                             |
| `venue`   | no        | Journal or conference. `<i>…</i>` puts text in italics.                                                         |
| `doi`     | no        | Only the DOI itself (starting with `10.`), not the full `https://doi.org/…` address. Adds a "DOI" link.         |
| `pdf`     | no        | A link to a PDF. Adds a "PDF" link. See [Adding a PDF](#adding-a-pdf-cv-or-paper).                              |

If you don't need an optional line, just delete it.

**Watch out for punctuation** — this is the only fussy part:

- Text goes between straight double quotes: `"like this"`.
- Every line inside the block ends with a comma `,`.
- Every block ends with `},`.
- If a title itself contains a double quote, use typographic quotes (“ ”) instead.

## Changing your name, title, links or contact

Open [`src/data/site.ts`](src/data/site.ts) and change the text between quotes.

To add a profile link (for example ORCID), copy a line in the `links` list and change it:

```ts
    { label: "ORCID", href: "https://orcid.org/0000-0000-0000-0000" },
```

The email is deliberately written as "megan dot dailey at unil dot ch" rather than as a clickable address, so spam robots can't harvest it.

## Changing the photo

1. Name your new photo exactly `prof_pic.jpg`. A square photo works best.
2. Open the [`public`](public) folder on GitHub.
3. Click **Add file → Upload files**, drop the photo in, and commit. It replaces the old one.

## Adding a PDF (CV or paper)

1. Open the [`public`](public) folder on GitHub, click **Add file → Upload files**, and upload your PDF. Use a simple name without spaces, like `cv.pdf`.
2. The file is then available at `/` followed by its name, e.g. `/cv.pdf`.

**For your CV:** in [`src/data/site.ts`](src/data/site.ts), find the line

```ts
    // { label: "CV (PDF)", href: "/cv.pdf" },
```

and delete the `// ` at the start. The `//` means "ignore this line", so removing it makes the "CV (PDF)" button appear.

**For a paper:** add `pdf: "/my-paper.pdf",` to that publication.

---

## If something goes wrong

If the **Actions** tab shows a red cross after your change, the website simply **keeps showing the previous version** — nothing is broken online. To fix it:

1. Click the failed run, then the red step, to see the error. It usually names the file and line number.
2. The cause is almost always a missing comma, quote or bracket in the file you just edited. Compare it with the example above.
3. Fix it and commit again.

To undo a change entirely, open the file, click **History** (top right), find the previous version, and copy its content back.

---

## For developers

The site is built with [Astro](https://astro.build) and deployed by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) to the `gh-pages` branch on every push to `main`. To preview locally (Node 22):

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

The page layout is in `src/pages/index.astro` and the styles in `src/styles/global.css`.
