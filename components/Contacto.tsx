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
    className="h-[18px] w-[18px]"
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
    className="h-[18px] w-[18px]"
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
  value: string;
}[] = [
  {
    icon: PhoneIcon,
    href: "https://wa.me/541173613286?text=Hola!%20Quisiera%20agendar%20una%20consulta",
    external: true,
    value: "11 7361-3286",
  },
  {
    icon: "✉",
    href: "mailto:cycesteticaycirugia@gmail.com?subject=Consulta%20Estética",
    external: false,
    value: "cycesteticaycirugia@gmail.com",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/cycesteticaycirugia",
    external: true,
    value: "@cycesteticaycirugia",
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="bg-cream py-[100px]">
      <div className="container-cyc">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-4 block text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Contacto
            </p>
            <h2 className="mb-7 font-display text-[clamp(36px,5vw,54px)] font-light leading-[1.12] text-navy">
              Comenzá
              <br />
              tu experiencia
              <br />
              <em className="italic text-gold">hoy.</em>
            </h2>
            <p className="text-[16px] leading-[1.8] text-muted">
              Nuestro equipo está listo para asesorarte y acompañarte en cada
              etapa del tratamiento. Solicitá tu turno y dá el primer paso hacia
              tu mejor versión.
            </p>

            <div className="mt-9 flex flex-col gap-4">
              {contactItems.map((c) => (
                <a
                  key={c.value}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3.5 text-[15px] text-muted transition-colors hover:text-navy"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-[15px] text-gold">
                    {c.icon}
                  </span>
                  <span>{c.value}</span>
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
