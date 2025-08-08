import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, BookOpen, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Projects",
    items: [
      { title: "Text Generation Models", href: "/docs/text-generation" },
      { title: "Image Generation", href: "/docs/image-generation" },
      { title: "Code Generation", href: "/docs/code-generation" },
      { title: "Prompt Engineering", href: "/docs/prompt-engineering" },
      { title: "Kubernetes Orchestration", href: "/docs/kubernetes-orchestration" },
      { title: "Docker Containerization", href: "/docs/docker-containerization" },
      { title: "CI/CD Pipelines", href: "/docs/cicd-pipelines" },
      { title: "Infrastructure as Code", href: "/docs/infrastructure-as-code" },
      { title: "Machine Learning Models", href: "/docs/ml-models" },
      { title: "Deep Learning", href: "/docs/deep-learning" },
      { title: "Data Preprocessing", href: "/docs/data-preprocessing" },
      { title: "Model Training", href: "/docs/model-training" },
      { title: "Model Deployment", href: "/docs/model-deployment" },
      { title: "Model Monitoring", href: "/docs/model-monitoring" },
      { title: "LLM Operations", href: "/docs/llm-operations" },
      { title: "Model Versioning", href: "/docs/model-versioning" },
    ],
  },
];

const NavSection = ({ section }: { section: NavSection }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-6 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
      >
        {section.title}
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      
      {isOpen && (
        <div className="ml-6 space-y-1">
          {section.items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "block mx-2 px-4 py-2 text-sm rounded-md transition-colors",
                location.pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      {/* TechDocs branding at the top with reduced spacing - hidden on mobile */}
      <div className="p-4 border-b border-gray-200 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">TechDocs</span>
            <span className="text-xs text-gray-500">v1</span>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="p-4 border-b border-gray-200 lg:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search documentation..."
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-8">
        {navigation.map((section) => (
          <NavSection key={section.title} section={section} />
        ))}
      </nav>
    </div>
  );
};
