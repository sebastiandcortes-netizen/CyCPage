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
    <section id="especialistas" className="bg-navy py-[80px] md:py-[100px]">
      <div className="container-cyc">
        {/* CAMBIADO: text-[11px] → text-[14px] */}
        <p className="block text-center text-[14px] font-medium uppercase tracking-[0.18em] text-gold">
          Nuestro equipo
        </p>
        {/* CAMBIADO: clamp(36px,5vw,54px) → clamp(42px,5vw,62px) */}
        <h2 className="mt-5 text-center font-display text-[clamp(42px,5vw,62px)] font-light leading-[1.12] text-cream">
          Las especialistas
        </h2>

        {/* NOTA: los círculos con iniciales son placeholders.
            Cuando tengas las fotos, reemplazá el div del círculo por:
            <Image src="/foto-ale.jpg" alt="Dra. Cortés" width={80} height={80}
              className="size-20 shrink-0 rounded-full object-cover" />
        */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {doctors.map((d) => (
            <div
              key={d.initials}
              className="reveal flex flex-col gap-7 rounded-sm border border-gold/20 bg-cream/[0.04] p-9 transition-colors hover:border-gold/50 sm:flex-row"
            >
              {/* Placeholder foto doctora */}
              <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-brown">
                {/* CAMBIADO: size-20 → size-24, text-[24px] → text-[28px] */}
                <span className="font-display text-[28px] font-light text-white">
                  {d.initials}
                </span>
              </div>
              <div>
                {/* CAMBIADO: text-[20px] → text-[24px] */}
                <h3 className="font-display text-[24px] font-normal text-cream">
                  {d.name}
                </h3>
                {/* CAMBIADO: text-[10px] → text-[13px] */}
                <span className="mb-4 mt-1 inline-block text-[13px] uppercase tracking-[0.14em] text-gold">
                  {d.tag}
                </span>
                <ul className="flex flex-col gap-2">
                  {d.credentials.map((c) => (
                    <li
                      key={c}
                      className="relative pl-4 text-[17px] leading-[1.6] text-cream/60 before:absolute before:left-0 before:text-gold/50 before:content-['—']"
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
