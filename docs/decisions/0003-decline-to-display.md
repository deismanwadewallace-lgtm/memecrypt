# ADR 0003: The museum declines to display, it does not await clearance

- Status: Accepted
- Date: 2026-08-23
- Resolves: the contradiction between the rights policy and the live copy at
  `/museum/other-exhibits`

## Context

The rights register grades ten of the fourteen specimens in the Other Exhibits
wing as D2. D2 permits display under four conditions: thumbnail scale,
commentary specific to that image, named attribution, and no purchase path on
the page. Those specimens are therefore clearable. The museum has not cleared
them.

The live advisory says photographs are not displayed "pending rights
clearance." That is inaccurate for ten of fourteen. "Pending" describes a
temporary administrative state that resolves itself with paperwork. Nothing is
pending. The museum has made a choice and described it as a queue.

The inaccuracy matters more than usual here because the register is linked
directly from the page. A visitor who follows the link finds a document that
contradicts the advisory above it.

## Decision

Separate the rights fact from the curatorial choice, and record both.

`display_tier` remains what it has always been: what the rights position
permits. It is evidence-driven and changes only when the evidence changes.

A new field, `display_decision`, records what the museum does. It takes three
values.

| Value | Meaning |
|---|---|
| `declined` | The museum could display this and chooses not to. |
| `cleared` | Permission obtained or not required, and the museum displays it. |
| `unavailable` | Display is not permitted. Applies to every D3 specimen. |

Every D2 specimen in the Other Exhibits wing is set to `declined`. The default
for any new D1 or D2 specimen is `declined`. Moving a specimen to `cleared`
requires its own ADR naming the curatorial reason and the permission obtained.

## Rationale

The zero-photograph count is the wing's argument. Clearing ten specimens would
cost money and correspondence and would produce ten thumbnails that add
nothing the text does not already carry. A room that could show its collection
and does not is a stronger object than a room waiting on email.

Declining is also the honest description. The museum is not blocked. It has a
position.

## Consequences

Positive. The register and the site now say the same thing. The wing's advisory
becomes a statement rather than a status. The schema records the distinction
that was previously implicit and contradictory.

Negative. Every specimen record gains a field. The Hall of the Undead cannot
later show a D1 or D2 image without an ADR, which is friction by design.

## Alternatives rejected

**Clear the ten D2 specimens and display thumbnails.** Rejected. It weakens the
wing, costs money, and buys nothing the labels do not already deliver.

**Reword the advisory only.** Rejected. It fixes the sentence and leaves the
underlying ambiguity in the data, where the next contributor will hit it again.
