import Link from "next/link"

const team = [
  {
    name: "Bryan Bilven, PhD",
    role: "Founder & Principal Researcher",
    detail: "PhD in Social Psychology, Eötvös Loránd University, Budapest, Hungaria.",
    initials: "BB",
    photo: "/images/team/bryan-bilven.jpg",
    href: "/publications",
  },
  {
    name: "Samuel Roniver",
    role: "Founder & Researcher",
    detail: "MA (Candidate) in Psychology, HSE University, Moscow, Rusia.",
    initials: "SR",
    photo: "/images/team/samuel-roniver.jpg",
    href: null,
  },
]

export function OurTeam() {
  return (
    <section id="team" className="scroll-mt-20 bg-[#0B1220] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Our Team</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {team.map((member) => {
            const cardContent = (
              <>
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="size-14 shrink-0 rounded-full object-cover ring-2 ring-white/10"
                  />
                ) : (
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-semibold text-white">
                    {member.initials}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-base font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-sky-300">{member.role}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{member.detail}</p>
                  {member.href && (
                    <p className="mt-2 text-xs font-medium text-sky-400">Lihat publikasi →</p>
                  )}
                </div>
              </>
            )

            if (member.href) {
              return (
                <Link
                  key={member.name}
                  href={member.href}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                >
                  {cardContent}
                </Link>
              )
            }

            return (
              <div
                key={member.name}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
