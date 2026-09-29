# Memeography — standing spec

Inherited by every work unit. Work-unit `spec.md` files state only what differs from this.

## Source authority

- `docs/source/` is **verbatim** and never edited: `memecrypt-integration-spec.md` (the master
  architecture doc and route table — read first), `rights-register.xlsx` (29 rows, one per meme, each
  with display tier, rights holder, enforcement history, evidence grade),
  `memecrypt-catalogue-v1.md`, `memecrypt-launch-collection-readme.md`, `launch-catalog.csv`,
  `image-prompts.md`.
- `docs/decisions/` are settled and binding: 0003 decline-to-display, 0004 public rights register,
  0005 rename to Memeography, 0006 orthographic mutations must be original text, 0007 meme as
  transmissible form.
- Generated content under `content/generated/` is **output**, not source. Change the builder in
  `scripts/`, then regenerate. Never hand-edit generated files.

## Identifiers

- `register_id` — `M01`–`M29`, the stable handle for a registered meme. Set.
- Accession numbers — `MC.2026.###`. Documented as **permanent**, therefore **not pre-assigned**.
  Do not invent one to fill a field; leave it unassigned and mark the debt.

## Rights model (see PIPELINE.md for the short form)

Display tiers: **D1** show · **D2** show with a rights note · **D3** do not show.
An image renders only if `display_decision == "cleared"` and `image_mode ∈ {original_plate, licensed}`
and both `commentary` and `attribution` are present. `validate.py` enforces this structurally —
if a change requires weakening that check, it is a Wade decision, not an implementation detail.

Products: `image_source ∈ {original_design, original_plate, placeholder_card, pending}`.
`check_shop_rights.py` fails the build otherwise. Slogan products additionally pass
`check_excluded_slogans.py`.

## No fabrication

This repo's credibility is its rights discipline. Never invent: rights holders, enforcement history,
evidence grades, prices, SKUs, accession numbers, or field-guide content for unrated specimens.
19 of 29 specimens' field-guide content is **queued, not missing data** — see the `unrated` list in
`content/generated/zombie-index.json`. Absence is recorded, not filled.

## Open decisions that block work (spec section 9)

Do not resolve these in passing — they are Wade's:

1. Currency/fulfilment for physical goods vs print-on-demand — **blocks pricing the slogan line**.
2. Whether the shop funds the essays or is the point — **determines how Volume IV (Corporate Zombies)
   is built**.
3. Whether to pursue one anchor licence (Nyan Cat or Keyboard Cat — both owners have licensed before).
4. Whether/when the live site moves into a git-backed repo.

If a work unit depends on one of these, say so in its `spec.md` and stop at the outline gate.

## Known state

- `assets/` holds one file (`koans/i-always-say-what-i-meme-infinity.svg`). The launch-collection
  mockups and species plates are still missing — they only ever existed as pasted chat images, which
  do not persist, and must be attached as real files.
- The site's front end is not in this repo. `docs/production/` holds two portable static reference
  galleries, not a connected deployment.
- Prototype deployment: https://memeolography.madethis.app

## Quality gate

```sh
python3 scripts/validate.py
python3 scripts/check_shop_rights.py
python3 scripts/check_excluded_slogans.py
```

All three must pass before the critic pass, and again before publish.
