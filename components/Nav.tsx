"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#tecnologia", label: "Tecnología" },
];

function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/icono-c.png"
        alt="Cortés & Capizzano"
        width={44}
        height={44}
        priority
        className="h-11 w-11"
      />
      <span className="flex flex-col leading-none">
        {/* CAMBIADO: 22px → 26px */}
        <span className="font-display text-[26px] font-medium tracking-[0.04em] text-gold">
          Cortés &amp; Capizzano
        </span>
        {/* CAMBIADO: 9px → 11px */}
        <span className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-cream/50">
          Estética &amp; Cirugía
        </span>
      </span>
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* CAMBIADO: h-[72px] → h-[84px] para dar más espacio */}
      <nav
        className={`fixed inset-x-0 top-0 z-[100] flex h-[84px] items-center justify-between bg-navy/95 px-6 backdrop-blur-md transition-colors md:px-10 ${
          scrolled ? "border-b border-gold/35" : "border-b border-gold/20"
        }`}
      >
        <Link href="/" aria-label="Inicio" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              {/* CAMBIADO: text-[11px] → text-[14px] */}
              <Link
                href={l.href}
                className="text-[14px] uppercase tracking-[0.1em] text-cream/75 transition-colors hover:text-cream"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            {/* CAMBIADO: text-[11px] → text-[14px], padding aumentado */}
            <Link
              href="/#contacto"
              className="rounded-sm bg-gold px-6 py-2.5 text-[14px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-brown"
            >
              Solicitar turno
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[6px] p-1 md:hidden"
        >
          {/* CAMBIADO: w-6 → w-7, líneas más visibles */}
          <span className="block h-[2px] w-7 bg-cream" />
          <span className="block h-[2px] w-7 bg-cream" />
          <span className="block h-[2px] w-7 bg-cream" />
        </button>
      </nav>

      {/* Menú mobile — CAMBIADO: top-[72px] → top-[84px] */}
      {open && (
        <div className="fixed inset-x-0 top-[84px] z-[99] border-t border-gold/30 bg-navy px-10 py-6 md:hidden">
          <ul className="flex flex-col gap-6">
            {[...links, { href: "/#contacto", label: "Solicitar turno" }].map(
              (l) => (
                <li key={l.href}>
                  {/* CAMBIADO: text-[14px] → text-[17px] */}
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[17px] uppercase tracking-[0.1em] text-cream/80"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
}
