import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(207,157,52,0.08) 0%, transparent 70%), linear-gradient(160deg, #1e2d3a 0%, #314253 50%, #2a3a4a 100%)",
        }}
      />
      <div className="container-cyc relative w-full pt-[72px]">
        <p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-gold">
          Medicina Estética &amp; Cirugía Plástica
        </p>
        <h1 className="mb-6 max-w-[640px] font-display text-[clamp(48px,7vw,80px)] font-light leading-[1.08] text-cream">
          Tu mejor versión,
          <br />
          <em className="italic text-gold">con respaldo médico.</em>
        </h1>
        <p className="mb-10 max-w-[480px] text-[17px] leading-[1.7] text-cream/60">
          Tratamientos seguros, personalizados y de última generación.
          <br />
          Especialistas en patología cutánea, cirugía plástica y estética
          integral.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#contacto"
            className="rounded-sm border border-gold bg-gold px-8 py-3.5 text-[12px] uppercase tracking-[0.12em] text-white transition-colors hover:border-brown hover:bg-brown"
          >
            Solicitar turno
          </Link>
          <Link
            href="#especialidades"
            className="rounded-sm border border-cream/40 px-8 py-3.5 text-[12px] uppercase tracking-[0.12em] text-cream transition-colors hover:border-cream"
          >
            Ver especialidades
          </Link>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-1/2 h-20 w-px opacity-60"
        style={{
          background: "linear-gradient(to bottom, var(--color-gold), transparent)",
        }}
      />
    </section>
  );
}
