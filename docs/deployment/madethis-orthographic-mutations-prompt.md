# Native AI deployment brief — Orthographic Mutations

Use the supplied Memeography files to add and publish a new museum page at:

`/museum/orthographic-mutations`

## Public identity

- The site’s visitor-facing name is **Memeography**.
- Do not display “Memecrypt” or “Memeolography” as the museum name.
- Historical filenames, internal identifiers, and the current deployment domain
  may remain unchanged behind the scenes.

## Build authority

Use `site/index.html`, `site/styles.css`, `site/data.js`, and `site/app.js` as the
visual and interaction authority. Adapt them to the native site framework if
necessary; do not flatten the exhibit into an image.

The page must contain:

1. the “Language caught in the act of becoming contagious” hero;
2. the display protocol explaining that source images were removed;
3. twelve `OM-01`–`OM-12` specimen cards;
4. working category filters with live result count;
5. the five-card “Writers at Work” annex; and
6. the registration/method note and linked research sources.

Add **Department of Orthographic Mutations** as the fifth entry in the Museum
index and point it to the new route. Preserve the existing four entries.

Also mount `docs/site-copy/what-is-a-meme.md` at
`/research/what-is-a-meme`, or use it as a prominent home-page Research panel
if the current site cannot add that route cleanly. Preserve its central tension:
memes are powerful cultural shorthand, and that compression can also replace
the work of examining an idea.

## Non-negotiable rights boundary

- Do not add third-party photographs, meme templates, screenshots, logos,
  identifiable people, or copyrighted character art.
- Do not add the Alot creature, a LOLcat photo, Kabosu/Doge imagery, or
  SpongeBob imagery—even if the platform can find those assets automatically.
- The typographic marks in the supplied page are the finished exhibit visuals,
  not placeholders awaiting images.
- Keep the identifiers provisional as `OM-##`. Do not assign M30–M41.

## Responsive and accessibility requirements

- Desktop: three specimen columns where space permits.
- Tablet: two specimen columns.
- Phone: one specimen column with no horizontal scrolling.
- Preserve the visible focus states, skip link, semantic heading order, live
  filter count, reduced-motion treatment, and text alternatives.

## Publish acceptance check

Before publishing, preview the page and confirm:

- the page title says “Memeography — Department of Orthographic Mutations”;
- all 12 specimen cards and all 5 field notes render;
- selecting **Spelling** shows 5 of 12 specimens;
- no external image request or third-party asset has been introduced;
- the page has no horizontal overflow at 390 px wide;
- the existing museum pages and navigation still work; and
- the public museum name remains **Memeography** everywhere touched by this
  change.

Confirm that the new “What Is a Meme?” thesis is visible from the home or
Research section.

Then publish the current project and report the final page URL. Do not create a
second site or a new brand variant.
