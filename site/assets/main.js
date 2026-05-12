const STORAGE_KEY = "portfolio_theme";

function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = theme === "dark" ? "라이트" : "다크";
}

async function loadProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  try {
    const res = await fetch("./data/projects.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const projects = await res.json();
    grid.replaceChildren(...projects.map(renderProjectCard));
  } catch {
    grid.innerHTML =
      '<div class="card"><p class="muted">프로젝트 데이터를 불러오지 못했습니다. <code>site/data/projects.json</code>를 확인해 주세요.</p></div>';
  }
}

function renderProjectCard(p) {
  const card = document.createElement("article");
  card.className = "card project";

  const title = document.createElement("h3");
  title.className = "project__title";
  title.textContent = p.title ?? "Untitled";

  const desc = document.createElement("p");
  desc.className = "project__desc";
  desc.textContent = p.description ?? "";

  const meta = document.createElement("div");
  meta.className = "project__meta";

  const tags = Array.isArray(p.tags) ? p.tags : [];
  for (const t of tags.slice(0, 6)) {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = t;
    meta.appendChild(pill);
  }

  const links = document.createElement("div");
  links.className = "project__meta";

  if (p.links?.demo) links.appendChild(linkPill("Demo", p.links.demo));
  if (p.links?.repo) links.appendChild(linkPill("Repo", p.links.repo));
  if (p.links?.caseStudy) links.appendChild(linkPill("Case", p.links.caseStudy));

  card.appendChild(title);
  if (p.period) {
    const period = document.createElement("div");
    period.className = "pill";
    period.textContent = p.period;
    card.appendChild(period);
  }
  card.appendChild(desc);
  card.appendChild(meta);
  if (links.childNodes.length) card.appendChild(links);

  return card;
}

function linkPill(label, href) {
  const a = document.createElement("a");
  a.className = "pill";
  a.href = href;
  a.target = "_blank";
  a.rel = "noreferrer";
  a.textContent = label;
  return a;
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function wireThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });
}

setTheme(getPreferredTheme());
wireThemeToggle();
setYear();
loadProjects();

