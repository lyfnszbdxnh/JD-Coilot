"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BriefcaseBusiness,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Languages,
  Mail,
  Sparkles,
  UserRound,
  WandSparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const education = [
  {
    school: "香港大学 (HKU)",
    degree: "商业分析硕士",
    period: "2025.08 - 2026.11",
    detail: "聚焦商业分析、数据决策、管理科学与跨职能商业问题拆解。"
  },
  {
    school: "华东理工大学",
    degree: "市场营销学士",
    period: "2021.09 - 2025.06",
    detail: "排名第一名，GPA 91.58/100。具备市场研究、消费者洞察与商业分析基础。"
  }
];

const experiences = [
  {
    company: "字节跳动",
    role: "经营策略分析 | 抖音国际电商-东南亚",
    period: "2025.05 - 2025.08",
    detail:
      "围绕跨境电商经营效率、商家供给、业务指标和策略落地进行分析，支持业务团队发现增长机会。"
  },
  {
    company: "小红书",
    role: "行业策略运营 | 商业化耐用消费品行业三组",
    period: "2024.10 - 2025.03",
    detail:
      "参与商业化行业策略、客户经营和内容生态分析，沉淀行业洞察与广告增长机会。"
  },
  {
    company: "字节跳动",
    role: "商家增长策略产品 | 抖音本地生活",
    period: "2023.11 - 2024.03",
    detail:
      "支持本地生活商家增长策略产品工作，关注商家转化、运营流程和产品机制优化。"
  },
  {
    company: "上海尼尔森市场研究有限公司",
    role: "定量研究 | 快消组",
    period: "2024.06 - 2024.09",
    detail:
      "参与快消行业定量研究项目，涉及问卷、数据清洗、交叉分析与消费者洞察输出。"
  },
  {
    company: "上海百雀羚日用化学有限公司",
    role: "市场营销 | 社交电商事业部",
    period: "2023.07 - 2023.08",
    detail:
      "参与社交电商营销支持，理解品牌内容、渠道运营和用户转化链路。"
  },
  {
    company: "上海深屹实业集团股份有限公司（ushopal）",
    role: "数据分析实习生",
    period: "2023.01 - 2023.02",
    detail:
      "支持数据整理与业务分析工作，建立早期数据分析和跨境业务理解。"
  }
];

const skills = ["SQL", "Python", "Axure", "PRD 撰写", "SPSS", "Excel", "Thinkcell"];

const readableResume = {
  name: "林依帆",
  email: "3093814022@qq.com",
  targetRoles: ["商业分析", "数据分析", "策略运营", "增长策略产品"],
  education: education.map(({ school, degree, period }) => ({ school, degree, period })),
  strengths: [
    "兼具市场营销背景、商业分析训练和互联网平台实习经历",
    "熟悉商业化、本地生活、跨境电商、快消研究等业务场景",
    "能够把数据分析、用户洞察和策略建议转化为结构化表达"
  ],
  skills,
  languages: ["中文：母语", "英文：雅思 7.5，GRE 328"]
};

function TimelineCard({
  item,
  defaultOpen = false
}: {
  item: { company?: string; school?: string; role?: string; degree?: string; period: string; detail: string };
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const title = item.company ?? item.school;
  const subtitle = item.role ?? item.degree;

  return (
    <button
      className="group w-full rounded-[24px] border border-slate-200/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
      onClick={() => setOpen((current) => !current)}
      type="button"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-950">{title}</p>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          <p className="mt-2 text-xs font-medium text-blue-600">{item.period}</p>
        </div>
        <ChevronDown
          className={`mt-1 h-4 w-4 text-slate-400 transition ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open ? <p className="mt-4 text-sm leading-6 text-slate-600">{item.detail}</p> : null}
    </button>
  );
}

export default function AboutPage() {
  const resumeJson = useMemo(() => JSON.stringify(readableResume, null, 2), []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="soft-grid pointer-events-none fixed inset-x-0 top-0 h-[420px] opacity-70" />
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link className="flex items-center gap-2 text-sm font-semibold text-slate-950" href="/">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white">
              <ArrowLeft className="h-4 w-4" />
            </span>
            JD Copilot
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-500 md:flex">
            <Link className="transition hover:text-slate-950" href="/#features">
              Features
            </Link>
            <Link className="transition hover:text-slate-950" href="/#workspace">
              Demo
            </Link>
            <Link className="transition hover:text-slate-950" href="/#results">
              Results
            </Link>
            <Link className="transition hover:text-slate-950" href="/industry-knowledge">
              Knowledge Base
            </Link>
            <Link className="text-slate-950" href="/about">
              About Me
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-6xl gap-8 px-5 pb-14 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:pt-18">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-violet-200/40 blur-3xl" />
            <div className="relative">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                className="relative h-36 w-36 overflow-hidden rounded-full border border-white/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  alt="林依帆个人照片"
                  className="h-full w-full object-cover"
                  src="/about-avatar.jpg"
                />
              </motion.div>
              <div className="mt-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Business Analytics · Strategy · AI Copilot
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                  林依帆
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  面向商业分析、数据分析与策略运营方向的候选人。关注互联网平台业务、用户增长、商业化策略与行业研究，也在把个人求职经验产品化为 JD Copilot。
                </p>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4">
                  <Mail className="h-4 w-4 text-blue-600" />
                  3093814022@qq.com
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4">
                  <Languages className="h-4 w-4 text-violet-600" />
                  中文母语 · IELTS 7.5 · GRE 328
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="gradient">
                  <a href="mailto:3093814022@qq.com">
                    Contact Me
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/lyfnszbdxnh/JD-Coilot" rel="noreferrer" target="_blank">
                    JD Copilot
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <WandSparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">AI 可读简历</p>
                <p className="text-xs text-slate-500">结构化中文版，方便未来接入 Agent / RAG / 简历解析</p>
              </div>
            </div>
            <pre className="mt-5 max-h-[420px] overflow-auto rounded-[22px] border border-slate-200 bg-slate-950 p-5 text-xs leading-6 text-slate-100">
              {resumeJson}
            </pre>
          </Card>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <Card className="p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Education</h2>
                <p className="text-sm text-slate-500">商业分析与市场营销双背景</p>
              </div>
            </div>
            <div className="space-y-3">
              {education.map((item, index) => (
                <TimelineCard defaultOpen={index === 0} item={item} key={item.school} />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Experience</h2>
                <p className="text-sm text-slate-500">点击卡片展开经历细节</p>
              </div>
            </div>
            <div className="space-y-3">
              {experiences.map((item, index) => (
                <TimelineCard defaultOpen={index === 0} item={item} key={`${item.company}-${item.period}`} />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <UserRound className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Skills & Languages</h2>
                <p className="text-sm text-slate-500">适配 BA / DA / Strategy Ops 岗位</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["中文（母语）", "英文（雅思 7.5、GRE 328）"].map((language) => (
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700" key={language}>
                  {language}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
