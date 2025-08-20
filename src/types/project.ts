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
  opensource?: boolean;
  diagram?: {
    title: string;
    description: string;
    author: string;
  };
}

export type ProjectCategory = 
  | 'MLOps'
  | 'LLM Ops'
  | 'DevOps'
  | 'GenAI'
  | 'Full-Stack'
  | 'Full-Stack / GenAI'
  | 'Cloud & DevOps'
  | 'Cloud/ ML'
  | 'Data Engineering'
  | 'Cloud Architecture';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface FilterState {
  categories: ProjectCategory[];
  searchQuery: string;
  status?: ProjectStatus;
}