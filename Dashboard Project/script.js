function initApp() {
  let allElems = document.querySelectorAll(".elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let closeButtons = document.querySelectorAll(".close-btn");
  let containerSection = document.querySelector(".container");
  let checkbox = document.querySelector("#checkbox");

  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  // section toggle
  function handleNavigation() {
    allElems.forEach(function (elem) {
      elem.addEventListener("click", function () {
        containerSection.style.display = "none";
        fullElemPage[elem.id].style.display = "flex";
      });
    });

    closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        this.closest(".fullElem").style.display = "none";
        containerSection.style.display = "flex";
      });
    });
  }

  // todo logic
  function renderTasks() {
    let allTask = document.querySelector("#allTask");
    allTask.innerHTML = "";

    let tasks = getTasks();

    tasks.forEach((task, index) => {
      let div = document.createElement("div");
      div.classList.add("task-item");

      let p = document.createElement("p");
      p.textContent = task.text;

      if (task.important) {
        div.classList.add("important");

        let badge = document.createElement("span");
        badge.textContent = "IMPORTANT";
        badge.classList.add("badge");

        div.appendChild(badge);
      }

      if (task.completed) {
        div.classList.add("completed");
      }

      let markBtn = document.createElement("button");
      markBtn.textContent = "Mark as Completed";
      markBtn.classList.add("mark-btn");

      markBtn.addEventListener("click", function () {
        let tasks = getTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
      });

      div.appendChild(p);
      div.appendChild(markBtn);
      allTask.appendChild(div);
    });
  }

  function handleTodo() {
    let taskForm = document.querySelector("#taskForm");

    taskForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let taskInput = document.querySelector("#taskInput");

      if (taskInput.value.trim() === "") return;

      let tasks = getTasks();

      tasks.push({
        text: taskInput.value,
        important: checkbox.checked,
        completed: false,
      });

      saveTasks(tasks);
      renderTasks();

      taskInput.value = "";
      checkbox.checked = false;
    });
  }
  handleNavigation();
  handleTodo();
  renderTasks();
}

function initTheme() {
  const THEMES = [
    "default",
    "dark",
    "light",
    "forest",
    "ocean",
    "rose",
    "sunset",
  ];

  const fabBtn = document.getElementById("themeFabBtn");
  const panel = document.getElementById("themePanel");
  const themeOpts = document.querySelectorAll(".theme-opt");
  const saved = localStorage.getItem("dashTheme") || "default";
  applyTheme(saved);

  fabBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.classList.toggle("open");
  });

  document.addEventListener("click", function () {
    panel.classList.remove("open");
  });

  panel.addEventListener("click", function (e) {
    e.stopPropagation();
  })

  themeOpts.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const theme = this.dataset.theme;
      applyTheme(theme);
      localStorage.setItem("dashTheme", theme);
      panel.classList.remove("open");
    });
  });

  function applyTheme(theme) {
    if (!THEMES.includes(theme)) theme = "default";
    document.documentElement.setAttribute("data-theme", theme);
    
    themeOpts.forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });
  }
}

function initHeader() {
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("headerClock").textContent = `${h}:${m}`;
    document.getElementById("headerSeconds").textContent = s;

    const hour = now.getHours();
    let greeting = "Good Morning";
    if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
    else if (hour >= 17) greeting = "Good Evening";
    document.getElementById("headerGreeting").textContent = greeting;

    const dateStr = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    document.getElementById("headerDate").textContent = dateStr;
  }

  updateClock();
  setInterval(updateClock, 1000);

  const LAT = 22.701;
  const LON = 90.3535;

  const weatherIcons = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    53: "🌦️",
    55: "🌧️",
    61: "🌧️",
    63: "🌧️",
    65: "🌧️",
    71: "🌨️",
    73: "🌨️",
    75: "🌨️",
    80: "🌦️",
    81: "🌧️",
    82: "⛈️",
    95: "⛈️",
    96: "⛈️",
    99: "⛈️",
  };
  const weatherDescs = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Foggy",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    95: "Thunderstorm",
    96: "Thunderstorm",
    99: "Thunderstorm",
  };

  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`,
  )
    .then((res) => res.json())
    .then((data) => {
      const cw = data.current_weather;
      const code = cw.weathercode;

      document.getElementById("weatherTemp").textContent =
        Math.round(cw.temperature) + "°C";
      document.getElementById("weatherIcon").textContent =
        weatherIcons[code] || "🌡️";
      document.getElementById("weatherDesc").textContent =
        weatherDescs[code] || "Unknown";
    })
    .catch((err) => {
      console.error("Weather API error:", err);

      document.getElementById("weatherDesc").textContent = "Unavailable";
    });
}

function initPlanner() {
  const HOURS = Array.from({ length: 24 }, (_, i) => i);
  const timeline = document.getElementById("plannerTimeline");
  const hourSelect = document.getElementById("plannerHour");
  const labelInput = document.getElementById("plannerLabel");
  const addBtn = document.getElementById("plannerAddBtn");
  const colorPicker = document.getElementById("colorPicker");
  const dateLabel = document.getElementById("plannerDateLabel");

  const today = new Date();
  dateLabel.textContent = today.toDateString();

  HOURS.forEach((h) => {
    const opt = document.createElement("option");
    const label =
      h === 0
        ? "12 AM"
        : h < 12
          ? `${h} AM`
          : h === 12
            ? "12 PM"
            : `${h - 12} PM`;
    opt.value = h;
    opt.textContent = label;
    hourSelect.appendChild(opt);
  });

  hourSelect.value = today.getHours();

  let selectedColor = "#e07b54";
  colorPicker.querySelectorAll(".cp-dot").forEach((dot) => {
    dot.addEventListener("click", function () {
      colorPicker
        .querySelectorAll(".cp-dot")
        .forEach((d) => d.classList.remove("active"));
      this.classList.add("active");
      selectedColor = this.dataset.color;
    });
  });

  function getPlannerData() {
    const key = "planner_" + today.toDateString();
    return JSON.parse(localStorage.getItem(key)) || {};
  }

  function savePlannerData(data) {
    const key = "planner_" + today.toDateString();
    localStorage.setItem(key, JSON.stringify(data));
  }

  function renderTimeline() {
    const data = getPlannerData();
    timeline.innerHTML = "";

    HOURS.forEach((h) => {
      const timeStr =
        h === 0
          ? "12 AM"
          : h < 12
            ? `${h} AM`
            : h === 12
              ? "12 PM"
              : `${h - 12} PM`;

      const slot = document.createElement("div");
      slot.classList.add("timeline-slot");

      const timeEl = document.createElement("span");
      timeEl.classList.add("slot-time");
      timeEl.textContent = timeStr;

      const line = document.createElement("div");
      line.classList.add("slot-line");

      slot.appendChild(timeEl);
      slot.appendChild(line);

      if (data[h]) {
        const block = document.createElement("div");
        block.classList.add("slot-block");
        block.style.backgroundColor = data[h].color + "cc";
        block.style.boxShadow = `0 4px 16px ${data[h].color}44`;

        const text = document.createElement("span");
        text.textContent = data[h].label;

        const del = document.createElement("button");
        del.classList.add("slot-delete");
        del.textContent = "×";
        del.addEventListener("click", function () {
          const d = getPlannerData();
          delete d[h];
          savePlannerData(d);
          renderTimeline();
        });

        block.appendChild(text);
        block.appendChild(del);
        slot.appendChild(block);
      } else {
        const empty = document.createElement("div");
        empty.classList.add("slot-empty");
        slot.appendChild(empty);
      }

      timeline.appendChild(slot);
    });

    const currentSlot = timeline.children[today.getHours()];
    if (currentSlot) currentSlot.scrollIntoView({ block: "center" });
  }

  addBtn.addEventListener("click", function () {
    const hour = parseInt(hourSelect.value);
    const label = labelInput.value.trim();
    if (!label) return;

    const data = getPlannerData();
    data[hour] = { label, color: selectedColor };
    savePlannerData(data);
    renderTimeline();

    labelInput.value = "";
  });

  renderTimeline();
}

async function initMotivs() {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const saveBtn = document.getElementById("saveBtn");
  const savedList = document.getElementById("savedList");
  const quoteIndex = document.getElementById("quoteIndex");
  const quoteTotal = document.getElementById("quoteTotal");
  const filterTags = document.querySelectorAll(".filter-tag");

  let quotes = [];
  let currentIndex = 0;

  async function fetchQuotes() {
    const res = await fetch("https://dummyjson.com/quotes?limit=100");
    const data = await res.json();
    quotes = data.quotes;
    quoteTotal.textContent = quotes.length;
    showQuote(0);
  }

  function showQuote(index) {
    const q = quotes[index];
    if (!q) return;
    quoteText.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    setTimeout(() => {
      quoteText.textContent = `"${q.quote}"`;
      quoteAuthor.textContent = `— ${q.author}`;
      quoteIndex.textContent = index + 1;

      quoteText.style.opacity = "1";
      quoteAuthor.style.opacity = "1";
    }, 200);

    const saved = getSaved();
    const alreadySaved = saved.some((s) => s.id === q.id);
    saveBtn.textContent = alreadySaved ? "♥ Saved" : "♡ Save this quote";
    saveBtn.classList.toggle("saved", alreadySaved);
  }

  // --- Navigation ---
  nextBtn.addEventListener("click", function () {
    if (currentIndex < quotes.length - 1) currentIndex++;
    else currentIndex = 0;
    showQuote(currentIndex);
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) currentIndex--;
    else currentIndex = quotes.length - 1;
    showQuote(currentIndex);
  });

  function getSaved() {
    return JSON.parse(localStorage.getItem("savedQuotes")) || [];
  }

  function saveSaved(data) {
    localStorage.setItem("savedQuotes", JSON.stringify(data));
  }

  function renderSaved() {
    const saved = getSaved();
    savedList.innerHTML = "";

    if (saved.length === 0) {
      savedList.innerHTML = `<p class="saved-empty">No saved quotes yet.</p>`;
      return;
    }

    saved.forEach(function (q) {
      const div = document.createElement("div");
      div.classList.add("saved-item");
      div.textContent = `"${q.quote}" — ${q.author}`;
      savedList.appendChild(div);
    });
  }

  saveBtn.addEventListener("click", function () {
    const current = quotes[currentIndex];
    if (!current) return;

    let saved = getSaved();
    const alreadySaved = saved.some((s) => s.id === current.id);
    if (alreadySaved) {
      saved = saved.filter((s) => s.id !== current.id);
      saveBtn.textContent = "♡ Save this quote";
      saveBtn.classList.remove("saved");
    } else {
      saved.push({
        id: current.id,
        quote: current.quote,
        author: current.author,
      });
      saveBtn.textContent = "♥ Saved";
      saveBtn.classList.add("saved");
    }

    saveSaved(saved);
    renderSaved();
  });

  filterTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      filterTags.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      quotes = quotes.sort(() => Math.random() - 0.5);
      currentIndex = 0;
      showQuote(currentIndex);
    });
  });

  quoteText.style.transition = "opacity 0.2s ease";
  quoteAuthor.style.transition = "opacity 0.2s ease";

  await fetchQuotes();
  renderSaved();
}

function pomodoro() {
  const pomodoroSection = document.querySelector(".pomodoro");
  const closeBtn = document.querySelector(".close-btn");

  const tabsContainer = document.querySelector(".pom-tabs");
  const allTabs = document.querySelectorAll(".pom-tab");

  const ringProgress = document.querySelector(".pom-ring-progress");
  const timerDisplay = document.getElementById("pom-display");
  const ringLabel = document.querySelector(".pom-ring-label");

  const playBtn = document.getElementById("pom-play-btn");
  const restartBtn = document.querySelector('[title="Restart"]');
  const skipBtn = document.querySelector('[title="Skip"]');

  const allDots = document.querySelectorAll(".pom-dot");

  const statSessions = document.getElementById("stat-sessions");
  const statFocus = document.getElementById("stat-focus");
  const statBreaks = document.getElementById("stat-breaks");

  const allSettingVals = document.querySelectorAll(".pom-setting-val");
  const MODES = {
    Focus: 25 * 60,
    "Short Break": 5 * 60,
    "Long Break": 15 * 60,
  };

  let currentMode = "Focus";
  let totalSeconds = MODES[currentMode];
  let secondsLeft = totalSeconds;
  let intervalId = null;
  let sessionCount = 0;
  let breakCount = 0;
  let focusMinutes = 0;
  let currentDot = 0;
  const TOTAL_DOTS = allDots.length;
  const RING_FULL = 565;

  function formatTime(secs) {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function updateRing() {
    const offset = RING_FULL - (RING_FULL * secondsLeft) / totalSeconds;
    ringProgress.style.strokeDashoffset = offset;
  }

  function updateDisplay() {
    timerDisplay.textContent = formatTime(secondsLeft);
  }

  function updateDots() {
    allDots.forEach((dot, idx) => {
      dot.classList.remove("done", "current");
      if (idx < currentDot) dot.classList.add("done");
      if (idx === currentDot) dot.classList.add("current");
    });
  }

  function updateStats() {
    statSessions.textContent = sessionCount;
    statFocus.textContent = focusMinutes + " min";
    statBreaks.textContent = breakCount;
  }

  function switchMode(modeName) {
    currentMode = modeName;
    totalSeconds = MODES[modeName];
    secondsLeft = totalSeconds;
    updateDisplay();
    updateRing();

    allTabs.forEach((t) =>
      t.classList.toggle("active", t.textContent.trim() === modeName),
    );
  }

  function onFocusComplete() {
    sessionCount++;
    focusMinutes += MODES["Focus"] / 60;
    updateStats();

    if (currentDot < TOTAL_DOTS - 1) currentDot++;
    updateDots();

    if (sessionCount % 4 === 0) switchMode("Long Break");
    else switchMode("Short Break");
  }

  function onBreakComplete() {
    breakCount++;
    updateStats();
    if (currentDot === TOTAL_DOTS - 1) currentDot = 0;
    updateDots();
    switchMode("Focus");
  }

  function startTimer() {
    if (intervalId) return;
    playBtn.classList.add("playing");
    intervalId = setInterval(() => {
      secondsLeft--;
      updateDisplay();
      updateRing();

      if (secondsLeft <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        playBtn.classList.remove("playing");

        if (currentMode === "Focus") onFocusComplete();
        else onBreakComplete();
      }
    }, 1000);
  }
  function pauseTimer() {
    playBtn.classList.remove("playing");
    clearInterval(intervalId);
    intervalId = null;
  }
  function resetTimer() {
    playBtn.classList.remove("playing");
    clearInterval(intervalId);
    intervalId = null;
    secondsLeft = totalSeconds;
    updateDisplay();
    updateRing();
  }
  function skipSession() {
    pauseTimer();
    if (currentMode === "Focus") onFocusComplete();
    else onBreakComplete();
  }

  allTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      allTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
      pauseTimer();
      switchMode(this.textContent.trim());
    });
  });

  playBtn.addEventListener("click", function () {
    if (this.classList.contains("playing")) {
      pauseTimer();
    } else {
      startTimer();
    }
  });

  restartBtn.addEventListener("click", function () {
    resetTimer();
  });

  skipBtn.addEventListener("click", function () {
    skipSession();
  });
}

initTheme();
initHeader();
initApp();
initPlanner();
initMotivs();
pomodoro();
