---
name: memecrypt-voice
description: The Memeography voice — deadpan natural-history museum register for a satirical meme crypt. Use before writing or editing any specimen record, wall label, autopsy, field-guide entry, exhibit page, or product copy in this repo.
---

# Memeography — voice as policy

A satirical museum of internet memes, framed as natural history. The joke is the **framing**, never
a wink. Copy is written as though a real institution with a real rights department produced it.

## Register

Deadpan, institutional, specific. Short declaratives. The humour comes from applying museum and
epidemiological apparatus to internet ephemera with a completely straight face.

Calibrate against the committed copy — this is the target, not an approximation:

> The crypt is organised by what each object did after it stopped being funny.
> Enter anywhere. The specimens do not observe a route.

> The wing without photographs. Fourteen specimens held behind the rights register, catalogued by
> name and shown by absence.

Note what those do: they state an organising principle, then land a dry clause. No exclamation, no
"hilarious", no meme-speak in the museum's own voice.

## The natural-history apparatus is load-bearing

Specimens carry a binomial (`Doge` → *Canis contemplans*), `first_outbreak`, `peak`, `status`,
an `undead_rating` of one to five skulls, and the epidemiological fields: `habitat`, `diet`,
`predators`, `transmission`, `mutation`, `host_population`, `cause_of_death`, `resurrection`,
`prognosis`. Fill these **in character and in fact** — a specimen's `predators` entry may honestly be
"None documented," and its `cause_of_death` may be "Not applicable."

Per decision 0007, a meme is treated as a **transmissible form**, not an image. That is why the
apparatus works even for specimens the museum will never display.

## What the satire targets

The commerce, nostalgia, and rights machinery that accrete around a meme after it stops being funny.

**Not** targets: the people in the images, meme creators, or anyone's appearance. Specimens carry
`identifiable_person` and `minor_in_image` fields for a reason. If a line would land as mockery of a
person rather than of the culture around the object, rewrite it.

## Rights honesty is part of the voice

The museum says plainly what it does not know. Real committed examples:

- "which implies an enforcement posture the museum has not stress-tested"
- "Japanese author, so Berne applies but enforcement posture is unclear"
- `evidence_grade: "Unverified this pass"`

Hedge with precision, never with vagueness. "Unverified this pass" is good; "probably fine" is not.
Decision 0003 (decline-to-display) means **absence is the exhibit** — write around a withheld image
with curatorial confidence rather than apologising for the gap. Per 0004 the rights register is public,
so anything written in those fields is published reasoning.

## Orthographic Mutations wing

Per decision 0006, the mutation text must be **original**. Write the specimen — the comma, typo,
missing verb, or typographic accident that learned to reproduce — without reproducing a third party's
copyrighted text. Twelve provisional objects.

## Naming

The public name is **Memeography** (decision 0005). The repo directory is still `memecrypt`; "the
crypt" remains fair game inside the museum's own voice. Do not reintroduce older site names into copy.

## Hard prohibitions

- Never invent a rights holder, enforcement history, evidence grade, price, SKU, or accession number.
- Never write field-guide content for a specimen on the `unrated` list to make a page look finished.
  19 of 29 are queued, not missing. A visible debt marker beats invented prose.
- Never describe a D3 specimen as though its image were shown.
- Never edit `docs/source/` — it is verbatim.
