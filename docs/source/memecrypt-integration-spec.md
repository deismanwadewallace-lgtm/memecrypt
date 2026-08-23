# Memecrypt Integration Spec v1

**Target:** memecrypt.madethis.app
**Date:** 22 August 2026
**Inputs reconciled:** the Zombie Memes ecosystem map, the intellectual framework, the visitor journey, the gift shop list, the four future volumes, the slogan and koan corpus, the anti-meme synthesis of 10 August 2026, the live site as fetched today, and the rights register.

---

## 0. What this document decides

Four bodies of work exist and do not agree with each other.

1. **The live site** has five sections: Museum, Exhibits, Species, Timeline, Shop. The shop is empty.
2. **The ecosystem map** proposes roughly fifteen destinations across three wings.
3. **The slogan corpus** contains around thirty original lines that currently live nowhere.
4. **The rights register** says that most of the species named in the map cannot be displayed the way the map assumes.

This spec resolves the four into one buildable architecture. It also names the four conflicts explicitly, because leaving them implicit is what produced four incompatible plans.

---

## 1. The four conflicts, resolved

### Conflict 1: the founding date

The live site says Est. 2005 and the tagline says eating brains since 2005. Earlier drafts variously say 2002 and 2009.

**Resolution: 2005 everywhere.** It is already public on the site, it sits at the front of the timeline, and it is the year the map's Volume I clusters around. Purge 2002 and 2009 from all assets.

### Conflict 2: the map assumes images the register forbids

The map's Zombie Species list is Chuck Norris, Rickroll, Dancing Baby, Charlie Bit My Finger, Trollface, Pepe, LOLCats, Nyan Cat, Success Kid. The register rates none of those as freely displayable. Pepe is do-not-show. Rickroll is do-not-show. Success Kid and Nyan Cat require rights notes and thumbnail discipline.

**Resolution: the register governs.** Every species entry carries a display tier, and the tier determines what the page renders. See the content model in section 4. The species list itself does not change. What changes is that naming a meme and picturing it become separate permissions.

### Conflict 3: the map has fifteen destinations and the site has five

Fifteen top-level destinations is not a museum, it is a sitemap. Visitors do not navigate fifteen things.

**Resolution: five top-level, everything else nested.** See section 3.

### Conflict 4: the slogan corpus has no home, and the merch has no content

The gift shop list is a list of substrates. Posters, stickers, shirts, mugs. It says nothing about what is printed on them. Meanwhile the slogan corpus is thirty original lines nobody can read anywhere.

**Resolution: the slogan corpus is the merch.** This is the most important finding in the document and section 5 is devoted to it.

---

## 2. The thesis, tightened

The central proposition as written:

> A zombie meme is an idea that should have died, but continues to circulate because it is emotionally contagious, cognitively effortless, and detached from its original meaning.

That is three claims joined by commas. Split them, because each is separately testable and each anchors a different wing of the museum.

- **Contagion** is emotional. It anchors the Public Health wing.
- **Effortlessness** is cognitive. It anchors the Cultural Theory wing and the anti-meme.
- **Detachment** is historical. It anchors the Museum wing, the timeline, and the autopsies.

The site already carries the effortlessness claim in Field note 04, which says a meme is a vehicle for feeling first and meaning later. That note is the best copy on the site. Promote it from a mid-page aside to the thesis statement on the about page.

---

## 3. Information architecture

Five top-level items. The live nav already has four of them under different names.

| Nav | Route | Contains | Status |
|---|---|---|---|
| Museum | `/museum` | Hall of the Undead index, specimen pages, timeline, autopsies, zombie index | Partially exists as anchors |
| Species | `/species` | Field guide, taxonomy, plates | Exists as anchor |
| Advisory | `/advisory` | Outbreak level, infection map, meme lab sightings | New |
| Research | `/research` | Essays, the anti-meme wing, provenance and rights | Exists as anchor |
| Shop | `/products` | The four product lines | Exists, empty |

### Full route table

```
/                          Hall of the undead (hero, current advisory, wings)
/about                     What are zombie memes (thesis, three claims)
/museum                    Wing index
/museum/hall               Hall of the Undead: specimen grid
/museum/specimen/[id]      Individual specimen page
/museum/timeline           Infection map, 2005 to now
/museum/autopsies          Autopsy index
/museum/autopsy/[id]       Forensic report for one specimen
/museum/index              Zombie Index: sortable rating table
/species                   Field guide index
/species/[binomial]        Species entry with plate
/advisory                  Current outbreak level, standing advisory
/advisory/map              Origin, vector, host, outcome
/advisory/lab              Sighting submissions
/research                  Essays index
/research/anti-meme        The anti-meme wing
/research/provenance       Rights, attribution, and what is not on display
/quotations                The koan wall
/products                  Gift shop
/products/[sku]            Product page as wall label
```

`/research/provenance` is not a legal disclaimer page. It is an exhibit. See section 6.

### What the map proposed and this spec cuts

**The Cemetery.** The map already backed away from gravestones toward buried CRTs and floppy disks. That imagery is good but it duplicates the Hall of the Undead. Fold the artifact photography into the Hall as background texture and drop the destination.

**Gallery.** Undefined in the map and redundant with the Hall.

**Meme Lab as a separate wing.** Keep the sighting submission mechanic, nest it under Advisory. It is a feature, not a wing.

That takes fifteen destinations to five, with no content lost.

---

## 4. Content model

One schema drives specimen pages, species entries, autopsies, and the index. Every field maps to something already invented in the map or the register.

```yaml
specimen:
  accession: MC.2026.###          # museum number, permanent
  register_id: M##                # links to the rights register row
  common_name: string
  binomial: string                 # invented Latin, original work
  first_outbreak: year
  peak: year
  status: enum [undead, dormant, contained, extinct, corporate]
  undead_rating: 1..5              # skulls

  # field guide block
  habitat: string
  diet: string
  predators: string
  transmission: string

  # autopsy block
  cause_of_death: string
  resurrection: string
  host_population: string
  mutation: string
  prognosis: string

  # rights block, populated from the register
  display_tier: enum [D1, D2, D3]
  rights_holder: string
  evidence_grade: enum [verified, reported, unverified]
  image_mode: enum [original_plate, placeholder, licensed]
  attribution: string
  commentary: markdown             # required, specific to this image
  sources: [url]
```

### The rendering rule

This is the part that matters, and it should be enforced in code rather than left to editorial discipline.

```
A specimen page renders an image if and only if:
  display_tier != D3
  AND image_mode in [original_plate, licensed]
  AND commentary is non-empty and specific to this specimen
  AND attribution is non-empty
  AND no purchase path appears anywhere on the page

Otherwise the page renders the placeholder card MC.2026.009
and the specimen still gets its full text entry.
```

Encoding fair dealing as a build constraint does three things. It makes the legal posture auditable. It makes the placeholder a designed state rather than a failure state. And it means a future contributor cannot accidentally break the museum's position by uploading a file.

### The placeholder card

```
MC.2026.009 — Specimen not on display

This object could not be exhibited. The rights holder declined,
or could not be located, or the object was never anyone's to
give away. The museum regrets the omission and notes that the
specimen continues to circulate freely everywhere except here.
```

Seven of twenty-four register entries currently render this. That is not a hole in the collection. It is the collection's argument.

---

## 5. The slogan corpus is the product line

The gift shop list names twelve substrates and zero pieces of content. The slogan corpus contains roughly thirty original lines. Every one of them is Wade's own writing, which makes them the only merch in this entire project with a clean rights position.

Sorted into four families, which double as the four product lines.

### Line A: Diagnostics

Short declarative critique. Institutional register. These are the mugs and the posters.

- Feeling isn't thinking. Memes aren't arguments.
- A meme is not a method.
- Don't confuse dopamine with discourse.
- Don't mistake the feeling you get from a meme for thinking.
- Memes: where emotion dresses up as insight.
- Your fears become memes.
- Your memes become manias.

### Line B: Koans

The ones that refuse the dopamine hit. These are the anti-memes proper, and they belong on `/quotations` as well as on shirts.

- I always say what I meme. I never meme what I say.
- There's no time like the internet.
- It's emojis all the way down.
- I know I said it, but I didn't meme it.
- I know your avatar better than I know you.
- In the land of the bling, the one memed man is king.
- Please don't say anything that exceeds my capacity to represent it with emojis.

The last one is the strongest thing in the entire corpus. It is funny, it is a complete argument about emotional vocabulary, and it takes three seconds longer to land than a meme is supposed to take. That delay is the product.

### Line C: Institutional voice

Museum signage. Already partly live on the site.

- Outbreak level: high.
- Proceed with critical thinking. Avoid sharing on an empty stomach.
- All artifacts reserved.
- Meme archaeologist.
- I survived Rage Comics.
- Eating brains since 2005.

### Line D: Allusions

These work by pointing at a known text. Titles are not copyrightable, so the lines are usable, but each one should carry its source in the label. The attribution is not a legal hedge, it is the joke.

- Memeing ourselves to death. *After Neil Postman.*
- The internet: because everyone wants to be alone together. *After Sherry Turkle.*
- This is not a meme. *After Magritte.*

### Excluded from the corpus

**I shop therefore I am.** That is Barbara Kruger's actual artwork, not a style reference. Cut it entirely, including the parenthetical meme variant. The Kruger visual grammar — white Futura Bold Oblique on red — is a style and styles are not copyrightable, so the aesthetic is available. Her specific texts are not.

**This is fine.** Register entry M14. KC Green sells merch from those exact panels. Using the phrase competes directly with the author's own market. Discuss it in the museum, never print it.

---

## 6. Provenance as an exhibit

`/research/provenance` should be written in the museum's voice, not a lawyer's. It states what the museum holds, what it cannot show, and why. It publishes the tier counts.

> Of twenty-four specimens in the permanent collection, three may be shown freely, fourteen require a rights note, and seven cannot be shown at all. Twelve depict an identifiable person. Four depict a person who was a child at the time.
>
> The museum's central finding is administrative rather than theoretical. The ideas belong to everyone. The images belong to somebody.

That last sentence is the thesis of the whole project restated in institutional register, and it is the strongest single line available to the site.

The page should also name the three cases the collection rests on: the Grumpy Cat verdict, the Success Kid appeal, and the Pepe enforcement campaign. Those are the museum's founding documents.

---

## 7. The four volumes, re-tiered

The map's four volumes are good curation. Here is how each sits against the register.

**Volume I — The First Outbreak.** Dancing Baby, All Your Base, Chuck Norris, Rickroll, Charlie Bit My Finger. Mixed and partly unregistered. Chuck Norris Facts involve a living person with an active trademark presence and no clear copyright owner for the text corpus. Charlie Bit My Finger is a home video of two children that sold at auction. Both need register rows before they get exhibit pages.

**Volume II — The Golden Age.** Rage Comics, Trollface, LOLCats, Success Kid, Keyboard Cat, Nyan Cat. The best-documented volume. Two owners here have licensed before and are reachable.

**Volume III — Weaponized Memes.** Pepe, Wojak, NPC, Galaxy Brain, Distracted Boyfriend, This Is Fine. Highest-risk volume by a distance. Three of six are do-not-show. Build this one entirely from placeholder cards and text, which suits the subject.

**Volume IV — Corporate Zombies.** Keep Calm, Live Laugh Love, Minions, LinkedIn motivation, AI inspiration. Highest merch risk and lowest criticism risk. The targets are corporations rather than individuals, which is the correct direction for satire. Keep Calm in particular is a strong exhibit: a 1939 government poster that a private company later tried to trademark and lost.

**Recommended build order:** II, then IV, then I, then III. Volume II is best documented and easiest to show. Volume IV is safest to satirise. Volume I needs research. Volume III needs the placeholder system fully working first.

---

## 8. Build phases

Each phase is a discrete commit with a hard stop. Do not start the next phase in the same session.

### Phase 1 — Content model and register import
- Specimen schema implemented as typed content files
- Twenty-four register rows imported with tier, rights holder, evidence grade
- Rendering rule enforced at the component level, not editorially
- Placeholder card MC.2026.009 built and styled

**Acceptance:** a specimen marked D3 renders the placeholder and no image path exists in the DOM. Removing the commentary field from a D2 specimen causes it to fall back to the placeholder.

### Phase 2 — Navigation collapse
- Five top-level items
- Full route table stood up, empty routes returning a styled coming-soon in museum voice
- 2005 date corrected across all assets

**Acceptance:** every route in section 3 resolves. No dead anchors remain from the current single-page structure.

### Phase 3 — Volume II specimens
- Six specimens with full field guide, autopsy, and rights blocks
- Six original species plates commissioned or drafted
- Zombie Index table sortable by rating and status

**Acceptance:** all six pages pass the rendering rule with no manual overrides.

### Phase 4 — Provenance and quotations
- `/research/provenance` written and published with live tier counts
- `/quotations` koan wall with all four slogan families
- Excluded lines removed from every asset

**Acceptance:** tier counts on the provenance page are computed from the content files, not hardcoded. No excluded slogan appears anywhere in the repo.

### Phase 5 — Shop
- Four product lines mapped to the four slogan families
- Product pages render as wall labels with accession numbers
- No product page displays a third-party image under any condition

**Acceptance:** every SKU traces to either an original slogan, an original plate, or the placeholder card.

---

## 9. Open decisions

1. **Currency and fulfilment.** The site reads international. Enamel pins, stamps, and tins need real sourcing. Prints and apparel do not.
2. **Whether the shop funds the essays or is the point.** This determines whether Volume IV gets built as merch or as criticism.
3. **Whether to pursue one anchor licence.** Nyan Cat and Keyboard Cat are the realistic candidates. Both owners have licensed before.
4. **Where this lives long term.** madethis.app is fine for a prototype. The same argument that moved the CASIS site to a Git repo applies here once the content model exists.
