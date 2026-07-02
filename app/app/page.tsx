import Image from "next/image";

const navItems = [
  "Dashboard",
  "Clients",
  "AI Team",
  "GST Centre",
  "Board Reports",
  "Financial Reviews",
  "Tax Planning",
  "Knowledge Base",
  "Settings",
];

const insights = [
  {
    title: "GST Advisor",
    value: "Ready to Review",
    detail: "6 returns prepared for lodgement",
    accent: "from-cyan-500/20 to-blue-500/5",
  },
  {
    title: "Board Reports",
    value: "3 awaiting approval",
    detail: "Financial statements finalised and ready",
    accent: "from-violet-500/20 to-purple-500/5",
  },
  {
    title: "Financial Reviews",
    value: "8 scheduled",
    detail: "Comprehensive year-end audit schedule",
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Tax Planning",
    value: "4 opportunities identified",
    detail: "Strategic tax minimisation initiatives",
    accent: "from-amber-500/20 to-yellow-500/5",
  },
  {
    title: "AI Knowledge Base",
    value: "2,146 documents indexed",
    detail: "Comprehensive accounting reference library",
    accent: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "Client Workflow",
    value: "97% on schedule",
    detail: "Engagement timelines tracking optimally",
    accent: "from-green-500/20 to-emerald-500/5",
  },
];

const recentClients = [
  { name: "ICONA Ltd", status: "GST return lodged 28 Jun" },
  { name: "Paperkite", status: "Board report approved" },
  { name: "NZ Natural Clothing", status: "Financial review in progress" },
  { name: "Homes for People Trust", status: "Charitable tax filing pending" },
  { name: "Energy Developments NZ", status: "Tax planning meeting scheduled" },
  { name: "El Rancho", status: "Quarterly management accounts issued" },
];

const agents = [
  { name: "GST AI", status: "Active", glow: "bg-emerald-500" },
  { name: "Board Report AI", status: "Active", glow: "bg-sky-500" },
  { name: "Financial Review AI", status: "Active", glow: "bg-violet-500" },
  { name: "Tax Planning AI", status: "Active", glow: "bg-amber-500" },
  { name: "Annual Accounts AI", status: "Active", glow: "bg-blue-500" },
  { name: "Business Advisory AI", status: "Active", glow: "bg-pink-500" },
];

export default function Home() {
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
              {navItems.map((item, index) => (
                <button
                  key={item}
                  className={`flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium transition duration-200 ${
                    index === 0
                      ? "bg-sky-500/15 text-sky-200 hover:bg-sky-500/20"
                      : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-100"
                  }`}
                >
                  <span>{item}</span>
                </button>
              ))}
            </nav>

            {/* Focus Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-800/20 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Audit focus
              </p>
              <p className="mt-3 text-sm font-semibold text-white">
                12 compliance items due
              </p>
              <p className="mt-1.5 text-xs text-slate-400">
                Priority: Q2 GST returns and SOP filings
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-3">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Murphy Hughes AI Suite
            </h1>
            <p className="text-lg font-medium text-slate-300">
              Business Insight & Strategy
            </p>
            <p className="text-sm text-slate-500">
              Professional AI Workspace
            </p>
          </div>

          {/* Welcome Bar */}
          <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                Partner overview
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Good morning Daniel
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-800/30 px-4 py-3">
              <Image
                src="/daniel-murphy-avatar.png"
                alt="Daniel Murphy"
                width={40}
                height={40}
                className="h-10 w-10 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  Daniel Murphy
                </p>
                <p className="text-xs text-slate-400">Partner Lead</p>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <section className="mb-8 grid gap-6 xl:grid-cols-[1.8fr_1fr]">
            {/* Status Card */}
            <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-slate-800/20 via-slate-900/30 to-slate-900/10 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    Engagement Status
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    All client engagements proceeding on schedule.
                  </h3>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-sm font-medium text-slate-100">
                  98% compliant
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                  <p className="text-xs font-medium text-slate-400">
                    Active clients
                  </p>
                  <p className="mt-3 text-3xl font-bold text-white">143</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                  <p className="text-xs font-medium text-slate-400">
                    Accounts processed
                  </p>
                  <p className="mt-3 text-3xl font-bold text-white">1,247</p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                  <p className="text-xs font-medium text-slate-400">
                    Avg. processing time
                  </p>
                  <p className="mt-3 text-3xl font-bold text-white">1.8h</p>
                </div>
              </div>
            </div>

            {/* Recent Clients */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Client Engagements</h3>
                <span className="text-xs text-slate-500">Updated now</span>
              </div>
              <div className="mt-4 space-y-2">
                {recentClients.map((client) => (
                  <div
                    key={client.name}
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/20 px-4 py-3 transition hover:bg-slate-800/30"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {client.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {client.status}
                      </p>
                    </div>
                    <div className="h-8 w-8 rounded-full border border-slate-700 bg-slate-800" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Insights & Agents */}
          <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
            {/* Insights Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {insights.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl border border-slate-800 bg-gradient-to-br ${item.accent} p-5 transition hover:border-slate-700`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs text-slate-400">Live</span>
                  </div>
                  <p className="mt-4 text-2xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* AI Agent Status */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">AI Audit Team</h3>
                <span className="text-xs font-medium text-emerald-400">
                  All operational
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/20 px-4 py-3 transition hover:bg-slate-800/30"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full ${agent.glow}`}
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {agent.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {agent.status}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">Ready</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
