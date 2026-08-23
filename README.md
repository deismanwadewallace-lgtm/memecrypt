# Memecrypt

A satirical museum of internet memes, framed as natural history: species,
autopsies, an outbreak advisory, and a gift shop that sells the argument
rather than the images. Live prototype: https://memecrypt.madethis.app

This repo is the content and rights foundation underneath that site — not
yet the site's own code. See "What's here" and "What's not here" below.

## Foundational documents

Everything under `docs/source/` is a source document, kept verbatim:

- `memecrypt-integration-spec.md` — the master architecture doc. Resolves
  four disagreeing plans (live site, ecosystem map, slogan corpus, rights
  register) into one route table, one content schema, and a five-phase
  build order. Read this first.
- `rights-register.xlsx` — 24 rows, one per meme, each rated a display
  tier (D1 show / D2 show with rights note / D3 do not show), with rights
  holder, enforcement history, and evidence grade.
- `memecrypt-catalogue-v1.md` — a 10-object gift shop draft (accession
  numbers `MC.2026.###`, wall-label copy, prices).
- `memecrypt-launch-collection-readme.md` + `launch-catalog.csv` — the
  first 3 shop products actually slated to ship (tee, field guide,
  poster), with SKU/price/variant data.
- `image-prompts.md` — the exact prompts used to generate the 3 launch
  product mockups.

## What's here: Phase 1 of the integration spec

The spec's section 4 rendering rule — "a specimen page renders an image
if and only if [tier, image mode, commentary, and attribution all clear
the bar]... otherwise the page renders the placeholder" — is implemented
as code, not left as an editorial guideline:

```
content/
  specimens/*.json       # one file per register row, machine-generated
  products/catalogue-v1/*.json       # the 10-object draft catalogue
  products/launch-collection/*.json  # the 3-item launch collection
  placeholder-card.json  # MC.2026.009, rendered whenever the rule fails
  generated/summary.json # tier/evidence counts, computed not hardcoded
scripts/
  import_register.py     # rights-register.xlsx -> content/specimens/*.json
  build_register.py      # applies the rendering rule, writes the summary,
                          # and fails the build if a D3 specimen ever
                          # carries a non-placeholder image_mode
```

Run it:

```
pip install -r requirements.txt
python3 scripts/import_register.py   # regenerate specimen files from the register
python3 scripts/build_register.py    # apply the rendering rule, print/write the summary
```

Current state: **0 of 24 specimens render an image; all 24 fall back to
the placeholder.** That's correct, not a bug — no commentary, attribution,
or plate has been produced for any specimen yet. As species pages get
written (Phase 3 of the spec), filling in `commentary`, `attribution`,
and `image_mode` on a D1/D2 specimen file is what flips it from
placeholder to rendered. A D3 specimen (Pepe, Rickroll, Distracted
Boyfriend, etc.) can never flip — the build script enforces that.

Tier counts (`3 D1 / 14 D2 / 7 D3`) match the register's own Summary
sheet exactly, computed from the imported files rather than retyped.

## What's not here

- **The site's own front end.** The spec's route table
  (`/museum/specimen/[id]`, `/species/[binomial]`, etc.) describes where
  this content should render, but this repo doesn't know what framework
  memecrypt.madethis.app actually runs on, so no pages/components exist
  yet. Phases 2–5 of the spec (nav collapse, Volume II specimens,
  provenance page, shop) are still open.
- **Product images.** `launch-collection/*.json` reference
  `assets/specimen-001-tee-product.png` etc., matching the CSV, but the
  actual PNGs weren't received as file attachments (only pasted inline
  in chat, which this environment can't save to disk) — `assets/` is
  empty. Attach them as files and they can be dropped straight into
  place.
- **Species content.** `binomial`, `habitat`, `diet`, `status`, and the
  autopsy fields are null on every specimen — that's original curatorial
  writing the spec assigns to Phase 3, not something to invent here.
- **Accession numbers for specimens.** The catalogue's `MC.2026.###`
  format is described as permanent, so none are assigned to the 24
  register species pre-emptively; only `register_id` (M01–M24) is set.

## Open decisions (spec section 9, unresolved)

1. Currency/fulfilment for physical goods (pins, stamps, tins) vs.
   print-on-demand (posters, apparel).
2. Whether the shop funds the essays or is the point — determines how
   Volume IV (Corporate Zombies) gets built.
3. Whether to pursue one anchor licence (Nyan Cat or Keyboard Cat — both
   owners have licensed before).
4. Whether/when the live site itself moves into a git-backed repo.
