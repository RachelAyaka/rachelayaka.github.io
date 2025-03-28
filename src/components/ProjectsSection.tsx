'use client'
import {useEffect, useState } from 'react';

import { Box, Button, CircularProgress, Container, Grid2, IconButton, Typography, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

import getProjects from '@/services/getProjects';
import { Project } from '@/types';

import ProjectCard from './ProjectCard';
import AddProjectDialog from './AddProjectDialog';
import DialogContainer from './DialogContainer';
import useCreateProjectDialog from '@/hooks/useCreateProjectDialog';

const ProjectsSection: React.FC = () => {
  const theme = useTheme()
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {
    alertMessage,
    addProjectSuccessful,
    addProjectFailure,
    open,
    title,
    description,
    technologies,
    imageUrl,
    demoUrl,
    githubUrl,
    featured,
    titleStatus,
    descriptionStatus,
    technologiesStatus,
    imageUrlStatus,
    demoUrlStatus,
    githubUrlStatus,
    featuredStatus,
    handleTitleFieldChange,
    handleDescriptionFieldChange,
    handleTechnologiesFieldChange,
    handleImageUrlFieldChange,
    handleDemoUrlFieldChange,
    handleGithubUrlFieldChange,
    handleFeaturedFieldChange,
    handleClickCreateProject,
    handleOpenDialog,
    handleCancelCloseDialog,
    handleCloseDialog,
    setAddProjectSuccessful,
    setAddProjectFailure,
    setTitle,
    setDescription,
    setTechnologies,
    setImageUrl,
    setDemoUrl,
    setGithubUrl,
    setFeatured,
    titleHasError,
    descriptionHasError,
    technologiesHasError,
    imageUrlHasError,
    demoUrlHasError,
    githubUrlHasError,
    featuredHasError,
  } = useCreateProjectDialog()

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await getProjects();
        console.log(projectsData)
        setProjects(projectsData);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [filter]);
  
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

        <Box sx={{ textAlign: 'center', py: 10 }}>
          <IconButton 
            sx={{
              align: 'right', 
              '&:hover': { backgroundColor: 'gray.100' } 
            }}
            onClick={handleOpenDialog}
          >
            <AddIcon/>
            <Typography>Add new project here</Typography>
          </IconButton>
          {loading ? (
            <Box>
              <CircularProgress size={48} sx={{ color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>Loading projects...</Typography>
            </Box>
          ) : projects.length === 0 ? (
            <Box>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>No projects yet</Typography>
              <Typography variant="body2" color="text.secondary">
                I&apos;m currently working on some exciting projects. Check back soon!!!
              </Typography>
            </Box>
          ) : (
            <Grid2 container spacing={4}>
              {projects.map((project) => (
                <Grid2 size={{xs:12, md:6, lg:4}} key={project.id}>
                  <ProjectCard key ={project.id} project={project} />
                </Grid2>
              ))}
            </Grid2>
          )}
        </Box>
      </Container>
      <DialogContainer open={open} onClose={handleCancelCloseDialog}>
        <Box>
          <AddProjectDialog
          alertMessage = {alertMessage}
          addProjectSuccessful = {addProjectSuccessful}
          addProjectFailure = {addProjectFailure}
          title = {title}
          description = {description}
          technologies = {technologies}
          imageUrl = {imageUrl}
          demoUrl = {demoUrl}
          githubUrl = {githubUrl}
          featured = {featured}
          titleStatus = {titleStatus}
          descriptionStatus = {descriptionStatus}
          technologiesStatus = {technologiesStatus}
          imageUrlStatus = {imageUrlStatus}
          demoUrlStatus = {demoUrlStatus}
          githubUrlStatus = {githubUrlStatus}
          featuredStatus = {featuredStatus}
          handleTitleFieldChange = {handleTitleFieldChange}
          handleDescriptionFieldChange = {handleDescriptionFieldChange}
          handleTechnologiesFieldChange = {handleTechnologiesFieldChange}
          handleImageUrlFieldChange = {handleImageUrlFieldChange}
          handleDemoUrlFieldChange = {handleDemoUrlFieldChange}
          handleGithubUrlFieldChange = {handleGithubUrlFieldChange}
          handleFeaturedFieldChange = {handleFeaturedFieldChange}
          handleClickCreateProject = {handleClickCreateProject}
          handleCloseDialog = {handleCloseDialog}
          setAddProjectSuccessful = {setAddProjectSuccessful}
          setAddProjectFailure = {setAddProjectFailure}
          setTitle = {setTitle}
          setDescription = {setDescription}
          setTechnologies = {setTechnologies}
          setImageUrl = {setImageUrl}
          setDemoUrl = {setDemoUrl}
          setGithubUrl= {setGithubUrl}
          setFeatured = {setFeatured}
          titleHasError = {titleHasError}
          descriptionHasError = {descriptionHasError}
          technologiesHasError ={technologiesHasError}
          imageUrlHasError= {imageUrlHasError}
          demoUrlHasError = {demoUrlHasError}
          githubUrlHasError ={githubUrlHasError}
          featuredHasError ={featuredHasError}/>
        </Box>
      </DialogContainer>
      
    </section>
  );
};

export default ProjectsSection;