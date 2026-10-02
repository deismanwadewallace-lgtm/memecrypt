# Memeography — impact log

Stage 7 (Maintain). One row per shipped work unit. Findings here seed the next `brief.md`; material
learnings hand off to Chief Of Staff.

## Shipped

| Work unit | Shipped | What changed for the museum | Notes |
|---|---|---|---|
| — | — | — | — |

## Collection state to watch

Verified against the content tree on 2026-09-29 (not copied from prose — re-derive these, don't trust them):

- Specimens registered: **29** (`register_id` M01–M29); `validate.py` validates all 29.
- Field-guide content complete: **10 of 29**. The other **19** are queued, not missing — the `unrated`
  list in `content/generated/zombie-index.json`.
- Display tiers: **D1 3 · D2 15 · D3 11**.
- Display decisions: **0 cleared · 18 declined · 11 unavailable** — so **no specimen currently renders
  an image**. The museum is, at this moment, entirely an exhibition by absence.
- Orthographic Mutations: **12** specimens in `content/collections/orthographic-mutations.json`.
- Accession numbers assigned: **0** (`MC.2026.###` are permanent, so none are pre-assigned).
- Product files: **36**, all declaring `image_source: original_design`. Of these, **3** are the
  launch collection slated to ship (tee, field guide, poster) per `docs/source/launch-catalog.csv`.
- `assets/`: **1 file** (`koans/i-always-say-what-i-meme-infinity.svg`). The launch-collection mockups
  and species plates are still absent — they only ever existed as pasted chat images and must be
  attached as real files.

### Open discrepancy to reconcile

`docs/site-copy/museum-index.md` describes the Other Exhibits wing as "**Fourteen** specimens held
behind the rights register." The data shows 11 at D3 and 18 with `display_decision: declined`. Site
copy and content have drifted; one of them is wrong. Reconcile before that wing is published, and
record which number is authoritative.

## Learnings

- (none yet)

## Feeding the shared loop

When an outcome changes what Memeography should *do* (not just what one work unit did), hand it to
Chief Of Staff so it enters the shared impact loop:

```sh
printf '%s\n' "<COS-HANDOFF/1 body — include Impact intent / Observed signal / Learning / Next adaptation>" \
  | ecc memory handoff --from claude --target openclaw --title "<short title>" --scope user --stdin
```
