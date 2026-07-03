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
    <section id="especialidades" className="bg-[#f7f3ea] py-[80px] md:py-[100px]">
      <div className="container-cyc">
        {/* CAMBIADO: text-[11px] → text-[14px] */}
        <p className="block text-center text-[14px] font-medium uppercase tracking-[0.18em] text-gold">
          Qué ofrecemos
        </p>
        {/* CAMBIADO: clamp(36px,5vw,54px) → clamp(42px,5vw,62px) */}
        <h2 className="mt-5 text-center font-display text-[clamp(42px,5vw,62px)] font-light leading-[1.12] text-navy">
          Especialidades
          <br />
          &amp; Tratamientos
        </h2>
        {/* CAMBIADO: text-[17px] → text-[20px] */}
        <p className="mx-auto mt-6 max-w-[600px] text-center text-[20px] leading-[1.8] text-muted">
          Seleccioná una especialidad y hacé clic en cualquier tratamiento para
          conocer más detalles, beneficios y cuidados.
        </p>

        {/* Tabs — CAMBIADO: text-[11px] → text-[14px] */}
        <div className="mt-12 mb-10 flex gap-0 overflow-x-auto border-b border-navy/10">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={`-mb-px whitespace-nowrap border-b-2 px-6 py-4 text-[14px] font-medium uppercase tracking-[0.08em] transition-colors ${
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
        <div className="grid gap-px border border-navy/10 bg-navy/10 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
          {items.map((t) => (
            <Link
              key={t.slug}
              href={`/tratamientos/${t.slug}`}
              className="group bg-[#f7f3ea] px-6 py-8 transition-colors hover:bg-cream"
            >
              {/* CAMBIADO: text-[14px] → text-[17px] */}
              <h4 className="mb-2 text-[17px] font-medium uppercase tracking-[0.03em] text-navy group-hover:text-gold">
                {t.title}
              </h4>
              {/* CAMBIADO: text-[14px] → text-[17px] */}
              <p className="text-[17px] leading-[1.7] text-muted">
                {t.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
