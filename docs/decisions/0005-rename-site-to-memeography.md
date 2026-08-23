# ADR 0005: Rename the museum to Memeography

- Status: Accepted
- Date: 2026-08-23

## Decision

The museum's public-facing name is **Memeography**.

Visitor-facing titles, descriptions, product copy, and production briefs use
the new name. Historical source documents remain verbatim, including filenames
that contain `memecrypt`. The repository path and the permanent `MC.2026.###`
accession namespace also remain unchanged; they are stable internal identifiers,
not display names.

## Deployment boundary

This decision changes the name, not the domain. The current deployment resolves
at `memeolography.madethis.app`; `memeography.madethis.app` is not active as of
this decision. Moving or aliasing the domain requires a separate hosting change.

The specimen schema's human-readable title changes to Memeography. Its existing
`$id` URI remains stable until a canonical schema URL is deliberately migrated.

## Consequences

New public copy must use Memeography. References to Memecrypt are acceptable
only when quoting or naming a historical source artifact. References to
Memeolography are acceptable only as deployment infrastructure, not as the
museum's display name.
