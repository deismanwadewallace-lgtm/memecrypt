# Memeography

A satirical museum of internet memes, framed as natural history: species,
autopsies, an outbreak advisory, and a gift shop that sells the argument
rather than the images. Current prototype deployment:
https://memeolography.madethis.app

This repo is the content and rights foundation underneath that site — not
yet the site's own code. All five build phases from the integration spec
are done at the content/data layer. Two framework-independent exhibit pages
now demonstrate how that material can render, while most routes still have no
live template. See
"What's here," "What's not here," and "Repo layout" below.

## Foundational documents

Everything under `docs/source/` is a source document, kept verbatim:

- `memecrypt-integration-spec.md` — the master architecture doc. Resolves
  four disagreeing plans (live site, ecosystem map, slogan corpus, rights
  register) into one route table, one content schema, and a five-phase
  build order. Read this first.
- `rights-register.xlsx` — 29 rows, one per meme, each rated a display
  tier (D1 show / D2 show with rights note / D3 do not show), with rights
  holder, enforcement history, and evidence grade.
- `memecrypt-catalogue-v1.md` — a 10-object gift shop draft (accession
  numbers `MC.2026.###`, wall-label copy, prices).
- `memecrypt-launch-collection-readme.md` + `launch-catalog.csv` — the
  first 3 shop products actually slated to ship (tee, field guide,
  poster), with SKU/price/variant data.
- `image-prompts.md` — the exact prompts used to generate the 3 launch
  product mockups.

`docs/production/` holds material this repo generated rather than received
verbatim, including the sanitized Other Exhibits gallery, the Department of
Orthographic Mutations gallery, and Volume II species plate briefs.
`docs/decisions/` records accepted curatorial decisions, `docs/research/` keeps
working source notes, and `docs/site-copy/` holds implementation-ready copy for
the live site.

The public-facing name is **Memeography** (ADR 0005). The repository name,
historical source documents, `MC.2026.###` accession numbers, and current
deployment domain remain stable identifiers until they are migrated explicitly.

## Repo layout

```
content/
  collections/
    orthographic-mutations.json # 12 provisional language specimens + annex
  specimens/*.json          # 29 register rows, machine-generated
  products/
    catalogue-v1/*.json     # the 10-object draft catalogue
    launch-collection/*.json# the 3-item launch collection
    slogan-line/*.json      # 23 slogan-corpus products, machine-generated
  pages/quotations.json     # the koan wall: 4 slogan families + barred lines
  placeholder-card.json     # MC.2026.009
  routes.json               # full route table, live/coming-soon per route
  rights-gaps.json          # historical gap tracker; all listed gaps resolved
  generated/                # computed, not hand-edited — see scripts/ below
    summary.json            # tier/evidence/identifiable-person/minor counts
    zombie-index.json        # all specimens sorted by undead_rating
    provenance-page.json    # /research/provenance, numbers filled in live
data/
  schema/specimen.schema.json # canonical specimen record shape
docs/
  decisions/                # accepted architecture/curatorial decisions
  deployment/               # native-site implementation handoffs
  production/               # framework-independent exhibit implementations
  research/                 # working source notes for provisional collections
  site-copy/                # implementation-ready live-site copy
scripts/
  import_register.py        # rights-register.xlsx -> content/specimens/*.json
  validate.py               # schema + display-decision invariants
  build_register.py         # rendering rule + counts -> generated/summary.json
  build_zombie_index.py     # generated/zombie-index.json
  build_provenance.py       # generated/provenance-page.json
  build_slogan_products.py  # pages/quotations.json -> products/slogan-line/*.json
  build_orthographic_gallery.py # validates OM collection -> browser data.js
  check_excluded_slogans.py # fails if a barred slogan reaches printed copy
  check_shop_rights.py      # fails if a product lacks an original/placeholder image_source
```

Run the whole pipeline:

```
pip install -r requirements.txt
python3 scripts/import_register.py
python3 scripts/validate.py
python3 scripts/build_register.py
python3 scripts/build_zombie_index.py
python3 scripts/build_provenance.py
python3 scripts/build_slogan_products.py
python3 scripts/build_orthographic_gallery.py
python3 scripts/check_excluded_slogans.py
python3 scripts/check_shop_rights.py
```

## What's here

**Phase 1 — content model and register import.** The rendering rule now
separates what rights permit (`display_tier`) from what the museum chooses
(`display_decision`). Tier, decision, image mode, commentary, and attribution
must all clear the bar; otherwise the specimen renders the MC.2026.009
placeholder. The rule is enforced in `validate.py` and `build_register.py`, not
left as editorial guidance. Currently **0 of 29 specimens render an image**;
18 are declined and 11 are unavailable. Tier counts (3 D1 / 15 D2 / 11 D3)
and the identifiable-person/minor/merch counts (15 / 5 / 21) match the
register's Summary sheet exactly.

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
has commissioning briefs for 5 candidate species plates, following the
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

**Rights gaps, resolved.** The gap tracker surfaced Chuck Norris Facts,
Charlie Bit My Finger, Dancing Baby, LOLCats, and Harlem Shake. They were added
as M25–M29 on 23 August 2026. `content/rights-gaps.json` retains the resolution
history; there are no outstanding register additions in that file.

**Other exhibits gallery, sanitized.** Wade supplied a 14-card exhibit
gallery (`Memecrypt_Exhibit_Cards.zip`) that shipped a real archival
photograph or video frame for every card. All fourteen now have register rows:
ten are D2 and deliberately declined, while four are D3 and unavailable.
`docs/production/other-exhibits-gallery/` carries the gallery with every
photograph and baked export removed. Each card shows its original line-art
specimen mark and distinguishes `DECLINED FOR DISPLAY` from `NOT PERMITTED FOR
DISPLAY`. See that folder's README and ADR 0003 for the full rationale.

**Department of Orthographic Mutations, built.** Twelve language memes now form
a provisional research collection at `/museum/orthographic-mutations`, with
five original “Writers at Work” field notes in an interpretive annex. The
canonical records live in `content/collections/orthographic-mutations.json`;
the static gallery renders original HTML/CSS typography and makes no external
image requests. `scripts/build_orthographic_gallery.py` enforces the twelve
`OM-##` records, validates permanent-register cross-links, and rejects
asset-bearing fields. Source notes distinguish documented lineage from internet
origin myth (especially the false Cambridge attribution attached to
typoglycemia). ADR 0006 records why these remain provisional rather than
silently becoming M30–M41.

**Curatorial definition, accepted.** ADR 0007 defines a meme as an idea with a
body designed for circulation rather than an image by necessity. The model
distinguishes commentary, compression, positioning, and transmission while
holding the museum's critical tension: a meme can encapsulate an idea, and it
can replace the work of examining one. Implementation-ready copy for
`/research/what-is-a-meme` lives in `docs/site-copy/what-is-a-meme.md`.

## What's not here

- **The site's own front end.** The route table describes where this content
  should render, but this repo does not contain the current MadeThis project.
  The two galleries under `docs/production/` are portable static reference
  implementations, not a connected deployment or framework component tree.
- **Product images.** The 3 launch-collection mockups and any Volume II
  species plates were shared as pasted chat images, which this session
  can't save to disk — only file attachments persist. `assets/` is empty.
  Attach the files and they can be dropped straight into place.
- **Accession numbers for specimens or slogan products.** The catalogue's
  `MC.2026.###` format is described as permanent, so none are
  pre-assigned; only `register_id` (M01–M29) is set on specimens.
- **Prices and SKUs for the slogan-line products.** Blocked on open
  decision 1 below.
- **19 of 29 specimens' field-guide content** (Volumes I, III, IV, plus the
  newly registered rows) —
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
