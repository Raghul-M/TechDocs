import { Project } from '@/types/project';
import { ProjectCard } from './ProjectCard';
import { EmptyState } from './EmptyState';
import { useState } from 'react';

interface ProjectGridProps {
  projects: Project[];
  searchQuery: string;
  onSearchChange?: (query: string) => void;
}

type ProjectTab = 'top' | 'mini' | 'opensource';

export const ProjectGrid = ({ projects, searchQuery, onSearchChange }: ProjectGridProps) => {
  const [activeTab, setActiveTab] = useState<ProjectTab>('top');

  const getFilteredProjects = () => {
    let baseProjects = projects.filter(project => {
      if (!searchQuery.trim()) return true; // Show all if no search query
      
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = project.title.toLowerCase().includes(query) ||
                           project.description.toLowerCase().includes(query) ||
                           project.category.toLowerCase().includes(query) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(query)) ||
                           project.tags.some(tag => tag.toLowerCase().includes(query));
      
      return matchesSearch;
    });

    if (activeTab === 'top') {
      return baseProjects.filter(project => project.featured);
    } else if (activeTab === 'opensource') {
      return baseProjects.filter(project => project.opensource);
    } else {
      return baseProjects.filter(project => !project.featured && !project.opensource);
    }
  };

  const filteredProjects = getFilteredProjects();

  if (filteredProjects.length === 0) {
    return (
      <section className="pt-8 pb-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Header with Tabs */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              My Projects
            </h2>
            
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-muted rounded-lg p-1 inline-flex">
                <button
                  onClick={() => setActiveTab('top')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'top'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Top Projects
                </button>
                <button
                  onClick={() => setActiveTab('mini')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'mini'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Mini Projects
                </button>
                <button
                  onClick={() => setActiveTab('opensource')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'opensource'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Opensource
                </button>
              </div>
            </div>
          </div>

          <EmptyState 
            searchQuery={searchQuery}
            selectedCategories={[]}
            onClearFilters={() => onSearchChange?.('')}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="pt-8 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header with Tabs */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            My Projects
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('top')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'top'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Top Projects
              </button>
              <button
                onClick={() => setActiveTab('mini')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'mini'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Mini Projects
              </button>
              <button
                onClick={() => setActiveTab('opensource')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'opensource'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Opensource
              </button>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {searchQuery ? (
              `Found ${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} matching "${searchQuery}"`
            ) : (
              activeTab === 'top' 
                ? 'My featured projects showcasing expertise in AI, DevOps, and full-stack development'
                : activeTab === 'opensource'
                ? 'Open source contributions including GitHub Actions, HuggingFace PRs, and community projects'
                : 'Smaller experiments and learning projects that showcase different technologies'
            )}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              className="h-full"
              activeTab={activeTab}
            />
          ))}
        </div>
      </div>
    </section>
  );
};