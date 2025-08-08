import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectDiagram } from './ProjectDiagram';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'planned':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'GenAI':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'MLOps':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'DevOps':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Full-Stack':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Data Engineering':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Cloud Architecture':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className={cn(
      "group hover-lift transition-smooth border-border bg-card overflow-hidden flex flex-col h-full",
      className
    )}>
      {/* Diagram Section */}
      {project.diagram && (
        <div className="relative bg-gradient-to-br from-muted to-muted/50 p-4 border-b border-border">
          <ProjectDiagram project={project} />
        </div>
      )}

      {/* Project Content */}
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex-shrink-0">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Badge 
            variant="outline" 
            className={cn("text-xs", getCategoryColor(project.category))}
          >
            {project.category}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-0 mt-auto">
        <div className="flex items-center gap-2 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 group/btn"
            onClick={() => project.liveUrl ? window.open(project.liveUrl, '_blank') : null}
            disabled={!project.liveUrl}
          >
            <Globe className="w-4 h-4 mr-2 group-hover/btn:text-primary" />
            Live Demo
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 group/btn"
            onClick={() => project.documentationUrl ? window.open(project.documentationUrl, '_blank') : null}
            disabled={!project.documentationUrl}
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:text-primary" />
            Documentation
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-10 h-10 p-0 flex-shrink-0 group/btn bg-black hover:bg-gray-800 border-black hover:border-gray-800"
            onClick={() => project.githubUrl ? window.open(project.githubUrl, '_blank') : null}
            disabled={!project.githubUrl}
          >
            <Github className="w-5 h-5 text-white" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};