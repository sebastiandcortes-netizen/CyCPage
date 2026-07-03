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
    <section id="nosotros" className="bg-cream py-[80px] md:py-[100px]">
      <div className="container-cyc">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            {/* CAMBIADO: text-[11px] → text-[14px] */}
            <p className="mb-5 block text-[14px] font-medium uppercase tracking-[0.18em] text-gold">
              Quiénes somos
            </p>
            {/* CAMBIADO: clamp(36px,5vw,54px) → clamp(42px,5vw,62px) */}
            <h2 className="mb-8 font-display text-[clamp(42px,5vw,62px)] font-light leading-[1.12] text-navy">
              Ciencia y
              <br />
              sensibilidad,
              <br />
              <em className="italic text-gold">en un mismo lugar.</em>
            </h2>
            {/* CAMBIADO: text-[16px] → text-[19px] */}
            <p className="mb-5 text-[19px] leading-[1.85] text-muted">
              Acompañamos a cada paciente en el camino hacia su mejor versión,
              potenciando su belleza natural y fortaleciendo su confianza
              mediante tratamientos estéticos seguros, personalizados y de
              última generación.
            </p>
            <p className="mb-5 text-[19px] leading-[1.85] text-muted">
              Trabajamos con calidez humana, profesionalismo y compromiso.
              Nuestro objetivo es que cada visita sea sinónimo de bienestar,
              confianza y satisfacción.
            </p>
            <p className="text-[19px] leading-[1.85] text-muted">
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
                className="reveal border-b border-navy/10 py-8 first:border-t"
              >
                {/* CAMBIADO: text-[17px] → text-[20px] */}
                <span className="mb-3 block text-[20px] text-gold">◈</span>
                {/* CAMBIADO: text-[14px] → text-[16px] */}
                <h4 className="mb-2.5 text-[16px] uppercase tracking-[0.06em] text-navy">
                  {v.title}
                </h4>
                {/* CAMBIADO: text-[15px] → text-[18px] */}
                <p className="text-[18px] leading-[1.8] text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
