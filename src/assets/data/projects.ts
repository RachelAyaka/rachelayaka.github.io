import { Project } from '../../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment processing.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/images/projects/ecommerce.jpg',
    demoUrl: 'https://myecommerce.example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
  },
  // Add more projects as you complete them
];