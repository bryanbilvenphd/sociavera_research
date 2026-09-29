"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Our Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Our Team", href: "/team" },
]

function NavNetworkBackground() {
  const nodes = [
    { cx: 30, cy: 70, r: 2.5 },
    { cx: 120, cy: 20, r: 2 },
    { cx: 230, cy: 60, r: 3 },
    { cx: 340, cy: 15, r: 2 },
    { cx: 460, cy: 55, r: 2.5 },
    { cx: 580, cy: 10, r: 2 },
    { cx: 690, cy: 65, r: 3 },
    { cx: 810, cy: 20, r: 2 },
    { cx: 920, cy: 60, r: 2.5 },
    { cx: 1040, cy: 15, r: 2 },
    { cx: 1150, cy: 55, r: 3 },
    { cx: 1260, cy: 10, r: 2 },
  ]
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
  ]

  function curvedPath(a: { cx: number; cy: number }, b: { cx: number; cy: number }, bend: number) {
    const mx = (a.cx + b.cx) / 2
    const my = (a.cy + b.cy) / 2
    return `M ${a.cx} ${a.cy} Q ${mx} ${my + bend} ${b.cx} ${b.cy}`
  }

  return (
    <svg
      viewBox="0 0 1280 80"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <path
          key={i}
          d={curvedPath(nodes[a], nodes[b], (i % 2 === 0 ? -1 : 1) * 18)}
          fill="none"
          stroke="#3B82F6"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={i % 3 === 0 ? "#38BDF8" : "#1E3A5F"}
          stroke="#38BDF8"
          strokeOpacity="0.6"
        />
      ))}
    </svg>
  )
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-white/10 bg-[#0B1220]/95 backdrop-blur">
      <NavNetworkBackground />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/sociavera-icon-mark.png"
            alt="SociaVera Research"
            className="h-10 w-auto"
          />
          <span className="leading-none">
            <span className="block text-lg font-semibold tracking-tight text-white">
              SociaVera
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Research
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="shrink-0 rounded-lg border border-sky-400/40 px-4 py-2 text-sm font-medium text-sky-300 transition-colors hover:bg-sky-400/10 hover:text-sky-200"
        >
          Contact for Research
        </Link>
      </div>
    </header>
  )
}
