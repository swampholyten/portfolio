# junkai.org

A single static page. No build step, no dependencies.

- `index.html` — the whole site, with its CSS inlined in a `<style>` block.
- `icon.svg`, `og-image.png`, `robots.txt`, `sitemap.xml`, `llms.txt` — served from the root.

## Local preview

Open `index.html` in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

## Deploy

Build command: *(none)* — Build output directory: `/`
