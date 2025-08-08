export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  techStack: string[];
  status: ProjectStatus;
  completionDate?: string;
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  thumbnail?: string;
  featured: boolean;
  diagram?: {
    title: string;
    description: string;
    author: string;
  };
}

export type ProjectCategory = 
  | 'MLOps'
  | 'DevOps'
  | 'GenAI'
  | 'Full-Stack'
  | 'Data Engineering'
  | 'Cloud Architecture';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface FilterState {
  categories: ProjectCategory[];
  searchQuery: string;
  status?: ProjectStatus;
}