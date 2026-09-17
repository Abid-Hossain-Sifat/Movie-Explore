# 🎬 MovieExplorer

> **A modern, cinematic movie and television show discovery platform powered by React 19, Tailwind CSS v4, and the TVMaze REST API.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

---

## 📌 Project Overview

**MovieExplorer** is a responsive web application built for movie lovers and cinephiles. It allows users to browse an expansive library of television shows and films, search for titles in real-time using live API endpoints, view in-depth metadata in a clean modal overlay, and bookmark their favorite selections.

Designed with a deep cinema dark aesthetic (`#0b0f19`), warm amber glowing accents, and fluid layouts optimized for all device sizes.

---

## ✨ Key Features

- **🏠 Immersive Landing Page**:
  - **Hero Spotlight**: High-impact movie banner with curated winter spotlight tags and direct call-to-action buttons.
  - **Trending Premiere Picks**: Curated selection of top-rated shows fetched live from the API with skeleton loading.
  - **Cinema Statistics**: Animated metrics highlighting movie collections, 4K HDR fidelity, and spatial audio support.
  - **Curated Reel & Community Pulse**: Interactive community rating bars and weekly auteur retrospective collections.
  - **Device Streaming CTA**: Banner encouraging cross-platform playback.

- **🔍 Dynamic Real-Time Search**:
  - Prominent search bar at the top of the dedicated **Movies** page (`/movies`).
  - Powered directly by the live search endpoint with 350ms debouncing for instant, lag-free results.
  - Clear button (✕) and visual searching indicator.
  - Graceful empty-state feedback when no results match the user's query.

- **🎞️ Rich Movie Cards**:
  - High-resolution poster with smooth hover-zoom effects and quality badges (`4K HDR`, `IMAX`, `DOLBY`).
  - Premiere year, runtime duration, primary genre, and average star rating.
  - Clean summary preview (sanitized from raw HTML tags).
  - Network/broadcaster badge with verification icons.
  - Interactive bookmark toggle button.

- **🍿 Detailed Movie Modal**:
  - Opens instantly upon clicking **See Details** on any card.
  - Displays large poster, quality badges, and comprehensive metadata grid (rating, premiere year, runtime, broadcaster, language, and status).
  - Complete storyline overview.
  - External link button redirecting to the show's **Official Site**.
  - Dual close mechanism: top-right close icon, bottom close button, or clicking outside the backdrop overlay.

- **📱 Fully Responsive Design**:
  - Mobile-first single-column view with touch-friendly elements.
  - Tablet 2-column grid and desktop 4-column responsive grid layout.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, JavaScript (ES6+) |
| **Styling & UI** | Tailwind CSS v4, DaisyUI v5, CSS3 Custom Properties |
| **Routing** | React Router v7 (`BrowserRouter`, `Routes`, `Route`, `NavLink`) |
| **Icons** | React Icons (`fa6`, `io5`, `lu`, `md`, `ri`) |
| **API** | TVMaze Public REST API |
| **Build Tool** | Vite 8 |

---

## 🌐 API Endpoints Used

| Endpoint | Method | Description |
| :--- | :---: | :--- |
| `https://api.tvmaze.com/shows` | `GET` | Fetches all available TV shows for the directory and trending picks. |
| `https://api.tvmaze.com/search/shows?q=:query` | `GET` | Queries TVMaze's database in real-time by show title/keyword. |

---

## 📂 Project Structure

```text
MovieExplore/
├── public/
│   └── Assets/
│       ├── Cineplus.png       # Curated reel banner image
│       └── Hero.png           # Hero spotlight banner image
├── src/
│   ├── Components/
│   │   ├── CinePlus/          # Curated reel & community ratings
│   │   ├── CTA/               # Call-to-action device banner
│   │   ├── Footer/            # Site footer with brand links
│   │   ├── Hero/              # Hero banner section
│   │   ├── Home/              # Landing page wrapper
│   │   ├── Loading/           # Dual-ring cinema loading spinner
│   │   ├── MovieCard/         # Trending picks live grid
│   │   ├── MovieModal/        # In-depth show details modal
│   │   ├── Movies/            # Dedicated search & browsing page
│   │   ├── Navbar/            # Sticky header with active NavLinks
│   │   └── Stats/             # Platform metrics & statistics
│   ├── App.jsx                # Main application & routing config
│   ├── index.css              # Tailwind CSS v4 & theme configuration
│   └── main.jsx               # React DOM root with BrowserRouter
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and `npm` installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abid-Hossain-Sifat/Movie-Explore.git
   cd Movie-Explore
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
