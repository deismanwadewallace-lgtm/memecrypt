# Other exhibits gallery

A 14-card exhibit gallery for the Hall of the Undead's "Other exhibits" wing
(archive records 002–015): `index.html` / `styles.css` / `app.js`, plus the
original research in `sources.md`.

## Provenance

Received from Wade as `Memecrypt_Exhibit_Cards.zip`, a self-contained static
gallery. The original package hard-coded an archival photograph or video
frame for every card (`images/*.jpg` / `*.png`), each captioned "educational
fair use" or a specific Creative Commons licence, plus baked full-card PNG
exports of the same photos (`exports/*.png`, `gallery-preview.png`).

That conflicts with this repo's own rights register
(`docs/source/rights-register.xlsx`) and rendering rule
(`memecrypt-integration-spec.md` §4, enforced in `scripts/build_register.py`):
a specimen only gets an image once tier, image mode, commentary, and
attribution all clear, and right now nothing does. Checked against the
register, ten of these fourteen specimens already have a row — at "licence
only" or "never pursue," never pre-cleared — and two of those ("never
pursue," identifiable minor) are Success Kid (M03) and Bad Luck Brian (M10).
The Success Kid photo specifically has litigation history: *Griner v. King
for Congress* rejected this exact "educational/fair use" argument on appeal
(8th Cir. 2024, cert. denied 2025). Four specimens (Charlie Bit My Finger,
Dancing Baby, LOLCats, Harlem Shake) aren't in the register at all — the
integration spec's own Volume I/II notes already flagged Charlie Bit My
Finger and Dancing Baby as needing register rows before they get exhibit
pages, and the same applies to LOLCats and Harlem Shake.

## What changed from the received package

- `images/`, `exports/`, and `gallery-preview.png` — **not included in this
  repo.** No archival photograph or video frame is reproduced anywhere here.
- `app.js` — each card no longer renders an `<img>`. The original-drawing
  line-art specimen mark (already part of the package, used before only as
  a small watermark) is now the card's primary visual, enlarged to fill the
  frame — the same "original redraw, not the circulating file" treatment
  the register already uses for Wojak (M20), Rage Comics (M21), and Loss
  (M22). Each card carries a `registerStatus` field (the register ID and
  tier, or "unregistered") and a `displayNote` explaining why the photo
  isn't shown, plus a `NOT ON DISPLAY` badge. The two Creative Commons
  claims in the original `credit` text (LOLCats, Harlem Shake) are kept but
  flagged as claimed by the source package and not independently verified —
  attempted verification against Wikimedia was blocked in this environment.
- `index.html` — added a short "Display policy" note above the grid,
  in the same voice as placeholder card MC.2026.009, explaining why every
  card shows a drawing instead of a photograph.
- `sources.md` — unchanged. The research links are fine to keep; nothing in
  it reproduces a copyrighted image.
- Photographer/creator names are still credited on each card. That's a
  factual citation, not a reproduction of the image, and matches how the
  register itself credits rights holders on D3 (do-not-show) entries.

## Before this goes further

- Charlie Bit My Finger, Dancing Baby, LOLCats, and Harlem Shake need actual
  register rows in `docs/source/rights-register.xlsx` — evidence grade,
  enforcement history, identifiable-person/minor determination — researched
  and cited the way the existing 24 rows are, not assumed. This repo
  deliberately doesn't add rows on their behalf without that research.
- The four "licence only" specimens here (Doge, Nyan Cat, Keyboard Cat,
  Trollface) are the least-risky tier in the existing register, but "licence
  only" means a licence has to actually be secured before an image is
  displayed — it isn't a green light on its own.
