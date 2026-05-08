let content = null;
let lastContentText = "";

const iconPaths = {
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  clipboard: '<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3"/>',
  "shield-check": '<path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/>',
  shield: '<path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.8"/><path d="M16 3.2a4 4 0 0 1 0 7.6"/>',
  mic: '<path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><path d="M12 18v3"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m5.7 5.7 12.6 12.6"/>',
  layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M9 10v10"/>',
  mask: '<path d="M4 11c2-4 14-4 16 0v3c0 4-3 6-8 6s-8-2-8-6v-3Z"/><path d="M8 13h3"/><path d="M13 13h3"/><path d="M9 17c2 1 4 1 6 0"/>',
  "heart-pulse": '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3 12h4l2-3 3 7 2-4h7"/>',
  landmark: '<path d="m3 10 9-6 9 6"/><path d="M5 10h14"/><path d="M6 10v8"/><path d="M10 10v8"/><path d="M14 10v8"/><path d="M18 10v8"/><path d="M4 18h16"/><path d="M3 21h18"/>',
  car: '<path d="M5 17h14"/><path d="M6 17v3"/><path d="M18 17v3"/><path d="M4 14l2-6h12l2 6v3H4v-3Z"/><path d="M7 14h.01"/><path d="M17 14h.01"/>',
  coins: '<ellipse cx="8" cy="7" rx="5" ry="3"/><path d="M3 7v6c0 1.7 2.2 3 5 3s5-1.3 5-3V7"/><path d="M13 10c2.8 0 5 1.3 5 3v4c0 1.7-2.2 3-5 3-1.5 0-2.9-.4-3.8-1"/>',
  badge: '<path d="M12 3 8 5 4 4v7c0 5 3.6 8.2 8 10 4.4-1.8 8-5 8-10V4l-4 1-4-2Z"/><path d="M9 12h6"/><path d="M12 9v6"/>',
  "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>',
  siren: '<path d="M7 18v-6a5 5 0 0 1 10 0v6"/><path d="M5 18h14"/><path d="M12 2v3"/><path d="m4 5 2 2"/><path d="m20 5-2 2"/>',
  cross: '<path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3Z"/>',
  building: '<path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/><path d="M16 8h2a2 2 0 0 1 2 2v11"/><path d="M8 7h4"/><path d="M8 11h4"/><path d="M8 15h4"/>',
  scale: '<path d="M12 3v18"/><path d="M5 7h14"/><path d="m6 7-3 6h6L6 7Z"/><path d="m18 7-3 6h6l-3-6Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  crown: '<path d="m3 8 4 4 5-8 5 8 4-4-2 11H5L3 8Z"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  crosshair: '<circle cx="12" cy="12" r="8"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>',
  backpack: '<path d="M6 8V7a6 6 0 0 1 12 0v1"/><rect x="4" y="8" width="16" height="13" rx="3"/><path d="M8 13h8"/><path d="M8 17h5"/>',
  swords: '<path d="m14 7 3-3 3 3-3 3"/><path d="m4 20 7-7"/><path d="m3 7 3-3 14 14-3 3L3 7Z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/>',
  radio: '<rect x="6" y="8" width="12" height="13" rx="2"/><path d="M10 8V4l6-2"/><circle cx="12" cy="14" r="2"/><path d="M9 19h6"/>',
  network: '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="M10.4 7.6 6.6 16.4"/><path d="m13.6 7.6 3.8 8.8"/><path d="M8 19h8"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/>',
  refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v6h-6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  rocket: '<path d="M4.5 16.5c-1 1-1.5 3-1.5 4.5 1.5 0 3.5-.5 4.5-1.5"/><path d="M9 15 5 19"/><path d="M14 4c3 0 5 2 6 6l-8 8-6-6 8-8Z"/><path d="M15 9h.01"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z"/>',
  camera: '<path d="M4 7h4l2-3h4l2 3h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
};

function iconSvg(name, extraClass = "") {
  const paths = iconPaths[name] || iconPaths.clipboard;
  return `<svg class="wiki-icon ${extraClass}" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function pageById(id) {
  return content.pages.find((page) => page.id === id) || content.pages[0];
}

function currentId() {
  return window.location.hash.replace("#", "") || "accueil";
}

function slug(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderNav() {
  const navList = document.querySelector("#navList");
  navList.innerHTML = content.pages.map((page) => `
    <a class="nav-link" data-id="${escapeHtml(page.id)}" href="#${escapeHtml(page.id)}">
      <span class="nav-icon">${iconSvg(page.icon)}</span>
      <span>${escapeHtml(page.title)}</span>
    </a>
  `).join("");
}

function renderCards() {
  return `
    <div class="quick-grid">
      ${content.pages.filter((page) => page.id !== "accueil").map((page) => `
        <a class="quick-card" href="#${escapeHtml(page.id)}">
          <span class="nav-icon">${iconSvg(page.icon)}</span>
          <span>
            <strong>${escapeHtml(page.title)}</strong>
            <span>${escapeHtml(page.summary)}</span>
          </span>
        </a>
      `).join("")}
    </div>
  `;
}

function renderSections(page) {
  return page.sections.map((section) => `
    <section class="section" id="${slug(section.title)}">
      <h2><span>${iconSvg(section.icon)}</span>${escapeHtml(section.title)}</h2>
      ${section.description ? `<p>${escapeHtml(section.description)}</p>` : ""}
      <ul class="rules">
        ${section.rules.map((rule) => `
          <li>
            <span class="marker">${iconSvg("shield-check")}</span>
            <span>${escapeHtml(rule)}</span>
          </li>
        `).join("")}
      </ul>
      ${section.note ? `<div class="callout">${escapeHtml(section.note)}</div>` : ""}
    </section>
  `).join("");
}

function renderFooter(page) {
  const index = content.pages.findIndex((item) => item.id === page.id);
  const prev = content.pages[index - 1];
  const next = content.pages[index + 1];

  return `
    <footer class="page-footer">
      ${prev ? `<a href="#${escapeHtml(prev.id)}"><span>Precedent</span>${escapeHtml(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a href="#${escapeHtml(next.id)}"><span>Suivant</span>${escapeHtml(next.title)}</a>` : "<span></span>"}
    </footer>
  `;
}

function renderPage() {
  const page = pageById(currentId());
  const pageEl = document.querySelector("#page");
  document.title = `${page.title} - ${content.siteTitle}`;
  pageEl.innerHTML = `
    <div class="breadcrumb">${iconSvg("clipboard")} Reglement ${escapeHtml(content.siteTitle)}</div>
    <h1 class="page-title"><span>${iconSvg(page.icon, "title-icon")}</span>${escapeHtml(page.title)}</h1>
    <p class="page-summary">${escapeHtml(page.summary)}</p>
    ${page.cards ? renderCards() : ""}
    ${renderSections(page)}
    ${renderFooter(page)}
  `;

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.id === page.id);
  });

  document.querySelector(".sidebar").classList.remove("open");
}

function renderSearch(query) {
  const clean = normalize(query.trim());
  const pageEl = document.querySelector("#page");
  if (!clean) {
    renderPage();
    return;
  }

  const results = [];
  for (const page of content.pages) {
    for (const section of page.sections) {
      for (const rule of section.rules) {
        const haystack = normalize(`${page.title} ${section.title} ${rule}`);
        if (haystack.includes(clean)) {
          results.push({ page, section, rule });
        }
      }
    }
  }

  pageEl.innerHTML = `
    <div class="breadcrumb">${iconSvg("search")} Recherche</div>
    <h1 class="page-title"><span>${iconSvg("search", "title-icon")}</span>Resultats</h1>
    <p class="page-summary">${results.length} resultat(s) pour "${escapeHtml(query)}".</p>
    ${results.length ? results.map((result) => `
      <section class="section">
        <h2><span>${iconSvg(result.page.icon)}</span>${escapeHtml(result.page.title)} - ${escapeHtml(result.section.title)}</h2>
        <ul class="rules">
          <li>
            <span class="marker">${iconSvg("shield-check")}</span>
            <span>${escapeHtml(result.rule)}</span>
          </li>
        </ul>
        <div class="callout"><a href="#${escapeHtml(result.page.id)}">Ouvrir cette page</a></div>
      </section>
    `).join("") : '<div class="empty">Aucune regle trouvee. Essaie avec un autre mot.</div>'}
  `;

  document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
}

function bindEvents() {
  const searchInputs = document.querySelectorAll("[data-search-input]");
  const sidebar = document.querySelector(".sidebar");
  const menuButton = document.querySelector("#menuButton");

  searchInputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      searchInputs.forEach((other) => {
        if (other !== input) other.value = event.target.value;
      });
      renderSearch(event.target.value);
    });
  });

  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.querySelector(".top-search input")?.focus();
    }
    if (event.key === "Escape") {
      sidebar.classList.remove("open");
    }
  });

  window.addEventListener("hashchange", () => {
    searchInputs.forEach((input) => {
      input.value = "";
    });
    renderPage();
  });
}

function updateChrome() {
  document.querySelectorAll("[data-site-title]").forEach((item) => {
    item.textContent = content.siteTitle;
  });
  document.querySelectorAll("[data-site-subtitle]").forEach((item) => {
    item.textContent = content.siteSubtitle;
  });
  document.querySelector("[data-discord-link]").href = content.discordUrl;
}

async function fetchContent() {
  const response = await fetch(`./content.json?v=${Date.now()}`, { cache: "no-store" });
  const text = await response.text();
  if (text === lastContentText) return false;
  lastContentText = text;
  content = JSON.parse(text);
  return true;
}

async function refreshContent() {
  const changed = await fetchContent();
  if (!changed) return;

  updateChrome();
  renderNav();
  renderPage();
}

async function init() {
  await fetchContent();
  updateChrome();
  renderNav();
  renderPage();
  bindEvents();
  setInterval(() => {
    refreshContent().catch(() => {});
  }, 5000);
}

init().catch((error) => {
  document.querySelector("#page").innerHTML = `<div class="empty">Impossible de charger le wiki: ${escapeHtml(error.message)}</div>`;
});
