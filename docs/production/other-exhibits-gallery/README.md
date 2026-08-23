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
a specimen only gets an image once tier, display decision, image mode,
commentary, and attribution all clear, and right now nothing does. All fourteen
specimens now have a register row. Ten are D2 and have been deliberately
declined for display; four are D3 and unavailable. Two of the D2 rows
("never pursue," identifiable minor) are Success Kid (M03) and Bad Luck Brian
(M10).
The Success Kid photo specifically has litigation history: *Griner v. King
for Congress* rejected this exact "educational/fair use" argument on appeal
(8th Cir. 2024, cert. denied 2025). Charlie Bit My Finger, Dancing Baby,
LOLCats, and Harlem Shake were added as M26–M29 on 23 August 2026.

## What changed from the received package

- `images/`, `exports/`, and `gallery-preview.png` — **not included in this
  repo.** No archival photograph or video frame is reproduced anywhere here.
- `app.js` — each card no longer renders an `<img>`. The original-drawing
  line-art specimen mark (already part of the package, used before only as
  a small watermark) is now the card's primary visual, enlarged to fill the
  frame. Each card carries a `registerStatus` field with the register ID and
  tier and a `displayNote` explaining the curatorial decision. The badge now
  distinguishes `DECLINED FOR DISPLAY` from `NOT PERMITTED FOR DISPLAY`.
  The two Creative Commons
  claims in the original `credit` text (LOLCats, Harlem Shake) are kept but
  flagged as claimed by the source package and not independently verified —
  attempted verification against Wikimedia was blocked in this environment.
- `index.html` — the display advisory states that the museum is declining
  display rather than waiting for clearance, as accepted in ADR 0003.
- `sources.md` — unchanged. The research links are fine to keep; nothing in
  it reproduces a copyrighted image.
- Photographer/creator names are still credited on each card. That's a
  factual citation, not a reproduction of the image, and matches how the
  register itself credits rights holders on D3 (do-not-show) entries.

## Current posture

- The register now contains 29 specimens, including M25–M29 from the 23 August
  resolution package.
- The four D3 cards in this wing are unavailable on any terms. The ten D2 cards
  are declined under ADR 0003 even though the policy could permit a conditional
  thumbnail treatment.
- No card may leave the line-art treatment without its own recorded curatorial
  decision. Uploading an image is never enough.
