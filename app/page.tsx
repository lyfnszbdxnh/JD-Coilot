"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Database,
  Download,
  FileQuestion,
  FileText,
  Gauge,
  GraduationCap,
  Layers3,
  Loader2,
  Save,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type AgentId = "resume-match" | "career-coach" | "industry-research" | "knowledge-base";
type AgentStatus = "waiting" | "running" | "completed";

type AgentRunState = {
  id: AgentId;
  status: AgentStatus;
};

const sampleResume = `教育背景
上海某大学 | 数据科学与大数据技术 | 本科 | 2026 届
GPA: 3.6/4.0，核心课程：统计学、数据库系统、商业分析、Python 数据分析、数据可视化

项目经历
校园二手交易平台用户增长分析
- 使用 Python 清洗 12,000 条用户行为数据，分析注册、浏览、收藏、下单转化路径
- 用 Excel 透视表和 Tableau 制作增长看板，发现新用户首周收藏行为与下单转化高度相关
- 输出 3 条运营建议，包括优化首页推荐、增加低价商品曝光和设置新用户引导任务

市场调研项目：咖啡品牌校园渗透率分析
- 设计问卷并回收 286 份有效样本，分析价格敏感度、购买频率和品牌偏好
- 使用 SPSS 做交叉分析，撰写 18 页商业分析报告并进行课堂展示

技能
Python、Excel、Tableau、PowerPoint、SPSS、基础 SQL、英文读写`;

const sampleJd = `Business Analyst Intern

岗位职责：
1. 支持业务团队进行用户增长、销售漏斗和运营效率分析；
2. 使用 SQL / Excel 提取、清洗和分析业务数据，搭建指标看板；
3. 将数据洞察转化为可执行建议，并向产品、运营和销售团队清晰沟通；
4. 协助完成市场研究、竞品分析和管理层汇报材料。

任职要求：
1. 本科及以上学历，商业分析、数据科学、统计学、信息管理等相关专业优先；
2. 熟练使用 Excel，掌握 SQL，有 Python 或 BI 工具经验加分；
3. 具备结构化思维，能定义问题、拆解指标并解释业务含义；
4. 有数据分析项目、咨询项目、商业竞赛或互联网实习经验优先；
5. 英文读写良好，能够制作清晰的英文分析报告。`;

const mockAgentResults = {
  resumeMatch: {
    score: 78,
    role: "Business Analyst Intern",
    requirements: [
      "能够用 SQL / Excel 提取、清洗并分析业务数据",
      "理解用户增长、销售漏斗、运营效率等业务指标",
      "可以把数据洞察转化为产品、运营、销售团队能执行的建议",
      "具备商业分析、市场研究或数据项目经历",
      "能够制作清晰的分析报告，最好具备英文读写能力"
    ],
    keywords: ["SQL", "Excel", "用户增长", "销售漏斗", "指标看板", "商业洞察", "跨团队沟通"],
    strengths: [
      "简历中已有 Python、Excel、Tableau 和 SPSS 项目证据，与数据分析方向匹配。",
      "校园二手交易平台项目包含用户行为数据、转化路径和运营建议，接近业务分析岗位真实场景。",
      "市场调研项目体现问卷设计、样本分析和商业报告能力，适合支撑商业分析岗位申请。"
    ],
    gaps: [
      "SQL 只写了“基础 SQL”，缺少具体查询、建表或指标口径设计证据。",
      "项目成果偏过程描述，缺少指标变化、业务影响或决策价值表达。",
      "英文报告能力没有出现在项目经历中，和 JD 的英文汇报要求连接不足。",
      "缺少面向业务团队沟通的表达，例如 stakeholder、management report、actionable insight。"
    ],
    suggestions: [
      "把项目标题从“数据分析”升级为“用户增长与转化分析”，直接贴近 JD 的业务关键词。",
      "每段经历使用 Action + Data + Insight + Business Impact 结构重写。",
      "补充 SQL 使用证据，例如“使用 SQL 查询用户订单表并构建周度转化指标”。",
      "把“制作报告”改成“以管理层汇报形式呈现洞察与建议”，增强商业场景感。",
      "技能区按 JD 重排：Excel / SQL / Python / BI 工具优先。"
    ],
    optimizedResume: `针对 Business Analyst Intern 的简历优化片段

项目经历
校园二手交易平台用户增长与转化分析
- 基于 12,000 条用户行为数据，使用 Python 完成数据清洗、分群与转化漏斗分析，拆解注册、浏览、收藏、下单等关键路径
- 搭建 Excel / Tableau 指标看板，追踪新用户首周活跃、收藏率与下单转化表现，识别“首周收藏行为”是影响转化的关键信号
- 将分析结果转化为 3 项运营建议：优化首页推荐、提升低价商品曝光、设计新用户引导任务，帮助团队明确增长实验方向

校园咖啡品牌市场研究与商业洞察
- 设计并回收 286 份有效问卷，围绕购买频率、价格敏感度和品牌偏好建立分析框架
- 使用 SPSS 与 Excel 进行交叉分析，识别不同学生群体的消费差异和核心购买驱动因素
- 输出 18 页商业分析报告，并以管理层汇报形式呈现市场机会、目标客群和校园推广建议

技能
数据分析：Excel、SQL 基础、Python、SPSS
可视化与汇报：Tableau、PowerPoint、商业分析报告
业务能力：指标拆解、用户转化分析、市场研究、跨团队沟通`
  },
  careerCoach: {
    frequentQuestions: [
      "请介绍一个你用数据发现业务问题并提出建议的项目。",
      "如果业务团队认为数据结论和直觉不一致，你会怎么沟通？",
      "你如何定义一个用户增长项目是否成功？",
      "你在 Excel / SQL / Python 中最熟悉哪一种工具？请举例说明。"
    ],
    behavioralQuestions: [
      "讲一个你在团队合作中推动别人接受你观点的经历。",
      "讲一个你面对模糊问题时如何拆解并推进的经历。",
      "讲一个你收到负面反馈后改进结果的经历。"
    ],
    analyticsQuestions: [
      "如何拆解一个 App 新用户首周留存下降的问题？",
      "如果销售漏斗中试用到付费转化率下降，你会看哪些指标？",
      "如何设计一个业务看板，让运营同学每天能快速发现问题？"
    ],
    answerStrategy: [
      "回答项目题时先给业务背景，再说明数据来源、分析方法、关键发现和业务建议。",
      "工具能力不要只说“会用”，要绑定具体任务，例如 SQL 用于提数、Excel 用于透视分析、Tableau 用于看板。",
      "遇到业务 Case 题时先确认目标指标，再拆人群、渠道、时间和转化路径。"
    ],
    starFramework: [
      "Situation：说明业务背景，例如校园交易平台新用户转化不足。",
      "Task：明确你的任务，例如找出影响下单转化的关键行为。",
      "Action：说明你如何清洗数据、搭建漏斗、比较用户分群。",
      "Result：给出洞察、建议和潜在业务影响。"
    ],
    weakPoints: [
      "需要准备 SQL 项目细节，避免被追问时只能停留在“基础掌握”。",
      "需要把课程项目包装成业务问题，而不是技术练习。",
      "需要准备 1 个英文汇报或英文报告相关例子。"
    ]
  },
  industryResearch: {
    industry: "互联网平台 / 本地生活 / 交易平台数据分析方向",
    overview: "该岗位大概率服务于平台型业务，关注用户增长、交易转化、运营效率和商业化结果。商业分析实习生通常需要把多源数据整理成业务团队能理解的指标和建议。",
    businessModel: [
      "通过连接供给方与需求方形成交易撮合或服务履约。",
      "收入可能来自交易佣金、会员服务、广告曝光或增值服务。",
      "增长依赖用户获取、留存、转化率提升和供需匹配效率。"
    ],
    players: ["美团", "阿里本地生活", "得物", "闲鱼", "小红书交易生态", "垂直校园服务平台"],
    metrics: ["DAU / MAU", "新用户转化率", "首周留存", "下单转化率", "客单价", "GMV", "履约率", "复购率"],
    trends: [
      "平台更加重视精细化运营，从粗放拉新转向留存和转化效率提升。",
      "AI 正在进入运营分析流程，自动生成归因、异常检测和策略建议。",
      "业务团队更需要能把数据讲成商业故事的人，而不只是会做报表的人。"
    ],
    interviewIndustryQuestions: [
      "你认为交易平台最重要的北极星指标是什么？为什么？",
      "如果平台 GMV 增长但利润下降，你会如何分析？",
      "如何判断一个运营活动带来的增长是真实增量，而不是提前透支需求？"
    ],
    keywords: ["平台经济", "GMV", "转化漏斗", "用户留存", "供需匹配", "运营效率", "北极星指标", "商业化"]
  }
};

const knowledgeBaseNote = `# 求职知识卡片

## 目标岗位
Business Analyst Intern

## 岗位方向判断
- 一级行业：互联网
- 二级方向：本地生活 / 交易平台 / 商业分析
- 典型业务场景：用户增长、交易转化、商家经营、履约效率、补贴 ROI
- 推荐延伸阅读：行业知识库 > 互联网 > 本地生活

## 岗位核心要求
- SQL / Excel 数据提取、清洗与分析
- 用户增长、销售漏斗、运营效率等业务指标理解
- 能把数据洞察转化为可执行业务建议
- 有商业分析、市场研究或数据项目经历
- 能制作清晰报告，具备英文读写能力

## 我的匹配优势
- 有用户行为数据分析项目，能支撑增长和转化分析方向
- 有问卷调研和商业报告经验，符合商业分析岗位基础要求
- 掌握 Python、Excel、Tableau、SPSS，具备数据处理和可视化基础

## 我的能力缺口
- SQL 证据不足，需要补充具体查询和指标构建案例
- 项目表达缺少业务影响，需要强化指标、洞察和行动建议
- 英文汇报能力需要准备可讲述案例

## 简历优化记录
将“校园二手交易平台用户增长分析”重写为“用户增长与转化分析”，强调 12,000 条用户行为数据、转化漏斗、指标看板和运营建议。

## 简历改写原则
- 标题要从“做了什么项目”升级为“解决什么业务问题”
- 每条 bullet 尽量包含数据规模、分析动作、洞察和业务建议
- 优先展示和 JD 相关的指标：转化率、留存、GMV、复购、补贴 ROI
- 技能区按岗位关键词排序：Excel / SQL / Python / BI 工具 / 商业报告

## 面试高频问题
- 请介绍一个你用数据发现业务问题并提出建议的项目。
- 如果业务团队认为数据结论和直觉不一致，你会怎么沟通？
- 如何拆解一个 App 新用户首周留存下降的问题？

## 回答策略
使用 STAR 框架：先给业务背景，再讲任务目标、分析动作和业务结果。每个回答都要包含数据规模、指标、洞察和建议。

## 行业认知
目标岗位可能属于互联网平台 / 本地生活 / 交易平台分析方向。核心商业逻辑是提升用户留存、交易转化和供需匹配效率。

## 行业分析框架
- 市场结构：平台连接用户、商家和履约网络
- 商业模式：交易佣金、广告流量、会员权益、履约服务费
- 增长逻辑：流量获取、下单转化、复购提升、商家供给质量
- 经营约束：补贴成本、履约体验、商家利润、城市供需密度
- 分析重点：不要只看 GMV，要同时看订单量、客单价、利润和长期留存

## 行业关键词
平台经济、GMV、转化漏斗、用户留存、供需匹配、运营效率、北极星指标、商业化

## 面试前行业准备
- 能解释 GMV = 流量 × 转化率 × 客单价 × 购买频次
- 能说明补贴 ROI 为什么不能只看短期订单增长
- 能说出一个本地生活平台的北极星指标，并解释取舍
- 能用一个城市或品类案例拆解业务下滑原因

## 下一步行动清单
- 补一个 SQL 查询和指标看板项目
- 准备 2 个业务分析 STAR 故事
- 把简历技能区按 JD 关键词重新排序
- 准备 3 个交易平台核心指标相关行业问题
- 阅读行业知识库中的《本地生活行业扫描报告》
- 额外浏览《跨境电商行业扫描报告》，练习迁移同一套行业分析框架`;

const agentDefinitions = [
  {
    id: "resume-match" as const,
    name: "Resume Match Agent",
    specialty: "简历 / 匹配 / 分数",
    icon: Gauge,
    runningText: "正在分析岗位 JD 与你的简历匹配度……",
    summary: "已完成岗位要求提取、匹配评分与简历定制建议。"
  },
  {
    id: "career-coach" as const,
    name: "Career Coach Agent",
    specialty: "面试 / 问答 / STAR",
    icon: FileQuestion,
    runningText: "正在生成针对该岗位的面试高频问题与回答策略……",
    summary: "已生成岗位面试问题、回答思路和准备重点。"
  },
  {
    id: "industry-research" as const,
    name: "Industry Research Agent",
    specialty: "行业 / 趋势 / 商业模式",
    icon: TrendingUp,
    runningText: "正在整理该岗位相关的行业背景与商业逻辑……",
    summary: "已生成行业认知、商业模式、核心指标和面试相关行业问题。"
  },
  {
    id: "knowledge-base" as const,
    name: "Knowledge Base Agent",
    specialty: "笔记 / 知识沉淀 / 保存",
    icon: Database,
    runningText: "正在把本次分析整理成你的个人求职知识库……",
    summary: "已生成结构化求职知识卡片，可复制或保存。"
  }
];

const initialAgentStates = agentDefinitions.map((agent) => ({
  id: agent.id,
  status: "waiting" as AgentStatus
}));

async function runAgentPipeline(
  updateStates: (states: AgentRunState[]) => void,
  delay = 520
) {
  const nextStates = agentDefinitions.map((agent) => ({
    id: agent.id,
    status: "waiting" as AgentStatus
  }));
  updateStates([...nextStates]);

  for (const agent of agentDefinitions) {
    const index = nextStates.findIndex((item) => item.id === agent.id);
    nextStates[index] = { id: agent.id, status: "running" };
    updateStates([...nextStates]);
    await new Promise((resolve) => window.setTimeout(resolve, delay));
    nextStates[index] = { id: agent.id, status: "completed" };
    updateStates([...nextStates]);
  }
}

export default function Home() {
  const [resume, setResume] = useState("");
  const [jd, setJd] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPipeline, setShowPipeline] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [exported, setExported] = useState(false);
  const [saved, setSaved] = useState(false);
  const [agentStates, setAgentStates] = useState<AgentRunState[]>(initialAgentStates);
  const resultRef = useRef<HTMLElement | null>(null);

  const canAnalyze = resume.trim().length > 80 && jd.trim().length > 80;

  const handleAnalyze = async () => {
    if (!canAnalyze) {
      toast.warning("请先填入较完整的简历和 JD，或使用示例内容。");
      return;
    }

    setExported(false);
    setSaved(false);
    setShowResult(false);
    setShowPipeline(true);
    setIsAnalyzing(true);

    await runAgentPipeline(setAgentStates);

    setIsAnalyzing(false);
    setShowResult(true);
    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 140);
  };

  const copyText = async (text: string, message: string) => {
    await navigator.clipboard.writeText(text);
    toast.success(message);
  };

  const handleExport = () => {
    setExported(true);
    toast.success("PDF 导出已模拟完成，真实导出可在后续接入。");
  };

  const handleSaveKnowledge = () => {
    setSaved(true);
    toast.success("已模拟保存到知识库");
  };

  return (
    <main className="relative overflow-hidden">
      <div className="soft-grid pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <Navbar />
      <HeroSection onStart={() => document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth" })} />
      <ProductIntro />
      <AnalysisWorkspace
        resume={resume}
        jd={jd}
        isAnalyzing={isAnalyzing}
        canAnalyze={canAnalyze}
        onResumeChange={setResume}
        onJdChange={setJd}
        onSampleResume={() => setResume(sampleResume)}
        onSampleJd={() => setJd(sampleJd)}
        onAnalyze={handleAnalyze}
      />
      <AnimatePresence>
        {showPipeline && <AgentPipeline states={agentStates} isAnalyzing={isAnalyzing} />}
      </AnimatePresence>
      <section ref={resultRef} id="results" className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 lg:px-8">
        <AnimatePresence>
          {showResult && (
            <ResultDashboard
              exported={exported}
              saved={saved}
              onCopyResume={() => copyText(mockAgentResults.resumeMatch.optimizedResume, "已复制岗位定制版简历。")}
              onCopyInterview={() => copyText(formatInterviewQuestions(), "已复制面试问题与回答策略。")}
              onCopyIndustry={() => copyText(formatIndustryBrief(), "已复制行业研究简报。")}
              onCopyNote={() => copyText(knowledgeBaseNote, "已复制求职知识卡片。")}
              onSaveKnowledge={handleSaveKnowledge}
              onExport={handleExport}
            />
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
            <BrainCircuit className="h-5 w-5" />
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-950">JD Copilot</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <a className="transition hover:text-slate-950" href="#features">Features</a>
          <a className="transition hover:text-slate-950" href="#workspace">Demo</a>
          <a className="transition hover:text-slate-950" href="#results">Results</a>
          <Link className="transition hover:text-slate-950" href="/industry-knowledge">
            Knowledge Base
          </Link>
          <Link className="transition hover:text-slate-950" href="/about">
            About Me
          </Link>
        </nav>
        <Button
          size="sm"
          variant="outline"
          onClick={() => document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth" })}
        >
          Try Demo
        </Button>
      </div>
    </header>
  );
}

function HeroSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-28">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Multi-Agent Resume Copilot
        </div>
        <h1 className="text-balance max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          让 4 个 AI Agent 帮你完成一次求职准备。
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          从 JD 匹配、简历改写、面试辅导到行业认知和知识库沉淀，JD Copilot 把一次岗位申请拆成可执行的求职策略。
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" variant="gradient" onClick={onStart}>
            Analyze Match <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" onClick={onStart}>
            View Pipeline
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.12 }}
      >
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <Card className="p-5 sm:p-6">
            <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-blue-950/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Multi-Agent Pipeline</p>
                  <p className="mt-1 text-5xl font-semibold tracking-tight">4 Agents</p>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-semibold text-emerald-300">
                  Mock AI
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {agentDefinitions.map((agent) => (
                  <div key={agent.id} className="flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3">
                    <span className="text-sm text-slate-200">{agent.name}</span>
                    <Check className="h-4 w-4 text-emerald-300" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <MiniInsight title="Resume Match" text="匹配评分、JD 要求和定制版简历片段。" />
              <MiniInsight title="Knowledge Base" text="把本轮分析沉淀成结构化求职卡片。" />
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MiniInsight({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white/65 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function ProductIntro() {
  const values = [
    { icon: Gauge, title: "Resume Match", text: "提取 JD 核心要求，输出匹配评分、优势、缺口和岗位定制简历。" },
    { icon: FileQuestion, title: "Career Coach", text: "生成高频面试题、行为面试题、专项问题和 STAR 回答策略。" },
    { icon: TrendingUp, title: "Industry Brief", text: "用 Mock 行研内容解释行业商业模式、核心指标和趋势问题。" },
    { icon: Database, title: "Knowledge Base", text: "把本轮求职分析自动整理成可复制、可保存的结构化知识卡片。" }
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {values.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="h-full p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 text-blue-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 rounded-full border border-slate-200 bg-white/70 p-2 backdrop-blur">
        <div className="grid gap-2 text-center text-sm font-semibold text-slate-600 sm:grid-cols-4">
          {["Resume Match", "Career Coach", "Industry Research", "Knowledge Base"].map((step) => (
            <div key={step} className="rounded-full bg-slate-50 px-4 py-3">
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalysisWorkspace(props: {
  resume: string;
  jd: string;
  isAnalyzing: boolean;
  canAnalyze: boolean;
  onResumeChange: (value: string) => void;
  onJdChange: (value: string) => void;
  onSampleResume: () => void;
  onSampleJd: () => void;
  onAnalyze: () => void;
}) {
  return (
    <section id="workspace" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">Interactive Demo</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            粘贴简历和 JD，启动 Multi-Agent Pipeline。
          </h2>
        </div>
        <Button size="lg" variant="gradient" disabled={props.isAnalyzing} onClick={props.onAnalyze}>
          {props.isAnalyzing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Agents Running
            </>
          ) : (
            <>
              Analyze Match <Sparkles className="h-5 w-5" />
            </>
          )}
        </Button>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <InputPanel
          title="Original Resume"
          description="粘贴你的原始中文简历，项目经历越完整，分析越像真实 HR。"
          icon={<FileText className="h-5 w-5" />}
          value={props.resume}
          placeholder="在这里粘贴你的原始简历..."
          onChange={props.onResumeChange}
          onSample={props.onSampleResume}
          sampleLabel="Sample Resume"
        />
        <InputPanel
          title="Target JD"
          description="粘贴目标岗位 JD。Demo 默认适配商业分析 / 数据分析实习。"
          icon={<BriefcaseBusiness className="h-5 w-5" />}
          value={props.jd}
          placeholder="在这里粘贴目标岗位 JD..."
          onChange={props.onJdChange}
          onSample={props.onSampleJd}
          sampleLabel="Sample JD"
        />
      </div>
      {!props.canAnalyze && (
        <p className="mt-4 text-center text-sm text-slate-500">
          你可以直接使用示例内容快速体验完整 AI 分析流程。
        </p>
      )}
    </section>
  );
}

function InputPanel({
  title,
  description,
  icon,
  value,
  placeholder,
  onChange,
  onSample,
  sampleLabel
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSample: () => void;
  sampleLabel: string;
}) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={onSample}>
          {sampleLabel}
        </Button>
      </div>
      <Textarea value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
        <span>{value.length > 0 ? `${value.length} characters` : "Waiting for input"}</span>
        <span>Mock AI Ready</span>
      </div>
    </Card>
  );
}

function AgentPipeline({ states, isAnalyzing }: { states: AgentRunState[]; isAnalyzing: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8"
    >
      <Card className="overflow-hidden p-6">
        <div className="relative">
          {isAnalyzing && (
            <motion.div
              className="absolute inset-x-0 -top-6 h-20 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <div className="relative mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {isAnalyzing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                Multi-Agent Pipeline
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {isAnalyzing ? "4 个 Agent 正在顺序工作" : "4 个 Agent 已完成本轮分析"}
              </h2>
              <p className="mt-2 text-slate-500">每个 Agent 独立负责一个专业环节，当前 MVP 使用 Mock Data。</p>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {agentDefinitions.map((agent) => {
              const state = states.find((item) => item.id === agent.id)?.status ?? "waiting";
              return <AgentCard key={agent.id} agent={agent} status={state} />;
            })}
          </div>
        </div>
      </Card>
    </motion.section>
  );
}

function AgentCard({
  agent,
  status
}: {
  agent: (typeof agentDefinitions)[number];
  status: AgentStatus;
}) {
  const Icon = agent.icon;
  const statusStyle = {
    waiting: "bg-slate-100 text-slate-500",
    running: "bg-blue-50 text-blue-700",
    completed: "bg-emerald-50 text-emerald-700"
  }[status];

  return (
    <motion.div
      layout
      className={`rounded-[24px] border p-5 transition ${
        status === "running"
          ? "border-blue-200 bg-white shadow-[0_18px_50px_rgba(37,99,235,0.12)]"
          : "border-slate-200/80 bg-white/60"
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${statusStyle}`}>
          {status}
        </span>
      </div>
      <h3 className="text-base font-semibold text-slate-950">{agent.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{agent.specialty}</p>
      <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">
        {status === "completed" ? agent.summary : status === "running" ? agent.runningText : "Waiting for previous Agent..."}
      </p>
      {status === "running" && (
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
            animate={{ x: ["-100%", "120%"] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}
    </motion.div>
  );
}

function ResultDashboard({
  exported,
  saved,
  onCopyResume,
  onCopyInterview,
  onCopyIndustry,
  onCopyNote,
  onSaveKnowledge,
  onExport
}: {
  exported: boolean;
  saved: boolean;
  onCopyResume: () => void;
  onCopyInterview: () => void;
  onCopyIndustry: () => void;
  onCopyNote: () => void;
  onSaveKnowledge: () => void;
  onExport: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600">Result Dashboard</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
            Multi-Agent 分析已完成。
          </h2>
        </div>
        <Button variant="gradient" onClick={onExport}>
          {exported ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
          Export PDF
        </Button>
      </div>
      <div className="grid gap-6">
        <ResumeMatchReport onCopyResume={onCopyResume} />
        <InterviewCoach onCopyInterview={onCopyInterview} />
        <IndustryBrief onCopyIndustry={onCopyIndustry} />
        <KnowledgeBaseNote saved={saved} onCopyNote={onCopyNote} onSaveKnowledge={onSaveKnowledge} />
      </div>
    </motion.div>
  );
}

function ResumeMatchReport({ onCopyResume }: { onCopyResume: () => void }) {
  const data = mockAgentResults.resumeMatch;
  return (
    <DashboardSection
      icon={<Gauge className="h-5 w-5" />}
      eyebrow="Resume Match Report"
      title="简历匹配 + 简历改写"
      action={
        <Button variant="outline" onClick={onCopyResume}>
          <Clipboard className="h-4 w-4" /> Copy Optimized Resume
        </Button>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
        <MatchScoreCard />
        <ListCard title="JD 核心要求" items={data.requirements} icon={<Target className="h-5 w-5" />} />
        <ListCard title="岗位关键词" items={data.keywords} icon={<Layers3 className="h-5 w-5" />} compact />
        <ListCard title="我的优势" items={data.strengths} icon={<BadgeCheck className="h-5 w-5" />} />
        <ListCard title="我的缺口" items={data.gaps} icon={<BarChart3 className="h-5 w-5" />} tone="amber" />
        <ListCard title="简历优化建议" items={data.suggestions} icon={<GraduationCap className="h-5 w-5" />} />
        <TextBlock title="定制版简历片段" text={data.optimizedResume} className="lg:col-span-2" />
      </div>
    </DashboardSection>
  );
}

function InterviewCoach({ onCopyInterview }: { onCopyInterview: () => void }) {
  const data = mockAgentResults.careerCoach;
  return (
    <DashboardSection
      icon={<FileQuestion className="h-5 w-5" />}
      eyebrow="Career Coach"
      title="面试问题与回答策略"
      action={
        <Button variant="outline" onClick={onCopyInterview}>
          <Clipboard className="h-4 w-4" /> Copy Interview Questions
        </Button>
      }
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <ListCard title="高频面试问题" items={data.frequentQuestions} icon={<FileQuestion className="h-5 w-5" />} />
        <ListCard title="行为面试问题" items={data.behavioralQuestions} icon={<BriefcaseBusiness className="h-5 w-5" />} />
        <ListCard title="数据分析 / 商业分析专项问题" items={data.analyticsQuestions} icon={<BarChart3 className="h-5 w-5" />} />
        <ListCard title="回答思路" items={data.answerStrategy} icon={<BrainCircuit className="h-5 w-5" />} />
        <ListCard title="STAR 框架建议" items={data.starFramework} icon={<Sparkles className="h-5 w-5" />} />
        <ListCard title="重点准备的薄弱点" items={data.weakPoints} icon={<Target className="h-5 w-5" />} tone="amber" />
      </div>
    </DashboardSection>
  );
}

function IndustryBrief({ onCopyIndustry }: { onCopyIndustry: () => void }) {
  const data = mockAgentResults.industryResearch;
  return (
    <DashboardSection
      icon={<TrendingUp className="h-5 w-5" />}
      eyebrow="Industry Brief"
      title="行业背景与商业逻辑"
      action={
        <Button variant="outline" onClick={onCopyIndustry}>
          <Clipboard className="h-4 w-4" /> Copy Industry Brief
        </Button>
      }
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <TextBlock title="行业概览" text={`${data.industry}\n\n${data.overview}`} />
        <ListCard title="商业模式" items={data.businessModel} icon={<BriefcaseBusiness className="h-5 w-5" />} />
        <ListCard title="主要玩家" items={data.players} icon={<Layers3 className="h-5 w-5" />} compact />
        <ListCard title="核心指标" items={data.metrics} icon={<Gauge className="h-5 w-5" />} compact />
        <ListCard title="行业趋势" items={data.trends} icon={<TrendingUp className="h-5 w-5" />} />
        <ListCard title="面试相关行业问题" items={data.interviewIndustryQuestions} icon={<FileQuestion className="h-5 w-5" />} />
        <ListCard title="行业关键词" items={data.keywords} icon={<BookOpenText className="h-5 w-5" />} compact className="lg:col-span-2" />
      </div>
    </DashboardSection>
  );
}

function KnowledgeBaseNote({
  saved,
  onCopyNote,
  onSaveKnowledge
}: {
  saved: boolean;
  onCopyNote: () => void;
  onSaveKnowledge: () => void;
}) {
  return (
    <DashboardSection
      icon={<Database className="h-5 w-5" />}
      eyebrow="Knowledge Base Note"
      title="结构化求职知识卡片"
      action={
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="outline">
            <Link href="/industry-knowledge">
              <BookOpenText className="h-4 w-4" /> Open Industry Library
            </Link>
          </Button>
          <Button variant="outline" onClick={onCopyNote}>
            <Clipboard className="h-4 w-4" /> Copy Note
          </Button>
          <Button variant="gradient" onClick={onSaveKnowledge}>
            {saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
            Save to Knowledge Base
          </Button>
        </div>
      }
    >
      <TextBlock title="自动排版后的求职知识卡片" text={knowledgeBaseNote} />
    </DashboardSection>
  );
}

function DashboardSection({
  icon,
  eyebrow,
  title,
  action,
  children
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
            {icon}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{eyebrow}</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
          </div>
        </div>
        {action}
      </div>
      {children}
    </Card>
  );
}

function MatchScoreCard() {
  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-white/58 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Match Score</p>
          <div className="mt-4 flex items-end gap-2">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl font-semibold tracking-tight text-slate-950"
            >
              {mockAgentResults.resumeMatch.score}
            </motion.span>
            <span className="pb-3 text-2xl font-semibold text-slate-400">/100</span>
          </div>
        </div>
        <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-emerald-50 to-blue-100 text-emerald-600">
          <Gauge className="h-8 w-8" />
        </div>
      </div>
      <div className="mt-7 h-3 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-blue-500 to-violet-500"
          initial={{ width: 0 }}
          animate={{ width: `${mockAgentResults.resumeMatch.score}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <p className="mt-6 leading-7 text-slate-600">
        匹配度较高，但需要强化 SQL 证据、业务影响表达和英文汇报案例。
      </p>
    </div>
  );
}

function ListCard({
  title,
  items,
  icon,
  tone = "blue",
  compact = false,
  className
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  tone?: "blue" | "amber";
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={`rounded-[24px] border border-slate-200/80 bg-white/58 p-5 ${className ?? ""}`}>
      <div className="mb-4 flex items-center gap-3">
        <div
          className={
            tone === "amber"
              ? "flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-50 text-amber-600"
              : "flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
          }
        >
          {icon}
        </div>
        <h4 className="font-semibold text-slate-950">{title}</h4>
      </div>
      <div className={compact ? "flex flex-wrap gap-2" : "grid gap-3"}>
        {items.map((item, index) =>
          compact ? (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
              {item}
            </span>
          ) : (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm leading-7 text-slate-700"
            >
              {item}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

function TextBlock({
  title,
  text,
  className
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/58 ${className ?? ""}`}>
      <div className="border-b border-slate-200/80 bg-white/60 px-5 py-4">
        <h4 className="font-semibold text-slate-950">{title}</h4>
      </div>
      <pre className="max-h-[560px] overflow-auto whitespace-pre-wrap p-5 text-sm leading-7 text-slate-700">
        {text}
      </pre>
    </div>
  );
}

function formatInterviewQuestions() {
  const data = mockAgentResults.careerCoach;
  return [
    "高频面试问题",
    ...data.frequentQuestions.map((item) => `- ${item}`),
    "",
    "行为面试问题",
    ...data.behavioralQuestions.map((item) => `- ${item}`),
    "",
    "数据分析 / 商业分析专项问题",
    ...data.analyticsQuestions.map((item) => `- ${item}`),
    "",
    "回答思路",
    ...data.answerStrategy.map((item) => `- ${item}`),
    "",
    "STAR 框架建议",
    ...data.starFramework.map((item) => `- ${item}`)
  ].join("\n");
}

function formatIndustryBrief() {
  const data = mockAgentResults.industryResearch;
  return [
    `行业判断：${data.industry}`,
    "",
    `行业概览：${data.overview}`,
    "",
    "商业模式",
    ...data.businessModel.map((item) => `- ${item}`),
    "",
    `主要玩家：${data.players.join("、")}`,
    `核心指标：${data.metrics.join("、")}`,
    "",
    "近期趋势",
    ...data.trends.map((item) => `- ${item}`),
    "",
    "面试相关行业问题",
    ...data.interviewIndustryQuestions.map((item) => `- ${item}`),
    "",
    `行业关键词：${data.keywords.join("、")}`
  ].join("\n");
}
