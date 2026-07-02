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
    title: "GST Returns",
    value: "12 due this week",
    detail: "Auto-prepared and ready for review",
    accent: "from-cyan-500/25 to-sky-500/5",
  },
  {
    title: "Board Reports",
    value: "4 board packs",
    detail: "Updated with live KPI snapshots",
    accent: "from-violet-500/25 to-fuchsia-500/5",
  },
  {
    title: "Financial Reviews",
    value: "8 client reviews",
    detail: "Risk flags prioritised for action",
    accent: "from-emerald-500/25 to-lime-500/5",
  },
  {
    title: "Tax Planning",
    value: "3 new strategies",
    detail: "Prepared for Q3 optimisation",
    accent: "from-amber-500/25 to-orange-500/5",
  },
];

const recentClients = [
  { name: "ICONA", status: "GST review complete" },
  { name: "Paperkite", status: "Board report drafted" },
  { name: "NZNC", status: "Tax planning in progress" },
  { name: "Homes for People", status: "Quarterly review shared" },
];

const agents = [
  { name: "AI-001 GST Advisor", status: "Online", glow: "bg-emerald-500" },
  { name: "AI-002 Board Report AI", status: "Syncing", glow: "bg-sky-500" },
  { name: "AI-003 Financial Review AI", status: "Monitoring", glow: "bg-violet-500" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="w-full border-b border-white/10 bg-slate-950/70 px-5 py-6 backdrop-blur lg:w-72 lg:border-b-0 lg:border-r lg:px-6 lg:py-8">
          <div className="space-y-6">
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

            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  className={`flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium transition ${
                    index === 0
                      ? "bg-sky-500/15 text-sky-200 shadow-inner shadow-sky-500/10"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item}</span>
                  <span className="text-xs text-slate-500">↗</span>
                </button>
              ))}
            </nav>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Today’s focus</p>
              <p className="mt-2 text-lg font-semibold text-white">
                8 client actions queued
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Highest priority: GST filing preparation
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 sm:p-8 lg:p-12">
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Murphy Hughes AI Suite
            </h1>
            <p className="text-lg text-slate-400">
              Business Insight & Strategy
            </p>
            <p className="text-sm text-slate-500">
              Professional AI Workspace
            </p>
          </div>

          <div className="mb-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-slate-400">Welcome back</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">Good Morning Daniel</h2>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-800/50 px-3 py-2">
              <Image
                src="/daniel-murphy-avatar.png"
                alt="Daniel Murphy"
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm font-medium text-white">Daniel Murphy</p>
                <p className="text-xs text-slate-500">Partner Lead</p>
              </div>
            </div>
          </div>

          <section className="mt-6 grid gap-4 xl:grid-cols-[1.6fr_0.9fr]">
            <div className="rounded-[28px] border border-sky-400/20 bg-gradient-to-br from-sky-500/15 via-slate-900/80 to-slate-900 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-sky-200">AI-powered advisory workspace</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Your firm is operating at peak readiness.
                  </h2>
                </div>
                <div className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-sm text-sky-200">
                  94% on track
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm text-slate-400">Clients served</p>
                  <p className="mt-2 text-2xl font-semibold text-white">143</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm text-slate-400">Automations live</p>
                  <p className="mt-2 text-2xl font-semibold text-white">27</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm text-slate-400">Avg. turnaround</p>
                  <p className="mt-2 text-2xl font-semibold text-white">2.4h</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Recent Clients</h3>
                <span className="text-sm text-slate-400">Updated 10m ago</span>
              </div>
              <div className="mt-4 space-y-3">
                {recentClients.map((client) => (
                  <div
                    key={client.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div>
                      <p className="font-medium text-white">{client.name}</p>
                      <p className="text-sm text-slate-400">{client.status}</p>
                    </div>
                    <div className="h-9 w-9 rounded-full border border-slate-700 bg-slate-800/80" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {insights.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${item.accent} p-5`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-slate-400">Live</span>
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">AI Agent Status</h3>
                <span className="text-sm text-emerald-300">All active</span>
              </div>
              <div className="mt-4 space-y-3">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${agent.glow}`} />
                      <div>
                        <p className="font-medium text-white">{agent.name}</p>
                        <p className="text-sm text-slate-400">{agent.status}</p>
                      </div>
                    </div>
                    <span className="text-sm text-slate-400">Ready</span>
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
