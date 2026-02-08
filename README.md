# MCP Ecosystem Map (MVP)

Static single-page MVP for the weekly MCP Ecosystem Map.

## Quick Start (Local)

Open `index.html` directly in a browser, or serve locally:

```powershell
# from repo root
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages Deployment

This repo is set up as a static site. You can deploy directly from the root.

1. Push the repo to GitHub.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Save. GitHub will provide a public URL.

## Structure

- `index.html` — main single-page layout
- `styles.css` — global styles
- `script.js` — data rendering + charts
- `assets/data.json` — sample data powering cards, metrics, and charts

## Update Workflow

- Edit `assets/data.json` for weekly refreshes.
- Update copy in `index.html` as needed (headline, dates, insights).
- Commit and push to update the live site.

## Notes

- Charts use Chart.js from CDN.
- Replace sample data with real weekly data when ready.
