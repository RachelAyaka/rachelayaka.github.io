import { Project } from '../../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'LiDAR Database Web Appplication',
    description:
      'Full-stack web application to search, request, and share LiDAR documents.',
    technologies: [
      'AWS',
      'Next.js',
      'Django',
      'Django Rest Framework',
      'Material UI',
      'TypeScript',
    ],
    imageUrl: '/images/takuto.png',
    demoUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    id: 2,
    title: 'Salon Appointment Website',
    description:
      'A website for a salon where customers can create accounts, book appointments, and manage their bookings. The salon owner can manage appointments, view customer details, and oversee the schedule.',
    technologies: [
      'MongoDB', 'Express.js', 'React.js', 'Vite', 'Node.js', 'Vercel', 'JavaScript', 'JsonWebToken',
    ],
    imageUrl: '/images/aptWeb.png',
    demoUrl: 'https://salon-frontend-lilac.vercel.app',
    githubUrl: '',
    featured: false,
  },
  {
    id: 3,
    title: 'Computer Vision Gym Count',
    description:
      "A application to detect over 543 landmark points on face and body. Using these point coordiates, user's workout repetition is counted and displayed in real-time on the caemra screen.",
    technologies: ['OpenCV', 'MediaPipe', 'Python', 'Numpy'],
    imageUrl: '/images/faceDetection.png',
    demoUrl: '',
    githubUrl: '',
    featured: false,
  },
];
