# SK Portfolio — Modernized Evolution

The professional, modern, and data-driven portfolio of **Satheesh Kumar S (SK)**. Frame positioning: **Software Developer • Frontend Developer • AI & IoT Builder**, leveraging a B.Tech in Agricultural Engineering as a strong domain specialization.

Live Portfolio: [satheesh1929.github.io/SK-Portfolio/](https://satheesh1929.github.io/SK-Portfolio/)

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: GitHub Pages (Static HTML Export)

---

## ✨ Key Features

1. **Interdisciplinary Positioning**: Communicates a professional developer profile while presenting B.Tech Agricultural Engineering background as a unique domain advantage.
2. **Modular Component Architecture**: Reusable React components separated cleanly from portfolio data.
3. **Data-Driven Design**: The entire site's content is managed via a single, centralized, fully typed file at `src/data/portfolio.ts`, preventing code duplication and content sprawl.
4. **Case Study Routes**: Pre-renders detailed case studies for key featured projects (`/projects/seedgrade`, `/projects/scode360`, `/projects/drone-phenomics`, `/projects/wildlife-intrusion`).
5. **Interactive Node Diagram**: A custom lightweight, CSS-animated node connection graphic illustrating the intersection of Software, AI, IoT, and Agriculture.
6. **SEO & Accessibility Optimized**:
   - Structured JSON-LD Person schema.
   - Comprehensive OpenGraph and Twitter card metadata.
   - Customized `robots.txt` and `sitemap.xml`.
   - Semantic HTML layout and screen-reader tags.
7. **Production Contact Flow**: Interactive client-side validated contact pipeline, including honeypot spam protection, loading/sending indicators, and success states.

---

## 📂 Project Structure

```
SK-Portfolio/
├── backup-old/                (Preserved files of the legacy portfolio website)
├── public/
│   ├── assets/
│   │   └── S. Satheesh Kumar_Resume.pdf    (Curated resume artifact)
│   ├── robots.txt             (Search crawler config)
│   └── sitemap.xml            (Route maps for search engine indexing)
├── src/
│   ├── app/
│   │   ├── layout.tsx         (Root shell layout, loading Google Fonts & layout wrappers)
│   │   ├── page.tsx           (Central single-page homepage)
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx   (Static Route Case Study Template)
│   ├── components/            (Modular React layout components)
│   │   ├── About.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CredibilityStrip.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ResearchSection.tsx
│   │   └── SkillsSection.tsx
│   └── data/
│       └── portfolio.ts       (Central typed portfolio content database)
├── next.config.ts             (Next.js static export basePath configs)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Development and Build Instructions

### Prerequisites
Ensure you have Node.js (v18.x or newer) and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
Starts the local dev server at `http://localhost:3000`:
```bash
npm run dev
```

### 3. Production Build & Static HTML Export
Compiles the application, runs TypeScript checks, and exports static assets and HTML files into the `out/` directory:
```bash
npm run build
```

---

## 🌐 Deployment Information

This project is configured for static export to **GitHub Pages**. During the production build (`npm run build`), Next.js exports static files under the repository subpath `/SK-Portfolio` (configured via `basePath` in `next.config.ts`).

To deploy changes to GitHub Pages:
1. Ensure the production build finishes without errors.
2. Push your changes to the primary repository branch.
3. Configure GitHub Pages to build from the static folder output (`out/`) or deploy using a GitHub Action workflow.
