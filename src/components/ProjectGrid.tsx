import { Project } from '@/types/project';
import { ProjectCard } from './ProjectCard';
import { EmptyState } from './EmptyState';

interface ProjectGridProps {
  projects: Project[];
  searchQuery: string;
}

export const ProjectGrid = ({ projects, searchQuery }: ProjectGridProps) => {
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesSearch && project.featured;
  });

  if (filteredProjects.length === 0) {
    return (
      <EmptyState 
        title="No projects found"
        description={searchQuery ? `No projects match "${searchQuery}"` : "No projects available"}
      />
    );
  }

  return (
    <section className="pt-8 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in AI, DevOps, and full-stack development
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              className="h-full"
            />
          ))}
        </div>


      </div>
    </section>
  );
};