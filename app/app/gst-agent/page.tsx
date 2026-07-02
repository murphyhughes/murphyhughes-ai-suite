"use client";

import Image from "next/image";

const agentCapabilities = [
  {
    title: "GST Compliance Analysis",
    description:
      "Automated review of GST returns against supporting documentation to identify compliance issues and opportunities for optimisation.",
  },
  {
    title: "Input Tax Recovery Optimisation",
    description:
      "Analysis of input tax deduction entitlement across all operational areas with recommendations for claiming efficiency.",
  },
  {
    title: "Apportionment Strategy",
    description:
      "Review of GST apportionment calculations for mixed supply operations with guidance on correct treatment.",
  },
  {
    title: "Timing and Liability Planning",
    description:
      "Strategic advice on GST payment timing, zero-rating applications, and liability management.",
  },
  {
    title: "Risk Assessment",
    description:
      "Identification of high-risk GST positions with recommendations for remediation and compliance improvements.",
  },
  {
    title: "IRD Audit Preparation",
    description:
      "Pre-audit review of GST positions with supporting documentation to ensure audit readiness.",
  },
];

export default function GSTAgentPage() {
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
            <div className="rounded-xl border border-emerald-800/40 bg-emerald-950/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                GST Agent
              </p>
              <p className="mt-3 text-sm font-semibold text-white">
                Specialized GST Advisor
              </p>
              <p className="mt-1.5 text-xs text-slate-400">
                Expert analysis and compliance guidance
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-3">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              GST Agent
            </h1>
            <p className="text-lg font-medium text-slate-300">
              Specialized AI advisor for GST compliance and optimisation
            </p>
            <p className="text-sm text-slate-500">
              Expert analysis of goods and services tax positions with strategic recommendations
            </p>
          </div>

          {/* Agent Overview */}
          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Agent Specialisation
              </h3>
              <p className="mt-3 text-base font-semibold text-white">
                Goods and Services Tax
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Deep expertise in GST compliance, input tax recovery, apportionment, and IRD audit preparation for New Zealand businesses.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Processing Speed
              </h3>
              <p className="mt-3 text-base font-semibold text-white">
                ~3 minutes per GST return
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Complete compliance analysis including risk identification and optimisation recommendations.
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
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
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
            <h3 className="font-semibold text-white">Integration & Output</h3>
            <p className="mt-2 text-sm text-slate-400">
              The GST Agent integrates with your GST Centre to process uploaded returns and supporting documentation. Reports are generated in multiple formats for client delivery, IRD submissions, or Syft export.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Works with GST Centre file uploads</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Generates compliance reports</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Exports to Syft or PDF format</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Client communication ready</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
