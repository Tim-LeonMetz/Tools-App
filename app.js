const ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  search: '<path d="m21 21-4.35-4.35"/><circle cx="11" cy="11" r="7"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  spark: '<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="m5.6 5.6 2.8 2.8"/><path d="m15.6 15.6 2.8 2.8"/><path d="m18.4 5.6-2.8 2.8"/><path d="m8.4 15.6-2.8 2.8"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
  cards: '<rect x="4" y="6" width="14" height="14" rx="2"/><path d="M8 4h10a2 2 0 0 1 2 2v10"/><path d="M8 11h6"/><path d="M8 15h4"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 15h.01"/><path d="M12 15h.01"/><path d="M16 15h.01"/>',
  function: '<path d="M7 20c3.5 0 2.5-16 6-16"/><path d="M5 9h8"/><path d="M14 14l5 5"/><path d="m19 14-5 5"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="17" r="2.2"/>',
  ruler: '<path d="M4 17 17 4l3 3L7 20z"/><path d="m14 7 3 3"/><path d="m11 10 2 2"/><path d="m8 13 3 3"/>',
  landmark: '<path d="M3 21h18"/><path d="M4 10h16"/><path d="M6 10v7"/><path d="M10 10v7"/><path d="M14 10v7"/><path d="M18 10v7"/><path d="M12 3 4 8h16z"/>',
  leaf: '<path d="M5 21c1-8 7-13 14-15 0 8-5 14-13 14"/><path d="M5 21c3-5 7-8 12-10"/>',
  scale: '<path d="M12 3v18"/><path d="M5 7h14"/><path d="m6 7-3 6h6z"/><path d="m18 7-3 6h6z"/>',
  dumbbell: '<path d="M7 7v10"/><path d="M17 7v10"/><path d="M7 12h10"/><path d="M3 9v6"/><path d="M21 9v6"/><path d="M5 10v4"/><path d="M19 10v4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3.2 3 14.8 0 18"/><path d="M12 3c-3 3.2-3 14.8 0 18"/>',
  languages: '<path d="M4 5h8"/><path d="M8 3v2"/><path d="M6 9c1.2 2.4 3.2 4.2 6 5.4"/><path d="M12 5c-.7 4-2.8 7-7 9"/><path d="M14 19l4-9 4 9"/><path d="M15.5 16h5"/>',
  code: '<path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/><path d="m14 4-4 16"/>',
  palette: '<path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.5-3.3 1.7 1.7 0 0 1 1.3-2.7H18a3 3 0 0 0 3-3 9 9 0 0 0-9-9z"/><path d="M7.5 10h.01"/><path d="M10 7h.01"/><path d="M14 7.5h.01"/><path d="M16.5 10.5h.01"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  chart: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="m6 16 4-5 3 3 5-8"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 15h10l1-15"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  shuffle: '<path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/>',
  left: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  right: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V6a2 2 0 0 1 2-2h10"/>',
};

const SUBJECTS = [
  { id: "geschichte", name: "Geschichte", color: "#f2b35e", color2: "#ffd98d", icon: "landmark" },
  { id: "biologie", name: "Biologie", color: "#77e6a1", color2: "#a9ffd1", icon: "leaf" },
  { id: "ethik", name: "Ethik", color: "#c7a6ff", color2: "#f0d4ff", icon: "scale" },
  { id: "deutsch", name: "Deutsch", color: "#ff8f9b", color2: "#ffc3c9", icon: "book" },
  { id: "sport", name: "Sport", color: "#ffcf6b", color2: "#fff0a8", icon: "dumbbell" },
  { id: "geographie", name: "Geographie", color: "#65d7e8", color2: "#a6f4ff", icon: "globe" },
  { id: "englisch", name: "Englisch", color: "#7fb2ff", color2: "#c3ddff", icon: "languages" },
  { id: "mathematik", name: "Mathematik", color: "#8fd8ff", color2: "#a5ffcf", icon: "function" },
  { id: "informatik", name: "Informatik", color: "#a5ffcf", color2: "#8fd8ff", icon: "code" },
  { id: "kunst", name: "Kunst", color: "#ffa7df", color2: "#ffd0f0", icon: "palette" },
  { id: "politik", name: "Politik und Gesellschaft", color: "#b6c4ff", color2: "#e6eaff", icon: "users" },
];

const TOOLS = {
  kurvendiskussion: {
    name: "Kurvendiskussion",
    short: "Nullstellen, Ableitungen, Extrem- und Wendepunkte",
    icon: "chart",
    tags: ["Graph", "Analysis", "Ableitung"],
  },
  gleichungen: {
    name: "Gleichungen",
    short: "Lineare und quadratische Gleichungen",
    icon: "calc",
    tags: ["pq", "abc", "Diskriminante"],
  },
  prozent: {
    name: "Prozent & Dreisatz",
    short: "Prozentwerte, Aenderungen und Verhaeltnisse",
    icon: "percent",
    tags: ["Prozent", "Dreisatz"],
  },
  einheiten: {
    name: "Einheiten",
    short: "Laengen, Flaechen, Volumen, Masse und Zeit",
    icon: "ruler",
    tags: ["Umrechnen", "SI"],
  },
  lernkarten: {
    name: "Lernkarten",
    short: "Begriffe, Vokabeln und Definitionen pro Fach",
    icon: "cards",
    tags: ["Lokal", "Quiz"],
  },
};

const SUBJECT_TOOLS = {
  mathematik: ["kurvendiskussion", "gleichungen", "prozent", "einheiten", "lernkarten"],
  default: ["lernkarten"],
};

const APP_VARIANT = window.SCHOOL_TOOLS_VARIANT || document.body.dataset.variant || "desktop";
const IS_PHONE = APP_VARIANT === "phone";

const UNIT_GROUPS = {
  length: {
    label: "Laenge",
    units: {
      mm: { label: "Millimeter", factor: 0.001 },
      cm: { label: "Zentimeter", factor: 0.01 },
      m: { label: "Meter", factor: 1 },
      km: { label: "Kilometer", factor: 1000 },
      in: { label: "Inch", factor: 0.0254 },
      ft: { label: "Foot", factor: 0.3048 },
    },
  },
  area: {
    label: "Flaeche",
    units: {
      "mm2": { label: "Quadratmillimeter", factor: 0.000001 },
      "cm2": { label: "Quadratzentimeter", factor: 0.0001 },
      "m2": { label: "Quadratmeter", factor: 1 },
      a: { label: "Ar", factor: 100 },
      ha: { label: "Hektar", factor: 10000 },
      "km2": { label: "Quadratkilometer", factor: 1000000 },
    },
  },
  volume: {
    label: "Volumen",
    units: {
      ml: { label: "Milliliter", factor: 0.001 },
      l: { label: "Liter", factor: 1 },
      "m3": { label: "Kubikmeter", factor: 1000 },
      tsp: { label: "Teeloeffel", factor: 0.00492892 },
      cup: { label: "Cup", factor: 0.236588 },
    },
  },
  mass: {
    label: "Masse",
    units: {
      mg: { label: "Milligramm", factor: 0.000001 },
      g: { label: "Gramm", factor: 0.001 },
      kg: { label: "Kilogramm", factor: 1 },
      t: { label: "Tonne", factor: 1000 },
      lb: { label: "Pound", factor: 0.45359237 },
    },
  },
  time: {
    label: "Zeit",
    units: {
      s: { label: "Sekunde", factor: 1 },
      min: { label: "Minute", factor: 60 },
      h: { label: "Stunde", factor: 3600 },
      d: { label: "Tag", factor: 86400 },
      week: { label: "Woche", factor: 604800 },
    },
  },
};

const state = {
  route: parseRoute(),
  search: "",
  curve: {
    expression: "x^3 - 3x",
    min: -4,
    max: 4,
    result: null,
    error: "",
  },
  equation: { a: 1, b: -3, c: 2 },
  percent: { mode: "of", a: 20, b: 80, c: 120 },
  units: { group: "length", value: 1, from: "km", to: "m" },
  flash: {},
};

function svg(name, className = "") {
  const path = ICONS[name] || ICONS.spark;
  return `<span class="${className}" aria-hidden="true"><svg viewBox="0 0 24 24">${path}</svg></span>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function subjectById(id) {
  return SUBJECTS.find((subject) => subject.id === id) || SUBJECTS[0];
}

function toolsForSubject(subjectId) {
  return SUBJECT_TOOLS[subjectId] || SUBJECT_TOOLS.default;
}

function parseRoute() {
  const raw = (window.location.hash || "#/").replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean).map(decodeURIComponent);
  if (parts[0] === "fach" && parts[1] && parts[2] === "tool" && parts[3]) {
    return { page: "tool", subjectId: parts[1], toolId: parts[3] };
  }
  if (parts[0] === "fach" && parts[1]) {
    return { page: "subject", subjectId: parts[1] };
  }
  return { page: "home" };
}

function routeTo(path) {
  return `#/${path}`;
}

function variantHref(variant) {
  const file = variant === "phone" ? "mobile.html" : "desktop.html";
  return `${file}${window.location.hash || "#/"}`;
}

function formatNumber(value, digits = 5) {
  if (!Number.isFinite(value)) return "nicht definiert";
  const clean = Math.abs(value) < 1e-10 ? 0 : value;
  return new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(clean);
}

function readNumber(value, fallback = 0) {
  const normalized = String(value).trim().replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function compactList(items, formatter = (x) => x) {
  if (!items.length) return "keine im Intervall";
  return items.map(formatter).join(", ");
}

function getCards(subjectId) {
  try {
    const stored = localStorage.getItem(`school-tools.cards.${subjectId}`);
    const cards = stored ? JSON.parse(stored) : [];
    return Array.isArray(cards) ? cards : [];
  } catch {
    return [];
  }
}

function saveCards(subjectId, cards) {
  try {
    localStorage.setItem(`school-tools.cards.${subjectId}`, JSON.stringify(cards));
  } catch {
    // Local storage can be disabled in hardened browsers; the UI still works for the current session.
  }
}

function render() {
  const route = state.route;
  const content = renderCurrentPage(route);
  document.body.classList.toggle("is-phone", IS_PHONE);
  document.body.classList.toggle("is-desktop", !IS_PHONE);
  document.documentElement.style.setProperty("--accent", currentSubject(route).color);
  document.documentElement.style.setProperty("--accent-2", currentSubject(route).color2);
  document.getElementById("app").innerHTML = renderShell(content, route);
  bindCommonEvents();
  bindPageEvents(route);
}

function currentSubject(route) {
  return route.subjectId ? subjectById(route.subjectId) : SUBJECTS[7];
}

function renderShell(content, route) {
  if (IS_PHONE) return renderPhoneShell(content, route);
  return renderDesktopShell(content, route);
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <a class="brand" href="${routeTo("")}">
          <span class="brand-mark">${svg("spark")}</span>
          <span>
            <h1>School Tools</h1>
            <p>Pi-ready · Tailscale</p>
          </span>
        </a>
        <nav class="nav-group" aria-label="Faecher">
          ${SUBJECTS.map((subject) => renderNavLink(subject, route)).join("")}
        </nav>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="breadcrumbs">${renderBreadcrumbs(route)}</div>
          <div class="top-actions">
            <label class="search">
              ${svg("search", "button-icon")}
              <input id="globalSearch" type="search" autocomplete="off" placeholder="Fach oder Tool suchen" value="${escapeHtml(state.search)}">
            </label>
            <a class="icon-button" href="${routeTo("")}" title="Start">${svg("home", "button-icon")}</a>
          </div>
        </header>
        <div class="fade-in">${content}</div>
        ${renderMobileTabs(route)}
      </main>
    </div>
  `;
}

function renderDesktopShell(content, route) {
  return `
    <div class="app-shell desktop-shell">
      <aside class="sidebar liquid-layer">
        <a class="brand" href="${routeTo("")}">
          <span class="brand-mark">${svg("spark")}</span>
          <span>
            <h1>School Tools</h1>
            <p>Desktop &middot; Tailscale</p>
          </span>
        </a>
        <nav class="nav-group" aria-label="Faecher">
          ${SUBJECTS.map((subject) => renderNavLink(subject, route)).join("")}
        </nav>
      </aside>
      <main class="main">
        <header class="topbar liquid-layer">
          <div class="breadcrumbs">${renderBreadcrumbs(route)}</div>
          <div class="top-actions">
            <label class="search">
              ${svg("search", "button-icon")}
              <input id="globalSearch" type="search" autocomplete="off" placeholder="Fach oder Tool suchen" value="${escapeHtml(state.search)}">
            </label>
            <a class="icon-button" href="${routeTo("")}" title="Start">${svg("home", "button-icon")}</a>
            <a class="icon-button" href="${variantHref("phone")}" title="Smartphone-Seite">${svg("right", "button-icon")}</a>
          </div>
        </header>
        <div class="fade-in">${content}</div>
      </main>
    </div>
  `;
}

function renderPhoneShell(content, route) {
  const subject = currentSubject(route);
  return `
    <div class="phone-shell">
      <header class="phone-topbar liquid-layer">
        <a class="phone-brand" href="${routeTo("")}" aria-label="Start">
          <span class="brand-mark">${svg("spark")}</span>
          <span>
            <strong>Tools-App</strong>
            <small>${escapeHtml(route.page === "home" ? "Faecher" : subject.name)}</small>
          </span>
        </a>
        <a class="icon-button" href="${variantHref("desktop")}" title="Desktop-Seite">${svg("right", "button-icon")}</a>
      </header>
      <div class="phone-search-row">
        <label class="search liquid-layer">
          ${svg("search", "button-icon")}
          <input id="globalSearch" type="search" autocomplete="off" placeholder="Suchen" value="${escapeHtml(state.search)}">
        </label>
      </div>
      ${renderPhoneSubjectDock(route)}
      <main class="phone-main">
        <div class="fade-in">${content}</div>
      </main>
      ${renderPhoneTabbar(route)}
    </div>
  `;
}

function renderNavLink(subject, route) {
  const active = route.subjectId === subject.id ? " is-active" : "";
  return `
    <a class="nav-link${active}" href="${routeTo(`fach/${subject.id}`)}" style="--subject-color: ${subject.color}">
      ${svg(subject.icon, "nav-icon")}
      <span>${escapeHtml(subject.name)}</span>
      <span class="nav-dot"></span>
    </a>
  `;
}

function renderPhoneSubjectDock(route) {
  return `
    <nav class="phone-subject-dock liquid-layer" aria-label="Faecher">
      ${SUBJECTS.map((subject) => `
        <a href="${routeTo(`fach/${subject.id}`)}" class="${route.subjectId === subject.id ? "is-active" : ""}" style="--subject-color: ${subject.color}">
          ${svg(subject.icon, "button-icon")}
          <span>${escapeHtml(subject.name)}</span>
        </a>
      `).join("")}
    </nav>
  `;
}

function renderPhoneTabbar(route) {
  const cardSubject = route.subjectId || "mathematik";
  return `
    <nav class="phone-tabbar liquid-layer" aria-label="Schnellnavigation">
      <a href="${routeTo("")}" class="${route.page === "home" ? "is-active" : ""}">${svg("home", "button-icon")}<span>Start</span></a>
      <a href="${routeTo("fach/mathematik")}" class="${route.subjectId === "mathematik" && route.page !== "tool" ? "is-active" : ""}">${svg("function", "button-icon")}<span>Mathe</span></a>
      <a href="${routeTo(`fach/${cardSubject}/tool/lernkarten`)}" class="${route.toolId === "lernkarten" ? "is-active" : ""}">${svg("cards", "button-icon")}<span>Karten</span></a>
      <a href="${variantHref("desktop")}">${svg("right", "button-icon")}<span>Desktop</span></a>
    </nav>
  `;
}

function renderMobileTabs(route) {
  return `
    <nav class="mobile-tabs" aria-label="Faecher mobil">
      ${SUBJECTS.map((subject) => `
        <a href="${routeTo(`fach/${subject.id}`)}" class="${route.subjectId === subject.id ? "is-active" : ""}" style="--subject-color: ${subject.color}">
          ${svg(subject.icon, "button-icon")}
          <span>${escapeHtml(subject.name)}</span>
        </a>
      `).join("")}
    </nav>
  `;
}

function renderBreadcrumbs(route) {
  if (route.page === "home") {
    return `<span>Faecher</span>`;
  }
  const subject = subjectById(route.subjectId);
  if (route.page === "subject") {
    return `<a href="${routeTo("")}">Faecher</a><span>/</span><span>${escapeHtml(subject.name)}</span>`;
  }
  const tool = TOOLS[route.toolId];
  return `<a href="${routeTo("")}">Faecher</a><span>/</span><a href="${routeTo(`fach/${subject.id}`)}">${escapeHtml(subject.name)}</a><span>/</span><span>${escapeHtml(tool?.name || "Tool")}</span>`;
}

function renderCurrentPage(route) {
  if (route.page === "subject") {
    return renderSubjectPage(subjectById(route.subjectId));
  }
  if (route.page === "tool") {
    return renderToolPage(subjectById(route.subjectId), route.toolId);
  }
  return renderHomePage();
}

function searchMatches(...values) {
  const query = state.search.trim().toLowerCase();
  if (!query) return true;
  return values.some((value) => String(value).toLowerCase().includes(query));
}

function renderHomePage() {
  const filteredSubjects = SUBJECTS.filter((subject) => {
    const toolNames = toolsForSubject(subject.id).map((id) => TOOLS[id].name).join(" ");
    return searchMatches(subject.name, toolNames);
  });
  const toolCount = SUBJECTS.reduce((count, subject) => count + toolsForSubject(subject.id).length, 0);
  const cardCount = SUBJECTS.reduce((count, subject) => count + getCards(subject.id).length, 0);

  return `
    <section class="hero" style="--accent: #8fd8ff; --accent-2: #a5ffcf">
      <div class="hero-content">
        <p class="eyebrow">${svg("spark", "button-icon")} Dark Workspace</p>
        <h2>School Tools</h2>
        <p>Faecher, Rechner und Lernkarten in einer ruhigen Arbeitsflaeche fuer Unterricht, Hausaufgaben und Klausurvorbereitung.</p>
      </div>
      <div class="hero-meta">
        <div class="metric">${svg("book", "metric-icon")}<strong>${SUBJECTS.length}</strong><span>Faecher</span></div>
        <div class="metric">${svg("calc", "metric-icon")}<strong>${toolCount}</strong><span>Tool-Seiten</span></div>
        <div class="metric">${svg("cards", "metric-icon")}<strong>${cardCount}</strong><span>Lernkarten</span></div>
        <div class="metric">${svg("spark", "metric-icon")}<strong>0</strong><span>Logins</span></div>
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <h3>Faecher</h3>
          <p>${filteredSubjects.length} von ${SUBJECTS.length}</p>
        </div>
      </div>
      <div class="subject-grid">
        ${filteredSubjects.map(renderSubjectCard).join("") || renderEmpty("Kein Fach gefunden.")}
      </div>
    </section>
  `;
}

function renderSubjectCard(subject) {
  const toolIds = toolsForSubject(subject.id);
  const cardCount = getCards(subject.id).length;
  return `
    <a class="glass-card subject-card" href="${routeTo(`fach/${subject.id}`)}" style="--subject-color: ${subject.color}; --accent: ${subject.color}; --accent-2: ${subject.color2}">
      <div class="card-top">
        ${svg(subject.icon, "subject-icon")}
        ${svg("arrow", "card-arrow")}
      </div>
      <div class="card-copy">
        <h3>${escapeHtml(subject.name)}</h3>
        <p>${toolIds.length} Tools · ${cardCount} Karten</p>
        <div class="card-meta">
          ${toolIds.slice(0, 3).map((id) => `<span class="pill">${escapeHtml(TOOLS[id].name)}</span>`).join("")}
        </div>
      </div>
    </a>
  `;
}

function renderSubjectPage(subject) {
  const toolIds = toolsForSubject(subject.id);
  const filteredTools = toolIds.filter((id) => searchMatches(TOOLS[id].name, TOOLS[id].short, subject.name));
  const cards = getCards(subject.id);

  return `
    <section class="hero" style="--accent: ${subject.color}; --accent-2: ${subject.color2}">
      <div class="hero-content">
        <p class="eyebrow">${svg(subject.icon, "button-icon")} Fach</p>
        <h2>${escapeHtml(subject.name)}</h2>
        <p>${subject.id === "mathematik" ? "Analysis, Gleichungen, Prozentrechnung und Einheiten direkt im Browser." : "Eigene Lernkarten bleiben lokal im Browser und sind ohne Login verfuegbar."}</p>
      </div>
      <div class="hero-meta">
        <div class="metric">${svg("calc", "metric-icon")}<strong>${toolIds.length}</strong><span>Tools</span></div>
        <div class="metric">${svg("cards", "metric-icon")}<strong>${cards.length}</strong><span>Karten</span></div>
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <h3>Tools</h3>
          <p>${filteredTools.length} verfuegbar</p>
        </div>
      </div>
      <div class="tool-grid">
        ${filteredTools.map((toolId) => renderToolCard(subject, toolId)).join("") || renderEmpty("Kein Tool gefunden.")}
      </div>
    </section>
  `;
}

function renderToolCard(subject, toolId) {
  const tool = TOOLS[toolId];
  return `
    <a class="glass-card tool-card" href="${routeTo(`fach/${subject.id}/tool/${toolId}`)}" style="--subject-color: ${subject.color}; --accent: ${subject.color}; --accent-2: ${subject.color2}">
      <div class="card-top">
        ${svg(tool.icon, "tool-icon")}
        ${svg("arrow", "card-arrow")}
      </div>
      <div class="card-copy">
        <h4>${escapeHtml(tool.name)}</h4>
        <p>${escapeHtml(tool.short)}</p>
        <div class="card-meta">${tool.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}</div>
      </div>
    </a>
  `;
}

function renderToolPage(subject, toolId) {
  const tool = TOOLS[toolId];
  if (!tool || !toolsForSubject(subject.id).includes(toolId)) {
    return renderNotFound(subject);
  }
  const header = `
    <section class="hero" style="--accent: ${subject.color}; --accent-2: ${subject.color2}">
      <div class="hero-content">
        <p class="eyebrow">${svg(tool.icon, "button-icon")} ${escapeHtml(subject.name)}</p>
        <h2>${escapeHtml(tool.name)}</h2>
        <p>${escapeHtml(tool.short)}</p>
      </div>
      <div class="hero-meta">
        <div class="metric">${svg(subject.icon, "metric-icon")}<strong>${escapeHtml(subject.name.split(" ")[0])}</strong><span>Fach</span></div>
        <div class="metric">${svg("spark", "metric-icon")}<strong>Local</strong><span>Ohne Login</span></div>
      </div>
    </section>
  `;

  const body = {
    kurvendiskussion: renderCurveTool,
    gleichungen: renderEquationTool,
    prozent: renderPercentTool,
    einheiten: renderUnitsTool,
    lernkarten: renderFlashcardsTool,
  }[toolId](subject);

  return `${header}<section class="section">${body}</section>`;
}

function renderNotFound(subject) {
  return `
    <section class="section single-layout">
      <div class="panel"><div class="panel-inner">
        <h3>Tool nicht gefunden</h3>
        <a class="action-button" href="${routeTo(`fach/${subject.id}`)}">${svg("left", "button-icon")} Zurueck zu ${escapeHtml(subject.name)}</a>
      </div></div>
    </section>
  `;
}

function renderEmpty(text) {
  return `<div class="empty-state">${escapeHtml(text)}</div>`;
}

function bindCommonEvents() {
  const search = document.getElementById("globalSearch");
  if (search) {
    search.addEventListener("input", (event) => {
      state.search = event.target.value;
      render();
      const next = document.getElementById("globalSearch");
      if (next) {
        next.focus();
        const end = next.value.length;
        next.setSelectionRange(end, end);
      }
    });
  }
}

function bindPageEvents(route) {
  if (route.page !== "tool") return;
  const binders = {
    kurvendiskussion: bindCurveTool,
    gleichungen: bindEquationTool,
    prozent: bindPercentTool,
    einheiten: bindUnitsTool,
    lernkarten: bindFlashcardsTool,
  };
  binders[route.toolId]?.(subjectById(route.subjectId));
}

window.addEventListener("hashchange", () => {
  state.route = parseRoute();
  render();
});

window.addEventListener("resize", () => {
  if (state.route.page === "tool" && state.route.toolId === "kurvendiskussion" && state.curve.result && !state.curve.error) {
    drawGraph(state.curve.result);
  }
});

render();

function renderCurveTool() {
  ensureCurveResult();
  const curve = state.curve;
  const result = curve.result;
  return `
    <div class="tool-layout">
      <div class="panel">
        <div class="panel-inner">
          <h3>Funktion</h3>
          <form id="curveForm" class="form-grid">
            <div class="field">
              <label for="curveExpression">f(x)</label>
              <input id="curveExpression" name="expression" autocomplete="off" value="${escapeHtml(curve.expression)}">
            </div>
            <div class="two-col">
              <div class="field">
                <label for="curveMin">x min</label>
                <input id="curveMin" name="min" inputmode="decimal" value="${escapeHtml(curve.min)}">
              </div>
              <div class="field">
                <label for="curveMax">x max</label>
                <input id="curveMax" name="max" inputmode="decimal" value="${escapeHtml(curve.max)}">
              </div>
            </div>
            <div class="segmented" aria-label="Beispiele">
              ${["x^3 - 3x", "x^4 - 4x^2", "sin(x)", "1/(x^2+1)", "exp(x)-4"].map((example) => `
                <button type="button" class="chip-button" data-example="${escapeHtml(example)}">${escapeHtml(example)}</button>
              `).join("")}
            </div>
            <button class="action-button" type="submit">${svg("chart", "button-icon")} Analysieren</button>
          </form>
          ${curve.error ? `<div class="status is-error">${escapeHtml(curve.error)}</div>` : ""}
          ${result ? `
            <div class="status">${svg("spark", "button-icon")} <span class="formula">f'(x) = ${escapeHtml(astToString(result.d1))}</span></div>
            <div class="status"><span class="formula">f''(x) = ${escapeHtml(astToString(result.d2))}</span></div>
          ` : ""}
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <div class="canvas-wrap">
            <canvas id="curveCanvas" class="graph-canvas" aria-label="Funktionsgraph"></canvas>
          </div>
          ${result ? renderCurveResultCards(result) : ""}
        </div>
      </div>
    </div>
  `;
}

function renderCurveResultCards(result) {
  return `
    <div class="result-grid">
      <div class="result-card">
        <strong>Nullstellen</strong>
        <p>${compactList(result.roots, (x) => `x = ${formatNumber(x)}`)}</p>
      </div>
      <div class="result-card">
        <strong>Achsen & Symmetrie</strong>
        <p>f(0) = ${formatNumber(result.yIntercept)}<br>${escapeHtml(result.symmetry)}</p>
      </div>
      <div class="result-card">
        <strong>Extrempunkte</strong>
        <p>${compactList(result.extrema, (point) => `${point.kind}: (${formatNumber(point.x)} | ${formatNumber(point.y)})`)}</p>
      </div>
      <div class="result-card">
        <strong>Wendepunkte</strong>
        <p>${compactList(result.inflections, (point) => `(${formatNumber(point.x)} | ${formatNumber(point.y)})`)}</p>
      </div>
      <div class="result-card">
        <strong>Monotonie</strong>
        <ul>${result.monotonicity.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
      </div>
      <div class="result-card">
        <strong>Kruemmung</strong>
        <ul>${result.curvature.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function ensureCurveResult() {
  if (state.curve.result || state.curve.error) return;
  runCurveAnalysis(state.curve.expression, state.curve.min, state.curve.max);
}

function runCurveAnalysis(expression, min, max) {
  try {
    state.curve.result = analyzeExpression(expression, Number(min), Number(max));
    state.curve.error = "";
  } catch (error) {
    state.curve.result = null;
    state.curve.error = error.message || "Die Funktion konnte nicht analysiert werden.";
  }
}

function bindCurveTool() {
  const form = document.getElementById("curveForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const expression = String(data.get("expression") || "").trim();
      const min = readNumber(data.get("min"), -4);
      const max = readNumber(data.get("max"), 4);
      state.curve = { expression, min, max, result: null, error: "" };
      runCurveAnalysis(expression, min, max);
      render();
    });
  }

  document.querySelectorAll("[data-example]").forEach((button) => {
    button.addEventListener("click", () => {
      const expression = button.getAttribute("data-example") || "x^2";
      state.curve = { expression, min: -5, max: 5, result: null, error: "" };
      runCurveAnalysis(expression, -5, 5);
      render();
    });
  });

  if (state.curve.result && !state.curve.error) {
    requestAnimationFrame(() => drawGraph(state.curve.result));
  }
}

function renderEquationTool() {
  const { a, b, c } = state.equation;
  const solution = solveEquation(a, b, c);
  return `
    <div class="single-layout">
      <div class="panel">
        <div class="panel-inner">
          <h3>ax² + bx + c = 0</h3>
          <form id="equationForm" class="form-grid">
            <div class="three-col">
              <div class="field"><label for="eqA">a</label><input id="eqA" name="a" inputmode="decimal" value="${escapeHtml(a)}"></div>
              <div class="field"><label for="eqB">b</label><input id="eqB" name="b" inputmode="decimal" value="${escapeHtml(b)}"></div>
              <div class="field"><label for="eqC">c</label><input id="eqC" name="c" inputmode="decimal" value="${escapeHtml(c)}"></div>
            </div>
            <button class="action-button" type="submit">${svg("calc", "button-icon")} Berechnen</button>
          </form>
          <div class="result-grid">
            <div class="result-card"><strong>Typ</strong><p>${escapeHtml(solution.type)}</p></div>
            <div class="result-card"><strong>Diskriminante</strong><p>${solution.discriminant === null ? "nicht benoetigt" : formatNumber(solution.discriminant)}</p></div>
            <div class="result-card"><strong>Loesung</strong><p>${escapeHtml(solution.text)}</p></div>
            <div class="result-card"><strong>Form</strong><p class="formula">${escapeHtml(solution.formula)}</p></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindEquationTool() {
  document.getElementById("equationForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.equation = {
      a: readNumber(data.get("a"), 0),
      b: readNumber(data.get("b"), 0),
      c: readNumber(data.get("c"), 0),
    };
    render();
  });
}

function solveEquation(a, b, c) {
  const eps = 1e-12;
  if (Math.abs(a) < eps && Math.abs(b) < eps) {
    return {
      type: Math.abs(c) < eps ? "Identitaet" : "Widerspruch",
      discriminant: null,
      text: Math.abs(c) < eps ? "Alle reellen Zahlen" : "Keine Loesung",
      formula: `${formatNumber(c)} = 0`,
    };
  }
  if (Math.abs(a) < eps) {
    const x = -c / b;
    return {
      type: "Lineare Gleichung",
      discriminant: null,
      text: `x = ${formatNumber(x)}`,
      formula: `${formatNumber(b)}x + ${formatNumber(c)} = 0`,
    };
  }
  const d = b * b - 4 * a * c;
  if (Math.abs(d) < eps) {
    const x = -b / (2 * a);
    return {
      type: "Quadratische Gleichung",
      discriminant: 0,
      text: `Doppelte Loesung: x = ${formatNumber(x)}`,
      formula: `x = -b / (2a)`,
    };
  }
  if (d > 0) {
    const sqrt = Math.sqrt(d);
    const x1 = (-b - sqrt) / (2 * a);
    const x2 = (-b + sqrt) / (2 * a);
    return {
      type: "Quadratische Gleichung",
      discriminant: d,
      text: `x1 = ${formatNumber(x1)}, x2 = ${formatNumber(x2)}`,
      formula: `x = (-b ± sqrt(D)) / (2a)`,
    };
  }
  const real = -b / (2 * a);
  const imag = Math.sqrt(-d) / (2 * Math.abs(a));
  return {
    type: "Quadratische Gleichung",
    discriminant: d,
    text: `x1 = ${formatNumber(real)} - ${formatNumber(imag)}i, x2 = ${formatNumber(real)} + ${formatNumber(imag)}i`,
    formula: `x = (-b ± i·sqrt(|D|)) / (2a)`,
  };
}

function renderPercentTool() {
  const modes = {
    of: ["Prozentwert", "p in %", "Grundwert", null],
    part: ["Prozentsatz", "Wert", "Grundwert", null],
    change: ["Aenderung", "Startwert", "Endwert", null],
    rule: ["Dreisatz", "Wert A", "Menge A", "Menge B"],
  };
  const labels = modes[state.percent.mode] || modes.of;
  const result = solvePercent(state.percent);
  return `
    <div class="single-layout">
      <div class="panel">
        <div class="panel-inner">
          <div class="segmented" aria-label="Modus">
            ${Object.entries(modes).map(([mode, data]) => `
              <button class="chip-button ${state.percent.mode === mode ? "is-active" : ""}" type="button" data-percent-mode="${mode}">${escapeHtml(data[0])}</button>
            `).join("")}
          </div>
          <form id="percentForm" class="form-grid" style="margin-top: 14px">
            <div class="${labels[3] ? "three-col" : "two-col"}">
              <div class="field"><label for="percentA">${escapeHtml(labels[1])}</label><input id="percentA" name="a" inputmode="decimal" value="${escapeHtml(state.percent.a)}"></div>
              <div class="field"><label for="percentB">${escapeHtml(labels[2])}</label><input id="percentB" name="b" inputmode="decimal" value="${escapeHtml(state.percent.b)}"></div>
              ${labels[3] ? `<div class="field"><label for="percentC">${escapeHtml(labels[3])}</label><input id="percentC" name="c" inputmode="decimal" value="${escapeHtml(state.percent.c)}"></div>` : ""}
            </div>
            <button class="action-button" type="submit">${svg("percent", "button-icon")} Berechnen</button>
          </form>
          <div class="result-grid">
            <div class="result-card"><strong>Ergebnis</strong><p>${escapeHtml(result.value)}</p></div>
            <div class="result-card"><strong>Rechnung</strong><p class="formula">${escapeHtml(result.formula)}</p></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindPercentTool() {
  document.querySelectorAll("[data-percent-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.percent.mode = button.getAttribute("data-percent-mode") || "of";
      render();
    });
  });
  document.getElementById("percentForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.percent = {
      ...state.percent,
      a: readNumber(data.get("a"), 0),
      b: readNumber(data.get("b"), 0),
      c: readNumber(data.get("c"), state.percent.c),
    };
    render();
  });
}

function solvePercent(input) {
  const { mode, a, b, c } = input;
  if (mode === "part") {
    if (Math.abs(b) < 1e-12) return { value: "nicht definiert", formula: "Grundwert darf nicht 0 sein" };
    return { value: `${formatNumber((a / b) * 100)} %`, formula: `${formatNumber(a)} / ${formatNumber(b)} · 100` };
  }
  if (mode === "change") {
    if (Math.abs(a) < 1e-12) return { value: "nicht definiert", formula: "Startwert darf nicht 0 sein" };
    const diff = b - a;
    return { value: `${formatNumber(diff)} (${formatNumber((diff / a) * 100)} %)`, formula: `(${formatNumber(b)} - ${formatNumber(a)}) / ${formatNumber(a)} · 100` };
  }
  if (mode === "rule") {
    if (Math.abs(b) < 1e-12) return { value: "nicht definiert", formula: "Menge A darf nicht 0 sein" };
    return { value: formatNumber((a / b) * c), formula: `${formatNumber(a)} / ${formatNumber(b)} · ${formatNumber(c)}` };
  }
  return { value: formatNumber((a / 100) * b), formula: `${formatNumber(a)} / 100 · ${formatNumber(b)}` };
}

function renderUnitsTool() {
  normalizeUnitState();
  const group = UNIT_GROUPS[state.units.group];
  const units = Object.entries(group.units);
  const result = convertUnit(state.units);
  return `
    <div class="single-layout">
      <div class="panel">
        <div class="panel-inner">
          <form id="unitsForm" class="form-grid">
            <div class="field">
              <label for="unitGroup">Groesse</label>
              <select id="unitGroup" name="group">
                ${Object.entries(UNIT_GROUPS).map(([id, data]) => `<option value="${id}" ${state.units.group === id ? "selected" : ""}>${escapeHtml(data.label)}</option>`).join("")}
              </select>
            </div>
            <div class="three-col">
              <div class="field"><label for="unitValue">Wert</label><input id="unitValue" name="value" inputmode="decimal" value="${escapeHtml(state.units.value)}"></div>
              <div class="field"><label for="unitFrom">Von</label><select id="unitFrom" name="from">${units.map(([id, data]) => `<option value="${id}" ${state.units.from === id ? "selected" : ""}>${escapeHtml(data.label)}</option>`).join("")}</select></div>
              <div class="field"><label for="unitTo">Nach</label><select id="unitTo" name="to">${units.map(([id, data]) => `<option value="${id}" ${state.units.to === id ? "selected" : ""}>${escapeHtml(data.label)}</option>`).join("")}</select></div>
            </div>
            <button class="action-button" type="submit">${svg("ruler", "button-icon")} Umrechnen</button>
          </form>
          <div class="result-grid">
            <div class="result-card"><strong>Ergebnis</strong><p>${escapeHtml(result.text)}</p></div>
            <div class="result-card"><strong>Faktor</strong><p class="formula">${escapeHtml(result.formula)}</p></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindUnitsTool() {
  document.getElementById("unitGroup")?.addEventListener("change", (event) => {
    const group = event.target.value;
    const keys = Object.keys(UNIT_GROUPS[group].units);
    state.units = { group, value: state.units.value, from: keys[0], to: keys[1] || keys[0] };
    render();
  });
  document.getElementById("unitsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.units = {
      group: String(data.get("group") || "length"),
      value: readNumber(data.get("value"), 0),
      from: String(data.get("from") || "m"),
      to: String(data.get("to") || "km"),
    };
    render();
  });
}

function normalizeUnitState() {
  if (!UNIT_GROUPS[state.units.group]) state.units.group = "length";
  const group = UNIT_GROUPS[state.units.group];
  const keys = Object.keys(group.units);
  if (!group.units[state.units.from]) state.units.from = keys[0];
  if (!group.units[state.units.to]) state.units.to = keys[1] || keys[0];
}

function convertUnit({ group, value, from, to }) {
  const data = UNIT_GROUPS[group];
  const source = data.units[from];
  const target = data.units[to];
  const base = value * source.factor;
  const converted = base / target.factor;
  return {
    text: `${formatNumber(value)} ${from} = ${formatNumber(converted)} ${to}`,
    formula: `${formatNumber(value)} · ${formatNumber(source.factor)} / ${formatNumber(target.factor)}`,
  };
}

function renderFlashcardsTool(subject) {
  const cards = getCards(subject.id);
  const flash = getFlashState(subject.id, cards.length);
  const active = cards[flash.index] || null;
  return `
    <div class="tool-layout">
      <div class="panel">
        <div class="panel-inner">
          <h3>Neue Karte</h3>
          <form id="cardForm" class="form-grid">
            <div class="field">
              <label for="cardFront">Vorderseite</label>
              <textarea id="cardFront" name="front"></textarea>
            </div>
            <div class="field">
              <label for="cardBack">Rueckseite</label>
              <textarea id="cardBack" name="back"></textarea>
            </div>
            <button class="action-button" type="submit">${svg("plus", "button-icon")} Hinzufuegen</button>
          </form>
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <div class="section-header">
            <div>
              <h3>Quiz</h3>
              <p>${cards.length} Karten</p>
            </div>
            <div class="tool-actions">
              <button class="icon-button" type="button" data-card-action="prev" title="Vorherige">${svg("left", "button-icon")}</button>
              <button class="icon-button" type="button" data-card-action="shuffle" title="Mischen">${svg("shuffle", "button-icon")}</button>
              <button class="icon-button" type="button" data-card-action="next" title="Naechste">${svg("right", "button-icon")}</button>
            </div>
          </div>
          ${active ? `
            <div class="flashcard-stage">
              <div class="flashcard">
                <div>
                  <strong>${escapeHtml(active.front)}</strong>
                  ${flash.revealed ? `<span>${escapeHtml(active.back)}</span>` : ""}
                </div>
              </div>
            </div>
            <div class="form-actions" style="margin-top: 12px">
              <button class="action-button" type="button" data-card-action="reveal">${svg("eye", "button-icon")} ${flash.revealed ? "Verbergen" : "Aufdecken"}</button>
            </div>
          ` : renderEmpty("Noch keine Lernkarten in diesem Fach.")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>Kartenstapel</h3>
          <div class="list">
            ${cards.map((card) => `
              <div class="list-row">
                <div><strong>${escapeHtml(card.front)}</strong><span>${escapeHtml(card.back)}</span></div>
                <button class="danger-button" type="button" data-delete-card="${escapeHtml(card.id)}">${svg("trash", "button-icon")} Entfernen</button>
              </div>
            `).join("") || renderEmpty("Der Stapel ist leer.")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function getFlashState(subjectId, total) {
  if (!state.flash[subjectId]) state.flash[subjectId] = { index: 0, revealed: false };
  const flash = state.flash[subjectId];
  if (total <= 0) {
    flash.index = 0;
    flash.revealed = false;
  } else if (flash.index >= total) {
    flash.index = total - 1;
  }
  return flash;
}

function bindFlashcardsTool(subject) {
  document.getElementById("cardForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const front = String(data.get("front") || "").trim();
    const back = String(data.get("back") || "").trim();
    if (!front || !back) return;
    const cards = getCards(subject.id);
    cards.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, front, back });
    saveCards(subject.id, cards);
    state.flash[subject.id] = { index: cards.length - 1, revealed: false };
    render();
  });

  document.querySelectorAll("[data-delete-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-delete-card");
      const cards = getCards(subject.id).filter((card) => card.id !== id);
      saveCards(subject.id, cards);
      getFlashState(subject.id, cards.length);
      render();
    });
  });

  document.querySelectorAll("[data-card-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const cards = getCards(subject.id);
      const flash = getFlashState(subject.id, cards.length);
      const action = button.getAttribute("data-card-action");
      if (!cards.length) return;
      if (action === "prev") flash.index = (flash.index - 1 + cards.length) % cards.length;
      if (action === "next") flash.index = (flash.index + 1) % cards.length;
      if (action === "shuffle") flash.index = Math.floor(Math.random() * cards.length);
      if (action === "reveal") flash.revealed = !flash.revealed;
      if (action !== "reveal") flash.revealed = false;
      render();
    });
  });
}

const MATH_FUNCTIONS = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  sqrt: Math.sqrt,
  ln: Math.log,
  log: Math.log10,
  exp: Math.exp,
  abs: Math.abs,
};

const CONSTANTS = {
  pi: Math.PI,
  e: Math.E,
};

function analyzeExpression(expression, min, max) {
  if (!expression.trim()) throw new Error("Bitte eine Funktion eingeben.");
  if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min) {
    throw new Error("Das Intervall braucht zwei gueltige Grenzen mit x min < x max.");
  }
  if (max - min > 10000) {
    throw new Error("Das Intervall ist zu gross fuer die numerische Analyse.");
  }

  const ast = simplify(parseMath(expression));
  const d1 = simplify(derive(ast));
  const d2 = simplify(derive(d1));
  const fn = (x) => safeEval(ast, x);
  const df = (x) => safeEval(d1, x);
  const ddf = (x) => safeEval(d2, x);

  const roots = findRoots(fn, min, max, 900);
  const critical = findRoots(df, min, max, 900);
  const inflectionXs = findRoots(ddf, min, max, 900);
  const extrema = critical
    .map((x) => {
      const y = fn(x);
      const second = ddf(x);
      let kind = "Sattel/waagerecht";
      if (Number.isFinite(second) && second > 1e-5) kind = "Minimum";
      if (Number.isFinite(second) && second < -1e-5) kind = "Maximum";
      return { x, y, kind };
    })
    .filter((point) => Number.isFinite(point.y));
  const inflections = inflectionXs
    .map((x) => ({ x, y: fn(x) }))
    .filter((point) => Number.isFinite(point.y));

  const breakpoints = [min, ...critical.filter((x) => x > min && x < max), max].sort((a, b) => a - b);
  const monotonicity = intervalsFromBreakpoints(breakpoints, df, (value) => {
    if (!Number.isFinite(value)) return "nicht stetig";
    if (value > 1e-6) return "steigend";
    if (value < -1e-6) return "fallend";
    return "konstant";
  });

  const curveBreaks = [min, ...inflectionXs.filter((x) => x > min && x < max), max].sort((a, b) => a - b);
  const curvature = intervalsFromBreakpoints(curveBreaks, ddf, (value) => {
    if (!Number.isFinite(value)) return "nicht stetig";
    if (value > 1e-6) return "linksgekruemmt / konvex";
    if (value < -1e-6) return "rechtsgekruemmt / konkav";
    return "nahezu flach";
  });

  return {
    ast,
    d1,
    d2,
    min,
    max,
    roots,
    extrema,
    inflections,
    monotonicity,
    curvature,
    yIntercept: fn(0),
    symmetry: detectSymmetry(fn, min, max),
    yRange: sampleYRange(fn, min, max),
  };
}

function intervalsFromBreakpoints(points, fn, classifier) {
  const entries = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    if (b - a < 1e-8) continue;
    const mid = (a + b) / 2;
    entries.push(`[${formatNumber(a)}, ${formatNumber(b)}]: ${classifier(fn(mid))}`);
  }
  return entries.length ? entries : ["keine Intervalle im Bereich"];
}

function detectSymmetry(fn, min, max) {
  const limit = Math.min(Math.abs(min), Math.abs(max));
  if (limit < 1e-6) return "Symmetrie nicht bewertbar";
  let evenError = 0;
  let oddError = 0;
  let samples = 0;
  for (let i = 1; i <= 40; i += 1) {
    const x = (limit * i) / 40;
    const y1 = fn(x);
    const y2 = fn(-x);
    if (!Number.isFinite(y1) || !Number.isFinite(y2)) continue;
    const scale = Math.max(1, Math.abs(y1), Math.abs(y2));
    evenError += Math.abs(y1 - y2) / scale;
    oddError += Math.abs(y1 + y2) / scale;
    samples += 1;
  }
  if (!samples) return "Symmetrie nicht bewertbar";
  if (evenError / samples < 1e-4) return "achsensymmetrisch zur y-Achse";
  if (oddError / samples < 1e-4) return "punktsymmetrisch zum Ursprung";
  return "keine einfache Symmetrie erkannt";
}

function sampleYRange(fn, min, max) {
  const values = [];
  for (let i = 0; i <= 800; i += 1) {
    const x = min + ((max - min) * i) / 800;
    const y = fn(x);
    if (Number.isFinite(y) && Math.abs(y) < 1e7) values.push(y);
  }
  if (!values.length) return { min: -1, max: 1 };
  values.sort((a, b) => a - b);
  const low = values[Math.floor(values.length * 0.03)];
  const high = values[Math.floor(values.length * 0.97)];
  const pad = Math.max(1, (high - low) * 0.15);
  return { min: low - pad, max: high + pad };
}

function findRoots(fn, min, max, steps) {
  const roots = [];
  const step = (max - min) / steps;
  let prevX = min;
  let prevY = fn(prevX);

  for (let i = 1; i <= steps; i += 1) {
    const x = min + step * i;
    const y = fn(x);
    if (Number.isFinite(y) && Math.abs(y) < 1e-5) roots.push(x);
    if (Number.isFinite(prevY) && Number.isFinite(y) && prevY * y < 0) {
      const root = bisect(fn, prevX, x);
      if (Number.isFinite(root) && Math.abs(fn(root)) < 1e-4) roots.push(root);
    }
    prevX = x;
    prevY = y;
  }

  return dedupeNumbers(roots, Math.max(1e-3, (max - min) / steps));
}

function bisect(fn, a, b) {
  let left = a;
  let right = b;
  let fLeft = fn(left);
  for (let i = 0; i < 70; i += 1) {
    const mid = (left + right) / 2;
    const fMid = fn(mid);
    if (!Number.isFinite(fMid)) return NaN;
    if (Math.abs(fMid) < 1e-9) return mid;
    if (fLeft * fMid <= 0) {
      right = mid;
    } else {
      left = mid;
      fLeft = fMid;
    }
  }
  return (left + right) / 2;
}

function dedupeNumbers(values, tolerance) {
  return [...values]
    .filter(Number.isFinite)
    .sort((a, b) => a - b)
    .reduce((acc, value) => {
      if (!acc.length || Math.abs(acc[acc.length - 1] - value) > tolerance) acc.push(value);
      return acc;
    }, []);
}

function safeEval(ast, x) {
  try {
    const value = evaluate(ast, x);
    return Number.isFinite(value) ? value : NaN;
  } catch {
    return NaN;
  }
}

function parseMath(input) {
  const tokens = insertImplicitMultiplication(tokenize(input));
  let index = 0;

  function peek(value) {
    const token = tokens[index];
    if (!token) return false;
    return value === undefined ? token : token.value === value;
  }

  function consume(value) {
    if (!peek(value)) return false;
    index += 1;
    return true;
  }

  function expect(value) {
    if (!consume(value)) throw new Error(`Erwartet: ${value}`);
  }

  function parseExpression() {
    let node = parseTerm();
    while (peek("+") || peek("-")) {
      const op = tokens[index].value;
      index += 1;
      node = { type: "binary", op, left: node, right: parseTerm() };
    }
    return node;
  }

  function parseTerm() {
    let node = parseUnary();
    while (peek("*") || peek("/")) {
      const op = tokens[index].value;
      index += 1;
      node = { type: "binary", op, left: node, right: parseUnary() };
    }
    return node;
  }

  function parseUnary() {
    if (consume("+")) return parseUnary();
    if (consume("-")) return { type: "unary", op: "-", arg: parseUnary() };
    return parsePower();
  }

  function parsePower() {
    let node = parsePrimary();
    if (consume("^")) {
      node = { type: "binary", op: "^", left: node, right: parseUnary() };
    }
    return node;
  }

  function parsePrimary() {
    const token = tokens[index];
    if (!token) throw new Error("Unvollstaendige Eingabe.");
    if (consume("(")) {
      const node = parseExpression();
      expect(")");
      return node;
    }
    if (token.type === "number") {
      index += 1;
      return { type: "number", value: token.number };
    }
    if (token.type === "name") {
      index += 1;
      const name = token.value.toLowerCase();
      if (consume("(")) {
        if (!MATH_FUNCTIONS[name]) throw new Error(`Unbekannte Funktion: ${name}`);
        const arg = parseExpression();
        expect(")");
        return { type: "function", name, arg };
      }
      if (name === "x") return { type: "variable" };
      if (CONSTANTS[name] !== undefined) return { type: "constant", name, value: CONSTANTS[name] };
      throw new Error(`Unbekannter Name: ${name}`);
    }
    throw new Error(`Unerwartetes Zeichen: ${token.value}`);
  }

  const ast = parseExpression();
  if (index < tokens.length) throw new Error(`Unerwartet: ${tokens[index].value}`);
  return ast;
}

function tokenize(input) {
  const normalized = input
    .replaceAll("π", "pi")
    .replaceAll("√", "sqrt")
    .replaceAll("−", "-")
    .replace(/(\d),(\d)/g, "$1.$2");
  const tokens = [];
  let index = 0;

  while (index < normalized.length) {
    const char = normalized[index];
    if (/\s/.test(char)) {
      index += 1;
      continue;
    }
    if (/[0-9.]/.test(char)) {
      let end = index + 1;
      while (end < normalized.length && /[0-9.]/.test(normalized[end])) end += 1;
      if (/[eE]/.test(normalized[end])) {
        end += 1;
        if (/[+-]/.test(normalized[end])) end += 1;
        while (end < normalized.length && /[0-9]/.test(normalized[end])) end += 1;
      }
      const raw = normalized.slice(index, end);
      const number = Number(raw);
      if (!Number.isFinite(number)) throw new Error(`Ungueltige Zahl: ${raw}`);
      tokens.push({ type: "number", value: raw, number });
      index = end;
      continue;
    }
    if (/[a-zA-Z]/.test(char)) {
      let end = index + 1;
      while (end < normalized.length && /[a-zA-Z0-9_]/.test(normalized[end])) end += 1;
      tokens.push({ type: "name", value: normalized.slice(index, end) });
      index = end;
      continue;
    }
    if ("+-*/^()".includes(char)) {
      tokens.push({ type: "operator", value: char });
      index += 1;
      continue;
    }
    throw new Error(`Ungueltiges Zeichen: ${char}`);
  }
  return tokens;
}

function insertImplicitMultiplication(tokens) {
  const output = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const current = tokens[i];
    const next = tokens[i + 1];
    output.push(current);
    if (!next) continue;
    const currentEndsValue = current.type === "number" || current.type === "name" || current.value === ")";
    const nextStartsValue = next.type === "number" || next.type === "name" || next.value === "(";
    const currentIsFunction = current.type === "name" && MATH_FUNCTIONS[current.value.toLowerCase()] && next.value === "(";
    const currentIsOperator = ["+", "-", "*", "/", "^", "("].includes(current.value);
    const nextIsOperator = ["+", "-", "*", "/", "^", ")"].includes(next.value);
    if (currentEndsValue && nextStartsValue && !currentIsFunction && !currentIsOperator && !nextIsOperator) {
      output.push({ type: "operator", value: "*" });
    }
  }
  return output;
}

function evaluate(node, x) {
  switch (node.type) {
    case "number":
    case "constant":
      return node.value;
    case "variable":
      return x;
    case "unary":
      return -evaluate(node.arg, x);
    case "function":
      return MATH_FUNCTIONS[node.name](evaluate(node.arg, x));
    case "binary": {
      const left = evaluate(node.left, x);
      const right = evaluate(node.right, x);
      if (node.op === "+") return left + right;
      if (node.op === "-") return left - right;
      if (node.op === "*") return left * right;
      if (node.op === "/") return left / right;
      if (node.op === "^") return Math.pow(left, right);
      return NaN;
    }
    default:
      return NaN;
  }
}

function derive(node) {
  switch (node.type) {
    case "number":
    case "constant":
      return num(0);
    case "variable":
      return num(1);
    case "unary":
      return unary("-", derive(node.arg));
    case "binary":
      return deriveBinary(node);
    case "function":
      return deriveFunction(node);
    default:
      return num(0);
  }
}

function deriveBinary(node) {
  const u = node.left;
  const v = node.right;
  const du = derive(u);
  const dv = derive(v);
  if (node.op === "+") return bin("+", du, dv);
  if (node.op === "-") return bin("-", du, dv);
  if (node.op === "*") return bin("+", bin("*", du, v), bin("*", u, dv));
  if (node.op === "/") return bin("/", bin("-", bin("*", du, v), bin("*", u, dv)), bin("^", v, num(2)));
  if (node.op === "^") {
    if (v.type === "number") {
      return bin("*", bin("*", num(v.value), bin("^", u, num(v.value - 1))), du);
    }
    return bin("*", bin("^", u, v), bin("+", bin("*", dv, func("ln", u)), bin("*", v, bin("/", du, u))));
  }
  return num(0);
}

function deriveFunction(node) {
  const arg = node.arg;
  const dArg = derive(arg);
  if (node.name === "sin") return bin("*", func("cos", arg), dArg);
  if (node.name === "cos") return bin("*", unary("-", func("sin", arg)), dArg);
  if (node.name === "tan") return bin("*", bin("/", num(1), bin("^", func("cos", arg), num(2))), dArg);
  if (node.name === "asin") return bin("*", bin("/", num(1), func("sqrt", bin("-", num(1), bin("^", arg, num(2))))), dArg);
  if (node.name === "acos") return bin("*", unary("-", bin("/", num(1), func("sqrt", bin("-", num(1), bin("^", arg, num(2)))))), dArg);
  if (node.name === "atan") return bin("*", bin("/", num(1), bin("+", num(1), bin("^", arg, num(2)))), dArg);
  if (node.name === "sqrt") return bin("*", bin("/", num(1), bin("*", num(2), func("sqrt", arg))), dArg);
  if (node.name === "ln") return bin("*", bin("/", num(1), arg), dArg);
  if (node.name === "log") return bin("*", bin("/", num(1), bin("*", arg, num(Math.LN10))), dArg);
  if (node.name === "exp") return bin("*", func("exp", arg), dArg);
  if (node.name === "abs") return bin("*", bin("/", arg, func("abs", arg)), dArg);
  return num(0);
}

function num(value) {
  return { type: "number", value };
}

function bin(op, left, right) {
  return { type: "binary", op, left, right };
}

function unary(op, arg) {
  return { type: "unary", op, arg };
}

function func(name, arg) {
  return { type: "function", name, arg };
}

function simplify(node) {
  if (!node) return node;
  if (node.type === "unary") {
    const arg = simplify(node.arg);
    if (arg.type === "number") return num(-arg.value);
    if (arg.type === "unary") return simplify(arg.arg);
    return unary("-", arg);
  }
  if (node.type === "function") {
    const arg = simplify(node.arg);
    if (arg.type === "number") return num(MATH_FUNCTIONS[node.name](arg.value));
    return func(node.name, arg);
  }
  if (node.type !== "binary") return node;
  const left = simplify(node.left);
  const right = simplify(node.right);
  if (left.type === "number" && right.type === "number") {
    return num(evaluate(bin(node.op, left, right), 0));
  }
  if (node.op === "+") {
    if (isZero(left)) return right;
    if (isZero(right)) return left;
  }
  if (node.op === "-") {
    if (isZero(right)) return left;
    if (isZero(left)) return unary("-", right);
  }
  if (node.op === "*") {
    if (isZero(left) || isZero(right)) return num(0);
    if (isOne(left)) return right;
    if (isOne(right)) return left;
  }
  if (node.op === "/") {
    if (isZero(left)) return num(0);
    if (isOne(right)) return left;
  }
  if (node.op === "^") {
    if (isZero(right)) return num(1);
    if (isOne(right)) return left;
    if (isOne(left)) return num(1);
  }
  return bin(node.op, left, right);
}

function isZero(node) {
  return node.type === "number" && Math.abs(node.value) < 1e-12;
}

function isOne(node) {
  return node.type === "number" && Math.abs(node.value - 1) < 1e-12;
}

function astToString(node, parentPrecedence = 0) {
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  if (node.type === "number") return formatAstNumber(node.value);
  if (node.type === "constant") return node.name;
  if (node.type === "variable") return "x";
  if (node.type === "function") return `${node.name}(${astToString(node.arg)})`;
  if (node.type === "unary") return `-${astToString(node.arg, 4)}`;
  if (node.type === "binary") {
    const own = precedence[node.op] || 0;
    const left = astToString(node.left, own);
    const right = astToString(node.right, node.op === "^" ? own - 1 : own);
    const text = `${left} ${node.op} ${right}`;
    return own < parentPrecedence ? `(${text})` : text;
  }
  return "?";
}

function formatAstNumber(value) {
  if (!Number.isFinite(value)) return "NaN";
  if (Math.abs(value - Math.round(value)) < 1e-10) return String(Math.round(value));
  return String(Number(value.toPrecision(6)));
}

function drawGraph(result) {
  const canvas = document.getElementById("curveCanvas");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(320, rect.width);
  const height = Math.max(260, rect.height);
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const { min, max, yRange } = result;
  const yMin = yRange.min;
  const yMax = yRange.max;
  const xToPx = (x) => ((x - min) / (max - min)) * width;
  const yToPx = (y) => height - ((y - yMin) / (yMax - yMin)) * height;
  const color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#8fd8ff";

  drawGrid(ctx, width, height, min, max, yMin, yMax, xToPx, yToPx);

  ctx.lineWidth = 2.7;
  ctx.strokeStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 12;
  ctx.beginPath();
  let drawing = false;
  for (let i = 0; i <= 1200; i += 1) {
    const x = min + ((max - min) * i) / 1200;
    const y = safeEval(result.ast, x);
    if (!Number.isFinite(y) || y < yMin || y > yMax) {
      drawing = false;
      continue;
    }
    const px = xToPx(x);
    const py = yToPx(y);
    if (!drawing) {
      ctx.moveTo(px, py);
      drawing = true;
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  drawPointSet(ctx, result.roots.map((x) => ({ x, y: 0 })), xToPx, yToPx, "#f5f7fb");
  drawPointSet(ctx, result.extrema, xToPx, yToPx, "#ffd37a");
  drawPointSet(ctx, result.inflections, xToPx, yToPx, "#a5ffcf");
}

function drawGrid(ctx, width, height, xMin, xMax, yMin, yMax, xToPx, yToPx) {
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  for (let i = 0; i <= 10; i += 1) {
    const x = (width * i) / 10;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
    const y = (height * i) / 10;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.strokeStyle = "rgba(255,255,255,0.28)";
  if (xMin < 0 && xMax > 0) {
    const x0 = xToPx(0);
    ctx.beginPath();
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, height);
    ctx.stroke();
  }
  if (yMin < 0 && yMax > 0) {
    const y0 = yToPx(0);
    ctx.beginPath();
    ctx.moveTo(0, y0);
    ctx.lineTo(width, y0);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPointSet(ctx, points, xToPx, yToPx, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = "rgba(8,10,16,0.9)";
  ctx.lineWidth = 2;
  points.forEach((point) => {
    if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) return;
    const x = xToPx(point.x);
    const y = yToPx(point.y);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.restore();
}

function renderDesktopShell(content, route) {
  const subject = currentSubject(route);
  return `
    <div class="desktop-page">
      <header class="apple-nav">
        <a class="subject-logo" href="${routeTo("")}" style="--subject-color: ${subject.color}" aria-label="Start">
          ${route.subjectId ? svg(subject.icon, "subject-logo-icon") : "<span>Tools</span>"}
        </a>
        <nav class="apple-nav-links" aria-label="Faecher">
          ${SUBJECTS.map((item) => renderDesktopSubjectLink(item, route)).join("")}
        </nav>
        <div class="apple-nav-actions">
          <label class="search">
            <input id="globalSearch" type="search" autocomplete="off" placeholder="Suchen" value="${escapeHtml(state.search)}">
          </label>
          <a class="plain-link" href="${variantHref("phone")}">Mobile</a>
        </div>
      </header>
      <main class="main apple-main">
        <div class="fade-in">${content}</div>
      </main>
    </div>
  `;
}

function renderDesktopSubjectLink(subject, route) {
  return `
    <a class="${route.subjectId === subject.id ? "is-active" : ""}" href="${routeTo(`fach/${subject.id}`)}" style="--subject-color: ${subject.color}">
      ${escapeHtml(subject.name)}
    </a>
  `;
}

function renderPhoneShell(content, route) {
  const subject = currentSubject(route);
  return `
    <div class="phone-shell">
      <header class="phone-topbar">
        <a class="phone-brand" href="${routeTo("")}" aria-label="Start">
          <span class="brand-mark" style="--subject-color: ${subject.color}">${route.subjectId ? svg(subject.icon, "subject-logo-icon") : "Tools"}</span>
          <span>
            <strong>Tools-App</strong>
            <small>${escapeHtml(route.page === "home" ? "Faecher" : subject.name)}</small>
          </span>
        </a>
        <a class="plain-link" href="${variantHref("desktop")}">Desktop</a>
      </header>
      <div class="phone-search-row">
        <label class="search">
          <input id="globalSearch" type="search" autocomplete="off" placeholder="Suchen" value="${escapeHtml(state.search)}">
        </label>
      </div>
      ${renderPhoneSubjectDock(route)}
      <main class="phone-main">
        <div class="fade-in">${content}</div>
      </main>
      ${renderPhoneTabbar(route)}
    </div>
  `;
}

function renderPhoneSubjectDock(route) {
  return `
    <nav class="phone-subject-dock" aria-label="Faecher">
      ${SUBJECTS.map((subject) => `
        <a href="${routeTo(`fach/${subject.id}`)}" class="${route.subjectId === subject.id ? "is-active" : ""}" style="--subject-color: ${subject.color}">
          <span>${escapeHtml(subject.name)}</span>
        </a>
      `).join("")}
    </nav>
  `;
}

function renderPhoneTabbar(route) {
  const cardSubject = route.subjectId || "mathematik";
  return `
    <nav class="phone-tabbar" aria-label="Schnellnavigation">
      <a href="${routeTo("")}" class="${route.page === "home" ? "is-active" : ""}"><span>Start</span></a>
      <a href="${routeTo("fach/mathematik")}" class="${route.subjectId === "mathematik" && route.page !== "tool" ? "is-active" : ""}"><span>Mathe</span></a>
      <a href="${routeTo(`fach/${cardSubject}/tool/lernkarten`)}" class="${route.toolId === "lernkarten" ? "is-active" : ""}"><span>Karten</span></a>
      <a href="${variantHref("desktop")}"><span>Desktop</span></a>
    </nav>
  `;
}
