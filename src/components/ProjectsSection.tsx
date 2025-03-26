'use client'
import React, { useState } from 'react';
// import { Project } from '../types';
import ProjectCard from './ProjectCard';
import { projects } from '../assets/data/projects';
import { Box, Button, Container, Grid2, Typography, useTheme } from '@mui/material';

const ProjectsSection: React.FC = () => {
  const theme = useTheme()
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects : []
    // : projects.filter(project => project.featured);

  return (
    <section id="projects" className="project-section" style={{ backgroundColor: theme.palette.secondary.main, padding: '3rem 0' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>My Projects</Typography>
        
        <Box display="flex" justifyContent="center" mb={4}>
        <Box display="inline-flex" borderRadius="8px" boxShadow={2}>
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'contained' : 'outlined'}
              sx={{ borderRadius: '8px 0 0 8px', px: 4, py: 2, color: filter === 'all' ? 'primary' : 'default' }}
            >
              All Projects
            </Button>
            <Button
              onClick={() => setFilter('featured')}
              variant={filter === 'featured' ? 'contained' : 'outlined'}
              sx={{ borderRadius: '0 8px 8px 0', px: 4, py: 2, color: filter === 'featured' ? 'primary' : 'default'}}
            >
              Featured
            </Button>
          </Box>
        </Box>
        
        {filteredProjects.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Typography variant="h6" paragraph>
              No projects yet
            </Typography>
            <Typography variant="body2" color="textSecondary">
              I&apos;m currently working on some exciting projects. Check back soon!
            </Typography>
          </Box>
        ) : (
          <Grid2 container spacing={4}>
            {filteredProjects.map((project) => (
              <Grid2 size={{sm: 12, md:4}} key={project.id}>
                <ProjectCard key={project.id} project={project} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Container>
    </section>
  );
};

export default ProjectsSection;