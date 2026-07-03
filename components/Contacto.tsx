import type { ReactNode } from "react";
import ContactForm from "./ContactForm";

const PhoneIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px]"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const InstagramIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px]"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const contactItems: {
  icon: ReactNode;
  href: string;
  external: boolean;
  label: string;
  value: string;
}[] = [
  {
    icon: PhoneIcon,
    href: "https://wa.me/541173613286?text=Hola!%20Quisiera%20agendar%20una%20consulta",
    external: true,
    label: "WhatsApp",
    value: "11 7361-3286",
  },
  {
  icon: "✉",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=cycesteticaycirugia@gmail.com&su=Consulta%20Estética",
  external: true,
  label: "Correo",
  value: "cycesteticaycirugia@gmail.com",
},
  {
    icon: InstagramIcon,
    href: "https://instagram.com/cycesteticaycirugia",
    external: true,
    label: "Instagram",
    value: "@cycesteticaycirugia",
},
];

export default function Contacto() {
  return (
    <section id="contacto" className="bg-cream py-[80px] md:py-[100px]">
      <div className="container-cyc">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            {/* CAMBIADO: text-[11px] → text-[14px] */}
            <p className="mb-5 block text-[14px] font-medium uppercase tracking-[0.18em] text-gold">
              Contacto
            </p>
            {/* CAMBIADO: clamp(36px,5vw,54px) → clamp(42px,5vw,62px) */}
            <h2 className="mb-8 font-display text-[clamp(42px,5vw,62px)] font-light leading-[1.12] text-navy">
              Comenzá
              <br />
              tu experiencia
              <br />
              <em className="italic text-gold">hoy.</em>
            </h2>
            {/* CAMBIADO: text-[16px] → text-[19px] */}
            <p className="text-[19px] leading-[1.85] text-muted">
              Nuestro equipo está listo para asesorarte y acompañarte en cada
              etapa del tratamiento. Solicitá tu turno y dá el primer paso hacia
              tu mejor versión.
            </p>

            {/* CAMBIADO: botones más grandes y visibles para +50 */}
            <div className="mt-9 flex flex-col gap-4">
              {contactItems.map((c) => (
                <a
                  key={c.value}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-sm border-2 border-gold bg-gradient-to-r from-gold to-brown px-6 py-4 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
                >
                  {/* CAMBIADO: size-9 → size-12, icono más grande */}
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-white/50 text-[22px] text-white">
                    {c.icon}
                  </span>
                  <span className="flex flex-col">
                    {/* CAMBIADO: agregué label visible */}
                    <span className="text-[13px] uppercase tracking-[0.12em] text-white/70">
                      {c.label}
                    </span>
                    {/* CAMBIADO: text-[15px] → text-[19px] */}
                    <span className="text-[19px] font-medium">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
