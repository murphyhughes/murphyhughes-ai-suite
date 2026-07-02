"use client";

import Image from "next/image";

const agentCapabilities = [
  {
    title: "Financial Statement Analysis",
    description:
      "Comprehensive review of profitability, asset efficiency, and financial position with detailed ratio analysis.",
  },
  {
    title: "Variance Investigation",
    description:
      "Detailed analysis of significant variances from prior periods with identification of drivers and root causes.",
  },
  {
    title: "Working Capital Review",
    description:
      "Assessment of receivables, inventory, and payables management with recommendations for efficiency improvement.",
  },
  {
    title: "Audit Findings Analysis",
    description:
      "Review of audit points and findings with recommendations for remediation and future prevention.",
  },
  {
    title: "Management Accounts Quality",
    description:
      "Review of accounting treatments, provisions, and disclosures for accuracy and compliance.",
  },
  {
    title: "Financial Health Scoring",
    description:
      "Overall assessment of financial health, sustainability, and identification of areas requiring attention.",
  },
];

export default function FinancialReviewAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full border-b border-slate-800 bg-slate-950/60 px-6 py-8 lg:w-72 lg:border-b-0 lg:border-r">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/murphy-hughes-logo.png"
                alt="Murphy Hughes logo"
                width={320}
                height={120}
                priority
                className="h-auto w-auto max-w-full"
              />
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {[
                "Dashboard",
                "Clients",
                "AI Team",
                "GST Centre",
                "Board Reports",
                "Financial Reviews",
                "Tax Planning",
                "Knowledge Base",
                "Settings",
              ].map((item) => (
                <button
                  key={item}
                  className={`flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium transition duration-200 ${
                    item === "AI Team"
                      ? "bg-sky-500/15 text-sky-200 hover:bg-sky-500/20"
                      : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-100"
                  }`}
                >
                  <span>{item}</span>
                </button>
              ))}
            </nav>

            {/* Agent Card */}
            <div className="rounded-xl border border-blue-800/40 bg-blue-950/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Financial Review Agent
              </p>
              <p className="mt-3 text-sm font-semibold text-white">
                Accounts Analyst
              </p>
              <p className="mt-1.5 text-xs text-slate-400">
                Deep financial health analysis
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-3">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Financial Review Agent
            </h1>
            <p className="text-lg font-medium text-slate-300">
              Comprehensive financial statement analysis and reporting
            </p>
            <p className="text-sm text-slate-500">
              In-depth review of financial performance, working capital, and overall financial health
            </p>
          </div>

          {/* Agent Overview */}
          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Agent Specialisation
              </h3>
              <p className="mt-3 text-base font-semibold text-white">
                Financial Statement Review
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Expert analysis of financial statements, working capital management, and financial health assessment for client reporting.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Processing Speed
              </h3>
              <p className="mt-3 text-base font-semibold text-white">
                ~5 minutes per review
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Complete financial review with variance analysis and strategic recommendations.
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold text-white">Key Capabilities</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {agentCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-slate-700/60"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {capability.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-400">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Integration Info */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6">
            <h3 className="font-semibold text-white">Analysis & Reporting</h3>
            <p className="mt-2 text-sm text-slate-400">
              The Financial Review Agent provides comprehensive analysis of financial statements, identifying trends, variances, and areas of concern. Reports include detailed commentary and recommendations for management attention.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Ratio and trend analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Working capital assessment</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Variance investigation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">✓</span>
                <span>Client letter ready</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
