# TechDocs - Personal Projects Hub

A modern personal portfolio website showcasing technical projects across MLOps, DevOps, GenAI, Full-Stack development, and Open Source contributions.

## 🚀 Overview

This is my personal projects hub where I showcase my technical journey through various domains. The site features categorized projects, live demos, GitHub repositories, and open source contributions.

## ✨ Features

- **Project Categories** - Organized into Top Projects, Mini Projects, and Open Source contributions
- **Live Demos** - Direct links to deployed applications
- **GitHub Integration** - Links to source code repositories
- **Open Source Showcase** - Dedicated section for community contributions
- **Responsive Design** - Optimized for all device sizes
- **Smart Search** - Filter projects by name, technology, or category
- **Modern UI** - Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **Shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📂 Project Categories

### 🏆 Top Projects
Featured projects showcasing expertise in:
- **MLOps/LLMOps** - AI/ML pipeline automation and deployment
- **DevOps** - Infrastructure automation and CI/CD
- **GenAI** - Generative AI applications and tools
- **Full-Stack** - End-to-end web applications

### 🧪 Mini Projects
Smaller experiments and learning projects exploring different technologies and concepts.

### 🌟 Open Source
Community contributions including:
- **GitHub Actions** - Custom marketplace actions
- **Documentation** - Technical documentation improvements
- **Translations** - Internationalization contributions
- **Testing** - Unit test coverage improvements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Raghul-M/TechDocs.git
cd TechDocs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header with search
│   ├── Footer.tsx      # Site footer with social links
│   ├── HeroSection.tsx # Landing page hero section
│   ├── ProjectCard.tsx # Individual project cards
│   ├── ProjectGrid.tsx # Project grid with tabs and filtering
│   └── CategoryFilter.tsx # Category filtering component
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── data/               # Project data and content
│   └── projects.ts     # All project information
├── types/              # TypeScript type definitions
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## 🎨 Customization

### Adding New Projects

1. Add project data to `src/data/projects.ts`
2. Include project thumbnail in `public/images/projects/`
3. Set appropriate category and featured status

### Project Categories

Projects are categorized as:
- `featured: true` - Top Projects
- `opensource: true` - Open Source contributions  
- Default - Mini Projects

### Styling

The project uses Tailwind CSS with a custom color scheme. Modify:
- `tailwind.config.ts` - Color palette and theme
- `src/index.css` - Global styles and CSS variables

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Connect

- **GitHub**: [Raghul-M](https://github.com/Raghul-M)
- **LinkedIn**: [m-raghul](https://www.linkedin.com/in/m-raghul/)
- **Email**: contact@raghul.in

## 📄 License

This project is personal portfolio website. Feel free to use as inspiration for your own projects.

---

Built with ❤️ by Raghul M