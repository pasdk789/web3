XENORRA — VERCEL IMAGE RESTORE + LOGO CONSISTENCY

Upload all extracted website files to the repository root, keeping assets/ intact.
All pages use the same xenorra-brand-emblem-fixed.png. The logo is cache-busted
and a shared CSS rule prevents page-specific filters from changing its colour.
The full artwork directory is included. This package is not live-tested.
After Vercel deploys, hard-refresh and inspect Network > Images for 404s.
