const serviceKeys = ["home", "kitchen", "bathroom", "basement", "addition", "commercial"];

const projectImages = {
  home: "./src/assets/hero-renovation.png",
  kitchen: "./src/assets/hero-renovation.png",
  bathroom: "./src/assets/project-bathroom.png",
  basement: "./src/assets/project-basement.png",
  addition: "./src/assets/project-addition.png",
  commercial: "./src/assets/project-commercial.png",
};

const i18n = {
  en: {
    languageLabel: "EN",
    otherLanguage: "中文",
    brandAlt: "TopBuilder logo",
    nav: {
      projects: "Projects",
      contractors: "Contractors",
      community: "Community",
      join: "For pros",
      login: "Log in",
      menu: "Open menu",
    },
    hero: {
      eyebrow: "Contractor marketplace",
      title: "Find the right team for your next build.",
      copy: "TopBuilder helps homeowners compare local contractors, review real project work, and start a conversation with confidence.",
      cta: "Find contractors",
      secondary: "Browse projects",
      imageCaption: "Mock renovation project photo",
    },
    search: {
      servicePlaceholder: "Project type",
      postal: "Postal code",
      button: "Search",
      title: "Find local professionals",
      copy: "Filter by service, compare profiles, and contact the team that fits your project.",
      results: "contractors match your project",
      filters: "Filters",
      service: "Service",
      sort: "Sort",
      all: "All services",
      recommended: "Recommended",
      highest: "Highest rated",
      newest: "Most reviewed",
      empty: "No contractors match this search yet.",
    },
    services: {
      home: "Home renovation",
      kitchen: "Kitchen remodel",
      bathroom: "Bathroom remodel",
      basement: "Basement finish",
      addition: "New build & addition",
      commercial: "Commercial project",
    },
    home: {
      howTitle: "A simpler way to start a project",
      howCopy: "Tell us what you need, compare curated professionals, then review the details before you reach out.",
      servicesTitle: "Popular project types",
      contractorsTitle: "Featured contractors",
      reviewsTitle: "Trusted by homeowners",
      communityTitle: "Real project stories",
      proTitle: "Grow your business with qualified local leads.",
      proCopy: "Create a profile, showcase your work, and respond to homeowners who are ready to plan.",
      join: "Join as a pro",
    },
    stats: {
      contractors: "verified pros",
      response: "avg. response",
      reviews: "homeowner reviews",
    },
    card: {
      view: "View profile",
      contact: "Contact",
      save: "Save",
      saved: "Saved to favorites.",
      sent: "Message sent. The contractor will follow up soon.",
    },
    profile: {
      projects: "Projects",
      reviews: "Reviews",
      about: "About",
      faq: "FAQ",
      rating: "Rating",
      reviewCount: "Reviews",
      projectCount: "Projects",
      contact: "Contact contractor",
      save: "Save",
      introTitle: "Company overview",
      introCopy: "This team provides site review, scope planning, material guidance, and project coordination with clear updates at each milestone.",
      faqItems: [
        ["Do they provide estimates?", "Yes. Share your scope and preferred timeline to receive next-step guidance."],
        ["Can they help with permits?", "For larger scopes, the team can coordinate permit requirements and supporting documentation."],
        ["How soon can work begin?", "Availability depends on scope, season, and inspection requirements."],
      ],
    },
    auth: {
      welcome: "Welcome back",
      create: "Create account",
      loginTitle: "Log in to TopBuilder",
      registerTitle: "Create your TopBuilder account",
      login: "Log in",
      register: "Register",
      name: "Full name",
      email: "Email",
      password: "Password",
      agree: "I agree to the terms and privacy policy",
      send: "Send confirmation email",
      forgot: "Forgot password?",
      resetSent: "Password reset email sent.",
    },
    account: {
      owner: "Homeowner",
      saved: "Saved",
      messages: "Messages",
      profile: "Profile",
      savedTitle: "Saved contractors",
      messagesCopy: "M2 Tile & Stone received your kitchen remodel request. Northline Build Co. asked for your preferred start date.",
      saveProfile: "Save profile",
    },
    community: {
      title: "Project stories and ideas",
      eyebrow: "Community",
      views: "views",
    },
    join: {
      eyebrow: "For contractors",
      title: "Show your work and meet homeowners ready to build.",
      company: "Company name",
      city: "Service city",
      service: "Primary service",
      intro: "Short company introduction",
      submit: "Submit application",
      submitted: "Application submitted. We will contact you for verification.",
    },
    footer: {
      customers: ["For customers", "Browse projects", "Find contractors", "Community", "Help center"],
      pros: ["For contractors", "Join TopBuilder", "Verification", "Case studies", "Contractor Q&A"],
      company: ["Company", "Our team", "Privacy policy", "Terms", "Contact"],
      language: ["Language", "English", "Chinese"],
    },
  },
  zh: {
    languageLabel: "中文",
    otherLanguage: "EN",
    brandAlt: "TopBuilder 标志",
    nav: {
      projects: "工程项目",
      contractors: "找承包商",
      community: "社区分享",
      join: "承包商入驻",
      login: "登录",
      menu: "打开菜单",
    },
    hero: {
      eyebrow: "工程项目与承包商平台",
      title: "为您的下一个项目找到合适团队。",
      copy: "TopBuilder 帮助屋主比较本地承包商、查看真实案例，并更有把握地发起联系。",
      cta: "寻找承包商",
      secondary: "浏览项目",
      imageCaption: "模拟装修项目图片",
    },
    search: {
      servicePlaceholder: "项目类型",
      postal: "邮政编码",
      button: "搜索",
      title: "寻找本地专业团队",
      copy: "按服务筛选，比较承包商主页，并联系适合您项目的团队。",
      results: "个承包商匹配您的项目",
      filters: "筛选",
      service: "服务",
      sort: "排序",
      all: "全部服务",
      recommended: "系统推荐",
      highest: "评分最高",
      newest: "评价最多",
      empty: "暂时没有匹配的承包商。",
    },
    services: {
      home: "住宅装修",
      kitchen: "厨房翻新",
      bathroom: "浴室改造",
      basement: "地下室装修",
      addition: "新建与加建",
      commercial: "商业项目",
    },
    home: {
      howTitle: "更简单地开始一个项目",
      howCopy: "告诉我们您的需求，比较精选专业团队，再确认细节并发起联系。",
      servicesTitle: "热门项目类型",
      contractorsTitle: "精选承包商",
      reviewsTitle: "屋主信任的评价",
      communityTitle: "真实案例分享",
      proTitle: "用高质量本地线索拓展业务。",
      proCopy: "创建主页，展示作品，并回复已经准备规划项目的屋主。",
      join: "立即入驻",
    },
    stats: {
      contractors: "认证承包商",
      response: "平均响应",
      reviews: "屋主评价",
    },
    card: {
      view: "查看主页",
      contact: "联系",
      save: "收藏",
      saved: "已加入收藏。",
      sent: "信息已发送，承包商会尽快联系您。",
    },
    profile: {
      projects: "过往项目",
      reviews: "用户评价",
      about: "公司介绍",
      faq: "常见问题",
      rating: "评分",
      reviewCount: "评价",
      projectCount: "项目",
      contact: "联系承包商",
      save: "收藏",
      introTitle: "公司介绍",
      introCopy: "该团队提供现场评估、范围规划、材料建议和项目协调，并在关键节点同步进度。",
      faqItems: [
        ["是否提供估价？", "提供。提交范围和预计时间后，可获得下一步建议。"],
        ["是否协助申请许可？", "较大项目可协助梳理许可要求和相关材料。"],
        ["多久可以开工？", "开工时间取决于项目范围、季节排期和检查要求。"],
      ],
    },
    auth: {
      welcome: "欢迎回来",
      create: "创建账户",
      loginTitle: "登录 TopBuilder",
      registerTitle: "注册 TopBuilder",
      login: "登录",
      register: "注册",
      name: "姓名",
      email: "电子邮件",
      password: "密码",
      agree: "我同意服务条款和隐私政策",
      send: "发送确认邮件",
      forgot: "忘记密码？",
      resetSent: "密码重置邮件已发送。",
    },
    account: {
      owner: "屋主",
      saved: "收藏",
      messages: "联系记录",
      profile: "账户资料",
      savedTitle: "收藏的承包商",
      messagesCopy: "M2 Tile & Stone 已收到您的厨房翻新咨询。Northline Build Co. 请求补充预计开工时间。",
      saveProfile: "保存资料",
    },
    community: {
      title: "案例分享和装修灵感",
      eyebrow: "社区分享",
      views: "浏览",
    },
    join: {
      eyebrow: "承包商入驻",
      title: "展示案例，连接准备开工的屋主。",
      company: "公司名称",
      city: "服务城市",
      service: "主要服务",
      intro: "公司简介",
      submit: "提交申请",
      submitted: "申请已提交，我们会联系您完成审核。",
    },
    footer: {
      customers: ["关于客户", "浏览工程项目", "寻找承包商", "社区分享", "帮助中心"],
      pros: ["关于承包商", "承包商入驻", "承包商资质", "案例分享", "承包商Q&A"],
      company: ["关于我们", "我们的团队", "隐私政策", "服务条款", "联系我们"],
      language: ["选择语言", "English", "中文"],
    },
  },
};

const contractors = [
  {
    id: "m2-tile",
    name: "M2 Tile & Stone",
    title: { en: "Tile and stone specialist", zh: "瓷砖与石材承包商" },
    city: "Markham",
    rating: 5.0,
    reviews: 128,
    services: ["kitchen", "bathroom", "commercial"],
    tags: {
      en: ["Licensed", "Insured", "48h response"],
      zh: ["持牌", "保险齐全", "48小时响应"],
    },
    blurb: {
      en: "Detail-focused tile, stone, and waterproofing work for kitchens, bathrooms, and polished commercial spaces.",
      zh: "专注瓷砖、石材和湿区防水，适合厨房、浴室和商业空间。",
    },
    tone: "clay",
  },
  {
    id: "northline",
    name: "Northline Build Co.",
    title: { en: "Addition and structural renovation", zh: "加建与结构改造" },
    city: "Toronto",
    rating: 4.9,
    reviews: 94,
    services: ["addition", "basement", "home"],
    tags: {
      en: ["Permit support", "Project management", "Structural work"],
      zh: ["许可协助", "项目管理", "结构工程"],
    },
    blurb: {
      en: "A practical team for additions, basement suites, and layout changes that need careful coordination.",
      zh: "适合加建、地下室套房和格局改造等需要协调管理的项目。",
    },
    tone: "forest",
  },
  {
    id: "clearspace",
    name: "Clearspace Renovation",
    title: { en: "Whole-home renovation team", zh: "全屋翻新团队" },
    city: "Richmond Hill",
    rating: 4.8,
    reviews: 76,
    services: ["home", "kitchen", "bathroom"],
    tags: {
      en: ["Design-build", "Clear budget", "Bilingual"],
      zh: ["设计施工", "预算透明", "双语服务"],
    },
    blurb: {
      en: "Clear scopes, clean finishes, and stage-by-stage updates for homeowners managing a large renovation.",
      zh: "清晰报价、精细收口和阶段同步，适合大型住宅装修。",
    },
    tone: "sky",
  },
  {
    id: "oakridge",
    name: "Oakridge Commercial",
    title: { en: "Commercial build-out contractor", zh: "商业空间施工" },
    city: "Mississauga",
    rating: 4.7,
    reviews: 63,
    services: ["commercial", "home", "addition"],
    tags: {
      en: ["Retail", "Office", "After-hours work"],
      zh: ["零售空间", "办公室", "夜间施工"],
    },
    blurb: {
      en: "Commercial renovations for offices, retail, and hospitality spaces with tidy handoff documentation.",
      zh: "覆盖办公室、零售和餐饮空间改造，并提供清晰交付资料。",
    },
    tone: "gold",
  },
];

const posts = [
  {
    title: { en: "Small kitchen, smarter storage", zh: "小厨房的高效收纳" },
    category: "kitchen",
    views: "2.4k",
  },
  {
    title: { en: "Basement suite planning checklist", zh: "地下室套房规划清单" },
    category: "basement",
    views: "1.8k",
  },
  {
    title: { en: "Cafe build-out before opening", zh: "咖啡店开业前施工记录" },
    category: "commercial",
    views: "980",
  },
];

const state = {
  route: window.location.hash.replace("#", "") || "home",
  lang: localStorage.getItem("topbuilder:lang") || "en",
  service: "",
  postal: "",
  sort: "recommended",
  selected: contractors[0],
  authMode: "login",
  accountTab: "saved",
  profileTab: "projects",
  menuOpen: false,
  toast: "",
};

const app = document.querySelector("#app");
const $ = (selector, parent = document) => parent.querySelector(selector);

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], i18n[state.lang]) ?? path;
}

function localized(value) {
  if (typeof value === "string") return value;
  return value[state.lang] ?? value.en ?? "";
}

function icon(name) {
  const paths = {
    search: "<circle cx='11' cy='11' r='7'></circle><path d='m20 20-4.2-4.2'></path>",
    pin: "<path d='M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z'></path><circle cx='12' cy='9' r='2.5'></circle>",
    user: "<circle cx='12' cy='8' r='4'></circle><path d='M4 21a8 8 0 0 1 16 0'></path>",
    briefcase: "<path d='M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1'></path><rect x='3' y='6' width='18' height='14' rx='2'></rect>",
    globe: "<circle cx='12' cy='12' r='9'></circle><path d='M3 12h18'></path><path d='M12 3a14 14 0 0 1 0 18'></path><path d='M12 3a14 14 0 0 0 0 18'></path>",
    star: "<path d='m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z'></path>",
    heart: "<path d='M20.8 5.6a5.1 5.1 0 0 0-7.2 0L12 7.2l-1.6-1.6a5.1 5.1 0 1 0-7.2 7.2L12 21l8.8-8.2a5.1 5.1 0 0 0 0-7.2Z'></path>",
    mail: "<rect x='3' y='5' width='18' height='14' rx='2'></rect><path d='m3 7 9 6 9-6'></path>",
    menu: "<path d='M4 7h16'></path><path d='M4 12h16'></path><path d='M4 17h16'></path>",
    arrow: "<path d='M5 12h14'></path><path d='m13 6 6 6-6 6'></path>",
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ""}</svg>`;
}

function setRoute(route, data = {}) {
  state.route = route;
  state.menuOpen = false;
  if (data.contractor) state.selected = data.contractor;
  window.location.hash = route;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(setToast.timer);
  setToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2200);
}

function Logo() {
  return `
    <button class="logo" data-route="home" aria-label="TopBuilder">
      <img src="./src/assets/logo.svg" alt="${t("brandAlt")}" />
    </button>
  `;
}

function Nav() {
  const links = [
    ["search", "nav.projects", "briefcase"],
    ["search", "nav.contractors", "search"],
    ["community", "nav.community", "heart"],
  ];
  return `
    <header class="site-header">
      <div class="nav-shell">
        ${Logo()}
        <nav class="main-nav" aria-label="Primary navigation">
          ${links.map(([route, label, itemIcon]) => `<button data-route="${route}">${icon(itemIcon)}${t(label)}</button>`).join("")}
        </nav>
        <div class="nav-actions">
          <button class="ghost compact" data-action="toggle-language">${icon("globe")}${t("otherLanguage")}</button>
          <button class="ghost compact" data-route="join">${t("nav.join")}</button>
          <button class="primary compact" data-route="login">${t("nav.login")}</button>
          <button class="icon-only menu-toggle" data-action="toggle-menu" aria-label="${t("nav.menu")}">${icon("menu")}</button>
        </div>
      </div>
      ${
        state.menuOpen
          ? `<div class="mobile-menu">
              ${links.map(([route, label, itemIcon]) => `<button data-route="${route}">${icon(itemIcon)}${t(label)}</button>`).join("")}
              <button data-action="toggle-language">${icon("globe")}${t("otherLanguage")}</button>
              <button data-route="join">${icon("briefcase")}${t("nav.join")}</button>
              <button class="primary" data-route="login">${icon("user")}${t("nav.login")}</button>
            </div>`
          : ""
      }
    </header>
  `;
}

function SearchBox(context = "") {
  return `
    <form class="search-box ${context}" data-form="search">
      <label>
        ${icon("search")}
        <select name="service" aria-label="${t("search.service")}">
          <option value="">${t("search.servicePlaceholder")}</option>
          ${serviceKeys.map((key) => `<option value="${key}" ${state.service === key ? "selected" : ""}>${t(`services.${key}`)}</option>`).join("")}
        </select>
      </label>
      <label>
        ${icon("pin")}
        <input name="postal" value="${state.postal}" placeholder="${t("search.postal")}" />
      </label>
      <button class="search-submit" type="submit">${t("search.button")}</button>
    </form>
  `;
}

function HomePage() {
  return `
    <main>
      <section class="hero">
        <div class="hero-copy-block">
          <p class="eyebrow">${t("hero.eyebrow")}</p>
          <h1>${t("hero.title")}</h1>
          <p>${t("hero.copy")}</p>
          ${SearchBox("hero-search")}
          <div class="hero-actions">
            <button class="primary" data-route="search">${t("hero.cta")}${icon("arrow")}</button>
            <button class="ghost" data-route="community">${t("hero.secondary")}</button>
          </div>
        </div>
        <figure class="hero-image-card">
          <img src="./src/assets/hero-renovation.png" alt="${t("hero.imageCaption")}" />
          <figcaption>
            <strong>4.9</strong>
            <span>${t("profile.rating")}</span>
          </figcaption>
        </figure>
      </section>

      <section class="stats-row">
        <div><strong>320+</strong><span>${t("stats.contractors")}</span></div>
        <div><strong>24h</strong><span>${t("stats.response")}</span></div>
        <div><strong>4.8/5</strong><span>${t("stats.reviews")}</span></div>
      </section>

      <section class="intro-section">
        <div>
          <p class="eyebrow">${t("home.howTitle")}</p>
          <h2>${t("home.howCopy")}</h2>
        </div>
        <div class="step-grid">
          ${["01", "02", "03"].map((step, index) => `<span><b>${step}</b>${[t("search.servicePlaceholder"), t("home.contractorsTitle"), t("card.contact")][index]}</span>`).join("")}
        </div>
      </section>

      ${ServicesSection()}
      ${ContractorSection()}
      ${ReviewSection()}
      ${CommunitySection()}
      ${ProCta()}
    </main>
  `;
}

function ServicesSection() {
  return `
    <section class="section-shell">
      <div class="section-head">
        <p class="eyebrow">${t("home.servicesTitle")}</p>
        <h2>${t("search.copy")}</h2>
      </div>
      <div class="service-grid">
        ${serviceKeys.map((key, index) => `
          <button class="service-card tone-${index}" data-service="${key}">
            <img src="${projectImages[key]}" alt="${t(`services.${key}`)}" />
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${t(`services.${key}`)}</strong>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function ContractorSection() {
  return `
    <section class="section-shell">
      <div class="section-head inline">
        <div>
          <p class="eyebrow">${t("home.contractorsTitle")}</p>
          <h2>${t("search.title")}</h2>
        </div>
        <button class="ghost" data-route="search">${t("hero.cta")}</button>
      </div>
      <div class="contractor-grid">
        ${contractors.map(ContractorCard).join("")}
      </div>
    </section>
  `;
}

function ContractorCard(contractor) {
  return `
    <article class="contractor-card">
      <button class="contractor-image ${contractor.tone}" data-contractor="${contractor.id}" aria-label="${contractor.name}">
        <img src="${projectImages[contractor.services[0]]}" alt="${contractor.name}" />
      </button>
      <div class="contractor-body">
        <div>
          <h3>${contractor.name}</h3>
          <p>${localized(contractor.title)} · ${contractor.city}</p>
        </div>
        <span class="rating">${icon("star")}${contractor.rating.toFixed(1)}</span>
        <p>${localized(contractor.blurb)}</p>
        <div class="tag-row">${contractor.tags[state.lang].map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="card-actions">
          <button class="primary" data-contractor="${contractor.id}">${t("card.view")}</button>
          <button class="ghost" data-action="contact">${icon("mail")}${t("card.contact")}</button>
        </div>
      </div>
    </article>
  `;
}

function ReviewSection() {
  return `
    <section class="section-shell">
      <div class="section-head">
        <p class="eyebrow">${t("home.reviewsTitle")}</p>
        <h2>${state.lang === "en" ? "Clear reviews before you choose." : "选择前先看清真实评价。"}</h2>
      </div>
      <div class="review-grid">
        ${contractors.slice(0, 3).map((contractor) => `
          <article class="review-card">
            <div class="stars">${icon("star")}${icon("star")}${icon("star")}${icon("star")}${icon("star")}</div>
            <p>${state.lang === "en" ? "The scope was clear, communication was fast, and the finish matched what we approved." : "报价范围清楚，沟通及时，最终效果和确认方案一致。"}</p>
            <strong>${contractor.name}</strong>
            <span>${localized(contractor.title)}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function CommunitySection() {
  return `
    <section class="section-shell">
      <div class="section-head inline">
        <div>
          <p class="eyebrow">${t("home.communityTitle")}</p>
          <h2>${t("community.title")}</h2>
        </div>
        <button class="ghost" data-route="community">${t("nav.community")}</button>
      </div>
      <div class="story-grid">
        ${posts.map((post, index) => StoryCard(post, index)).join("")}
      </div>
    </section>
  `;
}

function StoryCard(post, index) {
  return `
    <article class="story-card">
      <span class="story-image tone-${index}"></span>
      <img class="story-photo" src="${projectImages[post.category]}" alt="${localized(post.title)}" />
      <small>${t(`services.${post.category}`)}</small>
      <h3>${localized(post.title)}</h3>
      <p>${post.views} ${t("community.views")}</p>
    </article>
  `;
}

function ProCta() {
  return `
    <section class="pro-cta">
      <div>
        <p class="eyebrow">${t("join.eyebrow")}</p>
        <h2>${t("home.proTitle")}</h2>
        <p>${t("home.proCopy")}</p>
      </div>
      <button class="primary" data-route="join">${t("home.join")}</button>
    </section>
  `;
}

function SearchPage() {
  const results = filteredContractors();
  return `
    <main class="page-shell">
      <section class="page-title">
        <p class="eyebrow">${t("nav.contractors")}</p>
        <h1>${t("search.title")}</h1>
        <p>${t("search.copy")}</p>
        ${SearchBox("toolbar")}
      </section>
      <section class="results-layout">
        <aside class="filters">
          <h2>${t("search.filters")}</h2>
          <label>
            ${t("search.service")}
            <select class="field" data-action="filter-service">
              <option value="">${t("search.all")}</option>
              ${serviceKeys.map((key) => `<option value="${key}" ${state.service === key ? "selected" : ""}>${t(`services.${key}`)}</option>`).join("")}
            </select>
          </label>
          <label>
            ${t("search.sort")}
            <select class="field" data-action="sort">
              ${["recommended", "highest", "newest"].map((key) => `<option value="${key}" ${state.sort === key ? "selected" : ""}>${t(`search.${key}`)}</option>`).join("")}
            </select>
          </label>
        </aside>
        <div class="results-stack">
          <p class="results-meta"><strong>${results.length}</strong> ${t("search.results")}</p>
          ${results.length ? results.map(ContractorCard).join("") : `<div class="empty-state">${t("search.empty")}</div>`}
        </div>
      </section>
    </main>
  `;
}

function filteredContractors() {
  let results = contractors.filter((contractor) => !state.service || contractor.services.includes(state.service));
  if (state.sort === "highest") results = [...results].sort((a, b) => b.rating - a.rating);
  if (state.sort === "newest") results = [...results].sort((a, b) => b.reviews - a.reviews);
  return results;
}

function ProfilePage() {
  const contractor = state.selected;
  const tabs = ["projects", "reviews", "about", "faq"];
  return `
    <main class="page-shell">
      <section class="profile-hero">
        <div class="profile-image">
          <img src="./src/assets/hero-renovation.png" alt="${contractor.name}" />
        </div>
        <div class="profile-summary">
          <p class="eyebrow">${contractor.city}</p>
          <h1>${contractor.name}</h1>
          <p>${localized(contractor.blurb)}</p>
          <div class="profile-stats">
            <span><b>${contractor.rating.toFixed(1)}</b>${t("profile.rating")}</span>
            <span><b>${contractor.reviews}</b>${t("profile.reviewCount")}</span>
            <span><b>12</b>${t("profile.projectCount")}</span>
          </div>
          <div class="tag-row">${contractor.tags[state.lang].map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="card-actions">
            <button class="primary" data-action="contact">${t("profile.contact")}</button>
            <button class="ghost" data-action="save">${icon("heart")}${t("profile.save")}</button>
          </div>
        </div>
      </section>
      <nav class="tabs">
        ${tabs.map((tab) => `<button class="${state.profileTab === tab ? "active" : ""}" data-profile-tab="${tab}">${t(`profile.${tab}`)}</button>`).join("")}
      </nav>
      ${ProfilePanel(contractor)}
    </main>
  `;
}

function ProfilePanel(contractor) {
  if (state.profileTab === "about") {
    return `<section class="content-panel"><h2>${t("profile.introTitle")}</h2><p>${t("profile.introCopy")}</p></section>`;
  }
  if (state.profileTab === "faq") {
    return `
      <section class="content-panel faq-list">
        ${t("profile.faqItems").map(([question, answer]) => `<details open><summary>${question}</summary><p>${answer}</p></details>`).join("")}
      </section>
    `;
  }
  if (state.profileTab === "reviews") {
    return `<div class="review-grid">${contractors.slice(0, 3).map((item) => `
      <article class="review-card"><div class="stars">${icon("star")}${icon("star")}${icon("star")}${icon("star")}${icon("star")}</div><p>${localized(item.blurb)}</p><strong>${item.name}</strong></article>
    `).join("")}</div>`;
  }
  return `
    <section class="project-grid">
      ${contractor.services.map((key, index) => `
        <article class="project-card">
          <img class="project-image" src="${projectImages[key]}" alt="${t(`services.${key}`)}" />
          <h3>${t(`services.${key}`)}</h3>
          <p>${state.lang === "en" ? "Recent work sample with photos, scope, and timeline notes." : "近期案例，包含图片、范围和时间说明。"}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function AuthPage() {
  const isLogin = state.authMode === "login";
  return `
    <main class="auth-page">
      <section class="auth-panel">
        <p class="eyebrow">${isLogin ? t("auth.welcome") : t("auth.create")}</p>
        <h1>${isLogin ? t("auth.loginTitle") : t("auth.registerTitle")}</h1>
        <div class="segmented">
          <button class="${isLogin ? "active" : ""}" data-auth-mode="login">${t("auth.login")}</button>
          <button class="${!isLogin ? "active" : ""}" data-auth-mode="register">${t("auth.register")}</button>
        </div>
        <form class="form-stack" data-form="auth">
          ${!isLogin ? `<input class="field" name="name" placeholder="${t("auth.name")}" required />` : ""}
          <input class="field" name="email" type="email" placeholder="${t("auth.email")}" required />
          <input class="field" name="password" type="password" placeholder="${t("auth.password")}" required />
          ${!isLogin ? `<label class="check-row"><input type="checkbox" required /><span>${t("auth.agree")}</span></label>` : ""}
          <button class="primary wide" type="submit">${isLogin ? t("auth.login") : t("auth.send")}</button>
          ${isLogin ? `<button class="link-button" type="button" data-action="reset">${t("auth.forgot")}</button>` : ""}
        </form>
      </section>
      <aside class="auth-image"><img src="./src/assets/hero-renovation.png" alt="" /></aside>
    </main>
  `;
}

function AccountPage() {
  const tabs = ["saved", "messages", "profile"];
  return `
    <main class="page-shell account-layout">
      <aside class="account-sidebar">
        <div class="account-avatar">S</div>
        <h1>Sandy</h1>
        <p>Toronto · ${t("account.owner")}</p>
        ${tabs.map((tab) => `<button class="${state.accountTab === tab ? "active" : ""}" data-account-tab="${tab}">${t(`account.${tab}`)}</button>`).join("")}
      </aside>
      <section class="account-content">
        <h2>${state.accountTab === "saved" ? t("account.savedTitle") : t(`account.${state.accountTab}`)}</h2>
        ${AccountPanel()}
      </section>
    </main>
  `;
}

function AccountPanel() {
  if (state.accountTab === "messages") return `<div class="content-panel"><p>${t("account.messagesCopy")}</p></div>`;
  if (state.accountTab === "profile") {
    return `<form class="content-panel form-stack"><input class="field" value="Sandy" /><input class="field" value="sandy@example.com" /><input class="field" value="M2K 1A1" /><button class="primary">${t("account.saveProfile")}</button></form>`;
  }
  return `<div class="contractor-grid compact-grid">${contractors.slice(0, 2).map(ContractorCard).join("")}</div>`;
}

function CommunityPage() {
  return `
    <main class="page-shell">
      <section class="page-title">
        <p class="eyebrow">${t("community.eyebrow")}</p>
        <h1>${t("community.title")}</h1>
      </section>
      <div class="story-grid expanded">
        ${posts.concat(posts).map((post, index) => StoryCard(post, index % 3)).join("")}
      </div>
    </main>
  `;
}

function JoinPage() {
  return `
    <main class="auth-page">
      <section class="auth-panel">
        <p class="eyebrow">${t("join.eyebrow")}</p>
        <h1>${t("join.title")}</h1>
        <form class="form-stack" data-form="join">
          <input class="field" placeholder="${t("join.company")}" required />
          <input class="field" placeholder="${t("join.city")}" required />
          <select class="field">${serviceKeys.map((key) => `<option>${t(`services.${key}`)}</option>`).join("")}</select>
          <textarea class="field" placeholder="${t("join.intro")}"></textarea>
          <button class="primary wide">${t("join.submit")}</button>
        </form>
      </section>
      <aside class="auth-image"><img src="./src/assets/hero-renovation.png" alt="" /></aside>
    </main>
  `;
}

function Footer() {
  const groups = ["customers", "pros", "company", "language"].map((key) => t(`footer.${key}`));
  return `
    <footer class="site-footer">
      <div class="footer-brand">${Logo()}<p>${t("hero.copy")}</p></div>
      ${groups.map((group) => `<div><h2>${group[0]}</h2>${group.slice(1).map((item) => `<button>${item}</button>`).join("")}</div>`).join("")}
    </footer>
  `;
}

function Toast() {
  return state.toast ? `<div class="toast">${state.toast}</div>` : "";
}

function render() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-Hans";
  const routes = {
    home: HomePage,
    search: SearchPage,
    profile: ProfilePage,
    login: AuthPage,
    account: AccountPage,
    community: CommunityPage,
    join: JoinPage,
  };
  app.innerHTML = `${Nav()}${(routes[state.route] || HomePage)()}${Footer()}${Toast()}`;
  bindEvents();
}

function bindEvents() {
  app.querySelectorAll("[data-route]").forEach((button) => button.addEventListener("click", () => setRoute(button.dataset.route)));

  app.querySelectorAll("[data-contractor]").forEach((button) => {
    button.addEventListener("click", () => {
      const contractor = contractors.find((item) => item.id === button.dataset.contractor);
      if (contractor) setRoute("profile", { contractor });
    });
  });

  app.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      state.service = button.dataset.service;
      setRoute("search");
    });
  });

  app.querySelectorAll("[data-form='search']").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      state.service = formData.get("service") || "";
      state.postal = formData.get("postal") || "";
      setRoute("search");
    });
  });

  app.querySelectorAll("[data-action='toggle-language']").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = state.lang === "en" ? "zh" : "en";
      localStorage.setItem("topbuilder:lang", state.lang);
      state.menuOpen = false;
      render();
    });
  });

  const serviceFilter = $("[data-action='filter-service']", app);
  if (serviceFilter) serviceFilter.addEventListener("change", () => {
    state.service = serviceFilter.value;
    render();
  });

  const sort = $("[data-action='sort']", app);
  if (sort) sort.addEventListener("change", () => {
    state.sort = sort.value;
    render();
  });

  const menu = $("[data-action='toggle-menu']", app);
  if (menu) menu.addEventListener("click", () => {
    state.menuOpen = !state.menuOpen;
    render();
  });

  app.querySelectorAll("[data-profile-tab]").forEach((button) => button.addEventListener("click", () => {
    state.profileTab = button.dataset.profileTab;
    render();
  }));

  app.querySelectorAll("[data-auth-mode]").forEach((button) => button.addEventListener("click", () => {
    state.authMode = button.dataset.authMode;
    render();
  }));

  app.querySelectorAll("[data-account-tab]").forEach((button) => button.addEventListener("click", () => {
    state.accountTab = button.dataset.accountTab;
    render();
  }));

  app.querySelectorAll("[data-action='contact']").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    setToast(t("card.sent"));
  }));

  app.querySelectorAll("[data-action='save']").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    setToast(t("card.saved"));
  }));

  app.querySelectorAll("[data-form='auth']").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    setRoute("account");
  }));

  app.querySelectorAll("[data-form='join']").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    setToast(t("join.submitted"));
  }));

  const reset = $("[data-action='reset']", app);
  if (reset) reset.addEventListener("click", () => setToast(t("auth.resetSent")));
}

window.addEventListener("hashchange", () => {
  const route = window.location.hash.replace("#", "");
  if (route && route !== state.route) {
    state.route = route;
    state.menuOpen = false;
    render();
  }
});

render();
