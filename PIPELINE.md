# Memeography (memecrypt) — AI-Native Creative Pipeline

Creative variant of Wade's project pipeline architecture (adapted from
[Anthropic's AI-Native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook), Aug 2026),
installed 2026-09-29.

This repo is the **content and rights foundation** under the Memeography site — a satirical museum of
internet memes framed as natural history. It is not the site's front end. The authority order here is:
`docs/source/` (verbatim source documents, never edited) → `docs/decisions/` (settled decisions) →
this pipeline (the workflow that produces compliant content). When they conflict, the source spec and
the decisions win.

The repo directory is still named `memecrypt`; the public name is **Memeography** (decision 0005).

## The artifact chain

One folder per work unit: `pipeline/<YYYY-MM>-<slug>/`. A work unit is a specimen write-up, a
field-guide volume, an exhibit page, a shop product or collection, a rights-register revision, or a
route/schema change.

| # | Stage | Artifact | What it is |
|---|-------|----------|------------|
| 1 | Brief | `brief.md` | What is being added or changed and why — which specimens, volume, route, or SKUs |
| 2 | Spec | `spec.md` | The requirements: schema fields touched, display tiers involved, which open decision (if any) this depends on |
| 3 | Outline | `outline.md` | Structure before prose — wall labels, section order, accession placeholders. **Wade's first gate** |
| 4 | Draft | `draft.md` + content files | The writing, plus the actual JSON under `content/` and any `scripts/build_*.py` regeneration |
| 5 | Review | `review.md` | Critic pass: rights compliance, schema validity, voice, and no-fabrication check |
| 6 | Publish | `published.md` | Publish record: what shipped, which gates passed, what stayed behind a debt marker |
| 7 | Maintain | `impact/metrics.md` | What changed for the museum; material learnings hand off to Chief Of Staff |

The chain of files is the audit trail. `pipeline/spec.md` holds the standing spec that every work unit
inherits.

## Machinery (installed 2026-09-29)

- **Voice as policy:** `.claude/skills/memecrypt-voice` — the museum register (natural-history framing,
  wall-label copy, the satire's actual target) so tone is never re-litigated per work unit.
- **Critique as eval:** `.claude/agents/memecrypt-critic` — reviews each work unit against the voice
  skill, the rights rules, and the schema, and writes `review.md`.
- **Publish gate:** `.claude/skills/memecrypt-pre-publish` — runs the repo's real validators
  (`validate.py`, `check_shop_rights.py`, `check_excluded_slogans.py`) and then stops for Wade.
- **Impact loop:** `impact/metrics.md` feeds Chief Of Staff's IMPACT-LOOP/1 via the ECC vault.

## The rule that outranks everything else

**No third-party meme image is displayed, ever.** Decision 0003 (decline-to-display) is the museum's
spine, not a compliance checkbox — the exhibit argues *through* declining to show. Practically:

- `display_tier` D3 = do not show. D2 = show only with a rights note. D1 = show.
- An image renders only when `display_decision == "cleared"` **and** `image_mode` is
  `original_plate` or `licensed` **and** commentary and attribution both exist.
- Every product's `image_source` must be `original_design`, `original_plate`, `placeholder_card`,
  or `pending` — never a reference to someone else's work.
- Missing material is a visible debt marker, never a silent omission and never an invention.

## Wade's remaining gates (exactly two per work unit)

1. **Approve the outline** (stage 3) — before prose is written.
2. **Approve the publish** (stage 6).

Everything else — spec drafting, writing, regeneration, validation, critic pass — is agent work.
Honors the standing prime directive: minimize the load on Wade.
