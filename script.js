const state = {
  data: null,
  topChart: null,
  trendChart: null,
  activeSource: null
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function renderCards(cards) {
  const container = document.getElementById("trending-cards");
  container.innerHTML = "";
  cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="trend">${card.signal}</div>
      <h3>${card.name}</h3>
      <p class="muted">${card.desc}</p>
      <p>${card.why}</p>
    `;
    container.appendChild(div);
  });
}

function renderLists(lists) {
  const trending = document.getElementById("trending-list");
  const established = document.getElementById("established-list");
  trending.innerHTML = "";
  established.innerHTML = "";
  lists.trending.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    trending.appendChild(li);
  });
  lists.established.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    established.appendChild(li);
  });
}

function createChart(ctx, label, data) {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map(d => d.name),
      datasets: [{
        label,
        data: data.map(d => d.value),
        backgroundColor: "#0ea5a0",
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#5b6674" }, grid: { color: "#e9eef3" } },
        y: { ticks: { color: "#5b6674" }, grid: { display: false } }
      }
    }
  });
}

function updateCharts(sourceName) {
  const source = state.data.sources[sourceName];
  const topData = source.top;
  const trendData = source.trending;

  if (state.topChart) state.topChart.destroy();
  if (state.trendChart) state.trendChart.destroy();

  const topCtx = document.getElementById("topChart");
  const trendCtx = document.getElementById("trendChart");

  state.topChart = createChart(topCtx, "Top MCPs", topData);
  state.trendChart = createChart(trendCtx, "Trending MCPs", trendData);
}

function renderSources(sourceNames) {
  const list = document.getElementById("source-list");
  list.innerHTML = "";
  sourceNames.forEach(name => {
    const source = state.data.sources[name];
    const btn = document.createElement("button");
    btn.className = "source-chip";
    btn.innerHTML = `
      <span class="source-icon"><img src="${source.logo}" alt="${name} logo"></span>
      <span>${name}</span>
    `;
    btn.onclick = () => {
      document.querySelectorAll(".source-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateCharts(name);
    };
    list.appendChild(btn);
  });
  list.firstChild.classList.add("active");
}

function setupReadMore() {
  const button = document.getElementById("toggle-news");
  const more = document.getElementById("news-more");
  more.style.display = "none";
  button.addEventListener("click", () => {
    const hidden = more.style.display === "none";
    more.style.display = hidden ? "block" : "none";
    button.textContent = hidden ? "Read less" : "Read more";
  });
}

fetch("assets/data.json")
  .then(res => res.json())
  .then(data => {
    state.data = data;
    setText("metric-tracked", data.meta.tracked);
    setText("metric-new", data.meta.new);
    setText("metric-active", data.meta.active);
    setText("metric-registries", data.meta.registries);

    renderCards(data.trending_cards);
    renderLists(data.lists);

    const sources = Object.keys(data.sources);
    renderSources(sources);
    updateCharts(sources[0]);
    setupReadMore();
  });
