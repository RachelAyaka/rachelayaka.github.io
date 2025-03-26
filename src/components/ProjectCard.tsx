import React from 'react';
import { Project } from '../types';
import { Box, Card, CardContent, Chip, Link, Typography } from '@mui/material';

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
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{project.description}</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech} 
              label={tech} size="small" sx={{ backgroundColor: 'gray.200', color: 'text.primary' }} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {project.demoUrl && (
            <Link
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'primary.main', '&:hover': { textDecoration: 'underline' } }}
            >
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { textDecoration: 'underline' } }}
            >
              GitHub
            </Link>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;