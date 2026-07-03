/* ============================================================
   CyC — Datos de tratamientos
   Fuente: contenido del PDF original de la clínica
   ============================================================ */

export type Category =
  | "facial"
  | "corporal"
  | "capilar"
  | "miniinvasivo"
  | "quirurgico";

export type Treatment = {
  slug: string;
  title: string;
  shortDescription: string;
  categories: Category[];
  intro?: string;
  benefits?: string[];
  aftercare?: string[];
  faq?: { q: string; a: string }[];
  duration?: string;
  sessions?: string;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: "facial", label: "Estética Facial" },
  { id: "corporal", label: "Estética Corporal" },
  { id: "capilar", label: "Tratamiento Capilar" },
  { id: "miniinvasivo", label: "Mini Invasivos" },
  { id: "quirurgico", label: "Cirugía" },
];

export const treatments: Treatment[] = [
  // ── FACIAL ──────────────────────────────────────────────
  {
    slug: "radiofrecuencia-bipolar",
    title: "Radiofrecuencia Bipolar",
    shortDescription:
      "Tensa la piel y mejora la flacidez estimulando la producción de colágeno.",
    categories: ["facial"],
    intro:
      "La Radiofrecuencia Bipolar utiliza energía electromagnética para calentar las capas profundas de la piel, estimulando la producción natural de colágeno y elastina sin tiempo de recuperación.",
    benefits: [
      "Tensado visible de la piel desde las primeras sesiones",
      "Estimulación de colágeno propio, sin sustancias externas",
      "Sin tiempo de recuperación: actividad normal el mismo día",
      "Resultados progresivos y naturales que se mantienen en el tiempo",
      "Compatible con otros tratamientos estéticos",
    ],
    aftercare: [
      "Hidratación abundante las 24 h posteriores",
      "Evitar exposición solar directa por 48 h",
      "No aplicar calor intenso (sauna, jacuzzi) por 48 h",
    ],
    faq: [
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Se recomiendan entre 4 y 6 sesiones, una cada 2-3 semanas. Los resultados se mantienen con sesiones de mantenimiento cada 3-6 meses.",
      },
      {
        q: "¿Duele el procedimiento?",
        a: "La sensación es de calor moderado y confort. No requiere anestesia. La mayoría de los pacientes lo describen como relajante.",
      },
      {
        q: "¿Para quién está indicado?",
        a: "Para personas con flacidez leve a moderada en rostro, cuello, escote o brazos que buscan rejuvenecimiento sin cirugía.",
      },
    ],
    duration: "45–60 minutos",
    sessions: "4 a 6 sesiones",
  },
  {
    slug: "radiofrecuencia-fraccionada",
    title: "Radiofrecuencia Fraccionada",
    shortDescription:
      "Rejuvenecimiento profundo para arrugas y cicatrices.",
    categories: ["facial"],
    intro:
      "La Radiofrecuencia Fraccionada actúa en microzonas de la piel generando una renovación controlada que estimula el colágeno y mejora la textura desde adentro.",
    benefits: [
      "Reducción visible de arrugas finas y profundas",
      "Mejora de cicatrices de acné y quirúrgicas",
      "Textura de piel más uniforme y luminosa",
      "Efecto tensor duradero",
      "Mínimo tiempo de recuperación comparado con procedimientos abrasivos",
    ],
    aftercare: [
      "Aplicar crema calmante indicada por las especialistas",
      "Evitar sol directo y usar protector solar FPS 50+ por al menos 2 semanas",
      "No exfoliar la piel durante los primeros 7 días",
    ],
    faq: [
      {
        q: "¿En cuántas sesiones se ven resultados?",
        a: "Muchos pacientes notan mejoría desde la primera sesión. Los mejores resultados se aprecian entre 4 y 8 semanas después del tratamiento completo.",
      },
    ],
    duration: "60 minutos",
    sessions: "3 a 5 sesiones",
  },
  {
    slug: "mesoterapia-facial",
    title: "Mesoterapia Facial",
    shortDescription:
      "Intradermoterapia con vitaminas y oligoelementos para tratar envejecimiento y fotodaño.",
    categories: ["facial"],
    intro:
      "La Mesoterapia Facial consiste en microinyecciones de cócteles vitamínicos, ácido hialurónico y activos revitalizantes directamente en la dermis para nutrir y rejuvenecer la piel desde adentro.",
    benefits: [
      "Hidratación intensa y duradera",
      "Reducción de manchas y fotodaño",
      "Piel más luminosa, firme y uniforme",
      "Estimulación de la síntesis de colágeno",
      "Tratamiento personalizado según las necesidades de cada piel",
    ],
    aftercare: [
      "No lavar la cara durante las primeras 6 horas",
      "Evitar maquillaje el día del tratamiento",
      "Protector solar diario obligatorio",
    ],
    faq: [
      {
        q: "¿Es doloroso?",
        a: "Las microinyecciones producen una molestia mínima. Se puede aplicar crema anestésica tópica previamente si el paciente lo requiere.",
      },
    ],
    duration: "30–45 minutos",
    sessions: "4 a 6 sesiones mensuales",
  },
  {
    slug: "punta-de-diamante",
    title: "Punta de Diamante",
    shortDescription:
      "Exfoliación profunda que otorga tersura y luminosidad al rostro.",
    categories: ["facial"],
    intro:
      "La Microdermoabrasión con Punta de Diamante es una técnica de exfoliación mecánica que elimina las células muertas de la capa superficial de la piel, revelando una tez más fresca, luminosa y uniforme.",
    benefits: [
      "Mejora inmediata de la textura y luminosidad de la piel",
      "Reducción de poros dilatados y manchas superficiales",
      "Sin tiempo de recuperación",
      "Potencia la absorción de tratamientos posteriores",
      "Apta para todo tipo de piel",
    ],
    aftercare: [
      "Hidratación intensiva post-tratamiento",
      "Protector solar durante al menos 1 semana",
      "Evitar exposición solar directa por 48 h",
    ],
    faq: [
      {
        q: "¿Con qué frecuencia puedo realizarme este tratamiento?",
        a: "Puede realizarse cada 2-4 semanas según el tipo de piel y los objetivos del tratamiento.",
      },
    ],
    duration: "30 minutos",
    sessions: "4 a 8 sesiones",
  },
  {
    slug: "peeling-quimico",
    title: "Peeling Químico",
    shortDescription:
      "Renovación cutánea para manchas, acné y líneas finas de expresión.",
    categories: ["facial"],
    intro:
      "El Peeling Químico utiliza ácidos especializados para acelerar la renovación celular, tratar manchas, mejorar la textura y atenuar líneas de expresión con resultados progresivos y seguros.",
    benefits: [
      "Reducción de manchas y melasma",
      "Control del acné y cicatrices superficiales",
      "Piel más uniforme y luminosa",
      "Estimulación de colágeno",
      "Protocolos adaptados a cada tipo de piel y tono",
    ],
    aftercare: [
      "Proceso de descamación normal de 3 a 7 días",
      "No desprender la piel manualmente",
      "Protector solar FPS 50+ obligatorio durante 4 semanas",
      "Hidratación intensa diaria",
    ],
    faq: [
      {
        q: "¿Es seguro para pieles oscuras?",
        a: "Sí, con la correcta selección del tipo y concentración del ácido por parte de nuestras especialistas. La evaluación previa es fundamental.",
      },
    ],
    duration: "30–45 minutos",
    sessions: "3 a 6 sesiones",
  },
  {
    slug: "laser-facial",
    title: "Láser Facial",
    shortDescription:
      "Estimula el colágeno y mejora la calidad y textura de la piel.",
    categories: ["facial"],
    intro:
      "El tratamiento de Láser Facial utiliza luz de alta precisión para estimular el colágeno, mejorar manchas, afinar poros y rejuvenecer la piel con resultados progresivos y seguros.",
    benefits: [
      "Mejora de manchas y discromías",
      "Reducción de poros y textura irregular",
      "Estimulación profunda de colágeno",
      "Resultado natural sin signos de procedimiento",
      "Aplicable en rostro, cuello y escote",
    ],
    aftercare: [
      "Rojez leve normal las primeras horas",
      "Protector solar FPS 50+ obligatorio",
      "Evitar ejercicio intenso por 24 h",
    ],
    faq: [
      {
        q: "¿Cuándo se ven los resultados?",
        a: "Los resultados se aprecian progresivamente desde las 2-4 semanas, con mejoría máxima a los 3 meses.",
      },
    ],
    duration: "45–60 minutos",
    sessions: "3 a 5 sesiones",
  },
  {
    slug: "toxina-botulinica",
    title: "Toxina Botulínica",
    shortDescription:
      "Elimina arrugas de expresión y previene su formación de manera natural.",
    categories: ["facial"],
    intro:
      "La Toxina Botulínica es uno de los tratamientos estéticos más estudiados y seguros del mundo. Aplicada por nuestras especialistas, relaja los músculos de expresión para suavizar arrugas y lograr un aspecto fresco y natural.",
    benefits: [
      "Reducción inmediata de arrugas en frente, entrecejo y contorno de ojos",
      "Prevención de la formación de nuevas arrugas",
      "Resultados naturales que preservan la expresividad",
      "Sin tiempo de recuperación",
      "Procedimiento rápido: 15 a 30 minutos",
    ],
    aftercare: [
      "No acostarse durante las 4 horas siguientes",
      "No masajear la zona tratada por 24 h",
      "Evitar ejercicio intenso y calor el día del tratamiento",
    ],
    faq: [
      {
        q: "¿Cuánto duran los resultados?",
        a: "Los efectos duran entre 4 y 6 meses. Con tratamientos regulares, los resultados tienden a prolongarse.",
      },
      {
        q: "¿Se nota que me lo apliqué?",
        a: "No. Aplicada correctamente por especialistas, la toxina botulínica preserva la expresión natural y solo suaviza las arrugas de movimiento.",
      },
    ],
    duration: "15–30 minutos",
    sessions: "1 sesión (repetir cada 4–6 meses)",
  },
  {
    slug: "clearlift",
    title: "ClearLift",
    shortDescription: "Rejuvenecimiento láser sin tiempo de recuperación.",
    categories: ["facial"],
    intro:
      "ClearLift (Q-Switch fraccionado) es un láser de rejuvenecimiento que actúa en las capas profundas de la piel sin dañar la superficie, logrando tensado, luminosidad y uniformidad sin ningún período de baja.",
    benefits: [
      "Sin enrojecimiento ni descamación post-tratamiento",
      "Mejora de arrugas finas, poros y manchas",
      "Apto para rostro, cuello, escote y manos",
      "Combinable con otros tratamientos el mismo día",
      "Resultado natural y progresivo",
    ],
    aftercare: [
      "Hidratación normal",
      "Protector solar diario recomendado",
    ],
    faq: [
      {
        q: "¿En qué se diferencia de otros láseres?",
        a: "ClearLift actúa en profundidad sin ablación superficial, por lo que no hay tiempo de recuperación y puede realizarse en cualquier época del año.",
      },
    ],
    duration: "20–30 minutos",
    sessions: "4 a 6 sesiones",
  },
  {
    slug: "laser-erbium",
    title: "Láser Erbium",
    shortDescription:
      "Renovación intensiva para arrugas profundas y cicatrices.",
    categories: ["facial"],
    intro:
      "El Láser Erbium es un tratamiento ablativo de alta precisión que elimina capas superficiales de la piel con mínimo daño térmico, ideal para arrugas marcadas, cicatrices y manchas profundas.",
    benefits: [
      "Eliminación de arrugas profundas",
      "Mejora significativa de cicatrices",
      "Renovación completa de la superficie cutánea",
      "Alta precisión con mínimo daño al tejido circundante",
    ],
    aftercare: [
      "Período de recuperación de 5 a 10 días",
      "Cremas cicatrizantes y calmantes indicadas",
      "Protección solar estricta por al menos 4 semanas",
      "Evitar maquillaje hasta cicatrización completa",
    ],
    faq: [
      {
        q: "¿Hay período de recuperación?",
        a: "Sí, entre 5 y 10 días de rojez y descamación. El resultado final se aprecia a las 4-8 semanas con una mejora muy significativa.",
      },
    ],
    duration: "60–90 minutos",
    sessions: "1 a 2 sesiones",
  },
  {
    slug: "prp-facial",
    title: "Plasma Rico en Plaquetas (PRP)",
    shortDescription:
      "Regeneración celular con factores de crecimiento propios del paciente.",
    categories: ["facial"],
    intro:
      "El PRP (Plasma Rico en Plaquetas) utiliza los factores de crecimiento de tu propia sangre para estimular la regeneración celular, mejorar la calidad de la piel y promover un rejuvenecimiento natural y duradero.",
    benefits: [
      "100% autólogo: se usan los propios factores del paciente",
      "Estimulación intensa de colágeno y elastina",
      "Mejora de textura, luminosidad e hidratación",
      "Sin riesgo de reacciones alérgicas",
      "Combinable con mesoterapia y láser",
    ],
    aftercare: [
      "Leve enrojecimiento normal las primeras 24–48 h",
      "Evitar sol directo por 48 h",
      "No aplicar maquillaje el día del procedimiento",
    ],
    faq: [
      {
        q: "¿Cuántas sesiones se necesitan?",
        a: "Se recomiendan 3 sesiones con un intervalo de 4 semanas, seguidas de sesiones de mantenimiento cada 6-12 meses.",
      },
    ],
    duration: "45–60 minutos",
    sessions: "3 sesiones iniciales",
  },
  {
    slug: "lifting",
    title: "Lifting",
    shortDescription:
      "Tensado facial quirúrgico para resultados duraderos y naturales.",
    categories: ["facial", "quirurgico"],
    intro:
      "El Lifting facial es una intervención quirúrgica que elimina el exceso de piel y reposiciona los tejidos profundos del rostro para lograr un rejuvenecimiento duradero con resultados completamente naturales.",
    benefits: [
      "Resultados duraderos de 7 a 10 años",
      "Corrección de flacidez severa y redefinición del óvalo facial",
      "Aspecto natural y expresivo",
      "Combinable con blefaroplastia y otros procedimientos",
    ],
    aftercare: [
      "Reposo relativo los primeros 7 días",
      "Evitar esfuerzos físicos intensos por 3 semanas",
      "Control médico periódico post-operatorio",
      "Protector solar obligatorio durante la recuperación",
    ],
    faq: [
      {
        q: "¿Cuánto tiempo de recuperación implica?",
        a: "La mayoría de los pacientes retoman actividades sociales a los 10-14 días. Los resultados definitivos se aprecian al mes.",
      },
    ],
    duration: "3–4 horas",
    sessions: "1 sesión quirúrgica",
  },
  {
    slug: "endolifting",
    title: "Endolifting",
    shortDescription:
      "Tensado facial mínimamente invasivo con láser bajo la piel.",
    categories: ["facial", "miniinvasivo"],
    intro:
      "El Endolifting es una técnica mínimamente invasiva que introduce una cánula láser bajo la piel para estimular la producción de colágeno y tensar los tejidos profundos con resultados duraderos y sin cirugía abierta.",
    benefits: [
      "Tensado facial sin cicatrices visibles",
      "Recuperación más rápida que un lifting quirúrgico",
      "Estimulación de colágeno de larga duración",
      "Resultados naturales y progresivos",
    ],
    aftercare: [
      "Leve inflamación normal los primeros 3-5 días",
      "Evitar esfuerzos intensos por 1 semana",
    ],
    duration: "60–90 minutos",
    sessions: "1 sesión",
  },
  {
    slug: "blefaroplastia",
    title: "Blefaroplastia",
    shortDescription:
      "Corrección de párpados caídos para rejuvenecer y abrir la mirada.",
    categories: ["facial", "quirurgico"],
    intro:
      "La Blefaroplastia es una cirugía de párpados que corrige el exceso de piel, la flacidez y las bolsas en el contorno de los ojos, logrando una mirada más fresca, despejada y juvenil.",
    benefits: [
      "Mirada más abierta y descansada",
      "Eliminación de bolsas y exceso de piel",
      "Resultados duraderos de 8 a 12 años",
      "Combinable con lifting facial o toxina botulínica",
    ],
    aftercare: [
      "Compresas frías las primeras 48 h",
      "Reposo visual (limitar lectura y pantallas) por 5 días",
      "Retiro de puntos entre el 5.° y 7.° día",
    ],
    faq: [
      {
        q: "¿Se hace con anestesia local o general?",
        a: "Generalmente con anestesia local más sedación, en forma ambulatoria. Nuestras especialistas evaluarán el protocolo más adecuado para tu caso.",
      },
    ],
    duration: "1–2 horas",
    sessions: "1 sesión quirúrgica",
  },
  {
    slug: "hilos-tensores-facial",
    title: "Hilos Tensores Faciales",
    shortDescription:
      "Efecto lifting sin cirugía con estimulación de colágeno y resultados naturales.",
    categories: ["facial", "miniinvasivo"],
    intro:
      "Los Hilos Tensores son hilos absorbibles que se introducen bajo la piel para tensar los tejidos y estimular la producción de colágeno, logrando un efecto lifting inmediato sin bisturí.",
    benefits: [
      "Efecto lifting inmediato y sin cirugía",
      "Estimulación de colágeno durante 12 a 18 meses",
      "Sin cicatrices",
      "Combinable con rellenos e infiltraciones",
      "Resultado natural que mejora con el tiempo",
    ],
    aftercare: [
      "Evitar masajes y presión sobre la zona por 2 semanas",
      "No abrir la boca exageradamente los primeros días",
      "Leve inflamación y hematomas normales por 5-7 días",
    ],
    duration: "45–60 minutos",
    sessions: "1 sesión (repetir a los 12–18 meses)",
  },
  {
    slug: "aumento-de-labios",
    title: "Aumento de Labios",
    shortDescription:
      "Volumen y definición natural con ácido hialurónico.",
    categories: ["facial", "miniinvasivo"],
    intro:
      "El aumento de labios con ácido hialurónico es un procedimiento seguro y reversible que añade volumen, hidratación y definición a los labios, respetando siempre la armonía y proporción del rostro.",
    benefits: [
      "Resultado natural e inmediato",
      "Técnica reversible con hialuronidasa si fuera necesario",
      "Sin tiempo de recuperación significativo",
      "Hidratación duradera del tejido",
    ],
    aftercare: [
      "Evitar calor intenso (sol, sauna) por 48 h",
      "No masajear la zona por 24 h",
      "Leve inflamación normal los primeros 2-3 días",
    ],
    duration: "30 minutos",
    sessions: "1 sesión (duración 6–12 meses)",
  },

  // ── CORPORAL ─────────────────────────────────────────────
  {
    slug: "radiofrecuencia-corporal",
    title: "Radiofrecuencia Corporal",
    shortDescription:
      "Reafirmación y mejora de flacidez en zonas específicas del cuerpo.",
    categories: ["corporal"],
    benefits: [
      "Reafirma la piel en abdomen, brazos, muslos y glúteos",
      "Mejora la apariencia de la celulitis",
      "Sin tiempo de recuperación",
      "Resultados visibles y progresivos",
    ],
    duration: "45–60 minutos",
    sessions: "6 a 10 sesiones",
  },
  {
    slug: "ultracavitacion",
    title: "Ultracavitación",
    shortDescription:
      "Reducción de grasa localizada mediante ultrasonidos de baja frecuencia.",
    categories: ["corporal"],
    benefits: [
      "Reduce grasa localizada sin cirugía",
      "Sin dolor ni tiempo de recuperación",
      "Moldeado corporal progresivo",
      "Combinable con radiofrecuencia para mejores resultados",
    ],
    duration: "45–60 minutos",
    sessions: "6 a 10 sesiones",
  },
  {
    slug: "ondas-rusas",
    title: "Ondas Rusas",
    shortDescription:
      "Estimulación muscular para tonificación y reducción de medidas.",
    categories: ["corporal"],
    benefits: [
      "Tonificación y fortalecimiento muscular",
      "Reducción de medidas",
      "Mejora la circulación",
      "Complementa tratamientos de reducción de grasa",
    ],
    duration: "30–45 minutos",
    sessions: "8 a 12 sesiones",
  },
  {
    slug: "laser-corporal",
    title: "Láser Corporal",
    shortDescription:
      "Tratamiento de piel y tejidos con tecnología láser de última generación.",
    categories: ["corporal"],
    benefits: [
      "Mejora de manchas y textura corporal",
      "Tratamiento de rosácea y arañitas vasculares",
      "Sin tiempo de recuperación significativo",
    ],
    duration: "30–60 minutos",
    sessions: "3 a 6 sesiones",
  },
  {
    slug: "mesoterapia-corporal",
    title: "Mesoterapia Corporal",
    shortDescription:
      "Microinyecciones con activos lipolíticos y reafirmantes.",
    categories: ["corporal"],
    benefits: [
      "Reducción de grasa localizada",
      "Mejora de celulitis",
      "Reafirmación de la piel",
      "Tratamiento personalizado por zona",
    ],
    duration: "30–45 minutos",
    sessions: "6 a 8 sesiones",
  },
  {
    slug: "fosfatidilcolina",
    title: "Fosfatidilcolina",
    shortDescription:
      "Disolución de grasa localizada de forma no quirúrgica.",
    categories: ["corporal"],
    benefits: [
      "Reducción de grasa localizada resistente",
      "Sin cirugía ni anestesia general",
      "Resultados duraderos con hábitos saludables",
    ],
    duration: "30–45 minutos",
    sessions: "4 a 6 sesiones",
  },
  {
    slug: "prp-corporal",
    title: "PRP Corporal",
    shortDescription:
      "Regeneración cutánea en zonas específicas del cuerpo.",
    categories: ["corporal"],
    benefits: [
      "Regeneración de tejidos con factores propios",
      "Mejora de cicatrices y estrías",
      "Sin riesgo de reacciones alérgicas",
    ],
    duration: "45–60 minutos",
    sessions: "3 sesiones",
  },
  {
    slug: "lipolisis-laser",
    title: "Lipólisis Láser",
    shortDescription:
      "Reducción de grasa localizada sin intervención quirúrgica.",
    categories: ["corporal", "miniinvasivo"],
    benefits: [
      "Elimina grasa resistente sin cirugía abierta",
      "Recuperación mínima",
      "Resultados visibles en pocas semanas",
    ],
    duration: "60–90 minutos",
    sessions: "1 a 2 sesiones",
  },
  {
    slug: "presoterapia",
    title: "Presoterapia",
    shortDescription:
      "Drenaje linfático, mejora de circulación y tratamiento de celulitis.",
    categories: ["corporal"],
    benefits: [
      "Drenaje linfático profundo",
      "Reducción de edemas e inflamación",
      "Mejora de la celulitis edematosa",
      "Sensación inmediata de piernas ligeras",
    ],
    duration: "45 minutos",
    sessions: "8 a 12 sesiones",
  },

  // ── CAPILAR ──────────────────────────────────────────────
  {
    slug: "prp-capilar",
    title: "PRP Capilar",
    shortDescription:
      "Regeneración y estimulación del folículo capilar con factores de crecimiento propios.",
    categories: ["capilar"],
    benefits: [
      "Estimulación del crecimiento del cabello",
      "Fortalecimiento del folículo capilar",
      "Reducción de la caída",
      "100% autólogo, sin riesgo alérgico",
    ],
    duration: "45–60 minutos",
    sessions: "3 a 4 sesiones iniciales",
  },
  {
    slug: "mesoterapia-capilar",
    title: "Mesoterapia Capilar",
    shortDescription:
      "Microinyecciones con vitaminas y activos para fortalecer y estimular el cabello.",
    categories: ["capilar"],
    benefits: [
      "Nutrición directa del folículo",
      "Reducción de la caída capilar",
      "Mayor densidad y brillo",
    ],
    duration: "30–45 minutos",
    sessions: "4 a 6 sesiones",
  },
  {
    slug: "laser-erbium-capilar",
    title: "Láser Erbium Capilar",
    shortDescription:
      "Estimulación del cuero cabelludo y mejora de la densidad capilar.",
    categories: ["capilar"],
    benefits: [
      "Estimulación de la microcirculación del cuero cabelludo",
      "Mejora de la densidad capilar",
      "Sin dolor ni tiempo de recuperación",
    ],
    duration: "30 minutos",
    sessions: "6 a 8 sesiones",
  },

  // ── MINI INVASIVOS ───────────────────────────────────────
  {
    slug: "rellenos-acido-hialuronico",
    title: "Rellenos con Ácido Hialurónico",
    shortDescription:
      "Restauración de volumen e hidratación profunda.",
    categories: ["miniinvasivo"],
    benefits: [
      "Restauración del volumen perdido",
      "Hidratación profunda y duradera",
      "Corrección de surcos y pliegues",
      "Resultado inmediato y natural",
      "Técnica reversible",
    ],
    faq: [
      {
        q: "¿Cuánto duran los resultados?",
        a: "Entre 6 y 18 meses dependiendo del área tratada, el tipo de relleno y las características individuales del paciente.",
      },
    ],
    duration: "30–45 minutos",
    sessions: "1 sesión (repetir según duración)",
  },
  {
    slug: "infiltraciones-esteticas",
    title: "Infiltraciones Estéticas",
    shortDescription:
      "Bioestimulación y revitalización de la piel con resultados progresivos.",
    categories: ["miniinvasivo"],
    benefits: [
      "Estimulación de colágeno propio",
      "Mejora de calidad y firmeza de la piel",
      "Resultados naturales y progresivos",
    ],
    duration: "30–45 minutos",
    sessions: "2 a 4 sesiones",
  },

  // ── QUIRÚRGICOS ──────────────────────────────────────────
  {
    slug: "cirugia-mamaria",
    title: "Cirugía Mamaria",
    shortDescription:
      "Aumento, reducción y elevación mamaria con resultados proporcionados y naturales.",
    categories: ["quirurgico"],
    benefits: [
      "Resultados proporcionales y armónicos",
      "Prótesis de última generación (en casos de aumento)",
      "Técnica adaptada a la anatomía de cada paciente",
      "Mejora significativa de la autoestima y calidad de vida",
    ],
    aftercare: [
      "Reposo relativo por 2 semanas",
      "Uso de corpiño especial post-operatorio por 4 semanas",
      "Evitar esfuerzos físicos por 4 a 6 semanas",
      "Controles médicos periódicos",
    ],
    duration: "2–3 horas",
    sessions: "1 sesión quirúrgica",
  },
  {
    slug: "abdominoplastia",
    title: "Abdominoplastia",
    shortDescription:
      "Tensado abdominal con resultados firmes y contornos definidos.",
    categories: ["quirurgico"],
    benefits: [
      "Eliminación del exceso de piel y grasa abdominal",
      "Reparación de diástasis muscular",
      "Contorno abdominal firme y definido",
      "Resultados duraderos",
    ],
    aftercare: [
      "Faja abdominal por 4 a 6 semanas",
      "Reposo relativo por 2 semanas",
      "Evitar esfuerzos físicos intensos por 6 semanas",
    ],
    duration: "2–3 horas",
    sessions: "1 sesión quirúrgica",
  },
  {
    slug: "cirugia-post-bariatrica",
    title: "Cirugía Post Bariátrica",
    shortDescription:
      "Reconstrucción corporal integral tras pérdida significativa de peso.",
    categories: ["quirurgico"],
    intro:
      "La cirugía post bariátrica aborda el exceso de piel y los cambios corporales que ocurren tras una pérdida de peso significativa, restaurando la forma y firmeza del cuerpo con un enfoque integral.",
    benefits: [
      "Eliminación de colgajos de piel en abdomen, brazos, muslos y espalda",
      "Mejora significativa de la higiene y confort",
      "Reconstrucción de la silueta corporal",
      "Abordaje progresivo y planificado por etapas",
    ],
    duration: "Variable según procedimientos",
    sessions: "Planificación en etapas",
  },
  {
    slug: "reseccion-tumores-piel",
    title: "Resección de Tumores de Piel",
    shortDescription:
      "Extirpación segura con análisis anatomopatológico y mínima cicatriz.",
    categories: ["quirurgico"],
    benefits: [
      "Extirpación completa con márgenes seguros",
      "Análisis anatomopatológico de la pieza extirpada",
      "Cierre estético para minimizar la cicatriz",
      "Realizada por especialistas en patología cutánea",
    ],
    duration: "30–60 minutos",
    sessions: "1 sesión quirúrgica",
  },
  {
    slug: "plastica-cicatrices",
    title: "Plástica de Cicatrices",
    shortDescription:
      "Corrección y mejora estética de cicatrices de diversa etiología.",
    categories: ["quirurgico"],
    benefits: [
      "Mejora significativa de la apariencia de cicatrices",
      "Técnicas adaptadas al tipo de cicatriz",
      "Combinable con láser y peeling",
    ],
    duration: "Variable",
    sessions: "1 a 3 sesiones",
  },
  {
    slug: "lipoaspiracion",
    title: "Lipoaspiración",
    shortDescription:
      "Modelado corporal mediante aspiración de grasa localizada.",
    categories: ["quirurgico"],
    benefits: [
      "Eliminación definitiva de grasa localizada resistente",
      "Modelado y definición del contorno corporal",
      "Resultados permanentes con hábitos saludables",
      "Aplicable en abdomen, flancos, muslos, brazos y espalda",
    ],
    aftercare: [
      "Faja de compresión por 4 a 6 semanas",
      "Reposo relativo por 1 semana",
      "Linfodrenaje post-operatorio recomendado",
    ],
    duration: "1–3 horas (según extensión)",
    sessions: "1 sesión quirúrgica",
  },
];

/* ── Helpers ──────────────────────────────────────────────── */

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function treatmentsByCategory(category: Category): Treatment[] {
  return treatments.filter((t) => t.categories.includes(category));
}
