# Koan 01 — infinity graphic brief

Companion brief for `assets/koans/i-always-say-what-i-meme-infinity.svg`,
matching the format of `docs/source/image-prompts.md`. Hand this alongside
the SVG to whatever tool finishes the artwork (ChatGPT or otherwise) so
the concept, palette, and constraints travel with the file.

## Source

Line B (Koans) of the slogan corpus, `content/pages/quotations.json`.
Fully original text — no rights issues, no third-party likeness.

## Concept

Two phrases arranged as an infinity symbol: "I ALWAYS SAY WHAT I MEME"
curving along the top of the left loop, "I NEVER MEME WHAT I SAY" along
the top of the right loop, meeting at a shared crossing point in the
center. The shape itself is the joke — the two clauses chase each other
without end, same as the sentence does.

## What exists already

The SVG builds this literally: two overlapping bone-white circles
(radius 160, centers 240px apart) on a carbon-black ground, each phrase
set along the top ~150° arc in a bold condensed sans, and a small
acid-green infinity glyph (∞) at the exact point the circles cross. A
faint grid texture and small institutional-voice footer text
("INSTITUTIONAL VOICE — SEE /QUOTATIONS" / "ALL ARTIFACTS RESERVED.")
anchor it to the rest of the museum's signage system.

## Prompt, if regenerating or restyling

```text
Use case: product-mockup / social graphic
Asset type: square graphic for the Memecrypt museum's koan wall
Primary request: two overlapping circles forming an infinity shape on a
nearly black background, with original text curving along the top arc
of each circle: "I ALWAYS SAY WHAT I MEME" on the left, "I NEVER MEME
WHAT I SAY" on the right, and a small infinity glyph where the circles cross
Style/medium: flat vector museum-signage graphic, not photorealistic
Composition/framing: centered square, generous margin, text legible at
thumbnail size
Color palette: carbon black background, bone-white circles and type,
single acid-green (#B9D52B) accent on the infinity glyph only
Typography: condensed bold uppercase grotesk, generous letter-spacing,
render each phrase exactly once, following the curve of its circle's
top arc only (not wrapping fully around)
Constraints: original typographic design only; no photograph; no
existing logos; no watermark
Avoid: neon glow, gradient rainbow effects, script/handwritten fonts,
horror/zombie imagery — this is the institutional-voice family, not the
Museum's specimen-label style
```

## Where it plugs in

`content/products/slogan-line/koans-i-always-say-what-i-meme-i-never-meme-what-i-say.json`
already references this asset (`image` field) with `image_source:
"original_design"`. If a regenerated version replaces the file, keep the
same path so the product record doesn't need editing, or update the
`image` field to match a new filename.
