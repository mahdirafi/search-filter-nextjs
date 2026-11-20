<div align="center">

# 🔎 Search Filter (Next.js)

**A fast, responsive search and filter interface built with Next.js, Tailwind CSS, and daisyUI.**

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI_5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

[Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📖 About the Project

**Search Filter** is a Next.js application that lets users search through a list of items and narrow the results with filters in real time. It is built on the Next.js **App Router** with **React 19**, styled with **Tailwind CSS v4** and **daisyUI**, and uses **React Icons** for its icons.

The goal of the project is to practice and demonstrate a clean, reusable search-and-filter pattern in a modern Next.js codebase.

---

## ✨ Features

- 🔍 **Instant search**: results update as the user types.
- 🎛️ **Filtering**: narrow results by category or other options.
- ⚡ **Fast and modern**: powered by Next.js 16 and React 19.
- 🎨 **Polished UI**: Tailwind CSS and daisyUI components.
- 📱 **Fully responsive**: works on mobile, tablet, and desktop.
- 🧹 **Code quality**: ESLint configured with `eslint-config-next`.

> Edit this list so it describes exactly what your app does (for example sort options, empty-state message, or a clear-filters button).

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/), [daisyUI 5](https://daisyui.com/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Linting | [ESLint 9](https://eslint.org/) with `eslint-config-next` |
| Font | [Geist](https://vercel.com/font) via `next/font` |

---

## 📁 Project Structure

```bash
search-filter-nextjs/
├── public/                 # Static assets
├── src/
│   └── app/                # App Router: layout, pages, and global styles
├── .gitignore
├── eslint.config.mjs       # ESLint configuration
├── jsconfig.json           # Path aliases
├── next.config.mjs         # Next.js configuration
├── package.json
├── package-lock.json
├── postcss.config.mjs      # PostCSS (Tailwind CSS v4)
└── README.md
```

> Add your own components and data folders under `src/` once you list them (for example `src/components/` and `src/data/`).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v20.9 or later** (required by Next.js 16)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mahdirafi/search-filter-nextjs.git
   ```

2. **Move into the project folder**

   ```bash
   cd search-filter-nextjs
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open **http://localhost:3000** in your browser. The page updates automatically when you edit `src/app/page.js`.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Runs the production build |
| `npm run lint` | Runs ESLint across the project |

---

## ☁️ Deployment

The easiest way to deploy this app is with [Vercel](https://vercel.com/new):

1. Push the project to GitHub.
2. Import the repository on Vercel.
3. Keep the default Next.js settings and click **Deploy**.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options.

---

## 🗺️ Roadmap

- [ ] Sorting options (price, rating, name)
- [ ] Debounced search input
- [ ] Filter by multiple categories at once
- [ ] Pagination or infinite scroll
- [ ] Sync search and filters with the URL query string
- [ ] Connect to a real API or database

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**MD Mahdi**
Web Developer

- GitHub: [@mahdirafi](https://github.com/mahdirafi)

---

<div align="center">

⭐ If you find this project useful, please consider giving it a star!

</div>