function NormalCurves() {
  const hills = [
    { x0: -150, x1: 380, peakX: 100, peakY: 100, color: "#1D4ED8", opacity: 0.14 },
    { x0: -50, x1: 520, peakX: 220, peakY: 40, color: "#1E3A8A", opacity: 0.16 },
    { x0: 150, x1: 750, peakX: 440, peakY: 70, color: "#0EA5E9", opacity: 0.14 },
    { x0: 350, x1: 950, peakX: 640, peakY: 10, color: "#2563EB", opacity: 0.15 },
    { x0: 550, x1: 1150, peakX: 840, peakY: 90, color: "#1E3A8A", opacity: 0.18 },
    { x0: 750, x1: 1380, peakX: 1050, peakY: 30, color: "#0EA5E9", opacity: 0.16 },
    { x0: 900, x1: 1450, peakX: 1180, peakY: 120, color: "#38BDF8", opacity: 0.14 },
    { x0: 1050, x1: 1500, peakX: 1300, peakY: 60, color: "#1D4ED8", opacity: 0.15 },
  ]

  const outlineCurves = [
    { x0: -80, x1: 460, peakX: 160, peakY: 180, color: "#38BDF8", opacity: 0.35 },
    { x0: 100, x1: 700, peakX: 380, peakY: 130, color: "#60A5FA", opacity: 0.3 },
    { x0: 300, x1: 940, peakX: 600, peakY: 160, color: "#38BDF8", opacity: 0.3 },
    { x0: 550, x1: 1180, peakX: 850, peakY: 110, color: "#60A5FA", opacity: 0.32 },
    { x0: 800, x1: 1400, peakX: 1080, peakY: 170, color: "#38BDF8", opacity: 0.28 },
    { x0: 1000, x1: 1500, peakX: 1250, peakY: 200, color: "#93C5FD", opacity: 0.25 },
  ]

  return (
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {hills.map((h, i) => (
        <path
          key={`fill-${i}`}
          d={`M ${h.x0} 520 Q ${h.peakX} ${h.peakY} ${h.x1} 520 Z`}
          fill={h.color}
          fillOpacity={h.opacity}
        />
      ))}
      {outlineCurves.map((h, i) => (
        <path
          key={`line-${i}`}
          d={`M ${h.x0} 520 Q ${h.peakX} ${h.peakY} ${h.x1} 520`}
          fill="none"
          stroke={h.color}
          strokeOpacity={h.opacity}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  )
}

function NetworkBackground() {
  const nodes = [
    { cx: 40, cy: 460, r: 4 },
    { cx: 110, cy: 500, r: 3 },
    { cx: 180, cy: 440, r: 5 },
    { cx: 130, cy: 380, r: 3 },
    { cx: 250, cy: 480, r: 4 },
    { cx: 320, cy: 420, r: 3 },
    { cx: 300, cy: 350, r: 5 },
    { cx: 410, cy: 460, r: 4 },
    { cx: 470, cy: 390, r: 6 },
    { cx: 430, cy: 300, r: 3 },
    { cx: 560, cy: 430, r: 4 },
    { cx: 610, cy: 350, r: 3 },
    { cx: 570, cy: 260, r: 4 },
    { cx: 680, cy: 400, r: 5 },
    { cx: 740, cy: 320, r: 3 },
    { cx: 700, cy: 220, r: 4 },
    { cx: 820, cy: 360, r: 6 },
    { cx: 870, cy: 270, r: 3 },
    { cx: 810, cy: 180, r: 4 },
    { cx: 920, cy: 310, r: 4 },
    { cx: 990, cy: 230, r: 3 },
    { cx: 950, cy: 150, r: 5 },
    { cx: 1060, cy: 260, r: 4 },
    { cx: 1120, cy: 180, r: 3 },
    { cx: 1090, cy: 100, r: 4 },
    { cx: 1200, cy: 220, r: 3 },
  ]
  const edges = [
    [0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [5, 6], [3, 6],
    [5, 7], [7, 8], [8, 9], [6, 9], [8, 10], [10, 11], [11, 12], [9, 12],
    [10, 13], [13, 14], [14, 15], [12, 15], [13, 16], [16, 17], [17, 18],
    [15, 18], [16, 19], [19, 20], [20, 21], [18, 21], [19, 22], [22, 23],
    [23, 24], [21, 24], [22, 25],
  ]

  function curvedPath(a: { cx: number; cy: number }, b: { cx: number; cy: number }, bend: number) {
    const mx = (a.cx + b.cx) / 2
    const my = (a.cy + b.cy) / 2
    const dx = b.cx - a.cx
    const dy = b.cy - a.cy
    const nx = -dy
    const ny = dx
    const len = Math.sqrt(nx * nx + ny * ny) || 1
    const cx = mx + (nx / len) * bend
    const cy = my + (ny / len) * bend
    return `M ${a.cx} ${a.cy} Q ${cx} ${cy} ${b.cx} ${b.cy}`
  }

  return (
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <path
          key={i}
          d={curvedPath(nodes[a], nodes[b], ((i % 5) - 2) * 14)}
          fill="none"
          stroke="#3B82F6"
          strokeOpacity="0.35"
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

function Sparkline() {
  return (
    <svg viewBox="0 0 120 36" className="mt-2 h-9 w-full" aria-hidden="true">
      <polyline
        points="0,26 15,22 30,28 45,16 60,20 75,10 90,14 105,6 120,10"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FairnessGauge({ value }: { value: number }) {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - value / 100)

  return (
    <svg viewBox="0 0 64 64" className="size-16" aria-hidden="true">
      <circle cx="32" cy="32" r={radius} fill="none" stroke="#1E293B" strokeWidth="6" />
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        stroke="#38BDF8"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 32 32)"
      />
      <text
        x="32"
        y="37"
        textAnchor="middle"
        className="fill-white text-[16px] font-semibold"
      >
        {value}
      </text>
    </svg>
  )
}

const perceivedCharacteristics = [
  { label: "Competence", value: 82 },
  { label: "Transparency", value: 68 },
  { label: "Perceived Risk", value: 54 },
  { label: "Value Alignment", value: 40 },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220]">
      <NormalCurves />
      <NetworkBackground />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
              Bingung mulai dari mana soal riset pengguna AI?{" "}
              <span className="block text-sky-400">Mari kita diskusikan.</span>
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-slate-400">
              SociaVera Research menjalankan dua lini kerja.{" "}
              <span className="font-semibold text-slate-200">Behavioral AI Data</span> adalah
              studi berlandaskan psikometrik yang mengukur bagaimana pengguna Anda mempercayai dan mengandalkan
              sistem AI Anda.{" "}
              <span className="font-semibold text-slate-200">
                Society, Politics &amp; AI Research
              </span>{" "}
              adalah riset terapan tentang bagaimana AI membentuk ulang kepercayaan publik,
              legitimasi institusi, dan kehidupan politik.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#0F1B30]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-medium text-slate-400">Conceptual dashboard</span>
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-slate-600" />
                <span className="size-2 rounded-full bg-slate-600" />
                <span className="size-2 rounded-full bg-slate-600" />
              </div>
            </div>

            <div className="mt-4 flex gap-4 border-b border-white/5 pb-3 text-xs">
              <span className="border-b-2 border-sky-400 pb-2 font-medium text-white">
                Overview
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <p className="text-[11px] text-slate-400">Human Judgment Trend</p>
                <Sparkline />
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <p className="text-[11px] text-slate-400">Calibrated Trust Score</p>
                <div className="mt-1 flex items-center justify-between">
                  <FairnessGauge value={76} />
                  <span className="text-[10px] text-slate-500">
                    Underclaims
                    <br />
                    Trust
                    <br />
                    Overclaims
                  </span>
                </div>
              </div>

              <div className="col-span-2 rounded-xl border border-white/5 bg-white/[0.03] p-3">
                <p className="mb-2 text-[11px] text-slate-400">Perceived AI Characteristics</p>
                <div className="space-y-2">
                  {perceivedCharacteristics.map((d) => (
                    <div key={d.label} className="flex items-center gap-2">
                      <span className="w-24 shrink-0 text-[10px] text-slate-400">{d.label}</span>
                      <div className="h-1.5 flex-1 rounded-full bg-white/5">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-400"
                          style={{ width: `${d.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
