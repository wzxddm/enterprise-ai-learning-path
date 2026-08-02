(() => {
  "use strict";

  const DATA = window.LEARNING_DATA;
  const STORAGE_KEY = "enterprise-ai-learning-platform:v1";
  const state = loadState();

  const view = document.querySelector("#view");
  const stageNav = document.querySelector("#stage-nav");
  const sidebar = document.querySelector("#sidebar");
  const sidebarOverlay = document.querySelector("#sidebar-overlay");
  const modal = document.querySelector("#checkin-modal");
  const checkinForm = document.querySelector("#checkin-form");
  const importFile = document.querySelector("#import-file");
  const toast = document.querySelector("#toast");
  let toastTimer;

  function defaultState() {
    return {
      version: 1,
      tasks: {},
      sessions: [],
      quiz: { answers: {}, submitted: false, score: null },
      articles: {},
      startedAt: localDate(new Date())
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || typeof saved !== "object") return defaultState();
      return {
        ...defaultState(),
        ...saved,
        tasks: saved.tasks || {},
        sessions: Array.isArray(saved.sessions) ? saved.sessions : [],
        quiz: { ...defaultState().quiz, ...(saved.quiz || {}) },
        articles: saved.articles || {}
      };
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateChrome();
  }

  function localDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function parseDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function addDays(date, amount) {
    const next = new Date(date);
    next.setDate(next.getDate() + amount);
    return next;
  }

  function formatDate(value, withYear = false) {
    const date = typeof value === "string" ? parseDate(value) : value;
    return new Intl.DateTimeFormat("zh-CN", {
      month: "short",
      day: "numeric",
      weekday: "short",
      ...(withYear ? { year: "numeric" } : {})
    }).format(date);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function allTasks() {
    return DATA.stages.flatMap((stage) => stage.tasks);
  }

  function stageProgress(stage) {
    const completed = stage.tasks.filter((task) => state.tasks[task.id]).length;
    return {
      completed,
      total: stage.tasks.length,
      percent: stage.tasks.length ? Math.round((completed / stage.tasks.length) * 100) : 0
    };
  }

  function overallProgress() {
    const tasks = allTasks();
    const completed = tasks.filter((task) => state.tasks[task.id]).length;
    return {
      completed,
      total: tasks.length,
      percent: tasks.length ? Math.round((completed / tasks.length) * 100) : 0
    };
  }

  function currentStage() {
    return DATA.stages.find((stage) => stageProgress(stage).percent < 100) || DATA.stages.at(-1);
  }

  function nextTasks(limit = 3) {
    const current = currentStage();
    const pending = current.tasks.filter((task) => !state.tasks[task.id]);
    if (pending.length >= limit) return pending.slice(0, limit);
    const currentIndex = DATA.stages.findIndex((stage) => stage.id === current.id);
    const later = DATA.stages.slice(currentIndex + 1).flatMap((stage) => stage.tasks).filter((task) => !state.tasks[task.id]);
    return [...pending, ...later].slice(0, limit);
  }

  function totalHours() {
    return state.sessions.reduce((sum, session) => sum + Number(session.hours || 0), 0);
  }

  function completedEstimateHours() {
    return allTasks().filter((task) => state.tasks[task.id]).reduce((sum, task) => sum + task.minutes, 0) / 60;
  }

  function sessionDays() {
    return [...new Set(state.sessions.map((session) => session.date))].sort();
  }

  function streak() {
    const days = new Set(sessionDays());
    if (!days.size) return 0;
    const today = new Date();
    const todayKey = localDate(today);
    const yesterdayKey = localDate(addDays(today, -1));
    let cursor;
    if (days.has(todayKey)) cursor = today;
    else if (days.has(yesterdayKey)) cursor = addDays(today, -1);
    else return 0;

    let count = 0;
    while (days.has(localDate(cursor))) {
      count += 1;
      cursor = addDays(cursor, -1);
    }
    return count;
  }

  function toneClass(stage) {
    return `tone-${stage.tone}`;
  }

  function minutesLabel(minutes) {
    if (minutes < 60) return `${minutes} 分钟`;
    const hours = minutes / 60;
    return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} 小时`;
  }

  function routeFromHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) return { name: "dashboard" };
    const [name, id] = raw.split("/");
    if (name === "stage" && DATA.stages.some((stage) => stage.id === id)) return { name, id };
    if (name === "workbook" && DATA.workbooks?.[id]) return { name, id };
    if (["dashboard", "resources", "practice", "projects", "writing", "progress"].includes(name)) return { name };
    return { name: "dashboard" };
  }

  function go(route) {
    const next = route.startsWith("stage/") ? `#/${route}` : `#/${route}`;
    if (location.hash === next) render();
    else location.hash = next;
    closeSidebar();
  }

  function breadcrumb(route) {
    const names = {
      dashboard: "学习总览",
      resources: "中文资料",
      workbook: "阶段学习单",
      practice: "习题测验",
      projects: "项目实战",
      writing: "知乎专栏",
      progress: "学习记录"
    };
    if (route.name === "stage") {
      const stage = DATA.stages.find((item) => item.id === route.id);
      return `学习路径 / ${stage.number} ${stage.shortTitle}`;
    }
    if (route.name === "workbook") return "学习路径 / 第一阶段 / 可执行学习单";
    return names[route.name] || names.dashboard;
  }

  function updateChrome() {
    const overall = overallProgress();
    document.querySelector("#sidebar-progress-text").textContent = `${overall.percent}%`;
    document.querySelector("#sidebar-progress-bar").style.width = `${overall.percent}%`;
    document.querySelector("#top-streak").textContent = streak();
    renderStageNav();
  }

  function renderStageNav() {
    const route = routeFromHash();
    stageNav.innerHTML = DATA.stages.map((stage) => {
      const progress = stageProgress(stage);
      return `
        <button class="stage-nav-item ${route.name === "stage" && route.id === stage.id ? "active" : ""}" type="button" data-route="stage/${stage.id}">
          <span class="stage-number">${stage.number}</span>
          <span>${escapeHTML(stage.shortTitle)}</span>
          <span class="stage-nav-progress"><span style="width:${progress.percent}%"></span></span>
        </button>`;
    }).join("");
  }

  function render() {
    const route = routeFromHash();
    document.querySelector("#breadcrumbs").textContent = breadcrumb(route);
    document.querySelectorAll(".primary-nav .nav-item").forEach((item) => {
      item.classList.toggle("active", item.dataset.route.split("/")[0] === route.name);
    });

    if (route.name === "stage") renderStage(route.id);
    else if (route.name === "workbook") renderWorkbook(route.id);
    else if (route.name === "resources") renderResources();
    else if (route.name === "practice") renderPractice();
    else if (route.name === "projects") renderProjects();
    else if (route.name === "writing") renderWriting();
    else if (route.name === "progress") renderProgress();
    else renderDashboard();

    updateChrome();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function renderDashboard() {
    const overall = overallProgress();
    const current = currentStage();
    const currentProgress = stageProgress(current);
    const next = nextTasks();
    const sessions = [...state.sessions].reverse().slice(0, 4);
    const today = new Date();

    view.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow">${escapeHTML(formatDate(today, true).toUpperCase())}</div>
          <h1>把模型能力，变成<br />可验证的业务价值。</h1>
          <p>一条面向程序员的企业 AI 成长路径。每个阶段都回答：技术在生产的哪一层、能解决什么问题、当前瓶颈是什么，以及如何通过项目和评测获得上线证据。</p>
          <div class="hero-actions">
            <button class="button button-primary" type="button" data-route="stage/${current.id}">继续当前阶段 <span>→</span></button>
            <button class="button" type="button" data-route="practice">开始阶段测验</button>
          </div>
        </div>
        <div class="hero-side">
          <div class="hero-progress-ring" style="--ring-progress:${overall.percent}%">
            <div class="ring-label"><strong>${overall.percent}%</strong><span>OVERALL</span></div>
          </div>
          <p>${overall.completed} / ${overall.total} 个任务已完成</p>
        </div>
      </section>

      <section class="metrics-grid" aria-label="学习指标">
        <div class="metric-card"><span>当前阶段</span><strong>${current.number}</strong><small>${escapeHTML(current.shortTitle)}</small></div>
        <div class="metric-card"><span>连续学习</span><strong>${streak()} 天</strong><small>保持小步、持续产出</small></div>
        <div class="metric-card"><span>实际学习</span><strong>${totalHours().toFixed(1)}h</strong><small>打卡记录时长</small></div>
        <div class="metric-card"><span>完成工作量</span><strong>${completedEstimateHours().toFixed(1)}h</strong><small>按任务预估</small></div>
      </section>

      <section class="section">
        <div class="section-head"><h2>继续学习</h2><p>${current.weeks} · ${current.duration}</p></div>
        <div class="continue-card card ${toneClass(current)}">
          <div class="continue-number">${current.number}</div>
          <div class="continue-content">
            <h3>${escapeHTML(current.title)}</h3>
            <p>${escapeHTML(next[0]?.title || "本阶段任务已经全部完成")}</p>
            <div class="progress-track"><span style="width:${currentProgress.percent}%"></span></div>
          </div>
          <button class="button compact" type="button" data-route="stage/${current.id}">${currentProgress.percent === 100 ? "查看阶段" : "继续"} →</button>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>20 周学习路径</h2><a href="#/progress">查看完整进度</a></div>
        <div class="stage-map">
          ${DATA.stages.map((stage) => {
            const progress = stageProgress(stage);
            return `
              <button class="stage-card ${stage.id === current.id ? "current" : ""} ${toneClass(stage)}" type="button" data-route="stage/${stage.id}">
                <div class="stage-card-top"><span class="stage-card-number">STAGE ${stage.number}</span><span class="stage-card-symbol">${stage.symbol}</span></div>
                <h3>${escapeHTML(stage.shortTitle)}</h3>
                <p>${escapeHTML(stage.weeks)}</p>
                <div class="progress-track"><span style="width:${progress.percent}%"></span></div>
              </button>`;
          }).join("")}
        </div>
      </section>

      <section class="section two-column">
        <div class="card">
          <div class="section-head"><h2>今天建议完成</h2><p>优先完成可验证产出</p></div>
          <div class="today-list">
            ${next.length ? next.map((task, index) => `
              <div class="today-item">
                <span class="today-index">0${index + 1}</span>
                <div><strong>${escapeHTML(task.title)}</strong><small>${escapeHTML(task.type)} · ${minutesLabel(task.minutes)}</small></div>
              </div>`).join("") : `<div class="empty-state">所有任务已完成，去整理最终作品集吧。</div>`}
          </div>
        </div>
        <div class="card">
          <div class="section-head"><h2>最近打卡</h2><a href="#/progress">全部记录</a></div>
          <div class="activity-list">
            ${sessions.length ? sessions.map((session) => `
              <div class="activity-item">
                <span class="activity-dot"></span>
                <div><strong>${escapeHTML(session.note)}</strong><small>${formatDate(session.date)} · ${Number(session.hours).toFixed(1)} 小时</small></div>
              </div>`).join("") : `<div class="empty-state">今天完成第一次打卡，连续学习从 1 开始。</div>`}
          </div>
        </div>
      </section>`;
  }

  function renderStage(stageId) {
    const stage = DATA.stages.find((item) => item.id === stageId);
    const progress = stageProgress(stage);
    const productionCards = [
      ["PRODUCTION LAYER", "生产位置", stage.production.position],
      ["BUSINESS VALUE", "解决问题", stage.production.solves],
      ["STATE OF PLAY", "当前现状", stage.production.status],
      ["NEXT 2–3 YEARS", "未来方向", stage.production.future]
    ];

    view.innerHTML = `
      <section class="stage-hero ${toneClass(stage)}" data-symbol="${stage.symbol}">
        <div class="stage-hero-content">
          <div class="eyebrow">STAGE ${stage.number} · ${escapeHTML(stage.weeks)}</div>
          <h1>${escapeHTML(stage.title)}</h1>
          <p>${escapeHTML(stage.description)}</p>
          <div class="stage-meta"><span class="tag">${escapeHTML(stage.duration)}</span><span class="tag">产出：${escapeHTML(stage.outcome)}</span></div>
          ${DATA.workbooks?.[stage.id] ? `<div class="stage-workbook-action"><button class="button button-primary" type="button" data-route="workbook/${stage.id}">打开可执行学习单 <span>→</span></button><small>含指定章节、练习数据、参考答案和验收标准</small></div>` : ""}
          <div class="stage-progress-row"><div class="progress-track"><span style="width:${progress.percent}%"></span></div><strong>${progress.percent}%</strong></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>生产视角</h2><p>每项技术都用同一框架审视</p></div>
        <div class="production-grid ${toneClass(stage)}">
          ${productionCards.map(([eyebrow, title, content]) => `
            <article class="production-card"><span>${eyebrow}</span><h3>${title}</h3><p>${escapeHTML(content)}</p></article>`).join("")}
        </div>
      </section>

      <section class="section two-column">
        <div class="card">
          <div class="section-head"><h2>阶段任务</h2><p>${progress.completed} / ${progress.total} 已完成</p></div>
          <div class="task-list">
            ${stage.tasks.map((task) => taskHTML(task)).join("")}
          </div>
        </div>
        <div>
          <div class="card">
            <div class="section-head"><h2>核心概念</h2><p>${stage.concepts.length} 项</p></div>
            <div class="concept-cloud">${stage.concepts.map((concept) => `<span class="concept-chip">${escapeHTML(concept)}</span>`).join("")}</div>
          </div>
          <div class="card" style="margin-top:16px">
            <div class="section-head"><h2>本阶段中文资料</h2><a href="#/resources">查看完整资料库</a></div>
            <div class="stage-resource-list">
              ${stage.resources.map((resource) => resourceCardHTML(resource, true)).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section project-highlight ${toneClass(stage)}">
        <div class="eyebrow">STAGE PROJECT</div>
        <h3>${escapeHTML(stage.project.title)}</h3>
        <p>${escapeHTML(stage.project.brief)}</p>
        <div class="metrics-list">${stage.project.metrics.map((metric) => `<span>${escapeHTML(metric)}</span>`).join("")}</div>
      </section>`;
  }

  function resourceCardHTML(resource, compact = false) {
    return `
      <article class="learning-resource-card ${compact ? "compact" : ""}">
        <div class="resource-order"><span>第 ${resource.order} 步</span><small>${escapeHTML(resource.level)}</small></div>
        <div class="resource-card-main">
          <div class="resource-card-meta"><span>${escapeHTML(resource.type)}</span><span>全中文</span></div>
          <h3>${escapeHTML(resource.title)}</h3>
          <div class="resource-guidance">
            <p class="resource-focus"><strong>学什么</strong>${escapeHTML(resource.focus)}</p>
            <p class="resource-output"><strong>学完做什么</strong>${escapeHTML(resource.output)}</p>
          </div>
          <a class="resource-link" href="${escapeHTML(resource.url)}" target="_blank" rel="noreferrer">打开中文资料 <span>↗</span></a>
        </div>
      </article>`;
  }

  function renderResources() {
    const resourceCount = DATA.stages.reduce((sum, stage) => sum + stage.resources.length, 0);
    view.innerHTML = `
      <div class="page-head">
        <div><div class="eyebrow">CHINESE LEARNING LIBRARY</div><h1>中文资料 · 按阶段学习</h1><p>这里不做资料堆砌。${resourceCount} 份资料全部为中文，并固定到所属阶段；严格按“第 1 步 → 第 2 步 → 实战”推进，不需要提前学习后续内容。</p></div>
      </div>
      <section class="resource-principles card">
        <div><strong>01</strong><span>先看“学什么”</span><p>只读指定章节，不从头刷完整网站。</p></div>
        <div><strong>02</strong><span>按顺序完成</span><p>视频建直觉，教程补原理，数据与项目验证。</p></div>
        <div><strong>03</strong><span>用产出验收</span><p>看完不算完成，必须交付代码、数据或报告。</p></div>
      </section>
      <div class="resource-library">
        ${DATA.stages.map((stage) => `
          <section class="resource-stage-section ${toneClass(stage)}">
            <div class="resource-stage-head">
              <div class="resource-stage-number">${stage.number}</div>
              <div><div class="eyebrow">${escapeHTML(stage.weeks)} · ${escapeHTML(stage.duration)}</div><h2>${escapeHTML(stage.title)}</h2><p>阶段产出：${escapeHTML(stage.outcome)}</p></div>
              <button class="button compact" type="button" data-route="stage/${stage.id}">进入阶段 →</button>
            </div>
            <div class="resource-card-grid">
              ${stage.resources.map((resource) => resourceCardHTML(resource)).join("")}
            </div>
          </section>`).join("")}
      </div>`;
  }

  function renderWorkbook(stageId) {
    const workbook = DATA.workbooks[stageId];
    const stage = DATA.stages.find((item) => item.id === stageId);
    view.innerHTML = `
      <section class="workbook-hero ${toneClass(stage)}">
        <div class="eyebrow">STAGE ${stage.number} · GUIDED WORKBOOK</div>
        <h1>${escapeHTML(workbook.title)}</h1>
        <p>${escapeHTML(workbook.subtitle)}</p>
        <div class="workbook-notice"><span>使用方法</span>${escapeHTML(workbook.notice)}</div>
      </section>

      <section class="workbook-flow" aria-label="学习单流程">
        ${workbook.units.map((unit) => `<div><strong>${unit.number}</strong><span>${escapeHTML(unit.title)}</span><small>${escapeHTML(unit.time)}</small></div>`).join("")}
      </section>

      <div class="workbook-units">
        ${workbook.units.map((unit) => `
          <article class="workbook-unit ${toneClass(stage)}">
            <header class="workbook-unit-head">
              <div class="workbook-unit-number">${unit.number}</div>
              <div><div class="eyebrow">LEARNING UNIT · ${escapeHTML(unit.time)}</div><h2>${escapeHTML(unit.title)}</h2><p>${escapeHTML(unit.goal)}</p></div>
            </header>

            <div class="workbook-grid">
              <section class="workbook-block">
                <h3>带着问题学习</h3>
                <ol>${unit.questions.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ol>
              </section>
              <section class="workbook-block source-block">
                <h3>只看这些中文内容</h3>
                <div class="unit-sources">${unit.sources.map((source, index) => `
                  <a href="${escapeHTML(source.url)}" target="_blank" rel="noreferrer"><span>资料 ${index + 1}</span><strong>${escapeHTML(source.title)}</strong><small>${escapeHTML(source.scope)}</small></a>`).join("")}
                </div>
              </section>
            </div>

            <section class="workbook-block task-block">
              <h3>看完马上做</h3>
              <ol>${unit.steps.map((step) => `<li><span>${escapeHTML(step)}</span></li>`).join("")}</ol>
              ${unit.files?.length ? `<div class="workbook-files">${unit.files.map((file) => `<a href="${escapeHTML(file.url)}" target="_blank" rel="noreferrer">${escapeHTML(file.title)} <span>↓</span></a>`).join("")}</div>` : ""}
            </section>

            <section class="workbook-deliverables">
              <div><span>必须提交</span>${unit.deliverables.map((item) => `<strong>${escapeHTML(item)}</strong>`).join("")}</div>
              <div><span>通过标准</span>${unit.acceptance.map((item) => `<strong>✓ ${escapeHTML(item)}</strong>`).join("")}</div>
            </section>

            <details class="answer-panel">
              <summary><span>先独立完成，再看${escapeHTML(unit.answer.label)}</span><small>展开参考答案 ↓</small></summary>
              <div class="answer-content">
                <p>参考答案不是唯一业务结论，重点检查你的判断链是否完整：</p>
                <ul>${unit.answer.points.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
                ${unit.answer.files?.length ? `<div class="answer-files">${unit.answer.files.map((file) => `<a href="${escapeHTML(file.url)}" target="_blank" rel="noreferrer">${escapeHTML(file.title)} <span>→</span></a>`).join("")}</div>` : ""}
              </div>
            </details>
          </article>`).join("")}
      </div>

      <section class="section workbook-next card">
        <div><div class="eyebrow">AFTER ALL FOUR UNITS</div><h2>完成以后再参加阶段测验</h2><p>测验检查生产边界判断；35 道完整题的参考答案和 Go 代码已经放入学习单。</p></div>
        <button class="button button-primary" type="button" data-route="practice">开始第一阶段测验 →</button>
      </section>`;
  }

  function taskHTML(task) {
    const completed = Boolean(state.tasks[task.id]);
    return `
      <div class="task-item ${completed ? "completed" : ""}">
        <label class="task-check ${completed ? "checked" : ""}" title="标记任务完成">
          <input class="task-toggle" type="checkbox" data-task-id="${task.id}" ${completed ? "checked" : ""} />
          <span>✓</span>
        </label>
        <div class="task-main"><h4>${escapeHTML(task.title)}</h4><p>${escapeHTML(task.detail)}</p></div>
        <div class="task-meta"><span class="type-tag">${escapeHTML(task.type)}</span><span class="task-time">${minutesLabel(task.minutes)}</span></div>
      </div>`;
  }

  function renderPractice() {
    const quiz = DATA.quiz;
    const submitted = state.quiz.submitted;
    const answers = state.quiz.answers;
    const answeredCount = Object.keys(answers).length;

    view.innerHTML = `
      <div class="page-head">
        <div><div class="eyebrow">KNOWLEDGE CHECK</div><h1>${escapeHTML(quiz.title)}</h1><p>测的不是 API 记忆，而是进入生产环境前最重要的边界判断。答完全部题目后提交，80 分通过。</p></div>
        ${submitted ? `<button class="button" type="button" data-action="reset-quiz">重新作答</button>` : ""}
      </div>
      <div class="quiz-layout">
        <div class="quiz-options">
          ${quiz.questions.map((item, index) => quizQuestionHTML(item, index, submitted)).join("")}
        </div>
        <aside class="quiz-sidebar card">
          <h3>答题进度</h3>
          <p>${answeredCount} / ${quiz.questions.length} 题已作答</p>
          <div class="quiz-map">${quiz.questions.map((item, index) => `<span class="${answers[item.id] !== undefined ? "answered" : ""}">${index + 1}</span>`).join("")}</div>
          ${submitted ? `
            <div class="score-box"><strong>${state.quiz.score}</strong><span>${state.quiz.score >= quiz.passScore ? "通过 · 可以继续实战" : "未通过 · 建议复习生产边界"}</span></div>` : `
            <button class="button button-primary full" type="button" data-action="submit-quiz" ${answeredCount < quiz.questions.length ? "disabled" : ""}>提交测验</button>`}
        </aside>
      </div>`;
  }

  function quizQuestionHTML(item, index, submitted) {
    const selected = state.quiz.answers[item.id];
    return `
      <article class="quiz-question">
        <div class="question-number">QUESTION ${String(index + 1).padStart(2, "0")}</div>
        <h3>${escapeHTML(item.question)}</h3>
        <div class="quiz-options">
          ${item.options.map((option, optionIndex) => {
            const classes = ["quiz-option"];
            if (selected === optionIndex) classes.push("selected");
            if (submitted && optionIndex === item.answer) classes.push("correct");
            if (submitted && selected === optionIndex && optionIndex !== item.answer) classes.push("wrong");
            return `<button class="${classes.join(" ")}" type="button" data-question="${item.id}" data-option="${optionIndex}" ${submitted ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${escapeHTML(option)}</span></button>`;
          }).join("")}
        </div>
        ${submitted ? `<div class="quiz-explanation">${escapeHTML(item.explanation)}</div>` : ""}
      </article>`;
  }

  function renderProjects() {
    const projectStages = [DATA.stages[0], DATA.stages[3], DATA.stages[4], DATA.stages[5], DATA.stages[6]];
    view.innerHTML = `
      <div class="page-head"><div><div class="eyebrow">PORTFOLIO</div><h1>生产级项目实战</h1><p>项目不是功能截图。每个交付都必须包含业务基线、架构、测试集、失败案例、质量与性能数据、上线判断。</p></div></div>
      <div class="project-grid">
        ${projectStages.map((stage) => {
          const progress = stageProgress(stage);
          return `
            <article class="project-card ${toneClass(stage)}">
              <div class="project-stage">STAGE ${stage.number} · ${progress.percent}% COMPLETE</div>
              <h2>${escapeHTML(stage.project.title)}</h2>
              <p>${escapeHTML(stage.project.brief)}</p>
              <div class="metrics-list">${stage.project.metrics.map((metric) => `<span>${escapeHTML(metric)}</span>`).join("")}</div>
              <button class="button compact" style="margin-top:20px" type="button" data-route="stage/${stage.id}">进入阶段 →</button>
            </article>`;
        }).join("")}
      </div>
      <section class="section card">
        <div class="section-head"><h2>统一交付标准</h2><p>求职作品集最低门槛</p></div>
        <div class="concept-cloud">
          ${["业务背景与基线", "架构与数据流", "可复现配置", "冻结测试集", "失败案例", "质量/延迟/成本", "安全与权限", "Go / No-Go", "已知限制"].map((item) => `<span class="concept-chip">${item}</span>`).join("")}
        </div>
      </section>`;
  }

  function renderWriting() {
    const counts = { idea: 0, drafting: 0, published: 0 };
    DATA.articles.forEach((article) => counts[state.articles[article.id] || "idea"] += 1);
    view.innerHTML = `
      <div class="page-head"><div><div class="eyebrow">ZHIHU COLUMN</div><h1>从程序员到企业 AI 应用工程师</h1><p>14 篇主文章构成完整成长叙事：文章证明思考，代码证明实现，评测报告证明工程判断。</p></div></div>
      <section class="metrics-grid">
        <div class="metric-card"><span>文章计划</span><strong>${DATA.articles.length}</strong><small>覆盖全部 7 个阶段</small></div>
        <div class="metric-card"><span>选题阶段</span><strong>${counts.idea}</strong><small>等待实验素材</small></div>
        <div class="metric-card"><span>写作中</span><strong>${counts.drafting}</strong><small>正在形成证据链</small></div>
        <div class="metric-card"><span>已发布</span><strong>${counts.published}</strong><small>最终求职作品</small></div>
      </section>
      <section class="article-list">
        ${DATA.articles.map((article, index) => {
          const status = state.articles[article.id] || "idea";
          return `
            <article class="article-item">
              <span class="article-index">${String(index + 1).padStart(2, "0")} / S${article.stage}</span>
              <div><h3>${escapeHTML(article.title)}</h3><p>${escapeHTML(article.focus)}</p></div>
              <div class="article-status">
                <button class="status-button ${status === "idea" ? "active" : ""}" type="button" data-article="${article.id}" data-status="idea">选题</button>
                <button class="status-button ${status === "drafting" ? "active" : ""}" type="button" data-article="${article.id}" data-status="drafting">写作中</button>
                <button class="status-button ${status === "published" ? "active" : ""}" type="button" data-article="${article.id}" data-status="published">已发布</button>
              </div>
            </article>`;
        }).join("")}
      </section>
      <section class="section card">
        <div class="section-head"><h2>每篇文章必须回答</h2><p>统一内容契约</p></div>
        <div class="concept-cloud">
          ${["生产位置", "业务问题", "当前现状", "可复现实验", "失败案例", "上线措施", "未来方向", "已知限制"].map((item) => `<span class="concept-chip">${item}</span>`).join("")}
        </div>
      </section>`;
  }

  function renderProgress() {
    const overall = overallProgress();
    const sessions = [...state.sessions].reverse();
    view.innerHTML = `
      <div class="page-head">
        <div><div class="eyebrow">LEARNING LOG</div><h1>学习记录与数据</h1><p>打卡是为了留下可审查的学习证据。所有数据只保存在当前浏览器，可以随时导出备份。</p></div>
        <button class="button button-primary" type="button" data-action="open-checkin">今日打卡</button>
      </div>
      <section class="metrics-grid">
        <div class="metric-card"><span>总进度</span><strong>${overall.percent}%</strong><small>${overall.completed} / ${overall.total} 个任务</small></div>
        <div class="metric-card"><span>连续学习</span><strong>${streak()} 天</strong><small>${sessionDays().length} 个学习日</small></div>
        <div class="metric-card"><span>实际时长</span><strong>${totalHours().toFixed(1)}h</strong><small>来自每日打卡</small></div>
        <div class="metric-card"><span>文章发布</span><strong>${Object.values(state.articles).filter((item) => item === "published").length}</strong><small>目标 ${DATA.articles.length} 篇</small></div>
      </section>
      <section class="card">
        <div class="section-head"><h2>最近 12 周</h2><p>颜色越深，学习时间越长</p></div>
        ${heatmapHTML()}
      </section>
      <section class="section two-column">
        <div class="card">
          <div class="section-head"><h2>打卡记录</h2><p>${sessions.length} 条</p></div>
          <div class="activity-list">
            ${sessions.length ? sessions.slice(0, 12).map((session) => `
              <div class="activity-item"><span class="activity-dot"></span><div><strong>${escapeHTML(session.note)}</strong><small>${formatDate(session.date, true)} · ${Number(session.hours).toFixed(1)} 小时</small></div></div>`).join("") : `<div class="empty-state">暂无记录。今天完成第一次打卡吧。</div>`}
          </div>
        </div>
        <div class="card">
          <div class="section-head"><h2>数据管理</h2><p>LocalStorage</p></div>
          <p>导出文件包含任务、打卡、测验和文章状态，不包含模型密钥或代码。</p>
          <div class="data-actions">
            <button class="button compact" type="button" data-action="export-data">导出 JSON</button>
            <button class="button compact" type="button" data-action="import-data">导入备份</button>
            <button class="button compact danger" type="button" data-action="reset-data">清空数据</button>
          </div>
        </div>
      </section>`;
  }

  function heatmapHTML() {
    const byDate = new Map();
    state.sessions.forEach((session) => byDate.set(session.date, (byDate.get(session.date) || 0) + Number(session.hours || 0)));
    const today = new Date();
    const days = [];
    for (let index = 83; index >= 0; index -= 1) {
      const date = addDays(today, -index);
      const key = localDate(date);
      const hours = byDate.get(key) || 0;
      const level = hours === 0 ? 0 : hours < 0.75 ? 1 : hours < 1.5 ? 2 : hours < 3 ? 3 : 4;
      days.push(`<span class="heat-day level-${level}" title="${key} · ${hours.toFixed(1)} 小时"></span>`);
    }
    return `<div class="heatmap-wrap"><div class="heatmap">${days.join("")}</div></div><div class="legend"><span class="legend-label">少</span><span class="heat-day"></span><span class="heat-day level-1"></span><span class="heat-day level-2"></span><span class="heat-day level-3"></span><span class="heat-day level-4"></span><span class="legend-label">多</span></div>`;
  }

  function openCheckin() {
    modal.hidden = false;
    document.querySelector("#checkin-note").focus();
  }

  function closeCheckin() {
    modal.hidden = true;
  }

  function openSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function submitQuiz() {
    const quiz = DATA.quiz;
    if (Object.keys(state.quiz.answers).length < quiz.questions.length) {
      showToast("请先完成全部题目");
      return;
    }
    const correct = quiz.questions.filter((item) => state.quiz.answers[item.id] === item.answer).length;
    state.quiz.submitted = true;
    state.quiz.score = Math.round((correct / quiz.questions.length) * 100);
    saveState();
    renderPractice();
    showToast(state.quiz.score >= quiz.passScore ? "测验通过，继续完成生产实战" : "建议复习解析后重新作答");
  }

  function resetQuiz() {
    state.quiz = { answers: {}, submitted: false, score: null };
    saveState();
    renderPractice();
  }

  function exportData() {
    const payload = { exportedAt: new Date().toISOString(), app: "AI Path", data: state };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ai-path-progress-${localDate(new Date())}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("学习数据已导出");
  }

  function importData(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const imported = parsed.data || parsed;
        if (!imported || typeof imported !== "object" || !imported.tasks || !Array.isArray(imported.sessions)) throw new Error("invalid");
        Object.keys(state).forEach((key) => delete state[key]);
        Object.assign(state, defaultState(), imported);
        saveState();
        render();
        showToast("学习数据已导入");
      } catch {
        showToast("导入失败：文件格式不正确");
      }
    };
    reader.readAsText(file);
  }

  document.addEventListener("click", (event) => {
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) {
      go(routeTarget.dataset.route);
      return;
    }

    const option = event.target.closest("[data-question][data-option]");
    if (option && !state.quiz.submitted) {
      state.quiz.answers[option.dataset.question] = Number(option.dataset.option);
      saveState();
      renderPractice();
      return;
    }

    const article = event.target.closest("[data-article][data-status]");
    if (article) {
      state.articles[article.dataset.article] = article.dataset.status;
      saveState();
      renderWriting();
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;
    const action = actionTarget.dataset.action;
    if (action === "open-checkin") openCheckin();
    else if (action === "submit-quiz") submitQuiz();
    else if (action === "reset-quiz") resetQuiz();
    else if (action === "export-data") exportData();
    else if (action === "import-data") importFile.click();
    else if (action === "reset-data") {
      if (window.confirm("确认清空所有任务、打卡、测验和文章进度？此操作无法撤销。")) {
        Object.keys(state).forEach((key) => delete state[key]);
        Object.assign(state, defaultState());
        saveState();
        render();
        showToast("学习数据已清空");
      }
    }
  });

  document.addEventListener("change", (event) => {
    const toggle = event.target.closest(".task-toggle");
    if (toggle) {
      state.tasks[toggle.dataset.taskId] = toggle.checked;
      saveState();
      const route = routeFromHash();
      if (route.name === "stage") renderStage(route.id);
      else render();
      showToast(toggle.checked ? "任务完成，进度已保存" : "任务已恢复为未完成");
    }
  });

  document.querySelector("#open-checkin").addEventListener("click", openCheckin);
  document.querySelector("#close-checkin").addEventListener("click", closeCheckin);
  document.querySelector("#menu-button").addEventListener("click", openSidebar);
  sidebarOverlay.addEventListener("click", closeSidebar);
  modal.addEventListener("click", (event) => { if (event.target === modal) closeCheckin(); });
  window.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeCheckin(); closeSidebar(); } });
  window.addEventListener("hashchange", render);

  checkinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const hours = Number(document.querySelector("#checkin-hours").value);
    const note = document.querySelector("#checkin-note").value.trim();
    if (!hours || !note) return;
    state.sessions.push({ id: `${Date.now()}`, date: localDate(new Date()), hours, note });
    saveState();
    checkinForm.reset();
    document.querySelector("#checkin-hours").value = "1";
    closeCheckin();
    render();
    showToast("今日打卡成功，学习记录已保存");
  });

  importFile.addEventListener("change", () => {
    const [file] = importFile.files;
    if (file) importData(file);
    importFile.value = "";
  });

  render();
})();
