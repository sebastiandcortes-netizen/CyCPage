import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CATEGORIES, getTreatment, treatments } from "@/data/treatments";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  const slugs = Array.from(new Set(treatments.map((t) => t.slug)));
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return { title: "Tratamiento no encontrado" };
  return {
    title: t.title,
    description: t.shortDescription,
  };
}

function categoryLabel(id: string) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

export default async function TratamientoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const intro = t.intro ?? t.shortDescription;

  return (
    <article>
      {/* Encabezado */}
      <header className="bg-navy pt-[120px] pb-16">
        <div className="container-cyc">
          {/* CAMBIADO: text-[11px] → text-[15px] */}
          <Link
            href="/#especialidades"
            className="text-[15px] uppercase tracking-[0.12em] text-gold transition-colors hover:text-cream"
          >
            ← Volver a especialidades
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.categories.map((c) => (
              <span
                key={c}
                className="rounded-sm border border-gold/30 px-3 py-1 text-[13px] uppercase tracking-[0.12em] text-gold"
              >
                {categoryLabel(c)}
              </span>
            ))}
          </div>
          {/* CAMBIADO: clamp(36px,6vw,64px) → clamp(44px,6vw,72px) */}
          <h1 className="mt-5 max-w-[720px] font-display text-[clamp(44px,6vw,72px)] font-light leading-[1.1] text-cream">
            {t.title}
          </h1>
          {/* CAMBIADO: text-[18px] → text-[21px] */}
          <p className="mt-5 max-w-[640px] text-[21px] leading-[1.8] text-cream/60">
            {intro}
          </p>
        </div>
      </header>

      {/* Cuerpo */}
      <div className="bg-cream py-[80px]">
        <div className="container-cyc grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
          <div className="flex flex-col gap-12">

            {/* Beneficios */}
            <section>
              {/* CAMBIADO: text-[28px] → text-[34px] */}
              <h2 className="mb-7 font-display text-[34px] font-light text-navy">
                Beneficios
              </h2>
              {t.benefits && t.benefits.length > 0 ? (
                <ul className="flex flex-col gap-4">
                  {t.benefits.map((b) => (
                    <li
                      key={b}
                      className="relative pl-7 text-[19px] leading-[1.8] text-muted before:absolute before:left-0 before:text-gold before:content-['◈']"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[19px] leading-[1.85] text-muted">
                  {t.shortDescription} En la consulta evaluamos tu caso y
                  diseñamos un plan personalizado para lograr resultados
                  naturales y seguros.
                </p>
              )}
            </section>

            {/* Cuidados posteriores */}
            {t.aftercare && t.aftercare.length > 0 && (
              <section>
                <h2 className="mb-7 font-display text-[34px] font-light text-navy">
                  Cuidados posteriores
                </h2>
                <ul className="flex flex-col gap-4">
                  {t.aftercare.map((a) => (
                    <li
                      key={a}
                      className="relative pl-7 text-[19px] leading-[1.8] text-muted before:absolute before:left-0 before:text-gold/70 before:content-['—']"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Preguntas frecuentes */}
            {t.faq && t.faq.length > 0 && (
              <section>
                <h2 className="mb-7 font-display text-[34px] font-light text-navy">
                  Preguntas frecuentes
                </h2>
                <div className="flex flex-col gap-8">
                  {t.faq.map((f) => (
                    <div key={f.q} className="border-l-2 border-gold/30 pl-5">
                      {/* CAMBIADO: text-[16px] → text-[20px] */}
                      <h3 className="mb-2 text-[20px] font-medium text-navy">
                        {f.q}
                      </h3>
                      {/* CAMBIADO: text-[15px] → text-[18px] */}
                      <p className="text-[18px] leading-[1.8] text-muted">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Panel lateral */}
          <aside className="h-fit rounded-sm border border-navy/10 bg-white p-8 lg:sticky lg:top-[108px]">
            {(t.duration || t.sessions) && (
              <dl className="mb-7 flex flex-col gap-5 border-b border-navy/10 pb-7">
                {t.duration && (
                  <div>
                    {/* CAMBIADO: text-[10px] → text-[13px] */}
                    <dt className="text-[13px] uppercase tracking-[0.12em] text-gold">
                      Duración
                    </dt>
                    {/* CAMBIADO: text-[16px] → text-[20px] */}
                    <dd className="mt-1 text-[20px] text-navy">{t.duration}</dd>
                  </div>
                )}
                {t.sessions && (
                  <div>
                    <dt className="text-[13px] uppercase tracking-[0.12em] text-gold">
                      Sesiones
                    </dt>
                    <dd className="mt-1 text-[20px] text-navy">{t.sessions}</dd>
                  </div>
                )}
              </dl>
            )}
            {/* CAMBIADO: text-[15px] → text-[18px] */}
            <p className="mb-7 text-[18px] leading-[1.8] text-muted">
              ¿Querés saber si este tratamiento es para vos? Agendá una consulta
              y nuestras especialistas te asesoran sin compromiso.
            </p>
            {/* CAMBIADO: text-[12px] → text-[15px], padding aumentado */}
            <Link
              href="/#contacto"
              className="block rounded-sm border border-gold bg-gold px-6 py-4 text-center text-[15px] uppercase tracking-[0.1em] text-white transition-colors hover:border-brown hover:bg-brown"
            >
              Solicitar turno
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}