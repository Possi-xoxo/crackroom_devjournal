# In to the Crackrooms — Development journal

A static, interactive development journal for **In to the Crackrooms**. The complete website lives in [`docs/`](docs/). It includes the game vision, the editable Egg dossier, a player progression roadmap with store unlocks, session logs, milestone tracking, a design notebook, and concept art of the spherical egg.

The site uses plain HTML, CSS, and JavaScript. No application server, build step, package install, API key, or ChatGPT login is required. Typography optionally loads from Google Fonts; system fonts are used if unavailable.

## Repository layout

```text
docs/
  index.html          # Page shell and navigation
  app.js              # Interactions, storage and migrations
  design-content.js   # Current design notes and player-roadmap defaults
  style.css           # Responsive layout
  assets/             # Original and revised concept artwork
  .nojekyll           # Serve as a plain static website
.github/workflows/
  pages.yml           # Validate and deploy docs/ to GitHub Pages
tests/
  concept-migration.cjs
artwork-edit-prompt.txt
```

## Publish with GitHub Pages

The included workflow publishes only `docs/`, placing the journal at the root of this repository's Pages site. All asset URLs are relative and navigation uses URL fragments, so a project subpath works without rewrites.

One-time repository setup:

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open **Actions → Deploy journal to GitHub Pages → Run workflow** and run it on `main`.
4. Wait for the deployment to finish. Use the URL reported by the deployment; the expected standard URL is `https://possi-xoxo.github.io/crackroom_devjournal/`.

After setup, changes pushed to `docs/`, the migration tests, or the workflow on `main` trigger deployment automatically. The workflow checks JavaScript syntax and saved-progress migrations before uploading the static files.

GitHub Pages availability for a private repository depends on the account's plan. This repository does not change its own visibility or enable Pages automatically. See [GitHub's Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Alternatively, GitHub Pages supports **Deploy from a branch → main → /docs**. If you choose that route, disable the Actions workflow to avoid maintaining two publishing routes.

## Preview locally

From the repository root:

```sh
python3 -m http.server 4173 --directory docs --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. Use HTTP locally rather than opening `index.html` directly from disk, so browser storage behaves consistently.

## Saved progress and moving from the original site

Notes, sessions, completed milestones, and the Egg dossier save in the visitor's browser using `localStorage`. They are not committed to GitHub, synchronized between people, or stored by GitHub Pages. The source contains the starting design content, not anyone's browser-saved progress.

To move progress from the original ChatGPT-hosted site:

1. Open the original site in the browser where you have been using it.
2. Click **Export backup** and save the JSON file.
3. Open the GitHub Pages version and click **Restore backup**.
4. Select the exported file and confirm restoration.

Different domains have separate browser storage. Sharing the Pages URL does not share browser-saved edits. Use export/restore to move between devices or make a backup before clearing browser data. Restoring replaces that browser's journal, so export its current state first if you need to retain it.

## Editing the journal

- Change the document structure in `docs/index.html`.
- Change the visual style in `docs/style.css`.
- Change current design notes, Egg dossier defaults, and player-roadmap starting points in `docs/design-content.js`.
- Change the rendered game vision, interactions, and migrations in `docs/app.js`.
- Use **Player progression → Edit stage** in the browser to revise stage titles, bullet lists, and tool-unlock gates. These edits save locally and are included in JSON backups. The store table follows those edits.
- **Build milestones** tracks development tasks; **Player progression** describes the player’s journey from the first shift to endings.
- Keep artwork in `docs/assets/`; the original composition is retained alongside the spherical revision.

Existing browser saves may contain user-edited content. Default-content updates should include a migration in `migrateConcept` and advance `contentRevision`, preserving customized fields, session entries, and completed work. Do not change the storage key casually; existing backups retain compatibility with the original site.

Run the existing checks from the repository root:

```sh
node --check docs/design-content.js
node --check docs/app.js
node tests/concept-migration.cjs
```

The migration checks cover both original journal revisions, custom notes, completed tasks, repeat-load behavior, and the Egg dossier.

The confirmed seven-stage excavation sequence appears in the Egg dossier and Player progression. Untouched older plans migrate to this sequence; customized plans remain editable alongside the current reference table. `docs/design-revision-four.js` holds frozen defaults for safe migration.

Computer Research (`#research`) documents the in-game desktop hub, eleven candidate minigames, research gates, and hidden desktop routes. Expand a program to add design notes; these save locally and travel with JSON exports/restores. This is a design dossier, not a playable implementation of the minigames.

The Egg dossier contains seven original AI-generated layer studies in `docs/assets/egg-inspiration/`, each with an art-direction caption and a full-resolution link. These are exploratory images, not approved production assets. `artwork-layer-inspiration-prompts.json` records the built-in generation prompts and asset paths. Earlier artwork remains under Design history.
