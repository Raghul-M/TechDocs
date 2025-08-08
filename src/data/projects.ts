import { Project } from '@/types/project';

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Local LLM Server with Ollama + Cloudflare Tunnel',
    description: 'This project turns an old laptop into a fully functional AI server that can serve LLMs locally and access them globally using Cloudflare Tunnel for secure remote access.',
    category: 'GenAI',
    tags: ['Local AI', 'LLM Server', 'Remote Access', 'Cloudflare'],
    techStack: ['Python', 'Ollama', 'Streamlit', 'Rest API', 'Cloudflare'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com',
    documentationUrl: 'https://docs.example.com/local-llm-server',
    featured: true,
    diagram: {
      title: 'Deploy a Local AI Server Using Ollama, Streamlit & Cloudflare Tunnel',
      description: 'Data flow from local laptop AI server through Cloudflare Tunnel to client browser',
      author: 'Raghul M'
    }
  },
  {
    id: '2',
    title: 'Gmail Sender Action - Custom GitHub Action',
    description: 'Custom GitHub Action enables you to send emails via Gmail using Custom HTML templates directly from your GitHub workflows.',
    category: 'DevOps',
    tags: ['GitHub Actions', 'Email Automation', 'CI/CD', 'Gmail Integration'],
    techStack: ['Python', 'Github Action', 'Docker', 'CI/CD', 'DevOps'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true,
    diagram: {
      title: 'Gmail Sender Action',
      description: 'Workflow from GitHub Actions to Gmail delivery across multiple devices',
      author: 'Raghul M'
    }
  },
  {
    id: '3',
    title: 'ML Pipeline Automation',
    description: 'End-to-end MLOps pipeline with automated model training, validation, and deployment using Kubeflow and MLflow.',
    category: 'MLOps',
    tags: ['Machine Learning', 'Kubernetes', 'CI/CD', 'Model Deployment'],
    techStack: ['Python', 'Kubeflow', 'MLflow', 'Docker', 'Kubernetes', 'TensorFlow'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com',
    documentationUrl: 'https://docs.example.com/ml-pipeline',
    featured: true,
    diagram: {
      title: 'ML Pipeline Automation',
      description: 'Automated ML workflow from data ingestion to model deployment',
      author: 'Raghul M'
    }
  },
  {
    id: '4',
    title: 'Infrastructure as Code with Terraform',
    description: 'Scalable cloud infrastructure automation using Terraform, including multi-environment deployments and monitoring.',
    category: 'DevOps',
    tags: ['Infrastructure', 'Automation', 'Cloud', 'Monitoring'],
    techStack: ['Terraform', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana'],
    status: 'completed',
    completionDate: '2024-02',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true,
    diagram: {
      title: 'Infrastructure as Code Pipeline',
      description: 'Terraform workflow for automated infrastructure deployment',
      author: 'Raghul M'
    }
  },
  {
    id: '5',
    title: 'RAG Implementation with LangChain',
    description: 'Retrieval-Augmented Generation system for enterprise document processing with vector embeddings and semantic search.',
    category: 'GenAI',
    tags: ['Large Language Models', 'Vector Search', 'Document Processing'],
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'React'],
    status: 'completed',
    completionDate: '2024-03',
    githubUrl: 'https://github.com',
    featured: true,
    diagram: {
      title: 'RAG System Architecture',
      description: 'Document processing and retrieval system with vector embeddings',
      author: 'Raghul M'
    }
  },
  {
    id: '6',
    title: 'Microservices E-commerce Platform',
    description: 'Scalable e-commerce platform built with microservices architecture, featuring real-time inventory and payment processing.',
    category: 'Full-Stack',
    tags: ['Microservices', 'E-commerce', 'Real-time', 'Payment Processing'],
    techStack: ['Node.js', 'React', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
    status: 'in-progress',
    githubUrl: 'https://github.com',
    featured: true,
    diagram: {
      title: 'Microservices Architecture',
      description: 'Distributed e-commerce system with service mesh',
      author: 'Raghul M'
    }
  },
  {
    id: '7',
    title: 'Real-time Data Streaming Pipeline',
    description: 'High-throughput data pipeline processing millions of events per second with Apache Kafka and Apache Flink.',
    category: 'Data Engineering',
    tags: ['Stream Processing', 'Big Data', 'Real-time Analytics'],
    techStack: ['Apache Kafka', 'Apache Flink', 'Python', 'Elasticsearch', 'Kibana'],
    status: 'completed',
    completionDate: '2023-12',
    githubUrl: 'https://github.com',
    featured: false,
    diagram: {
      title: 'Real-time Data Pipeline',
      description: 'High-throughput streaming data processing architecture',
      author: 'Raghul M'
    }
  },
  {
    id: '8',
    title: 'Multi-Cloud Disaster Recovery',
    description: 'Automated disaster recovery solution spanning AWS, Azure, and GCP with RTO/RPO optimization.',
    category: 'Cloud Architecture',
    tags: ['Disaster Recovery', 'Multi-Cloud', 'High Availability'],
    techStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Python'],
    status: 'completed',
    completionDate: '2024-01',
    githubUrl: 'https://github.com',
    featured: false,
    diagram: {
      title: 'Multi-Cloud DR Strategy',
      description: 'Cross-cloud disaster recovery and failover system',
      author: 'Raghul M'
    }
  },
  {
    id: '9',
    title: 'AI Model Monitoring Dashboard',
    description: 'Comprehensive monitoring solution for ML models in production, tracking drift, performance, and data quality.',
    category: 'MLOps',
    tags: ['Model Monitoring', 'Data Drift', 'Performance Tracking'],
    techStack: ['Python', 'Streamlit', 'PostgreSQL', 'Docker', 'Grafana'],
    status: 'in-progress',
    githubUrl: 'https://github.com',
    featured: false,
    diagram: {
      title: 'Model Monitoring System',
      description: 'Real-time ML model performance and drift monitoring',
      author: 'Raghul M'
    }
  },
  {
    id: '10',
    title: 'GenAI Code Assistant',
    description: 'AI-powered coding assistant with context-aware suggestions, code generation, and automated documentation.',
    category: 'GenAI',
    tags: ['Code Generation', 'AI Assistant', 'Developer Tools'],
    techStack: ['Python', 'OpenAI', 'VS Code Extension', 'TypeScript'],
    status: 'planned',
    featured: false,
    diagram: {
      title: 'AI Code Assistant',
      description: 'Intelligent code generation and assistance workflow',
      author: 'Raghul M'
    }
  }
];