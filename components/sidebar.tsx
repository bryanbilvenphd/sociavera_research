"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  ShieldCheck,
  Brain,
  FileText,
  Database,
  Hexagon,
  ChevronsUpDown,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "AI Governance", icon: ShieldCheck },
  { label: "Social Psychology", icon: Brain },
  { label: "Policy Papers", icon: FileText },
  { label: "Datasets", icon: Database },
]

export function Sidebar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-zinc-950/60 lg:flex">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
          <Hexagon className="size-5" strokeWidth={2.2} />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-zinc-100">Sociavera</p>
          <p className="text-xs text-zinc-500">Research</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        <p className="px-2 pb-2 pt-3 text-xs font-medium uppercase tracking-wider text-zinc-600">
          Workspace
        </p>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-white/10 text-zinc-100"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="size-4" />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="border-t border-white/10 p-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-white/5">
          <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-semibold text-white">
            BB
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-medium text-zinc-100">Bryan Bilven</p>
            <p className="truncate text-xs text-zinc-500">Senior Fellow</p>
          </div>
          <ChevronsUpDown className="size-4 text-zinc-500" />
        </button>
      </div>
    </aside>
  )
}
