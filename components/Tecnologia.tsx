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
    <section id="tecnologia" className="bg-navy py-[100px]">
      <div className="container-cyc">
        <p className="block text-center text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
          Equipamiento
        </p>
        <h2 className="mt-4 text-center font-display text-[clamp(36px,5vw,54px)] font-light leading-[1.12] text-cream">
          Tecnología
          <br />
          de vanguardia
        </h2>
        <p className="mx-auto mt-6 mb-14 max-w-[560px] text-center text-[17px] text-cream/55">
          Trabajamos con equipamiento de última generación para garantizar
          seguridad y resultados efectivos en cada procedimiento.
        </p>

        <div className="grid gap-px border border-gold/15 bg-gold/15 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
          {equipment.map((e) => (
            <div
              key={e.num}
              className="reveal bg-navy p-9 transition-colors hover:bg-gold/[0.06]"
            >
              <div className="mb-4 font-display text-[36px] font-light leading-none text-gold/25">
                {e.num}
              </div>
              <h4 className="mb-2.5 text-[14px] uppercase tracking-[0.04em] text-cream">
                {e.title}
              </h4>
              <p className="text-[14px] leading-[1.65] text-cream/45">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
