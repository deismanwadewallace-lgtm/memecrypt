# Department of Orthographic Mutations gallery

Static, framework-independent implementation of
`/museum/orthographic-mutations`:

- `index.html` — page structure and accessible navigation.
- `styles.css` — responsive museum/laboratory treatment.
- `app.js` — renders and filters the collection.
- `data.js` — generated from the canonical collection JSON; do not edit.

## Source of truth

Edit `content/collections/orthographic-mutations.json`, then run:

```bash
python3 scripts/build_orthographic_gallery.py
```

The builder requires exactly twelve `OM-##` specimens and five `WA-##` field
notes, verifies every linked permanent register ID, rejects asset-bearing image
fields, and keeps `display_policy.third_party_images` set to `false`.

## Display boundary

Every visual on this page is HTML/CSS typography created for Memeography. The
gallery includes no external image request and no `img`, `svg`, canvas, video,
or embedded media element. Famous visual hosts are described only in label copy
and source notes.

These `OM-##` identifiers are provisional research numbers, not additions to
the permanent M01–M29 specimen register. See ADR 0006.
