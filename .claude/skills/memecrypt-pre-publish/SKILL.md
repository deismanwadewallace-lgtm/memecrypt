---
name: memecrypt-pre-publish
description: The deterministic gate before any Memeography (memecrypt) content ships — runs the repo's three validators, a rights and fabrication sweep, then stops for Wade's explicit approval.
---

# Memeography — pre-publish gate

Run after the critic's `review.md` is PASS or PASS-WITH-NOTES. Stop at the first hard failure and fix
it rather than noting it.

## 1. The validators (hard stop)

```sh
python3 scripts/validate.py
python3 scripts/check_shop_rights.py
python3 scripts/check_excluded_slogans.py
```

All three must exit clean. `validate.py` enforces the display rule structurally — never edit the
validator to make a work unit pass.

## 2. Regeneration is current

If anything under `content/` that feeds a builder changed, re-run the relevant builder and confirm
`content/generated/` is current and not hand-edited:

```sh
git diff --name-only -- content/generated
```

Every changed generated file must be explainable by a builder run, not by an edit.

## 3. Rights sweep

- No new image reference points at third-party material.
- Every displayed specimen: `display_decision == "cleared"`, `image_mode ∈ {original_plate, licensed}`,
  `commentary` and `attribution` both present.
- No D3 specimen displayed or implied to be displayed.
- Since the rights register is public (decision 0004), read the changed rights fields as **published
  reasoning** — they should read as defensible in public, not as internal shorthand.

## 4. Fabrication sweep

```sh
git diff -- content | grep -nE '"(accession|rights_holder|enforcement_history|evidence_grade|price|sku)"'
```

Every hit must trace to `docs/source/` or a cited source. Unassigned accession numbers stay `null`.
Confirm no field-guide prose was added for a specimen still on the `unrated` list.

## 5. Open decisions

Confirm the work unit did not silently resolve open decision 1–4. If it depends on one, it does not
ship — it goes back to Wade with the decision stated.

## 6. Debt markers

Anything incomplete is visibly marked as incomplete. Check `content/rights-gaps.json` is updated if
this work unit changed what is known or still missing. `assets/` holds only one koan SVG — if a work unit needs
product mockups or species plates, those must be attached as real files; they cannot be recovered
from chat history.

## 7. Wade's gate (do not skip)

Present: what shipped, validator results, the rights and fabrication sweeps, what stayed behind a debt
marker, and anything unverifiable. Then **stop and ask for explicit approval to publish.** Do not push.

## 8. After it lands

Write `published.md` for the work unit and add a row to `impact/metrics.md`. If the outcome changes
what Memeography should *do* — not just what this work unit did — hand it to Chief Of Staff via the
ECC vault per that file's instructions.
