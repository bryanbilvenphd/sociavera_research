const colorMap = {
  sky: { a: "#38BDF8", b: "#2563EB" },
  violet: { a: "#A78BFA", b: "#7C3AED" },
  teal: { a: "#2DD4BF", b: "#0D9488" },
  amber: { a: "#FBBF24", b: "#D97706" },
  rose: { a: "#FB7185", b: "#E11D48" },
} as const

export function PageGlow({ color = "sky" }: { color?: keyof typeof colorMap }) {
  const { a, b } = colorMap[color]

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-32 left-1/4 size-96 rounded-full blur-3xl"
        style={{ background: a, opacity: 0.14 }}
      />
      <div
        className="absolute -top-20 right-1/4 size-80 rounded-full blur-3xl"
        style={{ background: b, opacity: 0.12 }}
      />
      <svg viewBox="0 0 1200 420" className="absolute inset-0 h-full w-full opacity-40">
        <defs>
          <radialGradient id={`fade-${color}`} cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor={a} stopOpacity="0.5" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        {[
          [40, 340], [160, 280], [300, 360], [460, 250], [620, 320],
          [780, 260], [900, 340], [1040, 270], [1160, 330],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3.5 : 2} fill={a} fillOpacity={0.5} />
        ))}
        {[
          [40, 340, 160, 280], [160, 280, 300, 360], [300, 360, 460, 250],
          [460, 250, 620, 320], [620, 320, 780, 260], [780, 260, 900, 340],
          [900, 340, 1040, 270], [1040, 270, 1160, 330],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={a} strokeOpacity="0.25" strokeWidth="1" />
        ))}
      </svg>
    </div>
  )
}
