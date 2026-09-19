"use client"

import { Search, Plus, Bell } from "lucide-react"

const filterTags = ["AI Governance", "Social Psychology", "Pre-registered"]

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-white/10 bg-zinc-950/70 px-5 py-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            placeholder="Search publications, datasets, authors…"
            className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40"
            aria-label="Search"
          />
        </div>
        <div className="hidden items-center gap-2 xl:flex">
          {filterTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="relative flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-indigo-400" />
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-zinc-100 px-3.5 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-white">
          <Plus className="size-4" />
          New Project
        </button>
      </div>
    </header>
  )
}
