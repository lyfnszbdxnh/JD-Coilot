"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowLeft,
  BookOpenText,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Database,
  Gauge,
  Layers3,
  LineChart,
  Save,
  Search,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getReportMarkdown,
  iconMap,
  type IndustryReport,
  industryReports,
  primaryCategories
} from "@/lib/industry-knowledge";

export default function IndustryKnowledgePage() {
  const [activePrimary, setActivePrimary] = useState<IndustryReport["primaryCategory"]>(primaryCategories[0]);
  const [activeReportId, setActiveReportId] = useState(industryReports[0].id);
  const [saved, setSaved] = useState(false);

  const visibleReports = useMemo(
    () => industryReports.filter((report) => report.primaryCategory === activePrimary),
    [activePrimary]
  );
  const activeReport =
    industryReports.find((report) => report.id === activeReportId) ?? visibleReports[0] ?? industryReports[0];
  const ActiveIcon = iconMap[activeReport.iconName];

  const choosePrimary = (category: IndustryReport["primaryCategory"]) => {
    setActivePrimary(category);
    const first = industryReports.find((report) => report.primaryCategory === category);
    if (first) {
      setActiveReportId(first.id);
    }
  };

  const copyReport = async () => {
    await navigator.clipboard.writeText(getReportMarkdown(activeReport));
    toast.success("已复制完整行业分析报告。");
  };

  const saveReport = () => {
    setSaved(true);
    toast.success("已模拟保存到行业知识库");
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-5 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="soft-grid pointer-events-none absolute inset-x-0 top-0 h-[480px]" />
      <div className="relative mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <Button asChild variant="outline" size="sm" className="mb-5">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" /> Back to JD Copilot
              </Link>
            </Button>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Industry Knowledge Base
            </div>
            <h1 className="text-balance max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              行业知识库，不止保存一次分析结果。
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              为应届生准备岗位前置认知：按一级行业和二级岗位方向组织，输出行业扫描、商业模式、核心指标、趋势和面试问题。
            </p>
          </div>
          <Card className="min-w-72 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Demo reports</p>
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{industryReports.length}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              当前使用 Mock 行研内容，后续可接搜索、RAG 或企业行业知识库。
            </p>
          </Card>
        </header>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-5">
            <Card className="p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                <Search className="h-4 w-4" />
                一级分类
              </div>
              <div className="grid gap-2">
                {primaryCategories.map((category) => (
                  <button
                    key={category}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                      activePrimary === category
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-950/10"
                        : "bg-white/60 text-slate-600 hover:bg-white"
                    }`}
                    onClick={() => choosePrimary(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
                <Layers3 className="h-4 w-4" />
                二级方向
              </div>
              <div className="grid gap-2">
                {visibleReports.map((report) => (
                  <button
                    key={report.id}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      activeReport.id === report.id
                        ? "border-blue-200 bg-blue-50/80"
                        : "border-slate-200 bg-white/60 hover:bg-white"
                    }`}
                    onClick={() => {
                      setSaved(false);
                      setActiveReportId(report.id);
                    }}
                  >
                    <p className="font-semibold text-slate-950">{report.secondaryCategory}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{report.fitRoles.slice(0, 3).join(" / ")}</p>
                  </button>
                ))}
              </div>
            </Card>
          </aside>

          <motion.section
            key={activeReport.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            <Card className="overflow-hidden">
              <div className="border-b border-slate-200/80 bg-white/60 p-6">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[22px] bg-slate-950 text-white">
                      <ActiveIcon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                        {activeReport.primaryCategory} / {activeReport.secondaryCategory}
                      </p>
                      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                        {activeReport.title}
                      </h2>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{activeReport.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button variant="outline" onClick={copyReport}>
                      <Clipboard className="h-4 w-4" /> Copy Report
                    </Button>
                    <Button variant="gradient" onClick={saveReport}>
                      {saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
                      Save Report
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid gap-4 md:grid-cols-4">
                  {activeReport.fitRoles.map((role) => (
                    <div key={role} className="rounded-2xl bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700">
                      {role}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-violet-50/70 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Executive Summary</p>
                  <p className="mt-3 leading-8 text-slate-700">{activeReport.executiveSummary}</p>
                </div>
              </div>
            </Card>

            <div className="grid gap-5 xl:grid-cols-2">
              <ReportCard title="行业扫描" icon={<Search className="h-5 w-5" />} items={activeReport.marketScan} />
              <ReportCard title="商业模式" icon={<BriefcaseBusiness className="h-5 w-5" />} items={activeReport.businessModel} />
              <ReportCard title="价值链拆解" icon={<Layers3 className="h-5 w-5" />} items={activeReport.valueChain} />
              <ChipCard title="核心指标" icon={<Gauge className="h-5 w-5" />} items={activeReport.coreMetrics} />
              <ChipCard title="主要玩家" icon={<Target className="h-5 w-5" />} items={activeReport.keyPlayers} />
              <ReportCard title="用户 / 客户分层" icon={<BookOpenText className="h-5 w-5" />} items={activeReport.userSegments} />
              <ReportCard title="岗位地图" icon={<BriefcaseBusiness className="h-5 w-5" />} items={activeReport.jobMap} />
              <ReportCard title="分析师关注点" icon={<LineChart className="h-5 w-5" />} items={activeReport.analystFocus} />
              <ReportCard title="近期趋势" icon={<TrendingUp className="h-5 w-5" />} items={activeReport.trends} />
              <ReportCard title="风险与不确定性" icon={<Target className="h-5 w-5" />} items={activeReport.risks} />
              <ReportCard title="面试相关行业问题" icon={<BookOpenText className="h-5 w-5" />} items={activeReport.interviewQuestions} />
              <ChipCard title="行业关键词" icon={<Layers3 className="h-5 w-5" />} items={activeReport.keywords} />
            </div>

            <Card className="p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">Action Checklist</p>
                  <h3 className="text-xl font-semibold text-slate-950">求职者下一步准备</h3>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {activeReport.actionChecklist.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-sm leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </main>
  );
}

function ReportCard({
  title,
  icon,
  items
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-950">{title}</h3>
      </div>
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200/80 bg-white/62 p-4 text-sm leading-7 text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}

function ChipCard({
  title,
  icon,
  items
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-950">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}
