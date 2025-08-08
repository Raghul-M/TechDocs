import { Project } from '@/types/project';

interface ProjectDiagramProps {
  project: Project;
}

export const ProjectDiagram = ({ project }: ProjectDiagramProps) => {
  const getDiagramContent = () => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src="/images/architectures/LLmops.png" 
          alt="Project Architecture" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&h=200&fit=crop&crop=center";
          }}
        />
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      {getDiagramContent()}
    </div>
  );
};
