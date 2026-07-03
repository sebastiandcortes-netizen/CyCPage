const equipment = [
  {
    num: "01",
    title: "Harmony XL Pro",
    text: "Plataforma láser multifunción para rejuvenecimiento, manchas, acné, rosácea, cicatrices y remoción de tatuajes.",
  },
  {
    num: "02",
    title: "Láser Diodo",
    text: "Rejuvenecimiento facial, manchas, flacidez, rosácea y eliminación de arañitas vasculares.",
  },
  {
    num: "03",
    title: "Luz Pulsada Intensa (IPL)",
    text: "Manchas, rojeces, fotoenvejecimiento, acné, rosácea y depilación definitiva.",
  },
  {
    num: "04",
    title: "Ultrasonido Estético",
    text: "Tratamiento de grasa localizada y flacidez corporal mediante energía ultrasónica.",
  },
  {
    num: "05",
    title: "Botas de Presoterapia",
    text: "Drenaje linfático, mejora de circulación y tratamiento de celulitis edematosa.",
  },
];

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="bg-navy py-[80px] md:py-[100px]">
      <div className="container-cyc">
        {/* CAMBIADO: text-[11px] → text-[14px] */}
        <p className="block text-center text-[14px] font-medium uppercase tracking-[0.18em] text-gold">
          Equipamiento
        </p>
        {/* CAMBIADO: clamp(36px,5vw,54px) → clamp(42px,5vw,62px) */}
        <h2 className="mt-5 text-center font-display text-[clamp(42px,5vw,62px)] font-light leading-[1.12] text-cream">
          Tecnología
          <br />
          de vanguardia
        </h2>
        {/* CAMBIADO: text-[17px] → text-[20px] */}
        <p className="mx-auto mt-6 mb-14 max-w-[580px] text-center text-[20px] leading-[1.8] text-cream/55">
          Trabajamos con equipamiento de última generación para garantizar
          seguridad y resultados efectivos en cada procedimiento.
        </p>

        <div className="grid gap-px border border-gold/15 bg-gold/15 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
          {equipment.map((e) => (
            <div
              key={e.num}
              className="reveal bg-navy p-9 transition-colors hover:bg-gold/[0.06]"
            >
              {/* CAMBIADO: text-[36px] → text-[42px] */}
              <div className="mb-5 font-display text-[42px] font-light leading-none text-gold/25">
                {e.num}
              </div>
              {/* CAMBIADO: text-[14px] → text-[17px] */}
              <h4 className="mb-3 text-[17px] font-medium uppercase tracking-[0.04em] text-cream">
                {e.title}
              </h4>
              {/* CAMBIADO: text-[14px] → text-[17px] */}
              <p className="text-[17px] leading-[1.7] text-cream/50">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
