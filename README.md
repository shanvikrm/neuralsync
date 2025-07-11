# NeuralSync – Analytics & AI Chat Dashboard

This project is a modular React application built with **Vite** and **Tailwind CSS**.  
It showcases a landing page, an analytics dashboard with Recharts visualisations, and an AI‑like chat interface.

## ✨ Features
- **Landing Page** – Marketing hero, animated background, responsive navigation.
- **Analytics Dashboard** – Stats cards, line/bar/pie charts (Recharts), sidebar navigation.
- **AI Chat** – Chat history sidebar, typing indicator, reusable message bubbles, persistent chat state.
- **Responsive** – Works on desktop and mobile (Tailwind utility classes).
- **Clean Architecture** – Pages, components, hooks, and data separated for maintainability.
- **Modern Routing** – Uses React Router v6 for page navigation.

## 🛠️ Tech Stack
| Tool           | Purpose                  |
|----------------|-------------------------|
| React 18       | UI library              |
| Vite           | Fast dev server & bundler|
| Tailwind CSS   | Utility‑first styling   |
| Recharts       | Data visualisation      |
| Lucide React   | Icon set                |
| React Router   | Routing                 |

## 📂 Project Structure
```
neuralsync-app/
  ├─ src/
  │  ├─ pages/          # Landing, Dashboard, Chat
  │  ├─ components/     # Shared UI components
  │  ├─ data/           # Static demo datasets
  │  ├─ hooks/          # Custom React hooks
  │  ├─ App.jsx
  │  ├─ main.jsx
  │  ├─ routes.jsx      # App routes (React Router)
  │  └─ index.css
  ├─ index.html
  ├─ tailwind.config.js
  ├─ postcss.config.cjs
  ├─ vite.config.js
  └─ package.json
```

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build && npm run preview
```

> **Node >= 18** recommended.

The app will be served at **http://localhost:5173**.

## 📖 Extending

- Add shared UI pieces to `src/components`.
- Update or replace mock data files in `src/data`.
- Tailwind config lives in `tailwind.config.js`.
- New pages can be created in `src/pages` and wired in `routes.jsx`.

Enjoy hacking on **NeuralSync**! ✨
