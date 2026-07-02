import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CATEGORIES, getTreatment, treatments } from "@/data/treatments";

type Params = { slug: string };

// Pre-renderiza una página estática por cada tratamiento único (SSG).
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
          <Link
            href="/#especialidades"
            className="text-[11px] uppercase tracking-[0.14em] text-gold transition-colors hover:text-cream"
          >
            ← Volver a especialidades
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.categories.map((c) => (
              <span
                key={c}
                className="rounded-sm border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-gold"
              >
                {categoryLabel(c)}
              </span>
            ))}
          </div>
          <h1 className="mt-5 max-w-[720px] font-display text-[clamp(36px,6vw,64px)] font-light leading-[1.1] text-cream">
            {t.title}
          </h1>
          <p className="mt-5 max-w-[620px] text-[18px] leading-[1.7] text-cream/60">
            {intro}
          </p>
        </div>
      </header>

      {/* Cuerpo */}
      <div className="bg-cream py-[80px]">
        <div className="container-cyc grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-12">
            {/* Beneficios */}
            <section>
              <h2 className="mb-6 font-display text-[28px] font-light text-navy">
                Beneficios
              </h2>
              {t.benefits && t.benefits.length > 0 ? (
                <ul className="flex flex-col gap-3">
                  {t.benefits.map((b) => (
                    <li
                      key={b}
                      className="relative pl-6 text-[16px] leading-[1.7] text-muted before:absolute before:left-0 before:text-gold before:content-['◈']"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[16px] leading-[1.8] text-muted">
                  {t.shortDescription} En la consulta evaluamos tu caso y
                  diseñamos un plan personalizado para lograr resultados
                  naturales y seguros.
                </p>
              )}
            </section>

            {/* Cuidados */}
            {t.aftercare && t.aftercare.length > 0 && (
              <section>
                <h2 className="mb-6 font-display text-[28px] font-light text-navy">
                  Cuidados posteriores
                </h2>
                <ul className="flex flex-col gap-3">
                  {t.aftercare.map((a) => (
                    <li
                      key={a}
                      className="relative pl-6 text-[16px] leading-[1.7] text-muted before:absolute before:left-0 before:text-gold before:content-['—']"
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
                <h2 className="mb-6 font-display text-[28px] font-light text-navy">
                  Preguntas frecuentes
                </h2>
                <div className="flex flex-col gap-6">
                  {t.faq.map((f) => (
                    <div key={f.q}>
                      <h3 className="mb-1.5 text-[16px] font-medium text-navy">
                        {f.q}
                      </h3>
                      <p className="text-[15px] leading-[1.7] text-muted">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Panel lateral */}
          <aside className="h-fit rounded-sm border border-navy/10 bg-white p-8 lg:sticky lg:top-[96px]">
            {(t.duration || t.sessions) && (
              <dl className="mb-6 flex flex-col gap-4">
                {t.duration && (
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.14em] text-gold">
                      Duración
                    </dt>
                    <dd className="mt-1 text-[16px] text-navy">{t.duration}</dd>
                  </div>
                )}
                {t.sessions && (
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.14em] text-gold">
                      Sesiones
                    </dt>
                    <dd className="mt-1 text-[16px] text-navy">{t.sessions}</dd>
                  </div>
                )}
              </dl>
            )}
            <p className="mb-6 text-[15px] leading-[1.7] text-muted">
              ¿Querés saber si este tratamiento es para vos? Agendá una consulta
              y nuestras especialistas te asesoran.
            </p>
            <Link
              href="/#contacto"
              className="block rounded-sm border border-gold bg-gold px-6 py-3.5 text-center text-[12px] uppercase tracking-[0.12em] text-white transition-colors hover:border-brown hover:bg-brown"
            >
              Solicitar turno
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}
