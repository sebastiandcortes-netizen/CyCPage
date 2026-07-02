# Cortés & Capizzano — Estética & Cirugía

Sitio web de la clínica, construido con **Next.js 16 (App Router)**, **TypeScript** y **Tailwind CSS v4**.

## Características

- Home de una sola página (Hero, Nosotros, Especialistas, Especialidades, Tecnología, Contacto).
- **Rutas dinámicas** para los tratamientos: `app/tratamientos/[slug]` genera una página estática (SSG)
  por cada tratamiento desde una única fuente de datos en `data/treatments.ts`.
- **Formulario de consultas** vía [Formspree](https://formspree.io) (guarda cada envío en su panel + email de aviso).

## Desarrollo

```bash
npm install
cp .env.example .env.local   # y completá NEXT_PUBLIC_FORMSPREE_ID
npm run dev                  # http://localhost:3000
```

Otros scripts: `npm run build` (build de producción), `npm run start`, `npm run lint`.

## Formulario (Formspree)

1. Creá un formulario gratis en [formspree.io](https://formspree.io) usando el correo `cycesteticaycirugia@gmail.com`.
2. Copiá el ID del endpoint (`https://formspree.io/f/XXXXXXX` → `XXXXXXX`).
3. Ponelo en `NEXT_PUBLIC_FORMSPREE_ID` (en `.env.local` para desarrollo y en las Environment Variables de Vercel para producción).

Sin esa variable el formulario muestra un aviso en lugar de enviar.

## Deploy en Vercel

1. Subí el repositorio a GitHub.
2. Importalo en [Vercel](https://vercel.com/new) — detecta Next.js automáticamente.
3. Agregá la variable `NEXT_PUBLIC_FORMSPREE_ID` en **Settings → Environment Variables**.
4. Deploy. Las páginas de tratamientos quedan pre-renderizadas.

> Nota: `NEXT_PUBLIC_FORMSPREE_ID` se inyecta en tiempo de **build**. Si la agregás o cambiás después
> del primer deploy, hacé un **redeploy** para que tome efecto.

## Estructura

```
app/
  layout.tsx                    # fuentes (next/font), <Nav/> y <Footer/>, metadata
  page.tsx                      # home
  globals.css                   # tema Tailwind (@theme con la paleta) + estilos base
  tratamientos/[slug]/page.tsx  # ruta dinámica de tratamientos (SSG)
components/                     # Nav, Hero, Nosotros, Especialistas, Especialidades, Tecnologia, Contacto, ContactForm, Footer, ScrollReveal
data/treatments.ts             # fuente única de los tratamientos
legacy/                        # sitio estático original (referencia; se puede borrar)
```

## Contenido de los tratamientos

Cada tratamiento en `data/treatments.ts` tiene `shortDescription` (ya cargada) y campos opcionales para completar
más adelante: `intro`, `benefits`, `duration`, `sessions`, `aftercare`, `faq`. La página de detalle muestra
placeholders elegantes mientras esos campos estén vacíos.
