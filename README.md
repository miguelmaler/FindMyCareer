# FindMyCareer

A static website (HTML, CSS, and JavaScript only) designed for GitHub Pages.

## Files

- `index.html` - page structure and category tabs
- `styles.css` - site styling, layout, and animations
- `script.js` - resource data and rendering logic

## Add New Resources

Open `script.js` and add entries to the `resources` array.

Each resource should follow this format:

```js
{
  category: "fit", // or "explore"
  title: "Resource title",
  url: "https://example.com",
  description: "Short summary of what this resource offers."
}
```

### Categories

- `fit`: resources that help users identify suitable careers
- `explore`: resources that help users learn about many career paths

## Deploy To GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, open: **Settings > Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at:
   - `https://<your-username>.github.io/<repo-name>/`

## Notes

- No build tools or frameworks are required.
- This site works on GitHub Pages free tier.
