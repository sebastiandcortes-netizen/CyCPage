"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CATEGORIES,
  treatmentsByCategory,
  type Category,
} from "@/data/treatments";

export default function Especialidades() {
  const [active, setActive] = useState<Category>("facial");
  const items = treatmentsByCategory(active);

  return (
    <section id="especialidades" className="bg-[#f7f3ea] py-[100px]">
      <div className="container-cyc">
        <p className="block text-center text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
          Qué ofrecemos
        </p>
        <h2 className="mt-4 text-center font-display text-[clamp(36px,5vw,54px)] font-light leading-[1.12] text-navy">
          Especialidades
          <br />
          &amp; Tratamientos
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-center text-[17px] text-muted">
          Ofrecemos una amplia gama de tratamientos estéticos y quirúrgicos de
          última generación. Seleccioná una especialidad y hacé clic en cualquier
          tratamiento para conocer más detalles.
        </p>

        {/* Tabs */}
        <div className="mt-12 mb-10 flex gap-0 overflow-x-auto border-b border-navy/10">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={`-mb-px whitespace-nowrap border-b-2 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors ${
                active === c.id
                  ? "border-gold text-navy"
                  : "border-transparent text-muted hover:text-navy"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grilla de tratamientos */}
        <div className="grid gap-px border border-navy/10 bg-navy/10 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
          {items.map((t) => (
            <Link
              key={t.slug}
              href={`/tratamientos/${t.slug}`}
              className="group bg-[#f7f3ea] px-6 py-7 transition-colors hover:bg-cream"
            >
              <h4 className="mb-1.5 text-[14px] uppercase tracking-[0.04em] text-navy group-hover:text-gold">
                {t.title}
              </h4>
              <p className="text-[14px] leading-[1.65] text-muted">
                {t.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
