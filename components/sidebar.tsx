"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Activity,
  Landmark,
  FileText,
  Database,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Behavioral AI Data", icon: Activity, href: "/#behavioral-ai-data" },
  { label: "Society & Politics", icon: Landmark, href: "/#society-politics" },
  { label: "Publikasi", icon: FileText, href: "/publications" },
  { label: "Dataset", icon: Database, href: "/#dataset" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-zinc-950/60 lg:flex">
      <div className="px-5 py-5">
        <img
          src="/images/sociavera-logo-white-on-black-preview1.png"
          alt="SociaVera Research"
          className="h-40 w-auto"
        />
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        <p className="px-2 pb-2 pt-3 text-xs font-medium uppercase tracking-wider text-zinc-600">
          Workspace
        </p>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-white/10 text-zinc-100"
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-white/10 px-5 py-4">
        <p className="text-xs text-zinc-600">SociaVera Research © 2026</p>
      </div>
    </aside>
  )
}
