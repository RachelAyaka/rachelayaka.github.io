import { Project } from '../../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'LiDAR Database Web Appplication',
    description: 'Deceloped a full-stack application to save thousands of hours streamlining the upload, search, and sharing process.',
    technologies: ['AWS-S3', 'Next.js', 'Django', 'Django Rest Framework', 'Material UI'],
    imageUrl: '',
    demoUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    id: 2,
    title: 'Salon Appointment Website',
    description: 'A website where customers book appointments and the owner to manage appointments and clients.',
    technologies: ['MySQL', 'JavaScript', 'React', 'Spring JDBC', 'Java', 'Spring MVC', 'Spring Boot'],
    imageUrl: '/images/aptWeb.png',
    demoUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    id: 3,
    title: 'Computer Vision Gym Count',
    description: "This programs a camera to detect over 543 landmark points on face and body. Using these point coordiates, user's workout repetition is counted and displayed in real-time.",
    technologies: ['OpenCV', 'MediaPipe', 'Python', 'Numpy'],
    imageUrl: '',
    demoUrl: '',
    githubUrl: '',
    featured: false,
  },
];