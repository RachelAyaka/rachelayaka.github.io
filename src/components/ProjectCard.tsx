import React from 'react';
import { Project } from '../types';
import { Card, CardContent, Typography } from '@mui/material';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (

    <Card
      sx={{ 
        backgroundColor: 'white', 
        borderRadius: 2, 
        boxShadow: 3, 
        overflow: 'hidden', 
        transition: 'transform 0.3s', 
        '&:hover': {
          transform: 'scale(1.05)',
        }
      }}
    >
      {/* <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      /> */}
      <CardContent>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>{project.title}</Typography>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
              GitHub
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;