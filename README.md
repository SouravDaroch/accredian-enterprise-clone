# Accredian Enterprise Clone

A high-performance landing page clone built with **Next.js 16 (Turbopack)** and **Tailwind CSS v4**.

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (Glassmorphic UI + Dark Mode)
- **Forms**: React Hook Form + Zod
- **Backend**: Next.js Server Actions (for lead capture)

##✨ Key Features
- **Full-Stack Lead Capture**: A validated form powered by Server Actions for secure data processing.
- **Dynamic Theme System**: Seamless Light/Dark mode integration using the latest Tailwind 4 engine.
- **Smooth Navigation**: Custom scroll-linked navigation with header-offset logic for a smooth user experience.
- **SEO Optimized**: Fully configured Metadata API including OpenGraph tags and semantic HTML5 structure.
- **Responsive Design**: Mobile-first architecture optimized for all screen sizes.

## 🤖 AI Usage Disclosure
**Where AI helped**: Used Antigravity/Gemini to scaffold modular section architectures, generate Zod schemas for form validation, and create the initial multi-column footer structure.

 **Manual Improvements**: 
- improved the UI and UX of the website, also ensured the compatibility of dark/light mode throughout all the components
- tested and debugged the changes made and ensured the website is responsive on different screen sizes
- Manually refined the **Tailwind 4 CSS variable system** for the dual-theme logic.
- Custom-tuned the **smooth scroll offsets** to account for the sticky header height.
- Refactored auto-generated components into **highly reusable TypeScript interfaces** (e.g., `ProgramCardProps`).

## 🚀 How to Run
1. Clone the Repo: `git clone`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
3. View at `localhost:3000`
