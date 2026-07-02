import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1e2c38] py-10">
      <div className="container-cyc flex flex-col items-center gap-3 text-center">
        <Image
          src="/icono-c.png"
          alt="Cortés &amp; Capizzano"
          width={48}
          height={48}
          className="h-12 w-12"
        />
        <span className="font-display text-[20px] font-medium tracking-[0.04em] text-gold">
          Cortés &amp; Capizzano
        </span>
        <p className="text-[12px] text-cream/35">
          © {new Date().getFullYear()} Cortés &amp; Capizzano Estética y Cirugía.
          Todos los derechos reservados.
        </p>
        <p className="max-w-[480px] text-[11px] text-cream/20">
          Los procedimientos son realizados
          exclusivamente por profesionales médicos habilitados.
        </p>
      </div>
    </footer>
  );
}
