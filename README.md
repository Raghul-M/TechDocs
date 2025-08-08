# TechDocs - Technical Project Documentation Hub

A modern documentation website for technical projects across various domains including MLOps, DevOps, GenAI, and full-stack development.

## Features

- **Modern Documentation Layout** - Clean, responsive design inspired by industry-standard documentation sites
- **Domain-Focused Content** - Organized sections for different technical domains
- **Mobile Responsive** - Optimized for all device sizes
- **Interactive Navigation** - Sidebar navigation with collapsible sections
- **Project Showcase** - Featured project cards with live demos and documentation links

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **Shadcn/ui** - High-quality React components
- **React Router** - Client-side routing for navigation
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd lovelocraft-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Main navigation header
│   ├── Footer.tsx      # Site footer
│   ├── HeroSection.tsx # Landing page hero
│   ├── ProjectCard.tsx # Project display cards
│   ├── DocsLayout.tsx  # Documentation layout wrapper
│   └── Sidebar.tsx     # Documentation sidebar navigation
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── NotFound.tsx    # 404 page
│   └── docs/           # Documentation pages
├── data/               # Static data and content
├── types/              # TypeScript type definitions
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding New Documentation Pages

1. Create a new page component in `src/pages/docs/`
2. Add the route to `src/App.tsx`
3. Update the sidebar navigation in `src/components/Sidebar.tsx`

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added to:
- `src/index.css` - Global styles and CSS variables
- Component-level classes using Tailwind utilities

### Color Theme

The site uses a green-based color palette. Colors can be customized in:
- `tailwind.config.ts` - Tailwind color configuration
- `src/index.css` - CSS custom properties

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and not open for public contribution.