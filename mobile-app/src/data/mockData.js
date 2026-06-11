export const services = [
  { id: "home", label: { en: "Home renovation", zh: "住宅装修" }, icon: "home-outline" },
  { id: "kitchen", label: { en: "Kitchen remodel", zh: "厨房翻新" }, icon: "restaurant-outline" },
  { id: "bathroom", label: { en: "Bathroom remodel", zh: "浴室改造" }, icon: "water-outline" },
  { id: "basement", label: { en: "Basement finish", zh: "地下室装修" }, icon: "layers-outline" },
  { id: "addition", label: { en: "New build & addition", zh: "新建与加建" }, icon: "business-outline" },
  { id: "commercial", label: { en: "Commercial project", zh: "商业项目" }, icon: "briefcase-outline" }
];

export const contractors = [
  {
    id: "m2-tile",
    name: "M2 Tile & Stone",
    city: "Markham",
    rating: 5.0,
    reviews: 128,
    projects: 14,
    response: "48h",
    services: ["kitchen", "bathroom", "commercial"],
    image: "bathroom",
    title: { en: "Tile and stone specialist", zh: "瓷砖与石材承包商" },
    blurb: {
      en: "Detail-focused tile, stone, and waterproofing work for kitchens, bathrooms, and polished commercial spaces.",
      zh: "专注瓷砖、石材和湿区防水，适合厨房、浴室和商业空间。"
    },
    tags: {
      en: ["Licensed", "Insured", "48h response"],
      zh: ["持牌", "保险齐全", "48小时响应"]
    }
  },
  {
    id: "northline",
    name: "Northline Build Co.",
    city: "Toronto",
    rating: 4.9,
    reviews: 94,
    projects: 12,
    response: "1 day",
    services: ["addition", "basement", "home"],
    image: "addition",
    title: { en: "Addition and structural renovation", zh: "加建与结构改造" },
    blurb: {
      en: "A practical team for additions, basement suites, and layout changes that need careful coordination.",
      zh: "适合加建、地下室套房和格局改造等需要协调管理的项目。"
    },
    tags: {
      en: ["Permit support", "Project management", "Structural"],
      zh: ["许可协助", "项目管理", "结构工程"]
    }
  },
  {
    id: "clearspace",
    name: "Clearspace Renovation",
    city: "Richmond Hill",
    rating: 4.8,
    reviews: 76,
    projects: 18,
    response: "2 days",
    services: ["home", "kitchen", "bathroom"],
    image: "hero",
    title: { en: "Whole-home renovation team", zh: "全屋翻新团队" },
    blurb: {
      en: "Clear scopes, clean finishes, and stage-by-stage updates for homeowners managing a large renovation.",
      zh: "清晰报价、精细收口和阶段同步，适合大型住宅装修。"
    },
    tags: {
      en: ["Design-build", "Clear budget", "Bilingual"],
      zh: ["设计施工", "预算透明", "双语服务"]
    }
  },
  {
    id: "oakridge",
    name: "Oakridge Commercial",
    city: "Mississauga",
    rating: 4.7,
    reviews: 63,
    projects: 9,
    response: "3 days",
    services: ["commercial", "home", "addition"],
    image: "commercial",
    title: { en: "Commercial build-out contractor", zh: "商业空间施工" },
    blurb: {
      en: "Commercial renovations for offices, retail, and hospitality spaces with tidy handoff documentation.",
      zh: "覆盖办公室、零售和餐饮空间改造，并提供清晰交付资料。"
    },
    tags: {
      en: ["Retail", "Office", "After-hours"],
      zh: ["零售空间", "办公室", "夜间施工"]
    }
  }
];

export const posts = [
  {
    id: "adu-design",
    category: "addition",
    image: "addition",
    date: "2026.05.18",
    minutes: 6,
    views: "2.4k",
    title: { en: "How to plan an ADU that fits your property", zh: "挑选适合设计公司的五个标准" },
    excerpt: {
      en: "A practical guide to layout, permits, privacy, and construction coordination for homeowners considering an accessory dwelling unit.",
      zh: "从户型、许可、隐私和施工协调角度，梳理屋主规划附属住宅单元时需要重点确认的问题。"
    },
    sections: [
      {
        heading: { en: "Start with the property constraints", zh: "先确认场地和法规限制" },
        body: {
          en: "Confirm setbacks, lot coverage, parking, servicing, and access before style decisions. These limits shape realistic size and placement.",
          zh: "在讨论风格前，先确认退距、覆盖率、停车、管线接入和出入口条件。"
        }
      },
      {
        heading: { en: "Design privacy from the beginning", zh: "从一开始就设计隐私关系" },
        body: {
          en: "Think through window placement, outdoor paths, lighting, and sound separation so the new unit feels independent.",
          zh: "需要同时考虑窗户位置、室外动线、照明和隔音，让新空间保持独立。"
        }
      }
    ]
  },
  {
    id: "cafe-before-opening",
    category: "commercial",
    image: "commercial",
    date: "2026.05.09",
    minutes: 5,
    views: "1.8k",
    title: { en: "Cafe build-out checklist before opening", zh: "咖啡店开业前施工检查清单" },
    excerpt: {
      en: "What owners should confirm before handoff, from millwork and lighting to inspections, equipment clearances, and punch-list documentation.",
      zh: "从木作、灯光、检查、设备间距到收尾清单，整理商业空间交付前应重点确认的内容。"
    },
    sections: [
      {
        heading: { en: "Confirm inspection dependencies", zh: "确认检查和验收依赖" },
        body: {
          en: "Map electrical, plumbing, fire, and health requirements before finish work closes walls and ceilings.",
          zh: "墙面和天花封板前，应确认电、水、消防和卫生相关要求。"
        }
      }
    ]
  },
  {
    id: "kitchen-storage",
    category: "kitchen",
    image: "hero",
    date: "2026.04.28",
    minutes: 4,
    views: "980",
    title: { en: "Small kitchen, smarter storage", zh: "小厨房的高效收纳" },
    excerpt: {
      en: "How cabinet planning, appliance placement, and island sizing can make a compact kitchen easier to use every day.",
      zh: "通过橱柜规划、电器位置和岛台尺寸，让紧凑厨房在日常使用中更顺手。"
    },
    sections: [
      {
        heading: { en: "Prioritize daily reach zones", zh: "优先规划日常拿取区" },
        body: {
          en: "Store frequently used items between shoulder and knee height, and reserve deep cabinets for seasonal pieces.",
          zh: "高频使用物品应放在肩部到膝盖之间的位置，较深柜体适合季节性用品。"
        }
      }
    ]
  },
  {
    id: "basement-suite",
    category: "basement",
    image: "basement",
    date: "2026.04.10",
    minutes: 5,
    views: "740",
    title: { en: "Basement suite planning checklist", zh: "地下室套房规划清单" },
    excerpt: {
      en: "A homeowner checklist for ceiling height, egress, moisture control, sound separation, and permit conversations.",
      zh: "面向屋主的地下室规划清单，涵盖层高、逃生窗、防潮、隔音和许可沟通。"
    },
    sections: [
      {
        heading: { en: "Start with safety requirements", zh: "先确认安全要求" },
        body: {
          en: "Egress, smoke alarms, ventilation, and stair conditions should be reviewed before finishes are priced.",
          zh: "在报价装修材料前，应先确认逃生、烟雾报警、通风和楼梯条件。"
        }
      }
    ]
  },
  {
    id: "bathroom-waterproofing",
    category: "bathroom",
    image: "bathroom",
    date: "2026.03.22",
    minutes: 4,
    views: "620",
    title: { en: "Bathroom waterproofing questions to ask", zh: "浴室防水需要问清的问题" },
    excerpt: {
      en: "Questions that help homeowners compare waterproofing scope, tile prep, slope, drains, and warranty coverage.",
      zh: "帮助屋主比较防水范围、瓷砖基层、坡度、地漏和保修内容的问题清单。"
    },
    sections: [
      {
        heading: { en: "Ask what is behind the tile", zh: "问清瓷砖背后的做法" },
        body: {
          en: "Good waterproofing depends on substrate prep, membrane details, corners, drains, and slope, not tile choice alone.",
          zh: "好的防水取决于基层、膜层、阴阳角、地漏和坡度，不只是瓷砖选择。"
        }
      }
    ]
  },
  {
    id: "whole-home-budget",
    category: "home",
    image: "hero",
    date: "2026.03.05",
    minutes: 7,
    views: "1.1k",
    title: { en: "Where whole-home budgets usually move", zh: "全屋翻新预算常见变化点" },
    excerpt: {
      en: "The line items that change most often during large renovations, and how to compare contractor assumptions early.",
      zh: "大型装修中最容易变化的费用项，以及如何提前比较不同承包商的假设。"
    },
    sections: [
      {
        heading: { en: "Compare assumptions, not just totals", zh: "比较假设，而不只是总价" },
        body: {
          en: "Ask what materials, demolition scope, permit steps, and allowance amounts are included before choosing a quote.",
          zh: "选择报价前，应确认材料、拆除范围、许可步骤和暂估金额是否包含。"
        }
      }
    ]
  }
];

export const projectReferences = [
  { id: "ref-kitchen", service: "kitchen", image: "hero", city: "Toronto", budget: "$42k", weeks: "7" },
  { id: "ref-bathroom", service: "bathroom", image: "bathroom", city: "Markham", budget: "$19k", weeks: "4" },
  { id: "ref-addition", service: "addition", image: "addition", city: "North York", budget: "$180k", weeks: "18" },
  { id: "ref-basement", service: "basement", image: "basement", city: "Richmond Hill", budget: "$68k", weeks: "9" }
];

export const reviews = [
  {
    name: "Sandy W.",
    project: { en: "Kitchen remodel", zh: "厨房翻新" },
    quote: {
      en: "The scope was clear, communication was fast, and the finish matched what we approved.",
      zh: "报价范围清楚，沟通及时，最终效果和确认方案一致。"
    }
  },
  {
    name: "Michael T.",
    project: { en: "Basement suite", zh: "地下室套房" },
    quote: {
      en: "TopBuilder made it easier to compare teams and ask better questions before signing.",
      zh: "TopBuilder 让我们更容易比较团队，并在签约前问清关键问题。"
    }
  },
  {
    name: "Anna L.",
    project: { en: "Bathroom waterproofing", zh: "浴室防水" },
    quote: {
      en: "The profile photos and reviews helped us shortlist contractors with confidence.",
      zh: "主页案例图和评价帮助我们更有信心地筛选承包商。"
    }
  }
];

export const accountMessages = [
  {
    from: "M2 Tile & Stone",
    time: "10:24 AM",
    text: {
      en: "We received your bathroom remodel request. Could you share the approximate room size?",
      zh: "我们收到您的浴室改造需求，可以提供大概面积吗？"
    }
  },
  {
    from: "Northline Build Co.",
    time: "Yesterday",
    text: {
      en: "For the addition project, permit review may be the first planning step.",
      zh: "对于加建项目，许可审查可能是第一步。"
    }
  }
];

export const infoPages = [
  {
    id: "help",
    group: "For customers",
    title: { en: "Help center", zh: "帮助中心" },
    copy: {
      en: "Find answers about searching, comparing contractors, saving profiles, and starting a project request.",
      zh: "了解如何搜索、比较承包商、收藏主页并发起项目需求。"
    },
    items: {
      en: ["Search by project type and area.", "Review contractor profiles and project references.", "Save teams and contact them when you are ready."],
      zh: ["按项目类型和区域搜索。", "查看承包商主页与案例。", "收藏团队，并在准备好时联系。"]
    }
  },
  {
    id: "verification",
    group: "For contractors",
    title: { en: "Verification", zh: "承包商审核" },
    copy: {
      en: "TopBuilder reviews company details, service coverage, project history, and profile quality before highlighting contractors.",
      zh: "TopBuilder 会审核公司信息、服务范围、项目历史和主页质量。"
    },
    items: {
      en: ["Business and service information review.", "Portfolio and photo quality check.", "Ongoing homeowner feedback monitoring."],
      zh: ["审核公司和服务信息。", "检查作品集和图片质量。", "持续关注屋主反馈。"]
    }
  },
  {
    id: "case-studies",
    group: "For contractors",
    title: { en: "Case studies", zh: "案例研究" },
    copy: {
      en: "Browse renovation stories that show scope, materials, timelines, and what homeowners learned along the way.",
      zh: "浏览装修故事，了解范围、材料、时间线和屋主经验。"
    },
    items: {
      en: ["Kitchen and bath remodels.", "Basement finishing and additions.", "Commercial renovation references."],
      zh: ["厨房和浴室翻新。", "地下室与加建。", "商业装修案例。"]
    }
  },
  {
    id: "contractor-qa",
    group: "For contractors",
    title: { en: "Contractor Q&A", zh: "承包商问答" },
    copy: {
      en: "Learn how profiles, leads, verification, and homeowner messages work on TopBuilder.",
      zh: "了解主页、线索、审核和屋主消息如何运作。"
    },
    items: {
      en: ["Create a verified company profile.", "Showcase your best project work.", "Respond to homeowner requests from one place."],
      zh: ["创建认证公司主页。", "展示最佳案例。", "集中回复屋主需求。"]
    }
  },
  {
    id: "team",
    group: "Company",
    title: { en: "Our team", zh: "关于团队" },
    copy: {
      en: "TopBuilder combines renovation experience, product design, and local market research to help homeowners choose with confidence.",
      zh: "TopBuilder 结合装修经验、产品设计和本地市场研究，帮助屋主更有信心地选择。"
    },
    items: {
      en: ["Homeowner-first product design.", "Local contractor research.", "Bilingual support for English and Chinese users."],
      zh: ["以屋主为先的产品设计。", "本地承包商研究。", "中英文双语支持。"]
    }
  },
  {
    id: "privacy",
    group: "Company",
    title: { en: "Privacy policy", zh: "隐私政策" },
    copy: {
      en: "We use profile, saved contractor, and request information to provide TopBuilder and improve project matching.",
      zh: "我们使用账户、收藏和需求信息来提供服务并改进匹配。"
    },
    items: {
      en: ["We do not sell personal project details.", "You can update account details from your profile.", "Requests are shared only with selected contractors."],
      zh: ["我们不会出售个人项目信息。", "您可以在账户中更新资料。", "需求只会分享给选定承包商。"]
    }
  },
  {
    id: "terms",
    group: "Company",
    title: { en: "Terms", zh: "服务条款" },
    copy: {
      en: "TopBuilder helps connect homeowners and contractors, while final project scope, pricing, permits, and work quality remain between the parties involved.",
      zh: "TopBuilder 帮助屋主和承包商建立联系，最终范围、价格、许可和施工质量由双方确认。"
    },
    items: {
      en: ["Use accurate project and company information.", "Review estimates and agreements before work begins.", "Report suspicious or inaccurate profiles."],
      zh: ["请提供准确的项目和公司信息。", "开工前请确认报价和协议。", "发现可疑或不准确信息请反馈。"]
    }
  }
];

export const images = {
  hero: require("../../assets/hero-renovation.png"),
  addition: require("../../assets/project-addition.png"),
  basement: require("../../assets/project-basement.png"),
  bathroom: require("../../assets/project-bathroom.png"),
  commercial: require("../../assets/project-commercial.png"),
  advisor: require("../../assets/advisor-portrait.png"),
  auth: require("../../assets/auth-illustration.png")
};
