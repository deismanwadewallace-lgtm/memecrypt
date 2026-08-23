const exhibits = [
  {
    number: "002",
    title: "Charlie Bit My Finger",
    year: "2007",
    era: "platform",
    className: "Viral home video",
    epitaph: "Pain, replayed with affection.",
    description:
      "Howard Davies-Carr uploaded a 56-second family video to YouTube in May 2007. An ordinary sibling moment became a repeatable line, an imitation format, and an emblem of the accidental viral-video era.",
    origin: "England / YouTube",
    vector: "Quoting + replay",
    habitat: "Video links",
    mutation: "Remixes, reenactments",
    rating: 4,
    glyph: "charlie",
    registerStatus: "M26 · D3 · never pursue",
    displayDecision: "unavailable",
    displayNote: "Not permitted for display. Register M26 records two identifiable minors in the source video; the museum's position is ethical before it is legal.",
    credit: "Video: Howard Davies-Carr · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Charlie_Bit_My_Finger",
  },
  {
    number: "003",
    title: "Rickroll",
    year: "2007",
    era: "platform",
    className: "Bait-and-switch",
    epitaph: "The destination was the joke.",
    description:
      "A disguised link on 4chan redirected viewers to Rick Astley’s 1987 music video. The surprise became a durable internet ritual: the content stayed fixed while the pretext mutated endlessly.",
    origin: "4chan / YouTube",
    vector: "Disguised links",
    habitat: "Forums, chats, events",
    mutation: "Live + recursive rolls",
    rating: 5,
    glyph: "rickroll",
    registerStatus: "M19 · D3 · never pursue",
    displayDecision: "unavailable",
    displayNote: "Not permitted for display. Register M19: never pursue and reference by name only.",
    credit: "Video: Rick Astley / Sony Music · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Rickrolling",
  },
  {
    number: "004",
    title: "Dancing Baby",
    year: "1996",
    era: "chain",
    className: "Proto-meme animation",
    epitaph: "A software demo escaped containment.",
    description:
      "The 3D animation associated with Michael Girard, Robert Lurye, and John Chadwick travelled through email chains before crossing into television. Its uncanniness became a feature, not a defect.",
    origin: "Character Studio demo",
    vector: "Email attachments",
    habitat: "Inbox, television",
    mutation: "Music + broadcast",
    rating: 4,
    glyph: "dancing",
    registerStatus: "M27 · D2 · never pursue",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M27 permits a conditional thumbnail treatment; the museum chooses the line-art mark instead.",
    credit: "Animation: Girard, Lurye & Chadwick · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Dancing_baby",
  },
  {
    number: "005",
    title: "Trollface",
    year: "2008",
    era: "platform",
    className: "Rage-comic mask",
    epitaph: "Provocation reduced to a grin.",
    description:
      "Carlos Ramirez drew the face in Microsoft Paint in September 2008 for a DeviantArt comic about trolling. Detached from the comic, the expression became shorthand for argument without good faith.",
    origin: "DeviantArt",
    vector: "Rage comics",
    habitat: "Forums, comments",
    mutation: "Reaction image + mask",
    rating: 5,
    glyph: "troll",
    registerStatus: "M13 · D2 · licence only",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M13 records a reachable rights holder; the museum chooses the line-art mark instead.",
    credit: "Drawing: Carlos Ramirez · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Trollface",
  },
  {
    number: "006",
    title: "Bad Luck Brian",
    year: "2012",
    era: "template",
    className: "Advice-animal template",
    epitaph: "Misfortune found a yearbook photo.",
    description:
      "Ian Davies posted his friend Kyle Craven’s school portrait to Reddit in January 2012. The image became a container for miniature stories in which every setup ends one degree worse than expected.",
    origin: "Reddit / AdviceAnimals",
    vector: "Two-line captions",
    habitat: "Meme generators",
    mutation: "Escalating reversals",
    rating: 4,
    glyph: "badluck",
    registerStatus: "M10 · D2 · never pursue",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M10 records an identifiable minor at the time of the photo and an unclear chain of title.",
    credit: "Kyle Craven / Ian Davies · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Bad_Luck_Brian",
  },
  {
    number: "007",
    title: "Success Kid",
    year: "2007",
    era: "platform",
    className: "Image-macro emblem",
    epitaph: "A fistful of sand became victory.",
    description:
      "Laney Griner photographed her son Sammy on a beach in 2007. The clenched fist was gradually reinterpreted as determination, giving the image a second life as the internet’s smallest triumph.",
    origin: "Flickr / family photo",
    vector: "Captioned reposts",
    habitat: "Forums, advertising",
    mutation: "Personal + civic wins",
    rating: 5,
    glyph: "success",
    registerStatus: "M03 · D2 · never pursue",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M03 records an identifiable minor; Griner v. King for Congress rejected the campaign's fair-use defence.",
    credit: "Photograph: Laney Griner · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Success_Kid",
  },
  {
    number: "008",
    title: "Keyboard Cat",
    year: "1984 / 2007",
    era: "platform",
    className: "Reaction-video coda",
    epitaph: "Failure acquired an exit theme.",
    description:
      "Charlie Schmidt filmed Fatso at a keyboard in 1984 and uploaded the footage in 2007. By 2009, editors used it to ‘play off’ people after a mishap, turning one clip into a reusable ending.",
    origin: "VHS / YouTube",
    vector: "Video editing",
    habitat: "Fail compilations",
    mutation: "Reaction coda",
    rating: 4,
    glyph: "keyboardcat",
    registerStatus: "M06 · D2 · licence only",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M06 records a reachable rights holder; the museum chooses the line-art mark instead.",
    credit: "Video: Charlie Schmidt · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Keyboard_Cat",
  },
  {
    number: "009",
    title: "LOLCats",
    year: "2005–07",
    era: "platform",
    className: "Captioned-cat species",
    epitaph: "Grammar bent around a cat.",
    description:
      "Imageboard ‘Caturday’ posts around 2005 helped establish the cat macro; I Can Has Cheezburger carried it to a wider public in 2007. The form joined cat photography, bold captions, and lolspeak.",
    origin: "Imageboards / blogs",
    vector: "Image macros",
    habitat: "Caturday, ICHC",
    mutation: "Lolspeak mythology",
    rating: 5,
    glyph: "lolcats",
    registerStatus: "M28 · D3 · never pursue",
    displayDecision: "unavailable",
    displayNote: "Not permitted for display. Register M28 treats LOLCats as a taxon made from many separately owned photographs, not one clearable work.",
    credit: "Photograph: Paulo Ordoveza · CC BY 2.0 (claimed by source package; not independently verified)",
    source: "https://en.wikipedia.org/wiki/Lolcat",
  },
  {
    number: "010",
    title: "Nyan Cat",
    year: "2011",
    era: "template",
    className: "Animated loop",
    epitaph: "Maximum repetition, minimum friction.",
    description:
      "Chris Torres posted the pixel-cat animation in April 2011. Sara June paired it with a version of daniwell’s looping song, producing a nearly perfect unit of visual and sonic repetition.",
    origin: "GIF + YouTube",
    vector: "Looped audiovisual",
    habitat: "Tumblr, YouTube",
    mutation: "Remixes + endurance",
    rating: 5,
    glyph: "nyan",
    registerStatus: "M05 · D2 · licence only",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M05 records a reachable rights holder; the museum chooses the line-art mark instead.",
    credit: "Animation: Christopher Torres · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Nyan_Cat",
  },
  {
    number: "011",
    title: "Overly Attached Girlfriend",
    year: "2012",
    era: "template",
    className: "Persona image macro",
    epitaph: "Satire flattened into a stare.",
    description:
      "A still from Laina Morris’s 2012 parody fan video became a template about obsessive attention. The invented persona travelled much farther than the original performance—and was never the person herself.",
    origin: "YouTube / Reddit",
    vector: "Screen capture",
    habitat: "AdviceAnimals",
    mutation: "Gendered stereotype",
    rating: 4,
    glyph: "attached",
    registerStatus: "M09 · D2 · never pursue",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M09 says never pursue without the subject's direct involvement.",
    credit: "Performance: Laina Morris · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Overly_Attached_Girlfriend",
  },
  {
    number: "012",
    title: "All Your Base",
    year: "2000–01",
    era: "chain",
    className: "Translation artifact",
    epitaph: "Broken English, perfect transmission.",
    description:
      "A mistranslated line in the 1991 European Mega Drive release of Zero Wing resurfaced through image edits, music, and Flash-era video around 2000–01. Error became a password for belonging.",
    origin: "Zero Wing / forums",
    vector: "Image edits + Flash",
    habitat: "Gaming web",
    mutation: "All your X…",
    rating: 5,
    glyph: "allbase",
    registerStatus: "M23 · D2 · never pursue",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M23 says to set the phrase in original type and skip the screenshot.",
    credit: "Game: Toaplan · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/All_your_base_are_belong_to_us",
  },
  {
    number: "013",
    title: "Doge",
    year: "2010 / 2013",
    era: "participatory",
    className: "Animal inner monologue",
    epitaph: "Such syntax. Very portable. Wow.",
    description:
      "Atsuko Sato photographed her rescue Shiba Inu, Kabosu, in 2010. By 2013 the sideways glance, multicoloured Comic Sans fragments, and elastic syntax formed an unusually generative meme language.",
    origin: "Personal blog / Tumblr",
    vector: "Caption fragments",
    habitat: "Tumblr, Reddit",
    mutation: "Currency + vernacular",
    rating: 5,
    glyph: "doge",
    registerStatus: "M01 · D2 · licence only",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M01 records a reachable rights holder; the museum chooses the line-art mark instead.",
    credit: "Photograph: Atsuko Sato · archival citation only, image not reproduced",
    source: "https://en.wikipedia.org/wiki/Doge_(meme)",
  },
  {
    number: "014",
    title: "Harlem Shake",
    year: "2013",
    era: "participatory",
    className: "Participatory video",
    epitaph: "One cut turned spectators into casts.",
    description:
      "A January 2013 George Miller video and an Australian group’s imitation crystallized the format: fifteen seconds of stillness, then collective chaos set to Baauer. The meme shared a name—not choreography—with Harlem’s earlier dance.",
    origin: "YouTube",
    vector: "Template reenactment",
    habitat: "Schools, offices, teams",
    mutation: "Mass participation",
    rating: 3,
    glyph: "harlem",
    registerStatus: "M29 · D3 · never pursue",
    displayDecision: "unavailable",
    displayNote: "Not permitted for display. Register M29 records a composite of commercial audio, uncleared samples at release, and separately owned user videos.",
    credit: "Photograph: David Cambridge · CC BY 3.0 (claimed by source package; not independently verified)",
    source: "https://en.wikipedia.org/wiki/Harlem_Shake_(meme)",
  },
  {
    number: "015",
    title: "Grumpy Cat",
    year: "2012",
    era: "template",
    className: "Reaction-image celebrity",
    epitaph: "The internet assigned a mood to a face.",
    description:
      "A photograph of Tardar Sauce posted to Reddit in September 2012 became a universal reaction to disappointment. Her distinctive expression—not an emotional diagnosis—was recast as inexhaustible disapproval.",
    origin: "Reddit / Imgur",
    vector: "Reaction captions",
    habitat: "Social feeds, media",
    mutation: "Character brand",
    rating: 5,
    glyph: "grumpy",
    registerStatus: "M02 · D2 · never pursue",
    displayDecision: "declined",
    displayNote: "Declined for display under ADR 0003. Register M02 says never pursue; the register's worked example records a $710,001 jury verdict.",
    credit: "Photograph: Gage Skidmore · CC BY-SA 4.0 (claimed by source package; not independently verified, and does not clear the Grumpy Cat Limited trademark/character rights)",
    source: "https://en.wikipedia.org/wiki/Grumpy_Cat",
  },
];

const icon = (name) => {
  const attrs = 'viewBox="0 0 280 180" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true"';
  const icons = {
    charlie: `<svg ${attrs}><path d="M61 81c13-28 40-44 75-44 38 0 68 19 84 51"/><path d="M66 98c24 31 48 45 77 45 35 0 59-18 75-53"/><path d="M82 93h121"/><path d="M99 91v22m30-22v35m31-35v34m28-34v21"/><path class="bone" d="M142 151V91c0-15 9-25 21-25s22 10 22 25v32"/><path d="M42 42h29m-29 0v29m196 67h-29m29 0v-29"/></svg>`,
    rickroll: `<svg ${attrs}><path d="M47 54h78c26 0 41 15 41 40v7"/><path d="m153 90 13 14 14-14"/><path d="M233 127h-78c-26 0-41-15-41-40v-8"/><path d="m127 90-13-14-14 14"/><circle class="bone" cx="198" cy="63" r="22"/><path class="bone" d="M198 85v42m-22 0h44m-22-64V41"/><path d="M35 36h20m-20 0v20m210 88h-20m20 0v-20"/></svg>`,
    dancing: `<svg ${attrs}><circle class="bone" cx="139" cy="39" r="20"/><path class="bone" d="M119 71c8-10 34-10 42 0l7 45h-58l9-45Z"/><path d="m116 80-34 30m79-30 36 23m-72 14-18 39m45-39 18 39"/><path d="M67 55c-13 13-17 28-12 43m158-43c13 13 17 28 12 43M91 40 75 25m114 15 16-15"/><path d="M38 144h30m-30 0v-30m204 30h-30m30 0v-30"/></svg>`,
    troll: `<svg ${attrs}><path class="bone" d="M78 49c22-25 97-25 124 1 22 22 16 69-10 89-26 19-78 19-104-1-26-21-29-67-10-89Z"/><path d="M102 75c12-11 24-10 34 2m9 0c11-12 25-13 35-2"/><path d="M92 104c26 28 71 35 101 4-2 29-24 45-53 45-27 0-45-16-48-49Z"/><path d="m111 119 5 19m18-15 1 22m19-21-2 20m18-26-5 19"/><path d="M42 39h28m-28 0v28m196 75h-28m28 0v-28"/></svg>`,
    badluck: `<svg ${attrs}><rect x="86" y="22" width="108" height="136" class="bone"/><circle cx="140" cy="72" r="28"/><path d="M103 148c5-34 18-47 37-47s32 13 37 47"/><path d="m120 111 20 15 20-15v27l-20-12-20 12v-27Z"/><path d="m50 54 12 7 12-7-4 14 11 8-14 1-5 14-5-14-14-1 11-8-4-14Z"/><path d="m213 48-12 21 17 4-24 30"/><path d="M36 25h24m-24 0v24m208 106h-24m24 0v-24"/></svg>`,
    success: `<svg ${attrs}><path class="bone" d="M111 144V92c0-9 7-16 16-16h5V52c0-9 7-16 16-16s16 7 16 16v24h5c9 0 16 7 16 16v28c0 24-18 42-42 42h-7c-14 0-25-6-33-18l-25-39c-5-8-3-18 5-23 8-5 18-3 23 5l5 8"/><path d="M140 18V2m-38 29L91 18m87 13 11-13m19 49h20M52 67h20m119 77 15 15m-126 0 15-15"/><path d="M35 143h28m-28 0v-28m210 28h-28m28 0v-28"/></svg>`,
    keyboardcat: `<svg ${attrs}><path class="bone" d="M79 69 96 36l25 22c12-5 26-5 38 0l25-22 17 33v42c0 29-24 50-61 50s-61-21-61-50V69Z"/><circle cx="116" cy="90" r="5" fill="currentColor"/><circle cx="164" cy="90" r="5" fill="currentColor"/><path d="m133 108 7 6 7-6m-7 6v11m0 0-12 7m12-7 12 7"/><rect x="38" y="119" width="204" height="42"/><path d="M60 119v42m22-42v42m22-42v42m22-42v42m22-42v42m22-42v42m22-42v42m22-42v42"/></svg>`,
    lolcats: `<svg ${attrs}><path class="bone" d="M75 72 94 38l29 20a67 67 0 0 1 34 0l29-20 19 34v33c0 36-28 58-65 58s-65-22-65-58V72Z"/><circle cx="116" cy="91" r="5" fill="currentColor"/><circle cx="164" cy="91" r="5" fill="currentColor"/><path d="m133 109 7 6 7-6m-7 6v13m0 0-13 6m13-6 13 6"/><path d="M39 25h91v35H75L61 71l3-11H39V25Z"/><text x="54" y="48" fill="currentColor" stroke="none" font-size="16" font-family="monospace">LOL</text></svg>`,
    nyan: `<svg ${attrs}><path d="M31 59h54m-54 20h68m-68 20h56m-56 20h72"/><path class="bone" d="M103 45h96v84h-96z"/><path d="M116 58h70v58h-70z"/><path class="bone" d="m199 62 18-18 18 18v67h-36V62Z"/><rect x="207" y="78" width="6" height="6" fill="currentColor" stroke="none"/><rect x="224" y="78" width="6" height="6" fill="currentColor" stroke="none"/><path d="m215 96 6 5 7-5"/><path d="M103 61 91 49m12 65-12 13m108-13 12 13"/></svg>`,
    attached: `<svg ${attrs}><ellipse class="bone" cx="140" cy="88" rx="92" ry="52"/><circle cx="140" cy="88" r="31"/><circle cx="140" cy="88" r="10" fill="currentColor"/><path d="M140 10v24m0 108v24M32 88h24m168 0h24M63 30l17 17m120 82 17 17M217 30l-17 17M80 129l-17 17"/><path d="M225 126c0-11 14-16 21-6 7-10 21-5 21 6 0 16-21 27-21 27s-21-11-21-27Z"/></svg>`,
    allbase: `<svg ${attrs}><path class="bone" d="m140 27 61 53-17 51H96L79 80l61-53Z"/><path d="m140 46 22 58h-44l22-58Zm-44 85-24 23m112-23 24 23M44 48h31m-31 0v31m192-31h-31m31 0v31"/><path d="M39 146h58m87 0h57"/><rect x="109" y="115" width="62" height="29"/><path d="M119 126h42m-42 8h28"/></svg>`,
    doge: `<svg ${attrs}><path class="bone" d="M79 69 96 30l35 26a77 77 0 0 1 18 0l35-26 17 39v37c0 34-27 57-61 57s-61-23-61-57V69Z"/><path d="M106 91c8-7 16-7 24 0m20 0c8-7 16-7 24 0"/><path d="m133 112 7 6 7-6m-7 6v13m0 0-17 5m17-5 17 5"/><text x="30" y="49" fill="currentColor" stroke="none" font-size="15" font-family="monospace">SUCH</text><text x="204" y="139" fill="currentColor" stroke="none" font-size="15" font-family="monospace">VERY</text></svg>`,
    harlem: `<svg ${attrs}><path d="M140 18v144"/><circle class="bone" cx="76" cy="57" r="13"/><path class="bone" d="M76 70v47m0-31-27 17m27-17 24 9m-24 22-18 32m18-32 22 31"/><circle cx="181" cy="43" r="11"/><path d="M181 54v35m0-24-23-12m23 12 22-19m-22 43-20 29m20-29 26 20"/><circle cx="218" cy="99" r="10"/><path d="M218 109v27m0-17-20 10m20-10 18 12m-18 5-15 24m15-24 18 21"/><circle cx="173" cy="124" r="8"/><path d="M173 132v20m0-12-13 6m13-6 13 6"/><path d="M34 26h24m-24 0v24m212 104h-24m24 0v-24"/></svg>`,
    grumpy: `<svg ${attrs}><path class="bone" d="M72 70 93 31l32 25a68 68 0 0 1 30 0l32-25 21 39v37c0 34-28 57-68 57s-68-23-68-57V70Z"/><path d="m101 89 28 6m50-6-28 6"/><circle cx="116" cy="96" r="4" fill="currentColor"/><circle cx="164" cy="96" r="4" fill="currentColor"/><path d="m132 113 8 6 8-6m-35 30c14-13 40-13 54 0"/><path d="M37 39h28m-28 0v28m206 75h-28m28 0v-28"/></svg>`,
  };
  return icons[name];
};

const grid = document.querySelector("#exhibit-grid");
const resultCount = document.querySelector("#result-count");

function ratingMarkup(rating) {
  return Array.from({ length: 5 }, (_, index) =>
    `<span class="${index < rating ? "is-filled" : ""}"></span>`,
  ).join("");
}

function cardMarkup(exhibit) {
  const decisionLabel = {
    declined: "DECLINED FOR DISPLAY",
    unavailable: "NOT PERMITTED FOR DISPLAY",
  }[exhibit.displayDecision];
  return `
    <article class="exhibit-card" data-era="${exhibit.era}">
      <div class="exhibit-card__visual">
        ${icon(exhibit.glyph)}
        <span class="exhibit-card__not-on-display">${decisionLabel} — ${exhibit.registerStatus}</span>
        <span class="exhibit-card__credit" title="${exhibit.displayNote}">${exhibit.credit}</span>
        <span class="exhibit-card__year">FIRST INFECTION · ${exhibit.year}</span>
      </div>
      <div class="exhibit-card__body">
        <div class="exhibit-card__rail">
          <span class="exhibit-card__number">SPECIMEN ${exhibit.number}</span>
          <span class="exhibit-card__class">${exhibit.className}</span>
        </div>
        <h3>${exhibit.title}</h3>
        <p class="exhibit-card__epitaph">${exhibit.epitaph}</p>
        <p class="exhibit-card__description">${exhibit.description}</p>
        <dl class="specimen-meta">
          <div><dt>Origin</dt><dd>${exhibit.origin}</dd></div>
          <div><dt>Primary vector</dt><dd>${exhibit.vector}</dd></div>
          <div><dt>Peak habitat</dt><dd>${exhibit.habitat}</dd></div>
          <div><dt>Known mutation</dt><dd>${exhibit.mutation}</dd></div>
        </dl>
        <div class="exhibit-card__footer">
          <div class="rating" aria-label="Undead rating ${exhibit.rating} out of 5">
            <span class="rating__label"><span>Undead rating</span><strong>${exhibit.rating}/5</strong></span>
            <div class="rating__meter" aria-hidden="true">${ratingMarkup(exhibit.rating)}</div>
          </div>
          <a class="source-link" href="${exhibit.source}" target="_blank" rel="noreferrer">Archive source ↗</a>
        </div>
      </div>
    </article>
  `;
}

grid.innerHTML = exhibits.map(cardMarkup).join("");

const filters = [...document.querySelectorAll(".filter")];

function applyFilter(filter) {
  let visible = 0;
  document.querySelectorAll(".exhibit-card").forEach((card) => {
    const show = filter === "all" || card.dataset.era === filter;
    card.hidden = !show;
    if (show) visible += 1;
  });
  resultCount.textContent = `${visible} specimen${visible === 1 ? "" : "s"} visible`;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => filter.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter(button.dataset.filter);
  });
});

applyFilter("all");
