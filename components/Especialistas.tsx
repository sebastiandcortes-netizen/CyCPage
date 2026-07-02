const doctors = [
  {
    initials: "AC",
    name: "Dra. María Alejandra Cortés",
    tag: "Cirugía · Estética Facial",
    credentials: [
      "Médica — Universidad de Buenos Aires",
      "Cirujana General — Ministerio de Salud",
      "Cirujana de Cabeza y Cuello",
      "Especialista en patología cutánea y medicina estética",
    ],
  },
  {
    initials: "LC",
    name: "Dra. Laura Capizzano",
    tag: "Cirugía Plástica · Reconstrucción",
    credentials: [
      "Médica — UBA · Diploma de Honor",
      "Cirujana General — Ministerio de Salud",
      "Cirujana Plástica — Universidad Católica Argentina",
      "Miembro SCPBA · Miembro SACPER",
      "Especialista en patología de piel, mamaria y úlceras crónicas",
    ],
  },
];

export default function Especialistas() {
  return (
    <section id="especialistas" className="bg-navy py-[100px]">
      <div className="container-cyc">
        <p className="block text-center text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
          Nuestro equipo
        </p>
        <h2 className="mt-4 text-center font-display text-[clamp(36px,5vw,54px)] font-light leading-[1.12] text-cream">
          Las especialistas
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {doctors.map((d) => (
            <div
              key={d.initials}
              className="reveal flex flex-col gap-7 rounded-sm border border-gold/20 bg-cream/[0.04] p-9 transition-colors hover:border-gold/50 sm:flex-row"
            >
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-brown">
                <span className="font-display text-[24px] font-light text-white">
                  {d.initials}
                </span>
              </div>
              <div>
                <h3 className="font-display text-[20px] font-normal text-cream">
                  {d.name}
                </h3>
                <span className="mb-4 mt-1 inline-block text-[10px] uppercase tracking-[0.14em] text-gold">
                  {d.tag}
                </span>
                <ul className="flex flex-col gap-1">
                  {d.credentials.map((c) => (
                    <li
                      key={c}
                      className="relative pl-3.5 text-[14px] leading-[1.5] text-cream/55 before:absolute before:left-0 before:text-gold/50 before:content-['—']"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
