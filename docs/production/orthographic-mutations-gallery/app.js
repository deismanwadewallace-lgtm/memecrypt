const collection = window.ORTHOGRAPHIC_COLLECTION;

const escapeHTML = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const specimenGrid = document.querySelector("#specimen-grid");
const writersGrid = document.querySelector("#writers-grid");
const resultCount = document.querySelector("#result-count");

const renderVisual = (record) => {
  const { kind, primary, secondary, accent } = record.visual;
  const safe = {
    primary: escapeHTML(primary),
    secondary: escapeHTML(secondary),
    accent: escapeHTML(accent),
  };

  const renderers = {
    comma: () => `
      <div class="mutation mutation--comma">
        <span>${safe.primary}<b>${safe.accent}</b></span>
        <span>${safe.secondary}</span>
        <i aria-hidden="true">breath / boundary / rescue</i>
      </div>`,
    "serial-comma": () => `
      <div class="mutation mutation--serial">
        <span>${safe.primary}<b>${safe.accent}</b></span>
        <span>${safe.secondary}</span>
        <i aria-hidden="true">style becomes allegiance</i>
      </div>`,
    "word-gap": () => `
      <div class="mutation mutation--gap">
        <span>${safe.primary}</span><b>${safe.accent}</b><span>${safe.secondary}</span>
        <i aria-hidden="true">mind the creature-shaped gap</i>
      </div>`,
    "correction-loop": () => `
      <div class="mutation mutation--loop">
        <b>${safe.accent}</b><span>${safe.primary}</span><span>${safe.secondary}</span>
        <i aria-hidden="true">correction → exposure → correction</i>
      </div>`,
    scramble: () => `
      <div class="mutation mutation--scramble">
        <b>${safe.accent}</b><span>${safe.primary}</span><span>${safe.secondary}</span>
        <i aria-hidden="true">effect observed / myth not proven</i>
      </div>`,
    "ough-grid": () => `
      <div class="mutation mutation--ough">
        <b>${safe.accent}</b>
        <span>THOUGH</span><span>THROUGH</span><span>TOUGH</span>
        <span>THOUGHT</span><span>COUGH</span>
      </div>`,
    transposition: () => `
      <div class="mutation mutation--transpose">
        <span>${safe.primary}</span><b>${safe.accent}</b><span>${safe.secondary}</span>
        <i aria-hidden="true">error → dialect</i>
      </div>`,
    "shift-leak": () => `
      <div class="mutation mutation--shift">
        <span>${safe.primary}</span><strong>${safe.secondary}</strong><b>${safe.accent}</b>
        <i aria-hidden="true">manual intensity trace</i>
      </div>`,
    "missing-verb": () => `
      <div class="mutation mutation--missing">
        <span>${safe.primary}</span><b>${safe.accent}</b><span>${safe.secondary}</span>
      </div>`,
    "grammar-tree": () => `
      <div class="mutation mutation--tree">
        <b>${safe.accent}</b>
        <span>${safe.primary}</span><span>${safe.secondary}</span>
        <i aria-hidden="true">productive grammar detected</i>
      </div>`,
    "modifier-cloud": () => `
      <div class="mutation mutation--cloud">
        <span>${safe.primary}</span><span>${safe.secondary}</span><b>${safe.accent}</b>
        <i aria-hidden="true">modifier mismatch / voice acquired</i>
      </div>`,
    "alternating-case": () => `
      <div class="mutation mutation--case">
        <b>${safe.accent}</b><span>${safe.primary}</span><span>${safe.secondary}</span>
        <i aria-hidden="true">capitalization performing prosody</i>
      </div>`,
  };

  return renderers[kind]();
};

const relatedRecords = (ids) => {
  if (!ids.length) return "";
  return `<span class="related-record">Related permanent record: ${ids.map(escapeHTML).join(", ")}</span>`;
};

const renderSpecimens = () => {
  specimenGrid.innerHTML = collection.specimens
    .map(
      (record) => `
        <article class="specimen-card" data-category="${escapeHTML(record.category)}">
          <header class="specimen-card__register">
            <span>${escapeHTML(record.id)}</span>
            <span>${escapeHTML(record.category)}</span>
            <span>Evidence ${escapeHTML(record.evidence_grade)}</span>
          </header>
          <div class="specimen-card__visual" role="img" aria-label="Original typographic interpretation of ${escapeHTML(record.title)}">
            ${renderVisual(record)}
            <span class="visual-stamp">ORIGINAL TEXT / NO SOURCE IMAGE</span>
          </div>
          <div class="specimen-card__body">
            <p class="specimen-card__class">${escapeHTML(record.classification)} · ${escapeHTML(record.period)}</p>
            <h3>${escapeHTML(record.title)}</h3>
            <p class="specimen-card__epitaph">${escapeHTML(record.epitaph)}</p>
            <p class="specimen-card__note">${escapeHTML(record.curatorial_note)}</p>
            <dl>
              <div><dt>Mechanism</dt><dd>${escapeHTML(record.mechanism)}</dd></div>
              <div><dt>Mutation</dt><dd>${escapeHTML(record.mutation)}</dd></div>
            </dl>
          </div>
          <footer class="specimen-card__footer">
            <span>${escapeHTML(record.rights_posture)}</span>
            ${relatedRecords(record.related_register_ids)}
            <a href="${escapeHTML(record.source_url)}" target="_blank" rel="noreferrer">Source note ↗</a>
          </footer>
        </article>`,
    )
    .join("");
};

const writerMarks = {
  deadline: "23:59",
  "blank-page": "▯",
  revision: "⌫",
  research: "27×",
  characters: "↗",
};

const renderWriters = () => {
  writersGrid.innerHTML = collection.writers_at_work.field_notes
    .map(
      (note) => `
        <article class="writer-card writer-card--${escapeHTML(note.mode)}">
          <header><span>${escapeHTML(note.id)}</span><span>FIELD NOTE</span></header>
          <div class="writer-card__mark" aria-hidden="true">${escapeHTML(writerMarks[note.mode])}</div>
          <h3>${escapeHTML(note.title)}</h3>
          <p>${escapeHTML(note.signal)}</p>
          ${
            note.source_url
              ? `<a href="${escapeHTML(note.source_url)}" target="_blank" rel="noreferrer">Context ↗</a>`
              : `<span class="original-note">Original museum observation</span>`
          }
        </article>`,
    )
    .join("");
};

const applyFilter = (category) => {
  let visible = 0;
  document.querySelectorAll(".specimen-card").forEach((card) => {
    const matches = category === "all" || card.dataset.category === category;
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  resultCount.textContent = `${String(visible).padStart(2, "0")} of ${String(collection.specimens.length).padStart(2, "0")} specimens visible`;
};

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((candidate) => {
      candidate.classList.toggle("is-active", candidate === button);
    });
    applyFilter(button.dataset.filter);
  });
});

renderSpecimens();
renderWriters();
applyFilter("all");
