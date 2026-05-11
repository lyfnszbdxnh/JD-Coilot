import { Building2, Globe2, Smartphone, Store } from "lucide-react";

export type IndustryReport = {
  id: string;
  primaryCategory: "互联网" | "实体";
  secondaryCategory: string;
  title: string;
  subtitle: string;
  iconName: "smartphone" | "globe" | "store" | "building";
  fitRoles: string[];
  executiveSummary: string;
  marketScan: string[];
  businessModel: string[];
  valueChain: string[];
  coreMetrics: string[];
  keyPlayers: string[];
  userSegments: string[];
  jobMap: string[];
  analystFocus: string[];
  trends: string[];
  risks: string[];
  interviewQuestions: string[];
  keywords: string[];
  actionChecklist: string[];
};

export const iconMap = {
  smartphone: Smartphone,
  globe: Globe2,
  store: Store,
  building: Building2
};

export const industryReports: IndustryReport[] = [
  {
    id: "internet-local-life",
    primaryCategory: "互联网",
    secondaryCategory: "本地生活",
    title: "本地生活行业扫描报告",
    subtitle: "围绕外卖、到店、酒旅、即时零售等场景，理解平台型业务如何提升供需匹配效率。",
    iconName: "smartphone",
    fitRoles: ["商业分析", "数据分析", "用户增长", "经营分析", "策略运营"],
    executiveSummary:
      "本地生活是典型的双边或多边平台业务，核心在于连接消费者、商家、骑手/履约网络，并通过流量分发、补贴策略、履约效率和商家经营工具提升交易规模与经营利润。应届生做商业分析时，最需要理解 GMV、转化漏斗、履约质量和供需密度之间的关系。",
    marketScan: [
      "需求端：用户高频、即时、强地理位置属性，决策受价格、距离、配送时效、评价和优惠影响。",
      "供给端：商家经营能力差异大，平台需要通过流量、工具和规则帮助商家提升成交效率。",
      "履约端：即时配送和线下到店服务决定体验上限，履约成本直接影响利润。",
      "竞争端：大平台通过生态流量、会员、补贴和商家服务形成壁垒，垂直玩家通常聚焦特定城市或品类。"
    ],
    businessModel: [
      "交易佣金：按订单或 GMV 从商家侧收取服务费。",
      "广告与流量产品：商家为曝光、排序、转化工具付费。",
      "会员与增值服务：面向 C 端提供会员权益，面向 B 端提供经营工具。",
      "履约服务费：平台组织配送或履约能力，并在效率提升中获取规模收益。"
    ],
    valueChain: [
      "获客：站内推荐、搜索、会员、补贴、地推和外部投放。",
      "转化：商家排序、券包、满减、页面信息质量、评价体系。",
      "履约：接单、备货、骑手调度、配送时效、售后处理。",
      "复购：会员体系、用户偏好推荐、商家私域运营、服务稳定性。"
    ],
    coreMetrics: [
      "DAU / MAU",
      "下单转化率",
      "GMV",
      "客单价",
      "订单履约时长",
      "准时率",
      "商家动销率",
      "补贴 ROI",
      "复购率",
      "Take Rate"
    ],
    keyPlayers: ["美团", "饿了么", "抖音生活服务", "高德本地生活", "京东秒送", "小程序本地服务商"],
    userSegments: [
      "价格敏感型：更关注优惠券、满减和配送费。",
      "效率优先型：更关注距离、时效和稳定服务。",
      "品质偏好型：更关注品牌、评价和履约体验。",
      "商家经营者：更关注流量成本、转化率、复购和利润。"
    ],
    jobMap: [
      "商业分析：拆解 GMV、转化率、补贴效率、商家经营表现。",
      "数据分析：搭建指标体系、监控异常、支持 A/B 实验和经营复盘。",
      "策略运营：制定品类、城市、商家分层和补贴策略。",
      "产品分析：分析搜索、推荐、详情页、下单链路和会员产品效果。"
    ],
    analystFocus: [
      "不要只看 GMV 增长，要拆订单量、客单价、频次、补贴成本和利润。",
      "看转化漏斗时，要区分流量质量、商家供给、价格优惠和履约体验。",
      "城市、品类和商家分层非常关键，平均值容易掩盖局部问题。",
      "补贴不是目的，重点是判断补贴带来的是否是真实增量和长期留存。"
    ],
    trends: [
      "即时零售扩展本地生活边界，品类从餐饮延伸到商超、药品、鲜花和 3C 配件。",
      "内容平台进入本地生活，用短视频和直播影响到店消费决策。",
      "平台从粗放补贴转向精细化经营，更关注利润、履约效率和商家健康度。",
      "AI 开始用于商家经营助手、智能定价、需求预测和异常归因。"
    ],
    risks: [
      "补贴依赖导致利润承压，短期 GMV 增长不一定代表健康增长。",
      "履约体验波动会快速影响用户留存和商家评价。",
      "平台规则变化可能影响商家生态稳定性。",
      "不同城市供需密度差异大，策略难以一刀切。"
    ],
    interviewQuestions: [
      "如果某城市 GMV 连续两周下降，你会如何拆解原因？",
      "如何判断一次满减活动是否带来了真实增量？",
      "外卖平台的北极星指标应该是什么？为什么？",
      "如果订单量增长但用户投诉率上升，你会建议业务优先看什么？"
    ],
    keywords: ["GMV", "Take Rate", "补贴 ROI", "履约效率", "商家动销", "复购率", "供需密度", "转化漏斗"],
    actionChecklist: [
      "准备一个 GMV 拆解框架：流量 × 转化率 × 客单价 × 频次。",
      "熟悉补贴 ROI、复购率、准时率和商家动销率的含义。",
      "用自己的项目经历讲清楚“发现问题 → 指标拆解 → 策略建议”。",
      "准备 1 个本地生活平台的业务 case。"
    ]
  },
  {
    id: "internet-cross-border-ecommerce",
    primaryCategory: "互联网",
    secondaryCategory: "跨境电商",
    title: "跨境电商行业扫描报告",
    subtitle: "理解平台、独立站、供应链和履约网络如何共同决定跨境交易效率。",
    iconName: "globe",
    fitRoles: ["商业分析", "经营分析", "数据分析", "品类运营", "供应链分析"],
    executiveSummary:
      "跨境电商连接中国供应链、海外用户、平台流量和跨境履约。业务核心不是简单卖货，而是围绕选品、定价、投放、库存、物流和复购建立跨区域经营效率。商业分析岗位通常需要拆解 GMV、广告投产、库存周转、履约时效和品类利润。",
    marketScan: [
      "供给端：中国制造和柔性供应链提供丰富 SKU，但质量、交期和合规能力差异明显。",
      "需求端：海外用户受价格、物流时效、支付习惯、退货体验和本地化内容影响。",
      "渠道端：平台型渠道提供流量和信任，独立站提供品牌资产和用户数据。",
      "履约端：头程物流、海外仓、尾程配送和逆向退货共同决定体验和成本。"
    ],
    businessModel: [
      "平台佣金：通过交易抽佣和商家服务费变现。",
      "广告投放：商家为站内搜索、推荐或站外流量付费。",
      "自营差价：平台或品牌方通过采购、定价和履约效率赚取毛利。",
      "供应链服务：仓储、物流、支付、ERP、合规和金融服务。"
    ],
    valueChain: [
      "选品：基于需求趋势、竞争强度、毛利空间和供应稳定性筛选 SKU。",
      "获客：站内搜索推荐、社媒内容、达人营销、信息流广告。",
      "转化：商品页、价格、评价、物流承诺、支付体验和促销策略。",
      "履约：库存备货、头程运输、清关、海外仓、尾程配送、退货。",
      "复购：会员、邮件营销、私域触达、产品质量和售后体验。"
    ],
    coreMetrics: [
      "GMV",
      "订单量",
      "客单价",
      "毛利率",
      "广告 ROI / ROAS",
      "库存周转天数",
      "缺货率",
      "物流妥投时效",
      "退货率",
      "复购率"
    ],
    keyPlayers: ["Amazon", "SHEIN", "Temu", "AliExpress", "TikTok Shop", "Shopify 独立站生态", "Shopee"],
    userSegments: [
      "价格驱动用户：关注低价、折扣和包邮。",
      "品质驱动用户：关注评价、品牌、材质和售后。",
      "趋势消费用户：受社媒内容、达人种草和新品速度影响。",
      "商家与品牌方：关注流量成本、库存风险、利润和合规。"
    ],
    jobMap: [
      "商业分析：分析品类 GMV、利润、广告投产和地区表现。",
      "数据分析：监控流量、转化、库存、履约和售后指标。",
      "品类运营：选品、定价、促销、库存和供应商协同。",
      "供应链分析：优化备货、仓配、缺货率和物流成本。"
    ],
    analystFocus: [
      "跨境电商要同时看增长和利润，GMV 高不等于经营健康。",
      "广告 ROI 必须和毛利、复购、退货率一起看。",
      "库存是关键风险，爆品预测错误会造成缺货或积压。",
      "不同国家的物流、支付、税务和用户偏好差异会影响策略。"
    ],
    trends: [
      "全托管和半托管模式降低商家运营门槛，但平台对价格和履约要求更强。",
      "内容电商和社媒种草正在改变海外用户发现商品的路径。",
      "跨境业务从低价竞争走向供应链效率、品牌化和本地化体验竞争。",
      "AI 在选品预测、商品文案、本地化客服和广告投放优化中应用加速。"
    ],
    risks: [
      "合规、关税、平台政策和数据隐私规则变化会影响经营稳定性。",
      "物流时效和退货成本高，容易侵蚀毛利。",
      "广告成本上升会压缩获客效率。",
      "爆品生命周期短，库存和供应链响应能力要求高。"
    ],
    interviewQuestions: [
      "如果某品类 GMV 上升但毛利率下降，你会如何分析？",
      "如何评估一个跨境广告活动是否值得继续投放？",
      "库存周转变慢可能由哪些原因导致？",
      "平台模式和独立站模式在数据分析重点上有什么不同？"
    ],
    keywords: ["GMV", "ROAS", "毛利率", "库存周转", "海外仓", "退货率", "全托管", "本地化", "选品"],
    actionChecklist: [
      "准备一个品类经营分析框架：流量、转化、价格、毛利、库存、履约。",
      "理解 ROAS 和 ROI 的区别，并能说明为什么要结合毛利看。",
      "准备一个库存周转或广告投放分析 case。",
      "关注跨境电商平台、独立站和供应链服务之间的差异。"
    ]
  }
];

export const primaryCategories = Array.from(new Set(industryReports.map((item) => item.primaryCategory)));

export function getReportMarkdown(report: IndustryReport) {
  return [
    `# ${report.title}`,
    "",
    `## 适配岗位`,
    report.fitRoles.map((item) => `- ${item}`).join("\n"),
    "",
    "## Executive Summary",
    report.executiveSummary,
    "",
    "## 行业扫描",
    report.marketScan.map((item) => `- ${item}`).join("\n"),
    "",
    "## 商业模式",
    report.businessModel.map((item) => `- ${item}`).join("\n"),
    "",
    "## 价值链",
    report.valueChain.map((item) => `- ${item}`).join("\n"),
    "",
    "## 核心指标",
    report.coreMetrics.map((item) => `- ${item}`).join("\n"),
    "",
    "## 主要玩家",
    report.keyPlayers.map((item) => `- ${item}`).join("\n"),
    "",
    "## 分析师关注点",
    report.analystFocus.map((item) => `- ${item}`).join("\n"),
    "",
    "## 近期趋势",
    report.trends.map((item) => `- ${item}`).join("\n"),
    "",
    "## 面试相关问题",
    report.interviewQuestions.map((item) => `- ${item}`).join("\n"),
    "",
    "## 行业关键词",
    report.keywords.join("、"),
    "",
    "## 下一步准备清单",
    report.actionChecklist.map((item) => `- ${item}`).join("\n")
  ].join("\n");
}
