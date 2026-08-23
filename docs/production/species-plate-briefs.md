# Species plate commissioning briefs — Volume II

Six original naturalist-style illustration plates for the Field Guide and
`/species/[binomial]` pages, following the pattern already set by
MC.2026.036 (*Reactio perpetua*): "The guide names no real person and
reproduces no photograph. Species are described the way a birder
describes a bird." None of these briefs ask for a likeness of the
underlying meme's image — that would defeat the entire D1/D2 display
strategy. Each is an original anatomical/behavioral diagram *inspired by*
the specimen's transmission pattern, in the same voice as
`docs/source/image-prompts.md`'s three launch mockups.

No image-generation tool is available in this session, so these are
briefs to run through whatever tool you used for the launch collection —
not finished art. Once generated, drop the file at the path named in each
brief's `content/specimens/*.json` record (set `image_mode` to
`"original_plate"` and fill in `commentary` + `attribution` once it
exists — that's what flips the specimen from placeholder to rendered in
`scripts/build_register.py`).

---

## M13 — Trollface (*Vultus dolosus*)

```text
Use case: species-plate
Asset type: naturalist field-guide illustration plate for the Memecrypt museum
Primary request: an anatomical study of an invented grinning-face specimen, in the visual language of a 19th-century natural history plate, illustrating "the folk-art fallacy" — a species mistaken for ownerless because it looks hand-drawn
Subject: a single abstract grinning-face glyph (original geometry, NOT the circulating troll face image) shown at rest and mid-transmission, with callout lines to invented anatomical features: "assumed-public-domain gland," "redraw vector," "attribution blind spot"
Style/medium: engraved naturalist plate line art, cross-hatching, museum specimen-diagram conventions
Composition/framing: centered portrait plate, generous margin, callout labels in small caps along ruled leader lines
Color palette: carbon black line work on bone-white stock, single acid-green (#B9D52B) highlight on one callout
Text (verbatim): "VULTUS DOLOSUS" and "FIG. 1 — REDRAW VECTOR"
Typography: condensed uppercase grotesk for labels, hairline rules
Constraints: fully original glyph design, must NOT reproduce, trace, or closely resemble the actual circulating Trollface image; no real logos; no watermark
Avoid: photorealism, the real trollface silhouette, internet-clipart style
```

## M03 — Success Kid (*Puer triumphans*)

```text
Use case: species-plate
Asset type: naturalist field-guide illustration plate for the Memecrypt museum
Primary request: an anatomical study of an invented "triumphant gesture" specimen — an abstracted, anonymized human figure silhouette mid-fist-pump, illustrating disproportionate emotional intensity rather than any real person
Subject: a single generic silhouette (no face, no identifiable features, no likeness of any real person) shown mid-gesture, with callout lines to invented behavioral traits: "disproportion index," "caption vector," "statutory predator marker"
Style/medium: engraved naturalist plate line art, museum specimen-diagram conventions
Composition/framing: centered portrait plate, generous margin, ruled leader-line callouts
Color palette: carbon black line work on bone-white stock, single acid-green highlight
Text (verbatim): "PUER TRIUMPHANS" and "FIG. 1 — DISPROPORTION INDEX"
Typography: condensed uppercase grotesk for labels, hairline rules
Constraints: MUST be a fully generic, anonymized silhouette with no facial features and no resemblance to any real identifiable person, living or a minor at time of photograph; no photograph of any kind; no watermark
Avoid: any recognizable human likeness, photorealism, baby/infant imagery
```

## M06 — Keyboard Cat (*Felis rhythmicus*)

```text
Use case: species-plate
Asset type: naturalist field-guide illustration plate for the Memecrypt museum
Primary request: an anatomical study of an invented "rhythmic cat" specimen, illustrating comedic-timing transmission rather than the real cat or footage
Subject: a single original stylized cat silhouette (not a likeness of the real animal) posed at a keyboard-shaped prop, with callout lines to invented traits: "timing organ," "loop duration," "reaction-gif habitat marker"
Style/medium: engraved naturalist plate line art, museum specimen-diagram conventions
Composition/framing: centered portrait plate, generous margin, ruled leader-line callouts
Color palette: carbon black line work on bone-white stock, single acid-green highlight
Text (verbatim): "FELIS RHYTHMICUS" and "FIG. 1 — LOOP DURATION"
Typography: condensed uppercase grotesk for labels, hairline rules
Constraints: fully original cat silhouette design, must not resemble the real animal's likeness or any video still; no watermark
Avoid: photorealism, recognizable pet portraiture
```

## M05 — Nyan Cat (*Felis arcus*)

```text
Use case: species-plate
Asset type: naturalist field-guide illustration plate for the Memecrypt museum
Primary request: an anatomical study of an invented "rainbow-loop cat" specimen, illustrating durational/repetition transmission rather than the real animated GIF
Subject: a single original geometric cat-form glyph (distinct pixel-free line design, not the circulating 8-bit sprite) with an invented trailing arc motif, callouts to "loop organ," "repetition gland," "licensed-variant marker"
Style/medium: engraved naturalist plate line art, museum specimen-diagram conventions
Composition/framing: centered portrait plate, generous margin, ruled leader-line callouts
Color palette: mostly carbon black line work on bone-white stock; the trailing arc motif may use a restrained acid-green plus one additional accent, kept minimal and diagrammatic rather than a rainbow gradient
Text (verbatim): "FELIS ARCUS" and "FIG. 1 — REPETITION GLAND"
Typography: condensed uppercase grotesk for labels, hairline rules
Constraints: fully original glyph, must not reproduce the actual pixel-art sprite or its exact rainbow-trail design; no watermark
Avoid: photorealism, 8-bit/pixel-art rendering, a literal rainbow gradient
```

## M21 — Rage comic faces, general class (*Facies anonyma*)

```text
Use case: species-plate
Asset type: naturalist field-guide illustration plate for the Memecrypt museum
Primary request: a class-level (genus) plate representing the extinct rage-comic-face format as a category, not any single named face, since individually traceable faces are excluded per the register's own rule
Subject: a grid of five to six wholly original, simple line-drawn abstract face glyphs (invented expressions, not redraws of any known rage face), arranged like a specimen tray, with a small "EXTINCT" stamp
Style/medium: engraved naturalist plate line art, museum specimen-diagram conventions, deliberately crude/MS-Paint-referencing line weight as a stylistic nod without copying any actual face
Composition/framing: centered specimen-tray grid layout, generous margin
Color palette: carbon black line work on bone-white stock, single acid-green "EXTINCT" stamp
Text (verbatim): "FACIES ANONYMA" and "EXTINCT — FORMAT, NOT SUPPRESSED"
Typography: condensed uppercase grotesk for labels, hairline rules
Constraints: every face glyph must be an original invented expression; none may resemble a specific known rage-comic face (Forever Alone, Me Gusta, Cereal Guy, etc.) or Trollface, which is filed separately; no watermark
Avoid: reproducing any specific known rage face, photorealism
```

## LOLCats — blocked

No brief written. Per `content/rights-gaps.json`, LOLCats has no register row
yet — commission this plate only after it gets a display tier, following
the same process already applied to every other specimen here.
