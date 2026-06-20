# Tejas BV — 3D Portfolio

Personal 3D portfolio built with React, TypeScript, Three.js, React Three Fiber, and GSAP. Showcases my full-stack (MERN) and AI/ML projects through animated sections, a 3D character scene, and smooth scroll-driven interactions.

Live site: [your-deployed-url-here] <!-- update once deployed -->
GitHub: [github.com/tejasbv46](https://github.com/tejasbv46)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Featured Work](#featured-work)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [GSAP License Note](#gsap-license-note)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## About

Full-stack developer (MERN) and final-year CSE undergraduate with hands-on experience building production-grade web applications and AI-integrated systems. Proficient in React.js, Node.js, MongoDB, REST APIs, Python, and LangGraph, with additional exposure to Android development and multi-agent AI systems.

## Features

- Responsive one-page portfolio layout with reusable section components.
- 3D character scene rendering powered by React Three Fiber and Three.js.
- GSAP-powered animations and transitions for interactive storytelling.
- Custom cursor, hover interactions, and scroll-driven visual effects.
- Organized component architecture with dedicated utilities and style modules.

## Tech Stack

### Core
- React 18
- TypeScript
- Vite

### Animation and 3D
- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/cannon`
- `@react-three/rapier`

### Supporting Libraries
- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

## Featured Work

- **[ResearchAI](https://github.com/tejasbv46/multi-agent-system)** — Production multi-agent research pipeline (LangGraph, Redis, SQLite, Streamlit) with autonomous query breakdown and web search via Tavily API.
- **[MovieTake](https://github.com/tejasbv46/movie-review-platform)** — Full-stack MERN movie discovery and review platform with JWT auth and OMDb API integration. [Live](#)
- **[WearHouse](https://github.com/tejasbv46/mern-clothing)** — Clothing e-commerce platform with Stripe payments, Cloudinary uploads, and an admin dashboard.
- **Grama-Waste Tracker** — AI-powered Android app (Kotlin, Jetpack Compose, Firebase, Gemini 2.5 Flash) for rural sanitation tracking, built during my internship at MindMatrix.IO.

## Project Structure

```text
.
├── public/                    # Static assets
├── src/
│   ├── assets/                # Local media/assets
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic/utilities
│   │   ├── styles/            # Section/component CSS files
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx  # Main page composition
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/                # Global providers (loading state, etc.)
│   ├── data/                   # Static data/content definitions
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm 9+ (or compatible)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/tejasbv46/tejas-bv-portfolio.git
   cd tejas-bv-portfolio
```

2. Install dependencies:

```bash
   npm install
```

3. Start the local development server:

```bash
   npm run dev
```

4. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` — Starts Vite dev server and exposes host for local network testing.
- `npm run build` — Type-checks and builds a production-ready bundle.
- `npm run preview` — Serves the production build locally for verification.
- `npm run lint` — Runs ESLint checks across the project.

## GSAP License Note

This project uses the standard `gsap` package, including bonus plugins now available in the core package. Install dependencies with `npm install`. Read official installation guidance here: [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/)

## Troubleshooting

- **Blank screen in development** — Check browser console for module import errors and verify all dependencies are installed.
- **3D performance issues on low-end devices** — Reduce scene complexity and post-processing effects in the character/scene utilities.
- **TypeScript build failures** — Run `npm run build` and address reported type errors before deploying.

## Deployment

1. Create a production build:

```bash
   npm run build
```

2. Validate locally:

```bash
   npm run preview
```

3. Deploy the generated `dist/` folder (Vercel, Netlify, or Cloudflare Pages).

## Credits

Built on top of the open-source [3D Portfolio template](https://github.com/akashrmalhotra) by Akash Malhotra, customized with my own content, projects, and branding.

## License

This project is open source and available under the [MIT License](LICENSE).