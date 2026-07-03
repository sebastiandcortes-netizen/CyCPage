import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1e2c38] py-3">
      <div className="container-cyc flex flex-col items-center gap-1 text-center">
        {/* CAMBIADO: 48x48 → 56x56 */}
        <Image
          src="/icono-c.png"
          alt="Cortés & Capizzano"
          height={56}
          width={56}
          className="h-14 w-14"
        />
        {/* CAMBIADO: text-[20px] → text-[24px] */}
        <span className="font-display text-[24px] font-medium tracking-[0.04em] text-gold">
          Cortés &amp; Capizzano
        </span>
        {/* CAMBIADO: text-[12px] → text-[15px] */}
        <p className="text-[15px] text-cream/35">
          © {new Date().getFullYear()} Cortés &amp; Capizzano Estética y Cirugía.
          Todos los derechos reservados.
        </p>
        {/* CAMBIADO: text-[11px] → text-[13px] */}
        <p className="max-w-[520px] text-[13px] text-cream/20">
          Los procedimientos son realizados exclusivamente por profesionales
          médicos habilitados.
        </p>
      </div>
    </footer>
  );
}
