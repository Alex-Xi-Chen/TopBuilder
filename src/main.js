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
      findContractors: "Find contractors",
      guideCommunity: "Renovation guide & discussion",
      about: "About us",
      join: "For pros",
      login: "Log in",
      notifications: "Notifications",
      account: "Account",
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
      heroTitle: "Complete renovation guidance and support",
      heroCopy: "Your trusted partner on the home improvement journey.",
      searchTitle: "What are you planning?",
      serviceMatch: "Start with a project type",
      expertTitle: "Build with verified local experts",
      expertCopy: "TopBuilder highlights contractors with visible project history, homeowner reviews, and clear service coverage.",
      expertName: "Daniel Lin",
      expertRole: "Senior renovation advisor",
      servicesTitle: "Popular project types",
      projectsTitle: "Selected project references",
      contractorsTitle: "Featured contractors",
      reviewsTitle: "Trusted by homeowners",
      communityTitle: "Real project stories",
      ctaTitle: "Ready to plan your next project?",
      ctaCopy: "Share your scope and we will help you compare the right local professionals.",
      faqTitle: "Common questions",
      proTitle: "Grow your business with qualified local leads.",
      proCopy: "Create a profile, showcase your work, and respond to homeowners who are ready to plan.",
      join: "Join as a pro",
      faqItems: [
        ["How does TopBuilder choose contractors?", "We use profile quality, project history, homeowner reviews, and service fit as the starting point."],
        ["Can I compare multiple contractors?", "Yes. Save profiles, compare services, and contact more than one team before choosing."],
        ["Is TopBuilder available in my city?", "The first launch focuses on the Greater Toronto Area, with more regions planned."],
      ],
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
      back: "Back",
      name: "Full name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      remember: "Remember me",
      agree: "I agree to the terms and privacy policy",
      google: "Continue with Google",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      freeSignup: "Sign up for free",
      termsHint: "By continuing, you agree to our privacy policy and terms of service.",
      showPassword: "Show password",
      hidePassword: "Hide password",
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
      listTitle: "Renovation stories",
      sort: "Latest",
      categoriesTitle: "Categories",
      featuredTitle: "Featured article",
      relatedTitle: "Related articles",
      breadcrumbHome: "Home",
      breadcrumbAdu: "ADU",
      readMore: "Read article",
      previous: "Previous",
      next: "Next",
      author: "TopBuilder Editorial",
      minutes: "min read",
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
    info: {
      help: {
        eyebrow: "Help center",
        title: "Get help planning with TopBuilder.",
        copy: "Find answers about searching, comparing contractors, saving profiles, and starting a project request.",
        items: ["Search by project type and area.", "Review contractor profiles and project references.", "Save teams and contact them when you are ready."],
      },
      verification: {
        eyebrow: "Verification",
        title: "How contractor verification works.",
        copy: "TopBuilder reviews company details, service coverage, project history, and profile quality before highlighting contractors.",
        items: ["Business and service information review.", "Project portfolio and photo quality check.", "Ongoing homeowner feedback monitoring."],
      },
      caseStudies: {
        eyebrow: "Case studies",
        title: "Project examples from local contractors.",
        copy: "Browse renovation stories that show scope, materials, timelines, and what homeowners learned along the way.",
        items: ["Kitchen and bath remodels.", "Basement finishing and additions.", "Commercial renovation references."],
      },
      contractorQa: {
        eyebrow: "Contractor Q&A",
        title: "Common questions from contractors.",
        copy: "Learn how profiles, leads, verification, and homeowner messages work on TopBuilder.",
        items: ["Create a verified company profile.", "Showcase your best project work.", "Respond to homeowner requests from one place."],
      },
      team: {
        eyebrow: "Our team",
        title: "A practical team for better home projects.",
        copy: "TopBuilder combines renovation experience, product design, and local market research to help homeowners choose with confidence.",
        items: ["Homeowner-first product design.", "Local contractor research.", "Bilingual support for English and Chinese users."],
      },
      privacy: {
        eyebrow: "Privacy policy",
        title: "Your information stays focused on your project.",
        copy: "We use profile, saved contractor, and request information to provide the TopBuilder experience and improve project matching.",
        items: ["We do not sell personal project details.", "You can update account details from your profile.", "Contact requests are shared only with the selected contractor."],
      },
      terms: {
        eyebrow: "Terms",
        title: "Simple terms for using TopBuilder.",
        copy: "TopBuilder helps connect homeowners and contractors, but final project scope, pricing, contracts, permits, and work quality remain between the parties involved.",
        items: ["Use accurate project and company information.", "Review estimates and agreements before work begins.", "Report suspicious or inaccurate profiles."],
      },
      contact: {
        eyebrow: "Contact",
        title: "Talk with the TopBuilder team.",
        copy: "Send a note about homeowner support, contractor verification, partnerships, or product feedback.",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message",
        sent: "Message sent. We will follow up soon.",
      },
    },
  },
  zh: {
    languageLabel: "中文",
    otherLanguage: "EN",
    brandAlt: "TopBuilder 标志",
    nav: {
      findContractors: "寻找承包商",
      guideCommunity: "装修攻略 & 讨论分享",
      about: "关于我们",
      join: "承包商入驻",
      login: "登录",
      notifications: "通知",
      account: "账户",
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
      heroTitle: "提供全面的装修指导和支持",
      heroCopy: "我们是您家装路上的得力伙伴",
      searchTitle: "您正在计划什么项目？",
      serviceMatch: "先选择项目类型",
      expertTitle: "与认证本地专家一起施工",
      expertCopy: "TopBuilder 展示有真实项目记录、屋主评价和明确服务范围的承包商。",
      expertName: "Daniel Lin",
      expertRole: "高级装修顾问",
      servicesTitle: "热门项目类型",
      projectsTitle: "精选项目参考",
      contractorsTitle: "精选承包商",
      reviewsTitle: "屋主信任的评价",
      communityTitle: "真实案例分享",
      ctaTitle: "准备开始规划项目？",
      ctaCopy: "提交您的需求，我们会帮助您比较合适的本地专业团队。",
      faqTitle: "常见问题",
      proTitle: "用高质量本地线索拓展业务。",
      proCopy: "创建主页，展示作品，并回复已经准备规划项目的屋主。",
      join: "立即入驻",
      faqItems: [
        ["TopBuilder 如何筛选承包商？", "我们会参考主页质量、项目记录、屋主评价和服务匹配度。"],
        ["我可以比较多个承包商吗？", "可以。您可以收藏主页、比较服务，并在选择前联系多个团队。"],
        ["TopBuilder 是否支持我的城市？", "首阶段重点覆盖大多伦多地区，后续会扩展更多区域。"],
      ],
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
      back: "返回",
      name: "姓名",
      email: "电子邮件",
      password: "密码",
      confirmPassword: "确认密码",
      remember: "记住我",
      agree: "我同意服务条款和隐私政策",
      google: "使用 Google 登录",
      noAccount: "还没有账号？",
      hasAccount: "已有账号？",
      freeSignup: "免费注册",
      termsHint: "注册或登录即表示您同意我们的隐私政策和服务条款",
      showPassword: "显示密码",
      hidePassword: "隐藏密码",
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
      listTitle: "装修攻略",
      sort: "默认排序",
      categoriesTitle: "攻略分类",
      featuredTitle: "相关文章推荐",
      relatedTitle: "相关文章",
      breadcrumbHome: "首页",
      breadcrumbAdu: "ADU",
      readMore: "阅读全文",
      previous: "上一页",
      next: "下一页",
      author: "TopBuilder 编辑部",
      minutes: "分钟阅读",
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
    info: {
      help: {
        eyebrow: "帮助中心",
        title: "获取 TopBuilder 使用帮助。",
        copy: "了解如何搜索、比较承包商、收藏主页并发起项目咨询。",
        items: ["按项目类型和地区搜索。", "查看承包商主页和项目参考。", "收藏团队，并在准备好时联系。"],
      },
      verification: {
        eyebrow: "承包商资质",
        title: "承包商审核如何进行。",
        copy: "TopBuilder 会参考公司信息、服务范围、项目记录和主页质量，再展示重点承包商。",
        items: ["审核公司和服务信息。", "检查项目作品和照片质量。", "持续参考屋主反馈。"],
      },
      caseStudies: {
        eyebrow: "案例分享",
        title: "本地承包商项目案例。",
        copy: "浏览装修故事，了解项目范围、材料、时间线和屋主经验。",
        items: ["厨房和浴室翻新。", "地下室装修和加建。", "商业空间改造参考。"],
      },
      contractorQa: {
        eyebrow: "承包商Q&A",
        title: "承包商常见问题。",
        copy: "了解 TopBuilder 的主页、线索、审核和屋主消息如何运作。",
        items: ["创建认证公司主页。", "展示最有代表性的项目作品。", "集中回复屋主项目咨询。"],
      },
      team: {
        eyebrow: "我们的团队",
        title: "为更好的家装项目而设计。",
        copy: "TopBuilder 结合装修经验、产品设计和本地市场研究，帮助屋主更有把握地选择。",
        items: ["以屋主为中心的产品设计。", "本地承包商研究。", "面向中英文用户的双语支持。"],
      },
      privacy: {
        eyebrow: "隐私政策",
        title: "您的信息只用于项目相关体验。",
        copy: "我们使用账户、收藏和项目咨询信息来提供 TopBuilder 服务并改善匹配体验。",
        items: ["我们不会出售个人项目详情。", "您可以在账户中更新资料。", "联系请求只会分享给您选择的承包商。"],
      },
      terms: {
        eyebrow: "服务条款",
        title: "TopBuilder 使用条款。",
        copy: "TopBuilder 帮助屋主和承包商建立联系，但最终项目范围、报价、合同、许可和施工质量由双方确认。",
        items: ["请提供准确的项目和公司信息。", "开工前请确认报价和协议。", "发现可疑或不准确信息请反馈。"],
      },
      contact: {
        eyebrow: "联系我们",
        title: "联系 TopBuilder 团队。",
        copy: "欢迎发送屋主支持、承包商审核、合作或产品反馈相关信息。",
        name: "姓名",
        email: "电子邮件",
        message: "留言",
        submit: "发送消息",
        sent: "消息已发送，我们会尽快联系您。",
      },
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
    id: "adu-design",
    title: { en: "How to plan an ADU that fits your property", zh: "挑选适合设计公司的五个标准" },
    category: "addition",
    image: "./src/assets/project-addition.png",
    date: "2026.05.18",
    minutes: 6,
    views: "2.4k",
    excerpt: {
      en: "A practical guide to layout, permits, privacy, and construction coordination for homeowners considering an accessory dwelling unit.",
      zh: "从户型、许可、隐私和施工协调角度，梳理屋主规划附属住宅单元时需要重点确认的问题。",
    },
    sections: [
      {
        heading: { en: "1. Start with the property constraints", zh: "1. 先确认场地和法规限制" },
        body: {
          en: "Before style decisions, confirm setbacks, lot coverage, parking rules, servicing, and access. These constraints shape the realistic size and placement of an ADU more than inspiration images do.",
          zh: "在讨论风格前，先确认退距、覆盖率、停车、管线接入和出入口条件。这些限制往往比效果图更直接决定 ADU 的尺寸和位置。",
        },
      },
      {
        heading: { en: "2. Design privacy from the beginning", zh: "2. 从一开始就设计隐私关系" },
        body: {
          en: "Think through window placement, outdoor paths, lighting, and sound separation. A good ADU feels independent without making the main home feel exposed.",
          zh: "需要同时考虑窗户位置、室外动线、照明和隔音。好的 ADU 既保持独立，也不会让主屋生活被打扰。",
        },
      },
      {
        heading: { en: "3. Compare build methods early", zh: "3. 尽早比较施工方式" },
        body: {
          en: "Site-built, modular, and hybrid approaches each affect schedule, budget, inspection steps, and finish flexibility. Ask contractors to explain tradeoffs before choosing.",
          zh: "现场施工、模块化和混合方式会影响工期、预算、检查节点和材料灵活度。选择前应让承包商说明各自取舍。",
        },
      },
    ],
  },
  {
    id: "cafe-before-opening",
    title: { en: "Cafe build-out checklist before opening", zh: "咖啡店开业前施工检查清单" },
    category: "commercial",
    image: "./src/assets/project-commercial.png",
    date: "2026.05.09",
    minutes: 5,
    views: "1.8k",
    excerpt: {
      en: "What owners should confirm before handoff, from millwork and lighting to inspections, equipment clearances, and punch-list documentation.",
      zh: "从木作、灯光、检查、设备间距到收尾清单，整理商业空间交付前应重点确认的内容。",
    },
    sections: [
      {
        heading: { en: "1. Confirm inspection dependencies", zh: "1. 确认检查和验收依赖" },
        body: {
          en: "Commercial projects can stall when inspections are sequenced late. Map electrical, plumbing, fire, and health requirements before finish work closes walls and ceilings.",
          zh: "商业项目常因检查顺序安排太晚而延误。墙面和天花封板前，应确认电、水、消防和卫生相关要求。",
        },
      },
      {
        heading: { en: "2. Protect the opening-week workflow", zh: "2. 保护开业第一周动线" },
        body: {
          en: "Test staff movement, counter depth, storage access, and cleaning zones. Small workflow issues become expensive once equipment is installed.",
          zh: "需要测试员工动线、吧台深度、储物位置和清洁区域。设备安装后，小动线问题也可能变得很昂贵。",
        },
      },
    ],
  },
  {
    id: "kitchen-storage",
    title: { en: "Small kitchen, smarter storage", zh: "小厨房的高效收纳" },
    category: "kitchen",
    image: "./src/assets/hero-renovation.png",
    date: "2026.04.28",
    minutes: 4,
    views: "980",
    excerpt: {
      en: "How cabinet planning, appliance placement, and island sizing can make a compact kitchen easier to use every day.",
      zh: "通过橱柜规划、电器位置和岛台尺寸，让紧凑厨房在日常使用中更顺手。",
    },
    sections: [
      {
        heading: { en: "1. Prioritize daily reach zones", zh: "1. 优先规划日常拿取区" },
        body: {
          en: "Store frequently used items between shoulder and knee height, and reserve deep or high cabinets for seasonal pieces.",
          zh: "高频使用物品应放在肩部到膝盖之间的位置，较深或较高柜体更适合收纳季节性用品。",
        },
      },
      {
        heading: { en: "2. Leave enough landing space", zh: "2. 留出足够操作台面" },
        body: {
          en: "Small kitchens need clear landing zones beside the sink, range, and refrigerator. These surfaces make cooking feel less crowded.",
          zh: "小厨房也需要在水槽、炉灶和冰箱旁留出临时放置区，这会明显改善烹饪体验。",
        },
      },
    ],
  },
  {
    id: "basement-suite",
    title: { en: "Basement suite planning checklist", zh: "地下室套房规划清单" },
    category: "basement",
    image: "./src/assets/project-basement.png",
    date: "2026.04.10",
    minutes: 5,
    views: "740",
    excerpt: {
      en: "A homeowner checklist for ceiling height, egress, moisture control, sound separation, and permit conversations.",
      zh: "面向屋主的地下室规划清单，涵盖层高、逃生窗、防潮、隔音和许可沟通。",
    },
    sections: [
      {
        heading: { en: "1. Start with safety requirements", zh: "1. 先确认安全要求" },
        body: {
          en: "Egress, smoke alarms, ventilation, and stair conditions should be reviewed before finishes are priced.",
          zh: "在报价装修材料前，应先确认逃生、烟雾报警、通风和楼梯条件。",
        },
      },
    ],
  },
  {
    id: "bathroom-waterproofing",
    title: { en: "Bathroom waterproofing questions to ask", zh: "浴室防水需要问清的问题" },
    category: "bathroom",
    image: "./src/assets/project-bathroom.png",
    date: "2026.03.22",
    minutes: 4,
    views: "620",
    excerpt: {
      en: "Questions that help homeowners compare waterproofing scope, tile prep, slope, drains, and warranty coverage.",
      zh: "帮助屋主比较防水范围、瓷砖基层、坡度、地漏和保修内容的问题清单。",
    },
    sections: [
      {
        heading: { en: "1. Ask what is behind the tile", zh: "1. 先问瓷砖背后的系统" },
        body: {
          en: "The visible tile matters, but substrate, membrane, corners, and drain detailing usually determine long-term durability.",
          zh: "表面瓷砖重要，但基层、防水膜、阴阳角和地漏细节更决定长期耐用性。",
        },
      },
    ],
  },
  {
    id: "whole-home-budget",
    title: { en: "How to set a realistic whole-home renovation budget", zh: "如何制定合理的全屋翻新预算" },
    category: "home",
    image: "./src/assets/hero-renovation.png",
    date: "2026.03.11",
    minutes: 7,
    views: "1.1k",
    excerpt: {
      en: "A practical budgeting framework for scope, materials, contingency, and sequencing when renovating more than one room.",
      zh: "面向多空间翻新的预算框架，涵盖范围、材料、预备金和施工顺序。",
    },
    sections: [
      {
        heading: { en: "1. Separate must-haves from upgrades", zh: "1. 区分必需项和升级项" },
        body: {
          en: "Start with code, safety, structural, and moisture-related work before allocating budget to finish upgrades.",
          zh: "先处理规范、安全、结构和防潮相关内容，再把预算分配到材料和效果升级。",
        },
      },
    ],
  },
  {
    id: "permit-timeline",
    title: { en: "Permit timelines homeowners should expect", zh: "屋主应了解的许可时间线" },
    category: "addition",
    image: "./src/assets/project-addition.png",
    date: "2026.02.26",
    minutes: 5,
    views: "860",
    excerpt: {
      en: "What usually affects permit timing, from drawings and zoning review to revisions and inspection scheduling.",
      zh: "梳理图纸、分区审查、修改和检查排期如何影响许可时间。",
    },
    sections: [
      {
        heading: { en: "1. Build review time into the plan", zh: "1. 把审查时间纳入计划" },
        body: {
          en: "Permit time should be part of the project schedule, not an afterthought added after contractor selection.",
          zh: "许可时间应从一开始纳入项目计划，而不是选好承包商后才临时补上。",
        },
      },
    ],
  },
  {
    id: "tile-selection",
    title: { en: "Choosing tile that works with real-life maintenance", zh: "如何选择更好打理的瓷砖" },
    category: "bathroom",
    image: "./src/assets/project-bathroom.png",
    date: "2026.02.12",
    minutes: 4,
    views: "690",
    excerpt: {
      en: "A guide to tile size, grout lines, slip resistance, and maintenance expectations for bathrooms and entries.",
      zh: "从尺寸、美缝、防滑和清洁维护角度选择适合浴室和玄关的瓷砖。",
    },
    sections: [
      {
        heading: { en: "1. Ask about grout and cleaning", zh: "1. 先问清美缝和清洁" },
        body: {
          en: "The tile may be beautiful, but grout width, finish texture, and cleaning routine decide how it feels after move-in.",
          zh: "瓷砖是否好看之外，美缝宽度、表面质感和清洁方式决定入住后的体验。",
        },
      },
    ],
  },
  {
    id: "office-fitout",
    title: { en: "Office fit-out details that improve handoff", zh: "提升办公室交付质量的施工细节" },
    category: "commercial",
    image: "./src/assets/project-commercial.png",
    date: "2026.01.30",
    minutes: 6,
    views: "540",
    excerpt: {
      en: "Key items to confirm before a commercial space is handed over, including lighting scenes, data drops, and deficiency tracking.",
      zh: "商业空间交付前需要确认灯光场景、网络点位和缺陷清单等关键事项。",
    },
    sections: [
      {
        heading: { en: "1. Document deficiencies clearly", zh: "1. 清晰记录缺陷清单" },
        body: {
          en: "A shared deficiency list keeps owners, contractors, and property managers aligned before occupancy.",
          zh: "共享缺陷清单可以让业主、承包商和物业在入驻前保持一致。",
        },
      },
    ],
  },
  {
    id: "basement-lighting",
    title: { en: "Lighting ideas for a brighter basement", zh: "让地下室更明亮的照明思路" },
    category: "basement",
    image: "./src/assets/project-basement.png",
    date: "2026.01.18",
    minutes: 3,
    views: "510",
    excerpt: {
      en: "How layered lighting, reflective finishes, and fixture placement make lower-level rooms feel more comfortable.",
      zh: "通过分层照明、反光材质和灯具位置，让地下空间更舒适。",
    },
    sections: [
      {
        heading: { en: "1. Layer the lighting", zh: "1. 做好分层照明" },
        body: {
          en: "Use general, task, and accent lighting together so the basement does not rely on one flat ceiling grid.",
          zh: "结合基础照明、功能照明和氛围照明，避免地下室只依赖单一顶灯。",
        },
      },
    ],
  },
  {
    id: "contractor-estimates",
    title: { en: "How to compare contractor estimates fairly", zh: "如何公平比较承包商报价" },
    category: "home",
    image: "./src/assets/hero-renovation.png",
    date: "2025.12.20",
    minutes: 5,
    views: "1.3k",
    excerpt: {
      en: "Look beyond the final number by comparing scope assumptions, allowances, exclusions, timing, and communication quality.",
      zh: "不要只看总价，还要比较范围假设、暂定金额、排除项、时间安排和沟通质量。",
    },
    sections: [
      {
        heading: { en: "1. Compare scope line by line", zh: "1. 逐项比较范围" },
        body: {
          en: "Two estimates can look different because they include different assumptions. Ask each contractor to clarify inclusions and exclusions.",
          zh: "两份报价差异可能来自假设不同。应让承包商明确包含和不包含的内容。",
        },
      },
    ],
  },
  {
    id: "kitchen-island-size",
    title: { en: "Kitchen island sizes that actually work", zh: "真正好用的厨房岛台尺寸" },
    category: "kitchen",
    image: "./src/assets/hero-renovation.png",
    date: "2025.12.02",
    minutes: 4,
    views: "780",
    excerpt: {
      en: "A quick guide to walkway clearance, seating overhang, storage depth, and appliance conflicts around kitchen islands.",
      zh: "快速了解岛台周边通道、座位挑出、储物深度和电器冲突。",
    },
    sections: [
      {
        heading: { en: "1. Keep walkways comfortable", zh: "1. 保持舒适通道" },
        body: {
          en: "An island that is too large can make a kitchen harder to use. Confirm clearances before committing to cabinetry.",
          zh: "岛台过大会让厨房更难用。定制柜体前应先确认通道尺寸。",
        },
      },
    ],
  },
];

const footerGroups = [
  {
    key: "customers",
    links: [
      { index: 1, route: "community" },
      { index: 2, route: "search" },
      { index: 3, route: "community" },
      { index: 4, route: "help" },
    ],
  },
  {
    key: "pros",
    links: [
      { index: 1, route: "join" },
      { index: 2, route: "verification" },
      { index: 3, route: "case-studies" },
      { index: 4, route: "contractor-qa" },
    ],
  },
  {
    key: "company",
    links: [
      { index: 1, route: "team" },
      { index: 2, route: "privacy" },
      { index: 3, route: "terms" },
      { index: 4, route: "contact" },
    ],
  },
  {
    key: "language",
    links: [
      { index: 1, lang: "en" },
      { index: 2, lang: "zh" },
    ],
  },
];

const state = {
  route: window.location.hash.replace("#", "") || "home",
  lang: localStorage.getItem("topbuilder:lang") || "en",
  service: "",
  postal: "",
  sort: "recommended",
  selected: contractors[0],
  selectedPost: posts[0],
  communityCategory: "",
  communityPage: 1,
  authMode: "login",
  accountTab: "saved",
  profileTab: "projects",
  menuOpen: false,
  searchOpen: false,
  passwordVisible: false,
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

function getSearchHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem("topbuilder:search-history") || "[]");
    return Array.isArray(saved) ? saved.slice(0, 3) : [];
  } catch {
    return [];
  }
}

function addSearchHistory(service, postal) {
  if (!service && !postal) return;
  const label = [service ? t(`services.${service}`) : t("search.servicePlaceholder"), postal].filter(Boolean).join(" · ");
  const nextItem = { service, postal, label };
  const existing = getSearchHistory().filter((item) => item.label !== label);
  localStorage.setItem("topbuilder:search-history", JSON.stringify([nextItem, ...existing].slice(0, 3)));
}

function icon(name) {
  const paths = {
    search: "<circle cx='11' cy='11' r='7'></circle><path d='m20 20-4.2-4.2'></path>",
    home: "<path d='m3 11 9-8 9 8'></path><path d='M5 10v10h14V10'></path><path d='M9 20v-6h6v6'></path>",
    pin: "<path d='M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z'></path><circle cx='12' cy='9' r='2.5'></circle>",
    user: "<circle cx='12' cy='8' r='4'></circle><path d='M4 21a8 8 0 0 1 16 0'></path>",
    briefcase: "<path d='M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1'></path><rect x='3' y='6' width='18' height='14' rx='2'></rect>",
    globe: "<circle cx='12' cy='12' r='9'></circle><path d='M3 12h18'></path><path d='M12 3a14 14 0 0 1 0 18'></path><path d='M12 3a14 14 0 0 0 0 18'></path>",
    bell: "<path d='M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9'></path><path d='M10 21h4'></path>",
    chevron: "<path d='m6 9 6 6 6-6'></path>",
    eye: "<path d='M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z'></path><circle cx='12' cy='12' r='3'></circle>",
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
    ["search", "nav.findContractors", true],
    ["community", "nav.guideCommunity", true],
    ["home", "nav.about", false],
  ];
  return `
    <header class="site-header">
      <div class="nav-shell">
        ${Logo()}
        <nav class="main-nav" aria-label="Primary navigation">
          ${links.map(([route, label, hasMenu]) => `<button data-route="${route}"><span>${t(label)}</span>${hasMenu ? icon("chevron") : ""}</button>`).join("")}
        </nav>
        <div class="nav-actions">
          <button class="icon-only utility" data-action="toggle-language" aria-label="${t("otherLanguage")}">${icon("globe")}</button>
          <button class="icon-only utility" type="button" aria-label="${t("nav.notifications")}">${icon("bell")}</button>
          <button class="icon-only utility" data-route="login" aria-label="${t("nav.account")}">${icon("user")}</button>
          <button class="primary compact join-button" data-route="join">${t("nav.join")}</button>
          <button class="icon-only menu-toggle" data-action="toggle-menu" aria-label="${t("nav.menu")}">${icon("menu")}</button>
        </div>
      </div>
      ${
        state.menuOpen
          ? `<div class="mobile-menu">
              ${links.map(([route, label, hasMenu]) => `<button data-route="${route}"><span>${t(label)}</span>${hasMenu ? icon("chevron") : ""}</button>`).join("")}
              <button data-action="toggle-language">${icon("globe")}${t("otherLanguage")}</button>
              <button data-route="login">${icon("user")}${t("nav.login")}</button>
              <button class="primary" data-route="join">${t("nav.join")}</button>
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

function HomeSearchBox() {
  const history = getSearchHistory();
  const suggestions = state.service
    ? serviceKeys.filter((key) => key !== state.service)
    : serviceKeys.slice(1, 5);
  return `
    <form class="home-search-panel ${state.searchOpen ? "is-open" : ""}" data-form="search">
      <div class="home-search-row">
        <label>
          ${icon("search")}
          <input type="hidden" name="service" value="${state.service}" />
          <button class="home-service-trigger" type="button" aria-label="${t("search.service")}">
            <span>${state.service ? t(`services.${state.service}`) : t("search.servicePlaceholder")}</span>
            ${icon("chevron")}
          </button>
        </label>
        <label>
          ${icon("pin")}
          <input name="postal" value="${state.postal}" placeholder="90017" />
        </label>
        <button class="home-search-submit" type="submit" aria-label="${t("search.button")}">${icon("search")}</button>
      </div>
      <div class="home-search-dropdown">
        ${
          history.length
            ? `<div class="search-history">
                <span>${state.lang === "en" ? "Recent searches" : "历史记录"}</span>
                <button type="button" data-action="clear-history">${state.lang === "en" ? "Clear" : "清空"}</button>
                <div>${history.map((item) => `<button type="button" data-history="${item.service}" data-postal="${item.postal}">${item.label}</button>`).join("")}</div>
              </div>`
            : `<p class="empty-history">${state.lang === "en" ? "No recent searches" : "暂无历史记录"}</p>`
        }
        <div class="suggestion-list">
          ${suggestions.map((key) => `<button type="button" data-search-service="${key}">${t(`services.${key}`)}</button>`).join("")}
        </div>
      </div>
    </form>
  `;
}

function HomePage() {
  return `
    <main>
      <section class="home-hero">
        <div class="home-hero-copy">
          <p class="eyebrow">${t("hero.eyebrow")}</p>
          <h1>${t("home.heroTitle")}</h1>
          <p>${t("home.heroCopy")}</p>
          ${HomeSearchBox()}
        </div>
        <div class="home-hero-media">
          <img src="./src/assets/hero-renovation.png" alt="${t("hero.imageCaption")}" />
        </div>
      </section>

      ${ServiceTiles()}
      ${ExpertBand()}
      ${ProjectReferences()}
      ${ReviewSection()}
      ${PhotoCta()}
      ${FaqSection()}
      ${ServicesSection()}
    </main>
  `;
}

function ServiceTiles() {
  const icons = ["home", "briefcase", "search", "pin", "star"];
  return `
    <section class="quick-services" aria-label="${t("home.serviceMatch")}">
      ${serviceKeys.slice(0, 5).map((key, index) => `
        <button class="quick-service" data-service="${key}">
          ${icon(icons[index])}
          <span>${t(`services.${key}`)}</span>
        </button>
      `).join("")}
    </section>
  `;
}

function ExpertBand() {
  return `
    <section class="expert-band">
      <div class="expert-copy">
        <p class="eyebrow">${t("home.howTitle")}</p>
        <h2>${t("home.expertTitle")}</h2>
        <p>${t("home.expertCopy")}</p>
        <div class="stats-row compact-stats">
          <div><strong>1:1</strong><span>${t("card.contact")}</span></div>
          <div><strong>200+</strong><span>${t("stats.contractors")}</span></div>
          <div><strong>4000+</strong><span>${t("stats.reviews")}</span></div>
        </div>
      </div>
      <aside class="expert-card">
        <div class="expert-portrait">
          <img src="./src/assets/advisor-portrait.png" alt="${t("home.expertName")}" />
        </div>
        <h3>${t("home.expertName")}</h3>
        <p>${t("home.expertRole")}</p>
      </aside>
    </section>
  `;
}

function ProjectReferences() {
  const featured = ["kitchen", "bathroom", "addition"];
  return `
    <section class="section-shell compact-section">
      <div class="section-head inline">
        <div>
          <p class="eyebrow">${t("home.projectsTitle")}</p>
          <h2>${t("home.communityTitle")}</h2>
        </div>
        <button class="ghost" data-route="community">${t("hero.secondary")}</button>
      </div>
      <div class="project-reference-grid">
        ${featured.map((key) => `
          <article class="reference-card">
            <img src="${projectImages[key]}" alt="${t(`services.${key}`)}" />
            <div>
              <small>${t(`services.${key}`)}</small>
              <h3>${t(`services.${key}`)}</h3>
              <p>${state.lang === "en" ? "Finished project reference with material, scope, and timeline details." : "完工项目参考，包含材料、范围和时间信息。"}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function ServicesSection() {
  return `
    <section class="section-shell compact-section">
      <div class="section-head">
        <p class="eyebrow">${t("home.contractorsTitle")}</p>
        <h2>${t("search.title")}</h2>
      </div>
      <div class="home-contractor-list">
        ${contractors.slice(0, 3).map(ContractorMiniCard).join("")}
      </div>
    </section>
  `;
}

function ContractorMiniCard(contractor) {
  return `
    <article class="mini-contractor">
      <img src="${projectImages[contractor.services[0]]}" alt="${contractor.name}" />
      <div>
        <h3>${contractor.name}</h3>
        <p>${localized(contractor.title)} · ${contractor.city}</p>
        <span>${icon("star")}${contractor.rating.toFixed(1)} · ${contractor.reviews}</span>
      </div>
      <button class="ghost compact" data-contractor="${contractor.id}">${t("card.view")}</button>
    </article>
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
    <section class="section-shell compact-section">
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

function PhotoCta() {
  return `
    <section class="photo-cta">
      <img src="./src/assets/project-addition.png" alt="${t("home.ctaTitle")}" />
      <div>
        <h2>${t("home.ctaTitle")}</h2>
        <p>${t("home.ctaCopy")}</p>
        <button class="primary" data-route="search">${t("hero.cta")}</button>
      </div>
    </section>
  `;
}

function FaqSection() {
  return `
    <section class="faq-home">
      <div class="section-head">
        <p class="eyebrow">${t("home.faqTitle")}</p>
        <h2>${t("profile.faq")}</h2>
      </div>
      <div class="faq-list">
        ${t("home.faqItems").map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}
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
        <button class="ghost" data-route="community">${t("nav.guideCommunity")}</button>
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
      <img class="story-photo" src="${post.image || projectImages[post.category]}" alt="${localized(post.title)}" />
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
        <p class="eyebrow">${t("nav.findContractors")}</p>
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
    <main class="auth-page auth-screen">
      <button class="auth-back" data-route="home" aria-label="${t("auth.back")}">${icon("arrow")}</button>
      <section class="auth-panel auth-card">
        <img class="auth-logo-mark" src="./src/assets/logo-mark.svg" alt="${t("brandAlt")}" />
        <h1>${isLogin ? t("auth.loginTitle") : t("auth.registerTitle")}</h1>
        <form class="auth-form" data-form="auth">
          ${!isLogin ? `<input class="auth-field" name="name" placeholder="${t("auth.name")}" required />` : ""}
          <input class="auth-field" name="email" type="email" value="${isLogin ? "topbuilder@gmail.com" : ""}" placeholder="${t("auth.email")}" required />
          <label class="password-field">
            <input name="password" type="${state.passwordVisible ? "text" : "password"}" value="${isLogin ? "topbuilder" : ""}" placeholder="${t("auth.password")}" required />
            <button type="button" data-action="toggle-password" aria-label="${state.passwordVisible ? t("auth.hidePassword") : t("auth.showPassword")}">${icon("eye")}</button>
          </label>
          ${!isLogin ? `<input class="auth-field" name="confirm" type="${state.passwordVisible ? "text" : "password"}" placeholder="${t("auth.confirmPassword")}" required />` : ""}
          ${
            isLogin
              ? `<div class="auth-meta-row">
                  <label><input type="checkbox" /> <span>${t("auth.remember")}</span></label>
                  <button class="link-button" type="button" data-action="reset">${t("auth.forgot")}</button>
                </div>`
              : `<label class="check-row auth-agree"><input type="checkbox" required /><span>${t("auth.agree")}</span></label>`
          }
          <button class="primary auth-submit" type="submit">${isLogin ? t("auth.login") : t("auth.register")}</button>
        </form>
        <div class="auth-divider"></div>
        <button class="google-button" type="button"><span>G</span>${t("auth.google")}</button>
        <p class="auth-switch">
          ${isLogin ? t("auth.noAccount") : t("auth.hasAccount")}
          <button type="button" data-auth-mode="${isLogin ? "register" : "login"}">${isLogin ? t("auth.freeSignup") : t("auth.login")}</button>
        </p>
        <p class="auth-terms">${t("auth.termsHint")}</p>
      </section>
      <aside class="auth-illustration"><img src="./src/assets/auth-illustration.png" alt="" /></aside>
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
  const visiblePosts = state.communityCategory ? posts.filter((post) => post.category === state.communityCategory) : posts;
  const feedPosts = visiblePosts.length ? visiblePosts : posts;
  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(feedPosts.length / pageSize));
  state.communityPage = Math.min(Math.max(state.communityPage, 1), totalPages);
  const pagePosts = feedPosts.slice((state.communityPage - 1) * pageSize, state.communityPage * pageSize);
  return `
    <main class="community-page">
      <aside class="community-sidebar">
        <section class="community-panel">
          <h2>${t("community.categoriesTitle")}</h2>
          ${serviceKeys.slice(0, 5).map((key) => `<button class="${state.communityCategory === key ? "active" : ""}" data-community-category="${key}"><span>${t(`services.${key}`)}</span>${icon("chevron")}</button>`).join("")}
        </section>
        <section class="community-panel featured-panel">
          <h2>${t("community.featuredTitle")}</h2>
          <img src="${posts[1].image}" alt="${localized(posts[1].title)}" />
          <p>${localized(posts[1].excerpt)}</p>
        </section>
      </aside>
      <section class="community-feed">
        <div class="community-feed-head">
          <div>
            <p class="eyebrow">${t("community.eyebrow")}</p>
            <h1>${t("community.listTitle")}</h1>
          </div>
          <select class="field" aria-label="${t("community.sort")}">
            <option>${t("community.sort")}</option>
          </select>
        </div>
        <div class="community-list">
          ${pagePosts.map((post, index) => CommunityListCard(post, index)).join("")}
        </div>
        <nav class="pagination" aria-label="Pagination">
          <button data-community-step="-1" ${state.communityPage === 1 ? "disabled" : ""}>${t("community.previous")}</button>
          ${Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => `<button class="${state.communityPage === page ? "active" : ""}" data-community-page="${page}">${page}</button>`).join("")}
          <button data-community-step="1" ${state.communityPage === totalPages ? "disabled" : ""}>${t("community.next")}</button>
        </nav>
      </section>
    </main>
  `;
}

function CommunityListCard(post, index) {
  return `
    <article class="community-list-card">
      <button class="community-thumb" data-post="${post.id}" aria-label="${localized(post.title)}">
        <img src="${post.image}" alt="${localized(post.title)}" />
      </button>
      <div>
        <button class="article-title-button" data-post="${post.id}"><h2>${localized(post.title)}</h2></button>
        <p>${localized(post.excerpt)}</p>
        <div class="article-meta">
          <span>${t(`services.${post.category}`)}</span>
          <span>${post.date}</span>
          <span>${post.minutes} ${t("community.minutes")}</span>
        </div>
        <button class="link-button article-read" data-post="${post.id}">${t("community.readMore")}</button>
      </div>
    </article>
  `;
}

function CommunityDetailPage() {
  const post = state.selectedPost || posts[0];
  const related = posts.filter((item) => item.id !== post.id).slice(0, 5);
  return `
    <main class="article-page">
      <article class="article-shell">
        <div class="article-breadcrumb">
          <button data-route="home">${t("community.breadcrumbHome")}</button>
          <span>/</span>
          <button data-route="community">${t("community.breadcrumbAdu")}</button>
          <span>/</span>
          <strong>${localized(post.title)}</strong>
        </div>
        <header class="article-header">
          <h1>${localized(post.title)}</h1>
          <div class="article-meta centered">
            <span>${t("community.author")}</span>
            <span>${post.date}</span>
            <span>${post.minutes} ${t("community.minutes")}</span>
            <span>${post.views} ${t("community.views")}</span>
          </div>
        </header>
        <p class="article-lede">${localized(post.excerpt)}</p>
        <img class="article-hero-image" src="${post.image}" alt="${localized(post.title)}" />
        ${post.sections.map((section, index) => `
          <section class="article-section">
            <h2>${localized(section.heading)}</h2>
            <p>${localized(section.body)} ${localized(section.body)}</p>
            ${index === 1 ? `<img src="./src/assets/hero-renovation.png" alt="${t("services.kitchen")}" />` : ""}
          </section>
        `).join("")}
        <div class="article-tags">
          ${[t(`services.${post.category}`), "TopBuilder", t("community.eyebrow")].map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </article>
      <aside class="related-rail">
        <h2>${t("community.relatedTitle")}</h2>
        ${related.map((item, index) => `
          <button class="related-card" data-post="${item.id}">
            ${index === 0 ? `<img src="${item.image}" alt="${localized(item.title)}" />` : ""}
            <span>${index + 1}</span>
            <strong>${localized(item.title)}</strong>
          </button>
        `).join("")}
      </aside>
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

function InfoPage(key) {
  const page = t(`info.${key}`);
  if (!page || typeof page === "string") return HomePage();
  const isContact = key === "contact";
  return `
    <main class="page-shell info-page">
      <section class="page-title">
        <p class="eyebrow">${page.eyebrow}</p>
        <h1>${page.title}</h1>
        <p>${page.copy}</p>
      </section>
      ${
        isContact
          ? `<form class="content-panel form-stack info-form" data-form="contact">
              <input class="field" name="name" placeholder="${page.name}" required />
              <input class="field" name="email" type="email" placeholder="${page.email}" required />
              <textarea class="field" name="message" placeholder="${page.message}" required></textarea>
              <button class="primary">${page.submit}</button>
            </form>`
          : `<section class="info-grid">
              ${page.items.map((item, index) => `
                <article class="content-panel info-card">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <p>${item}</p>
                </article>
              `).join("")}
            </section>`
      }
    </main>
  `;
}

function Footer() {
  function footerAttrs(link) {
    if (link.route) return `data-route="${link.route}"`;
    if (link.lang) return `data-set-language="${link.lang}" class="${state.lang === link.lang ? "active" : ""}"`;
    return "";
  }
  return `
    <footer class="site-footer">
      <div class="footer-brand">${Logo()}<p>${t("hero.copy")}</p></div>
      ${footerGroups.map((groupConfig) => {
        const group = t(`footer.${groupConfig.key}`);
        return `<div><h2>${group[0]}</h2>${groupConfig.links.map((link) => `<button ${footerAttrs(link)}>${group[link.index]}</button>`).join("")}</div>`;
      }).join("")}
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
    article: CommunityDetailPage,
    join: JoinPage,
    help: () => InfoPage("help"),
    verification: () => InfoPage("verification"),
    "case-studies": () => InfoPage("caseStudies"),
    "contractor-qa": () => InfoPage("contractorQa"),
    team: () => InfoPage("team"),
    privacy: () => InfoPage("privacy"),
    terms: () => InfoPage("terms"),
    contact: () => InfoPage("contact"),
  };
  const page = (routes[state.route] || HomePage)();
  app.innerHTML = state.route === "login" ? `${page}${Toast()}` : `${Nav()}${page}${Footer()}${Toast()}`;
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

  app.querySelectorAll("[data-post]").forEach((button) => {
    button.addEventListener("click", () => {
      const post = posts.find((item) => item.id === button.dataset.post);
      if (post) {
        state.selectedPost = post;
        setRoute("article");
      }
    });
  });

  app.querySelectorAll("[data-community-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.communityCategory = state.communityCategory === button.dataset.communityCategory ? "" : button.dataset.communityCategory;
      state.communityPage = 1;
      render();
    });
  });

  app.querySelectorAll("[data-community-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.communityPage = Number(button.dataset.communityPage) || 1;
      render();
    });
  });

  app.querySelectorAll("[data-community-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.communityPage += Number(button.dataset.communityStep) || 0;
      render();
    });
  });

  app.querySelectorAll("[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      state.service = button.dataset.service;
      setRoute("search");
    });
  });

  app.querySelectorAll("[data-search-service]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.service = button.dataset.searchService;
      state.searchOpen = true;
      render();
    });
  });

  app.querySelectorAll("[data-form='search']").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      state.service = formData.get("service") || "";
        state.postal = formData.get("postal") || "";
        addSearchHistory(state.service, state.postal);
        state.searchOpen = false;
        setRoute("search");
      });
  });

  app.querySelectorAll(".home-search-panel").forEach((panel) => {
    panel.addEventListener("focusin", () => {
      state.searchOpen = true;
      panel.classList.add("is-open");
    });
    panel.addEventListener("click", () => {
      state.searchOpen = true;
      panel.classList.add("is-open");
    });
  });

  app.querySelectorAll("[data-action='clear-history']").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.removeItem("topbuilder:search-history");
      render();
    });
  });

  app.querySelectorAll("[data-history]").forEach((button) => {
    button.addEventListener("click", () => {
      state.service = button.dataset.history || "";
      state.postal = button.dataset.postal || "";
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

  app.querySelectorAll("[data-set-language]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.setLanguage;
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
    state.passwordVisible = false;
    render();
  }));

  app.querySelectorAll("[data-action='toggle-password']").forEach((button) => button.addEventListener("click", () => {
    state.passwordVisible = !state.passwordVisible;
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

  app.querySelectorAll("[data-form='contact']").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    setToast(t("info.contact.sent"));
    form.reset();
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
