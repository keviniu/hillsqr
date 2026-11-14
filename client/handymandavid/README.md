# David's Property – client site

Live (test): https://hillsqr.com/client/handymandavid/

| File | What it is | Edit it? |
|---|---|---|
| `site-data.js` | Every word, number, phone, photo path and list on the page | **Yes – this is the only file to edit for content** |
| `images/` | Photos (jpg/webp, ideally ≤ 300 KB, ~1600 px wide) | Add files here |
| `index.html` | Layout, styles and the code that fills the page from `site-data.js` | Only for design changes |

## Common updates

**New before/after job** – drop two photos in `images/`, then add a line at the top of `jobs.items`:

```js
{ title: 'New fence, 6 panels', town: 'Wokingham', category: 'Fencing', before: 'images/fence-wok-before.jpg', after: 'images/fence-wok-after.jpg' },
```
Filter buttons are built from the `category` values automatically.

**New review** – copy it from Facebook into `reviews.items` (first name + town only):

```js
{ text: 'David replaced our fence in a day…', name: 'Sarah, Wokingham', job: 'Fencing' },
```
Also update `reviews.count` and the `hero.stats` line ("102 Facebook reviews").

**Hero photos** – set `src` on the three `hero.photos` entries (first one is the large photo).

**Service / town / job type** – add or remove a line in `services.items`, `areas.towns` or `form.jobTypes`.

Empty a list (`items: []`) to hide that block; a photo left as `''` shows a grey placeholder.

## Before go-live checklist
- [ ] `business.whatsapp` → `447453159073` (currently a TEST number)
- [ ] `form.formspreeId` → David's own Formspree form; drop `[TEST]` from `form.emailSubject`
- [ ] `business.facebook` → his page URL (links appear automatically)
- [ ] `business.siteUrl` and the `<link rel="canonical">` in `index.html` → his domain
- [ ] Remove `<meta name="robots" content="noindex, nofollow">` from `index.html`
- [ ] Page `<title>` / `description` are in the `<head>` of `index.html` (kept there so Google and social previews read them without running scripts)
