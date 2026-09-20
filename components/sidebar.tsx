"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Activity,
  Landmark,
  FileText,
  Database,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Behavioral AI Data", icon: Activity },
  { label: "Society & Politics", icon: Landmark },
  { label: "Publikasi", icon: FileText },
  { label: "Dataset", icon: Database },
]

export function Sidebar() {
  const [active, setActive] = useState("Dashboard")

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-zinc-950/60 lg:flex">
      <div className="px-5 py-5">
        <img
          src="/images/sociavera-logo-white-on-black-preview.png"
          alt="SociaVera Research"
          className="h-28 w-auto"
        />
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
    </aside>
  )
}
