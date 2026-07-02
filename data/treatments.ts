// ────────────────────────────────────────────────────────────
// Fuente única de verdad de los tratamientos.
// La consumen tanto los tabs de la home (components/Especialidades.tsx)
// como las páginas de detalle (app/tratamientos/[slug]/page.tsx).
//
// Nota: "Lipólisis Láser" pertenece a dos categorías (corporal y
// miniinvasivo) → un solo slug/página, mostrado bajo ambas.
// ────────────────────────────────────────────────────────────

export type Category =
  | "facial"
  | "corporal"
  | "capilar"
  | "miniinvasivo"
  | "quirurgico";

export type Treatment = {
  slug: string;
  title: string;
  categories: Category[];
  shortDescription: string;
  // Campos opcionales — completar con contenido real cuando esté disponible.
  intro?: string;
  benefits?: string[];
  duration?: string;
  sessions?: string;
  aftercare?: string[];
  faq?: { q: string; a: string }[];
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "facial", label: "Estética Facial" },
  { id: "corporal", label: "Estética Corporal" },
  { id: "capilar", label: "Tratamiento Capilar" },
  { id: "miniinvasivo", label: "Mini Invasivos" },
  { id: "quirurgico", label: "Cirugía" },
];

export const treatments: Treatment[] = [
  // ── Estética Facial ──
  {
    slug: "radiofrecuencia-bipolar",
    title: "Radiofrecuencia Bipolar",
    categories: ["facial"],
    shortDescription:
      "Tensa la piel y mejora la flacidez estimulando la producción de colágeno.",
  },
  {
    slug: "radiofrecuencia-fraccionada",
    title: "Radiofrecuencia Fraccionada",
    categories: ["facial"],
    shortDescription: "Rejuvenecimiento profundo para arrugas y cicatrices.",
  },
  {
    slug: "mesoterapia-facial",
    title: "Mesoterapia Facial",
    categories: ["facial"],
    shortDescription:
      "Intradermoterapia con vitaminas y oligoelementos para tratar envejecimiento y fotodaño.",
  },
  {
    slug: "punta-de-diamante",
    title: "Punta de Diamante",
    categories: ["facial"],
    shortDescription:
      "Exfoliación profunda que otorga tersura y luminosidad al rostro.",
  },
  {
    slug: "peeling-quimico",
    title: "Peeling Químico",
    categories: ["facial"],
    shortDescription:
      "Renovación cutánea para manchas, acné y líneas finas de expresión.",
  },
  {
    slug: "laser-facial",
    title: "Láser Facial",
    categories: ["facial"],
    shortDescription:
      "Estimula el colágeno y mejora la calidad y textura de la piel.",
  },
  {
    slug: "toxina-botulinica",
    title: "Toxina Botulínica",
    categories: ["facial"],
    shortDescription:
      "Elimina arrugas de expresión y previene su formación de manera natural.",
  },
  {
    slug: "clearlift",
    title: "ClearLift",
    categories: ["facial"],
    shortDescription: "Rejuvenecimiento láser sin tiempo de recuperación.",
  },
  {
    slug: "laser-erbium",
    title: "Láser Erbium",
    categories: ["facial"],
    shortDescription: "Renovación intensiva para arrugas profundas y cicatrices.",
  },
  {
    slug: "plasma-rico-en-plaquetas-prp",
    title: "Plasma Rico en Plaquetas (PRP)",
    categories: ["facial"],
    shortDescription:
      "Regeneración celular con factores de crecimiento propios del paciente.",
  },
  {
    slug: "lifting-endolifting",
    title: "Lifting · Endolifting",
    categories: ["facial"],
    shortDescription:
      "Tensado facial con y sin incisiones para resultados naturales y duraderos.",
  },
  {
    slug: "blefaroplastia-hilos-tensores",
    title: "Blefaroplastia · Hilos Tensores",
    categories: ["facial"],
    shortDescription:
      "Corrección de párpados y efecto lifting con resultados armónicos.",
  },

  // ── Estética Corporal ──
  {
    slug: "radiofrecuencia-corporal",
    title: "Radiofrecuencia Corporal",
    categories: ["corporal"],
    shortDescription:
      "Reafirmación y mejora de flacidez en zonas específicas del cuerpo.",
  },
  {
    slug: "ultracavitacion",
    title: "Ultracavitación",
    categories: ["corporal"],
    shortDescription:
      "Reducción de grasa localizada mediante ultrasonidos de baja frecuencia.",
  },
  {
    slug: "ondas-rusas",
    title: "Ondas Rusas",
    categories: ["corporal"],
    shortDescription:
      "Estimulación muscular para tonificación y reducción de medidas.",
  },
  {
    slug: "laser-corporal",
    title: "Láser Corporal",
    categories: ["corporal"],
    shortDescription:
      "Tratamiento de piel y tejidos con tecnología láser de última generación.",
  },
  {
    slug: "mesoterapia-corporal",
    title: "Mesoterapia Corporal",
    categories: ["corporal"],
    shortDescription: "Microinyecciones con activos lipolíticos y reafirmantes.",
  },
  {
    slug: "fosfatidilcolina",
    title: "Fosfatidilcolina",
    categories: ["corporal"],
    shortDescription: "Disolución de grasa localizada de forma no quirúrgica.",
  },
  {
    slug: "prp-corporal",
    title: "PRP Corporal",
    categories: ["corporal"],
    shortDescription: "Regeneración cutánea en zonas específicas del cuerpo.",
  },
  {
    slug: "lipolisis-laser",
    title: "Lipólisis Láser",
    categories: ["corporal", "miniinvasivo"],
    shortDescription:
      "Reducción de grasa localizada sin cirugía ni tiempo de recuperación prolongado.",
  },
  {
    slug: "presoterapia",
    title: "Presoterapia",
    categories: ["corporal"],
    shortDescription:
      "Drenaje linfático, mejora de circulación y tratamiento de celulitis.",
  },

  // ── Tratamiento Capilar ──
  {
    slug: "prp-capilar",
    title: "PRP Capilar",
    categories: ["capilar"],
    shortDescription:
      "Regeneración y estimulación del folículo capilar con factores de crecimiento propios.",
  },
  {
    slug: "mesoterapia-capilar",
    title: "Mesoterapia Capilar",
    categories: ["capilar"],
    shortDescription:
      "Microinyecciones con vitaminas y activos para fortalecer y estimular el cabello.",
  },
  {
    slug: "laser-de-erbium-capilar",
    title: "Láser de Erbium Capilar",
    categories: ["capilar"],
    shortDescription:
      "Estimulación del cuero cabelludo y mejora de la densidad capilar.",
  },

  // ── Mini Invasivos ──
  {
    slug: "hilos-tensores",
    title: "Hilos Tensores",
    categories: ["miniinvasivo"],
    shortDescription:
      "Efecto lifting sin cirugía con estimulación de colágeno y resultados naturales.",
  },
  {
    slug: "rellenos-con-acido-hialuronico",
    title: "Rellenos con Ácido Hialurónico",
    categories: ["miniinvasivo"],
    shortDescription:
      "Restauración de volumen e hidratación profunda. Incluye aumento de labios.",
  },
  {
    slug: "infiltraciones-esteticas",
    title: "Infiltraciones Estéticas",
    categories: ["miniinvasivo"],
    shortDescription:
      "Bioestimulación y revitalización de la piel con resultados progresivos.",
  },

  // ── Cirugía ──
  {
    slug: "cirugia-mamaria",
    title: "Cirugía Mamaria",
    categories: ["quirurgico"],
    shortDescription:
      "Aumento, reducción y elevación mamaria con resultados proporcionados y naturales.",
  },
  {
    slug: "cirugia-de-parpados",
    title: "Cirugía de Párpados",
    categories: ["quirurgico"],
    shortDescription:
      "Blefaroplastia superior e inferior para rejuvenecer la mirada.",
  },
  {
    slug: "abdominoplastia",
    title: "Abdominoplastia",
    categories: ["quirurgico"],
    shortDescription:
      "Tensado abdominal con resultados firmes y contornos definidos.",
  },
  {
    slug: "cirugia-post-bariatrica",
    title: "Cirugía Post Bariátrica",
    categories: ["quirurgico"],
    shortDescription:
      "Reconstrucción corporal integral tras pérdida significativa de peso.",
  },
  {
    slug: "reseccion-de-tumores-de-piel",
    title: "Resección de Tumores de Piel",
    categories: ["quirurgico"],
    shortDescription:
      "Extirpación segura con análisis anatomopatológico y mínima cicatriz.",
  },
  {
    slug: "plastica-de-cicatrices",
    title: "Plástica de Cicatrices",
    categories: ["quirurgico"],
    shortDescription:
      "Corrección y mejora estética de cicatrices de diversa etiología.",
  },
  {
    slug: "lipoaspiracion",
    title: "Lipoaspiración",
    categories: ["quirurgico"],
    shortDescription:
      "Modelado corporal mediante aspiración de grasa localizada.",
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function treatmentsByCategory(category: Category): Treatment[] {
  return treatments.filter((t) => t.categories.includes(category));
}
