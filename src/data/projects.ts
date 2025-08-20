import { Project } from '@/types/project';

export const sampleProjects: Project[] = [
  // TOP PROJECTS (featured: true)
  {
    id: '1',
    title: 'HireMe-ATS',
    description: 'Advanced Applicant Tracking System with AI-powered resume screening and candidate matching capabilities.',
    category: 'GenAI',
    tags: ['ATS', 'AI Screening', 'Resume Analysis', 'HR Tech'],
    techStack: ['Python', 'AI/ML', 'NLP', 'Flask', 'React'],
    status: 'completed',
    completionDate: '2024-03',
    githubUrl: 'https://github.com/Raghul-M/HireMe-ATS',
    liveUrl: 'https://hiremeats.vercel.app/',
    thumbnail: '/images/projects/hiremeats.png',
    featured: true,
    diagram: {
      title: 'AI-Powered ATS System',
      description: 'Automated resume screening and candidate matching workflow',
      author: 'Raghul M'
    }
  },
  {
    id: '2',
    title: 'LLMOps Llama4 Shadeform GPU Project',
    description: 'Large Language Model operations pipeline using Llama4 with GPU acceleration on Shadeform infrastructure.',
    category: 'LLM Ops',
    tags: ['LLMOps', 'Llama4', 'GPU Computing', 'ML Pipeline'],
    techStack: ['Python', 'Llama4', 'GPU', 'Shadeform', 'MLOps'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com/Raghul-M/llmops_llama4_shadeform_gpu_project',
    thumbnail: '/images/projects/LLmops.png',
    featured: true,
    diagram: {
      title: 'LLMOps Pipeline Architecture',
      description: 'GPU-accelerated LLM deployment and operations workflow',
      author: 'Raghul M'
    }
  },
  {
    id: '3',
    title: 'Deploying Docker App on Render using GitHub Actions',
    description: 'Complete CI/CD pipeline for containerized applications with automated deployment to Render platform.',
    category: 'DevOps',
    tags: ['Docker', 'GitHub Actions', 'Render', 'CI/CD'],
    techStack: ['Docker', 'GitHub Actions', 'Render', 'YAML', 'DevOps'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/Deploying_Docker-App-on-Render_Using_Githubactions',
    thumbnail: '/images/projects/render-gh.png',
    featured: true,
    diagram: {
      title: 'Docker Deployment Pipeline',
      description: 'Automated containerized application deployment workflow',
      author: 'Raghul M'
    }
  },
  {
    id: '4',
    title: 'DevOps Hub',
    description: 'Comprehensive DevOps toolkit and resource hub with automation scripts, best practices, and deployment templates.',
    category: 'DevOps',
    tags: ['DevOps Tools', 'Automation', 'Infrastructure', 'Best Practices'],
    techStack: ['Bash', 'Python', 'Docker', 'Kubernetes', 'Terraform'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com/Raghul-M/Devops-Hub',
    liveUrl: 'https://devopshub.vercel.app/',
    thumbnail: '/images/projects/devopshub.png',
    featured: true,
    diagram: {
      title: 'DevOps Toolkit Architecture',
      description: 'Comprehensive DevOps automation and tooling ecosystem',
      author: 'Raghul M'
    }
  },
  {
    id: '5',
    title: 'Gmail Sender Action',
    description: 'Custom GitHub Action for sending automated emails via Gmail with HTML templates and attachment support.',
    category: 'DevOps',
    tags: ['GitHub Actions', 'Email Automation', 'Gmail API', 'CI/CD'],
    techStack: ['Python', 'GitHub Actions', 'Gmail API', 'Docker', 'YAML'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/gmail-sender-action',
    liveUrl: 'https://github.com/marketplace/actions/gmail-sender-action',
    thumbnail: '/images/projects/gmail-ghaction.png',
    featured: true,
    diagram: {
      title: 'Gmail Automation Workflow',
      description: 'Automated email delivery system via GitHub Actions',
      author: 'Raghul M'
    }
  },
  {
    id: '6',
    title: 'Quay Push Action',
    description: 'GitHub Action for automated container image building and pushing to Red Hat Quay registry.',
    category: 'DevOps',
    tags: ['GitHub Actions', 'Container Registry', 'Quay', 'Docker'],
    techStack: ['Docker', 'GitHub Actions', 'Quay', 'Container Registry', 'CI/CD'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/quay-push-action',
    liveUrl: 'https://github.com/marketplace/actions/quay-push-action',
    thumbnail: '/images/projects/pushaction.png',
    featured: true,
    diagram: {
      title: 'Container Registry Pipeline',
      description: 'Automated container image build and push workflow',
      author: 'Raghul M'
    }
  },
  {
    id: '7',
    title: 'GitHub-Jira Automation Flask Application',
    description: 'Flask-based automation system integrating GitHub workflows with Jira project management.',
    category: 'DevOps',
    tags: ['GitHub Integration', 'Jira API', 'Flask', 'Automation'],
    techStack: ['Python', 'Flask', 'GitHub API', 'Jira API', 'Webhooks'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com/Raghul-M/GitHub-Jira_Automation-Flask-Application',
    thumbnail: '/images/projects/jiraautomation.png',
    featured: true,
    diagram: {
      title: 'GitHub-Jira Integration',
      description: 'Automated project management workflow integration',
      author: 'Raghul M'
    }
  },
  {
    id: '8',
    title: 'Git Bounty',
    description: 'GitHub data-based image generation system using Stable Diffusion to create visual representations of repository data and developer contributions.',
    category: 'Full-Stack / GenAI',
    tags: ['GitHub API', 'Stable Diffusion', 'Image Generation', 'Data Visualization'],
    techStack: ['Python', 'Stable Diffusion', 'GitHub API', 'AI/ML', 'Data Visualization'],
    status: 'completed',
    completionDate: '2024-03',
    githubUrl: 'https://github.com/Raghul-M/Git-Bounty',
    liveUrl: 'http://gitbounty.streamlit.app/',
    thumbnail: '/images/projects/gitbounty.png',
    featured: true,
    diagram: {
      title: 'GitHub Data Visualization with AI',
      description: 'Stable Diffusion-powered image generation from GitHub repository data',
      author: 'Raghul M'
    }
  },
  {
    id: '9',
    title: 'Clever Cart',
    description: 'Web scraping-based e-commerce platform that aggregates product data from multiple sources for price comparison and inventory tracking.',
    category: 'Full-Stack',
    tags: ['E-commerce', 'Web Scraping', 'Price Comparison', 'Data Aggregation'],
    techStack: ['React', 'Node.js', 'Web Scraping', 'Database', 'APIs'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com/Raghul-M/Clever-Cart',
    thumbnail: '/images/projects/clevercart.png',
    featured: true,
    diagram: {
      title: 'Web Scraping E-commerce Platform',
      description: 'Data aggregation and price comparison system using web scraping',
      author: 'Raghul M'
    }
  },
  {
    id: '10',
    title: 'Docker GitHub Actions AWS App',
    description: 'Complete containerized application deployment pipeline using Docker, GitHub Actions, and AWS services.',
    category: 'Cloud & DevOps',
    tags: ['Docker', 'AWS', 'GitHub Actions', 'Cloud Deployment'],
    techStack: ['Docker', 'AWS', 'GitHub Actions', 'ECS', 'CloudFormation'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/Docker_Github-Actions_AWS-App',
    thumbnail: '/images/projects/dockeraws.png',
    featured: true,
    diagram: {
      title: 'AWS Container Deployment',
      description: 'Automated AWS containerized application deployment',
      author: 'Raghul M'
    }
  },
  {
    id: '11',
    title: 'Python GitHub Actions Heroku',
    description: 'Python application deployment automation using GitHub Actions with Heroku platform integration.',
    category: 'DevOps',
    tags: ['Python', 'Heroku', 'GitHub Actions', 'Deployment'],
    techStack: ['Python', 'GitHub Actions', 'Heroku', 'CI/CD', 'Flask'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/Python-Github_Actions-Heroku',
    thumbnail: '/images/projects/ghheroku.png',
    featured: true,
    diagram: {
      title: 'Heroku Deployment Pipeline',
      description: 'Automated Python application deployment to Heroku',
      author: 'Raghul M'
    }
  },

  // MINI PROJECTS (featured: false)
  {
    id: '12',
    title: 'Q&A Chat Assistant',
    description: 'Interactive chat assistant for question-answering with natural language processing capabilities.',
    category: 'GenAI',
    tags: ['Chatbot', 'NLP', 'Q&A System', 'AI Assistant'],
    techStack: ['Python', 'NLP', 'Streamlit', 'OpenAI', 'Chat Interface'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/Q-A_Chat_Assistant',
    thumbnail: '/images/projects/qachatassistant.png',
    featured: false,
    diagram: {
      title: 'AI Chat Assistant',
      description: 'Natural language Q&A processing system',
      author: 'Raghul M'
    }
  },
  {
    id: '13',
    title: 'Nginx Projects',
    description: 'Collection of Nginx configuration examples, load balancing setups, and reverse proxy implementations.',
    category: 'DevOps',
    tags: ['Nginx', 'Load Balancing', 'Reverse Proxy', 'Web Server'],
    techStack: ['Nginx', 'Docker', 'Configuration', 'Load Balancer', 'SSL'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com/Raghul-M/Nginx-Projects',
    thumbnail: '/images/projects/nginx.png',
    featured: false,
    diagram: {
      title: 'Nginx Configuration Suite',
      description: 'Web server and load balancing configuration examples',
      author: 'Raghul M'
    }
  },
  {
    id: '14',
    title: 'User Management System',
    description: 'Complete user authentication and authorization system with role-based access control.',
    category: 'Full-Stack',
    tags: ['User Auth', 'RBAC', 'Authentication', 'User Management'],
    techStack: ['Python', 'Flask', 'Database', 'JWT', 'Authentication'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/User-Management_System',
    thumbnail: '/images/projects/cruddb.png',
    featured: false,
    diagram: {
      title: 'User Management Architecture',
      description: 'Authentication and authorization system design',
      author: 'Raghul M'
    }
  },
  {
    id: '15',
    title: 'Azure Static Website Hosting',
    description: 'Static website deployment and hosting solution using Azure Static Web Apps with CI/CD integration.',
    category: 'Cloud Architecture',
    tags: ['Azure', 'Static Website', 'Hosting', 'CI/CD'],
    techStack: ['Azure', 'Static Web Apps', 'GitHub Actions', 'HTML/CSS', 'JavaScript'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/Azure-Static-Website-Hosting',
    thumbnail: '/images/projects/azurestaticsite.png',
    featured: false,
    diagram: {
      title: 'Azure Static Hosting',
      description: 'Static website deployment on Azure platform',
      author: 'Raghul M'
    }
  },
  {
    id: '16',
    title: 'BookVision',
    description: 'Computer vision application for book recognition and information extraction from book covers.',
    category: 'GenAI',
    tags: ['Computer Vision', 'OCR', 'Book Recognition', 'Image Processing'],
    techStack: ['Python', 'OpenCV', 'OCR', 'Computer Vision', 'ML'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com/Raghul-M/Bookvision',
    liveUrl: 'https://bookvision.streamlit.app/',
    thumbnail: '/images/projects/bookvision.png',
    featured: false,
    diagram: {
      title: 'Book Recognition System',
      description: 'Computer vision-based book identification workflow',
      author: 'Raghul M'
    }
  },
  {
    id: '17',
    title: 'StreamChatify',
    description: 'Real-time streaming chat application with live messaging and user interaction features.',
    category: 'GenAI',
    tags: ['Real-time Chat', 'Streaming', 'WebSocket', 'Live Messaging'],
    techStack: ['React', 'Node.js', 'WebSocket', 'Real-time', 'Chat API'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com/Raghul-M/StreamChatify',
    liveUrl: 'https://streamchatify.streamlit.app/',
    thumbnail: '/images/projects/streamchatify.png',
    featured: false,
    diagram: {
      title: 'Real-time Chat System',
      description: 'Live streaming chat application architecture',
      author: 'Raghul M'
    }
  },
  {
    id: '18',
    title: 'Attendify',
    description: 'Smart attendance management system with automated tracking and reporting capabilities.',
    category: 'Cloud/ ML',
    tags: ['Attendance System', 'Automation', 'Tracking', 'Reporting'],
    techStack: ['Python', 'Database', 'Web Interface', 'Automation', 'Reports'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com/Raghul-M/Attendify',
    thumbnail: '/images/projects/attendify.png',
    featured: false,
    diagram: {
      title: 'Attendance Management System',
      description: 'Automated attendance tracking and reporting workflow',
      author: 'Raghul M'
    }
  }
];