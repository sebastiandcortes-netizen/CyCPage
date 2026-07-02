const values = [
  {
    title: "Seguridad",
    text: "Procedimientos avalados por especialistas con formación universitaria de excelencia.",
  },
  {
    title: "Personalización",
    text: "Cada tratamiento es diseñado según las necesidades y objetivos únicos de cada paciente.",
  },
  {
    title: "Resultados",
    text: "Tecnología de vanguardia para resultados visibles, naturales y duraderos.",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-cream py-[100px] md:py-[100px]">
      <div className="container-cyc">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-4 block text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Quiénes somos
            </p>
            <h2 className="mb-7 font-display text-[clamp(36px,5vw,54px)] font-light leading-[1.12] text-navy">
              Ciencia y
              <br />
              sensibilidad,
              <br />
              <em className="italic text-gold">en un mismo lugar.</em>
            </h2>
            <p className="mb-4 text-[16px] leading-[1.8] text-muted">
              Acompañamos a cada paciente en el camino hacia su mejor versión,
              potenciando su belleza natural y fortaleciendo su confianza
              mediante tratamientos estéticos seguros, personalizados y de última
              generación.
            </p>
            <p className="mb-4 text-[16px] leading-[1.8] text-muted">
              Trabajamos con calidez humana, profesionalismo y compromiso.
              Nuestro objetivo es que cada visita sea sinónimo de bienestar,
              confianza y satisfacción.
            </p>
            <p className="text-[16px] leading-[1.8] text-muted">
              <strong className="text-navy">
                Somos especialistas en medicina estética integral
              </strong>
              , combinando tratamientos no invasivos, mini invasivos y
              procedimientos quirúrgicos para brindarte soluciones adaptadas a
              tus necesidades específicas.
            </p>
          </div>

          <div className="flex flex-col pt-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="reveal border-b border-navy/10 py-7 first:border-t"
              >
                <span className="mb-2.5 block text-[17px] text-gold">◈</span>
                <h4 className="mb-2 text-[14px] uppercase tracking-[0.06em] text-navy">
                  {v.title}
                </h4>
                <p className="text-[15px] leading-[1.7] text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
