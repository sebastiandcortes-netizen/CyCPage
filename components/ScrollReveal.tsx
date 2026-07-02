"use client";

import { useEffect } from "react";

/**
 * Observa todos los elementos con clase `.reveal` y les agrega `is-visible`
 * cuando entran en viewport. Reemplaza el IntersectionObserver del script.js
 * original. Se monta una vez por página.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 12) * 0.04}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
