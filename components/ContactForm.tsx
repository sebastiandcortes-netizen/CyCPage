"use client";

import { useState } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const opciones = [
  "Estética Facial",
  "Estética Corporal",
  "Tratamiento Capilar",
  "Procedimiento Mini Invasivo",
  "Procedimiento Quirúrgico",
  "Consulta general",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({
  defaultTratamiento = "",
}: {
  defaultTratamiento?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-navy/10 bg-white p-10 text-center">
        <span className="mb-4 block text-[40px] text-gold">✓</span>
        {/* CAMBIADO: text-[20px] → text-[24px] */}
        <p className="font-display text-[24px] font-light text-navy">
          ¡Gracias! Nos pondremos en contacto a la brevedad.
        </p>
      </div>
    );
  }

  /* CAMBIADO: labels text-[11px] → text-[14px], inputs text-[15px] → text-[18px] */
  const labelCls =
    "mb-2 block text-[14px] font-medium uppercase tracking-[0.08em] text-navy";
  const fieldCls =
    "w-full rounded-sm border border-navy/10 bg-cream px-4 py-3.5 text-[18px] text-ink outline-none transition-colors focus:border-gold";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-navy/10 bg-white p-10 max-sm:p-7"
    >
      <div className="mb-6">
        <label htmlFor="nombre" className={labelCls}>
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          required
          className={fieldCls}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className={labelCls}>
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
          className={fieldCls}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="telefono" className={labelCls}>
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="11 xxxx-xxxx"
          className={fieldCls}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="tratamiento" className={labelCls}>
          Tratamiento de interés
        </label>
        <select
          id="tratamiento"
          name="tratamiento"
          defaultValue={defaultTratamiento}
          className={`${fieldCls} appearance-none`}
        >
          <option value="">Seleccioná una opción</option>
          {opciones.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="mensaje" className={labelCls}>
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Contanos más sobre tu consulta..."
          className={`${fieldCls} min-h-24 resize-y`}
        />
      </div>

      {/* CAMBIADO: text-[12px] → text-[15px], py aumentado */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-sm border border-gold bg-gold px-8 py-4 text-center text-[15px] uppercase tracking-[0.1em] text-white transition-colors hover:border-brown hover:bg-brown disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>

      {status === "error" && (
        /* CAMBIADO: text-[14px] → text-[17px] */
        <p className="mt-4 text-center text-[17px] text-red-600">
          {FORMSPREE_ID
            ? "Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp."
            : "El formulario aún no está configurado. Definí NEXT_PUBLIC_FORMSPREE_ID en .env.local"}
        </p>
      )}
    </form>
  );
}
