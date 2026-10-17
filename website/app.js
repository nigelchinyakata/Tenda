// TENDA Buses — prototype behaviour.
// All routes, times and fares below are PLACEHOLDERS (see docs/tenda-brand-research.md §6).
// Replace with TENDA-confirmed data or a booking API before launch.

const CITIES = ["Harare", "Mutare", "Marondera", "Rusape", "Bulawayo", "Gweru", "Beitbridge", "Johannesburg"];

// fare: null means "to be confirmed"; Harare–Mutare uses the ~US$10 reported by third parties.
const ROUTES = [
  { from: "Harare", to: "Mutare", hours: 3.5, fare: 10, tag: "Flagship route" },
  { from: "Mutare", to: "Bulawayo", hours: 8, fare: null, tag: "Daily" },
  { from: "Harare", to: "Beitbridge", hours: 8, fare: null, tag: "Daily" },
  { from: "Mutare", to: "Gweru", hours: 6, fare: null, tag: "Daily" },
  { from: "Harare", to: "Johannesburg", hours: 16, fare: null, tag: "Cross-border" },
  { from: "Marondera", to: "Mutare", hours: 2.5, fare: null, tag: "Via Christmas Pass" },
];

const SAMPLE_DEPARTURES = ["06:00", "08:00", "10:00", "12:00", "14:00"];

const $ = (sel) => document.querySelector(sel);

function fillCities() {
  const opts = CITIES.map((c) => `<option>${c}</option>`).join("");
  $("#from").innerHTML = opts;
  $("#to").innerHTML = opts;
  $("#from").value = "Harare";
  $("#to").value = "Mutare";
}

function isoDate(d) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function findRoute(from, to) {
  return ROUTES.find((r) => (r.from === from && r.to === to) || (r.from === to && r.to === from));
}

function fmtDuration(hours) {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return m ? `${h}h ${String(m).padStart(2, "0")}m` : `${h}h`;
}

function addHours(time, hours) {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + Math.round(hours * 60);
  const plusDay = total >= 24 * 60 ? " +1" : "";
  const t = total % (24 * 60);
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}${plusDay}`;
}

function renderDepartures() {
  const from = $("#from").value;
  const to = $("#to").value;
  const pax = Math.max(1, Number($("#pax").value) || 1);
  const route = findRoute(from, to) || { hours: 4, fare: null };
  $("#resultsTitle").textContent = `${from} → ${to}`;

  if (from === to) {
    $("#departureList").innerHTML = `<li class="dep"><p>Choose two different towns to see departures.</p></li>`;
    return;
  }

  $("#departureList").innerHTML = SAMPLE_DEPARTURES.map((t, i) => {
    const badges = [];
    if (i === 0) badges.push(`<span class="badge badge--gold">Express</span>`);
    if (i === 2) badges.push(`<span class="badge badge--red">Few seats left</span>`);
    badges.push(`<span class="badge">70-seat coach</span>`, `<span class="badge">WiFi</span>`);
    const price = route.fare
      ? `US$${route.fare * pax}<small>${pax > 1 ? `${pax} passengers` : "per seat"}</small>`
      : `Fare TBC<small>confirm with desk</small>`;
    return `
      <li class="dep">
        <div class="dep__times">
          <div><div class="dep__time">${t}</div><div class="dep__place">${from}</div></div>
          <div class="dep__line"><span class="dep__dur">${fmtDuration(route.hours)}</span></div>
          <div><div class="dep__time">${addHours(t, route.hours)}</div><div class="dep__place">${to}</div></div>
        </div>
        <div class="dep__meta">${badges.join("")}</div>
        <div class="dep__buy">
          <div class="dep__price">${price}</div>
          <button class="btn btn--gold" type="button">Select</button>
        </div>
      </li>`;
  }).join("");
}

function renderDateStrip() {
  const strip = $("#datestrip");
  const start = new Date();
  const selected = $("#date").value;
  strip.innerHTML = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const iso = isoDate(d);
    const day = i === 0 ? "Today" : d.toLocaleDateString("en-GB", { weekday: "short" });
    const date = d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    return `<button type="button" role="tab" class="datechip${iso === selected ? " is-active" : ""}" data-date="${iso}" aria-selected="${iso === selected}">${day}<strong>${date}</strong></button>`;
  }).join("");
}

// Small mountain-and-road illustration reused on every route card (the "Pass line" motif).
function routeArt(seed) {
  const peak = 30 + (seed * 13) % 25;
  return `<svg viewBox="0 0 300 88" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 70 L60 ${peak + 10} L120 60 L190 ${peak} L250 55 L300 40 V88 H0Z" fill="#1E4C8F"/>
    <path d="M0 80 L80 62 L170 76 L240 60 L300 70 V88 H0Z" fill="#163A73"/>
    <path d="M0 86 C 90 80, 150 66, 300 30" stroke="#F2B233" stroke-width="3" fill="none" stroke-dasharray="2 9" stroke-linecap="round"/>
  </svg>`;
}

function renderRoutes() {
  $("#routeGrid").innerHTML = ROUTES.map((r, i) => `
    <a class="route" href="#book" data-from="${r.from}" data-to="${r.to}">
      <div class="route__art">${routeArt(i)}</div>
      <span class="badge${i === 0 ? " badge--gold" : ""}">${r.tag}</span>
      <div class="route__name">${r.from} <span>→</span> ${r.to}</div>
      <div class="route__foot">
        <span>≈ ${fmtDuration(r.hours)}</span>
        <span class="route__from">${r.fare ? `from <strong>US$${r.fare}</strong>` : "Fare TBC"}</span>
      </div>
    </a>`).join("");
}

function init() {
  fillCities();
  const today = new Date();
  $("#date").value = isoDate(today);
  $("#date").min = isoDate(today);
  $("#returnDate").min = isoDate(today);
  $("#year").textContent = today.getFullYear();

  renderRoutes();
  renderDateStrip();
  renderDepartures();

  $("#swap").addEventListener("click", () => {
    const f = $("#from").value;
    $("#from").value = $("#to").value;
    $("#to").value = f;
  });

  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("is-active", t === tab);
      t.setAttribute("aria-selected", String(t === tab));
    });
    const isReturn = tab.dataset.trip === "return";
    $(".field--return").hidden = !isReturn;
    $("#returnDate").required = isReturn;
  }));

  $("#search").addEventListener("submit", (e) => {
    e.preventDefault();
    renderDateStrip();
    renderDepartures();
    $("#departures").scrollIntoView({ behavior: "smooth" });
  });

  $("#datestrip").addEventListener("click", (e) => {
    const chip = e.target.closest(".datechip");
    if (!chip) return;
    $("#date").value = chip.dataset.date;
    renderDateStrip();
    renderDepartures();
  });

  $("#routeGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".route");
    if (!card) return;
    $("#from").value = card.dataset.from;
    $("#to").value = card.dataset.to;
    renderDepartures();
  });
}

document.addEventListener("DOMContentLoaded", init);
