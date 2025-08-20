import { Search, Github } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg">
            <img 
              src="/image.png" 
              alt="TechDocs Logo" 
              className="h-6 w-6 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">TechDocs</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Project Documentation</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-surface border-border transition-smooth focus:bg-surface-elevated"
            />
          </div>
        </div>

                {/* Navigation - Always visible */}
        <nav className="flex items-center space-x-6">
          <a
            href="https://github.com/Raghul-M/Deploying_Docker-App-on-Render_Using_Githubactions"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-3 py-2 text-white hover:bg-gray-800 transition-colors text-xs sm:text-sm"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-surface border-border"
          />
        </div>
      </div>
    </header>
  );
};