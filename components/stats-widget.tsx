import { stats } from "@/lib/research-data"

export function StatsWidget() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-white/20"
        >
          <p className="text-xs font-medium text-zinc-500">{stat.label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50">{stat.value}</p>
          <p className="mt-1 text-xs text-zinc-500">{stat.change}</p>
        </div>
      ))}
    </div>
  )
}
