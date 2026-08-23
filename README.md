# Memecrypt

A satirical museum of internet memes, framed as natural history: species,
autopsies, an outbreak advisory, and a gift shop that sells the argument
rather than the images. Live prototype: https://memecrypt.madethis.app

This repo is the content and rights foundation underneath that site — not
yet the site's own code. All five build phases from the integration spec
are done at the content/data layer; none has a page template yet. See
"What's here," "What's not here," and "Repo layout" below.

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

`docs/production/` holds material this repo generated rather than
received verbatim — currently `species-plate-briefs.md`, image-generation
briefs for the Volume II species plates.

## Repo layout

```
content/
  specimens/*.json          # 24 register rows, machine-generated
  products/
    catalogue-v1/*.json     # the 10-object draft catalogue
    launch-collection/*.json# the 3-item launch collection
    slogan-line/*.json      # 23 slogan-corpus products, machine-generated
  pages/quotations.json     # the koan wall: 4 slogan families + barred lines
  placeholder-card.json     # MC.2026.009
  routes.json               # full route table, live/coming-soon per route
  rights-gaps.json          # memes referenced elsewhere that aren't clear to show yet
  generated/                # computed, not hand-edited — see scripts/ below
    summary.json            # tier/evidence/identifiable-person/minor counts
    zombie-index.json        # all specimens sorted by undead_rating
    provenance-page.json    # /research/provenance, numbers filled in live
scripts/
  import_register.py        # rights-register.xlsx -> content/specimens/*.json
  build_register.py         # rendering rule + counts -> generated/summary.json
  build_zombie_index.py     # generated/zombie-index.json
  build_provenance.py       # generated/provenance-page.json
  build_slogan_products.py  # pages/quotations.json -> products/slogan-line/*.json
  check_excluded_slogans.py # fails if a barred slogan reaches printed copy
  check_shop_rights.py      # fails if a product lacks an original/placeholder image_source
```

Run the whole pipeline:

```
pip install -r requirements.txt
python3 scripts/import_register.py
python3 scripts/build_register.py
python3 scripts/build_zombie_index.py
python3 scripts/build_provenance.py
python3 scripts/build_slogan_products.py
python3 scripts/check_excluded_slogans.py
python3 scripts/check_shop_rights.py
```

## What's here

**Phase 1 — content model and register import.** The spec's rendering
rule — a specimen only renders an image if tier, image mode, commentary,
and attribution all clear the bar, otherwise it renders the MC.2026.009
placeholder — is enforced in `build_register.py`, not left as editorial
guidance. Currently **0 of 24 specimens render an image**; that's correct,
not a bug, since no plate or commentary has been produced yet. Tier
counts (3 D1 / 14 D2 / 7 D3) and the identifiable-person/minor/merch
counts (12 / 4 / 16) match the register's own Summary sheet exactly.

**Phase 2 — navigation collapse.** `content/routes.json` covers every
route in spec section 3 (five top-level, everything else nested), each
tagged `live` or `coming-soon` with museum-voice placeholder copy. The
2005-founding-date purge is confirmed clean — and scoped correctly: a
specimen's own real-world `first_outbreak` year (e.g. 2009 for Socially
Awkward Penguin) is untouched, since that purge is about the museum's
founding date, not meme history.

**Phase 3 — Volume II specimens.** Full field-guide/autopsy content
(binomial, status, undead_rating, habitat, diet, predators, transmission,
cause of death, resurrection, host population, mutation, prognosis) is
written for 10 specimens: the 5 register-backed Volume II memes
(Trollface, Success Kid, Keyboard Cat, Nyan Cat, Rage comic faces) plus 5
more D2 specimens (Grumpy Cat, Bad Luck Brian, Overly Attached
Girlfriend, All Your Base, Doge). `build_zombie_index.py` compiles the
sortable rating table live. `docs/production/species-plate-briefs.md`
has commissioning briefs for the 5 clear species plates, following the
existing no-real-photograph illustration pattern — not finished art, since
no image-generation tool is available in this session.

**Phase 4 — provenance and quotations.** `build_provenance.py` renders
the `/research/provenance` thesis paragraph with live counts plugged into
the spec's own template sentence, never hand-typed numbers.
`content/pages/quotations.json` holds all four slogan families, with the
two barred lines ("I shop therefore I am"; "This is fine") explicitly
excluded and reasoned. `check_excluded_slogans.py` fails the build if
either reaches printed copy.

**Phase 5 — shop.** `build_slogan_products.py` maps each of the four
slogan families to its product-line substrate (diagnostics → mug/poster,
koans → shirt, institutional voice → signage/sticker, allusions → print),
generating 23 concept products with no invented prices or SKUs — that's
still an open decision (see below). `check_shop_rights.py` enforces
structurally that every product across all three product directories
(36 total) declares an original or placeholder `image_source`; none may
reference a third party's copyrighted image.

**Rights gaps, flagged proactively.** While generating exhibit-card
requests, a user's reference list surfaced several memes this project
needed to address explicitly: Rickroll (M19, D3 — do not show, reference
by name only) and four unregistered memes (Charlie Bit My Finger, Dancing
Baby, Chuck Norris Facts, LOLCats) that need register rows — with
Charlie Bit My Finger and Chuck Norris Facts flagged for extra sensitivity
(real identifiable children; a living celebrity's right of publicity).
All recorded in `content/rights-gaps.json`.

**Other exhibits gallery, sanitized.** Wade supplied a 14-card exhibit
gallery (`Memecrypt_Exhibit_Cards.zip`) that shipped a real archival
photograph or video frame for every card. Checked against the register,
ten of the fourteen were already rows at "licence only" or "never pursue"
— never pre-cleared — and the other four (Charlie Bit My Finger, Dancing
Baby, LOLCats, Harlem Shake) are exactly the unregistered memes
`content/rights-gaps.json` already flags. `docs/production/other-exhibits-gallery/`
carries the gallery with every photograph and baked export removed: each
card shows its original line-art specimen mark instead, with a `NOT ON
DISPLAY` badge and the register status. See that folder's own README for
the full before/after and what's still needed before any of these
fourteen could show a real image.

## What's not here

- **The site's own front end.** The route table describes where this
  content should render, but this repo doesn't know what framework
  memecrypt.madethis.app runs on, so no pages/components exist — every
  script here produces data, not HTML.
- **Product images.** The 3 launch-collection mockups and any Volume II
  species plates were shared as pasted chat images, which this session
  can't save to disk — only file attachments persist. `assets/` is empty.
  Attach the files and they can be dropped straight into place.
- **Accession numbers for specimens or slogan products.** The catalogue's
  `MC.2026.###` format is described as permanent, so none are
  pre-assigned; only `register_id` (M01–M24) is set on specimens.
- **Prices and SKUs for the slogan-line products.** Blocked on open
  decision 1 below.
- **14 of 24 specimens' field-guide content** (Volumes I, III, IV) —
  queued, not missing data; see `generated/zombie-index.json`'s `unrated`
  list.

## Open decisions (spec section 9, unresolved)

1. Currency/fulfilment for physical goods (pins, stamps, tins) vs.
   print-on-demand (posters, apparel) — blocks pricing the slogan-line
   products.
2. Whether the shop funds the essays or is the point — determines how
   Volume IV (Corporate Zombies) gets built.
3. Whether to pursue one anchor licence (Nyan Cat or Keyboard Cat — both
   owners have licensed before).
4. Whether/when the live site itself moves into a git-backed repo.
