# Photo originals

These are the original photographs the site is built from. The website never serves these files
directly: `pnpm images` turns each one into small AVIF and WebP versions in `client/public/images/`.

## Replacing a photo

1. Overwrite the file here with your own photo, keeping the same name (for example
   `fleet/luxury-suv.jpg`). JPG or PNG, landscape, 2000 pixels wide or more.
2. Run `pnpm images` from the project root.
3. Commit the changed files in `client/image-sources/`, `client/public/images/` and
   `client/src/generated/images.json`.

## Adding a photo

Drop it in any folder here, run `pnpm images`, and refer to it by its path without the extension,
for example `fleet/my-new-car`.

The current photos are placeholders. See `CREDITS.md` for their sources.
