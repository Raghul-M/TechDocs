import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';


interface ProjectCardProps {
  project: Project;
  className?: string;
  activeTab?: 'top' | 'mini' | 'opensource';
}

export const ProjectCard = ({ project, className, activeTab }: ProjectCardProps) => {
  // Projects that should have Live Demo button
  const projectsWithLiveDemo = [
    'HireMe-ATS',
    'DevOps Hub', 
    'Git Bounty',
    'BookVision',
    'StreamChatify'
  ];
  
  // Projects that should have Marketplace button
  const projectsWithMarketplace = [
    'Gmail Sender Action',
    'Quay Push Action'
  ];
  
  // Projects that should have PR/Contribution button
  const projectsWithPRs = [
    'HuggingFace Hub Contributions',
    'Podman Contributions',
    'CodeFlare Contributions',
    'OpenDataHub Contributions'
  ];
  
  const shouldShowLiveDemo = projectsWithLiveDemo.includes(project.title);
  const shouldShowMarketplace = projectsWithMarketplace.includes(project.title);
  const shouldShowPRs = projectsWithPRs.includes(project.title);

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
      case 'LLM Ops':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'DevOps':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Full-Stack':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Full-Stack / GenAI':
        return 'bg-gradient-to-r from-green-100 to-purple-100 text-green-800 border-green-200';
      case 'Cloud & DevOps':
        return 'bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 border-indigo-200';
      case 'Cloud/ ML':
        return 'bg-gradient-to-r from-indigo-100 to-orange-100 text-indigo-800 border-indigo-200';
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
      {/* Thumbnail Image */}
      {project.thumbnail && (
        <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 border-b border-border overflow-hidden">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback to diagram if image fails to load
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && project.diagram) {
                parent.innerHTML = '<div class="p-4"><div class="text-center text-muted-foreground">Project Diagram</div></div>';
              }
            }}
          />
        </div>
      )}
      
      {/* Fallback placeholder if no thumbnail */}
      {!project.thumbnail && (
        <div className="relative bg-gradient-to-br from-muted to-muted/50 p-4 border-b border-border h-48 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">📁</div>
            <div>Project Preview</div>
          </div>
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
          {shouldShowLiveDemo && (
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
          )}
          {shouldShowMarketplace && (
            <Button 
              variant="outline" 
              size="sm" 
              className={`group/btn ${
                activeTab === 'opensource' 
                  ? 'w-full bg-black hover:bg-gray-800 border-black hover:border-gray-800 text-white' 
                  : 'flex-1'
              }`}
              onClick={() => project.liveUrl ? window.open(project.liveUrl, '_blank') : null}
              disabled={!project.liveUrl}
            >
              <ExternalLink className={`w-4 h-4 mr-2 ${
                activeTab === 'opensource' ? '' : 'group-hover/btn:text-primary'
              }`} />
              Marketplace
            </Button>
          )}
          {shouldShowPRs && (
            <Button 
              variant="outline" 
              size="sm" 
              className={`group/btn ${
                activeTab === 'opensource' 
                  ? 'w-full bg-black hover:bg-gray-800 border-black hover:border-gray-800 text-white' 
                  : 'flex-1'
              }`}
              onClick={() => project.liveUrl ? window.open(project.liveUrl, '_blank') : null}
              disabled={!project.liveUrl}
            >
              <ExternalLink className={`w-4 h-4 mr-2 ${
                activeTab === 'opensource' ? '' : 'group-hover/btn:text-primary'
              }`} />
              View PRs
            </Button>
          )}
          {activeTab !== 'opensource' && (
            <Button 
              variant="outline" 
              size="sm" 
              className={`group/btn bg-black hover:bg-gray-800 border-black hover:border-gray-800 text-white ${
                (shouldShowLiveDemo || shouldShowMarketplace || shouldShowPRs) ? 'flex-1' : 'w-full'
              }`}
              onClick={() => project.githubUrl ? window.open(project.githubUrl, '_blank') : null}
              disabled={!project.githubUrl}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};