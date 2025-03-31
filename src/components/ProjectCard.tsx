'use client'
import React, { Dispatch, JSX, SetStateAction, useState } from 'react';

import { Box, Card, CardContent, Chip, Dialog, Link, Typography } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';

import { FieldStatus } from '@/types/FieldStatus';
import ProjectDialog from './ProjectDialog';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project
  pathname: string
  alertMessage: string
  addProjectSuccessful: boolean
  addProjectFailure: boolean
  openEditDialog: boolean
  titleStatus: FieldStatus
  descriptionStatus: FieldStatus
  technologiesStatus: FieldStatus
  imageUrlStatus: FieldStatus
  demoUrlStatus: FieldStatus
  githubUrlStatus: FieldStatus
  featuredStatus: FieldStatus
  handleTitleFieldChange: () => void
  handleDescriptionFieldChange: () => void
  handleTechnologiesFieldChange: () => void
  handleImageUrlFieldChange: () => void
  handleDemoUrlFieldChange: () => void
  handleGithubUrlFieldChange: () => void
  handleFeaturedFieldChange: () => void
  handleClickCreateProject: () => Promise<boolean>
  handleClickEditProject: () => Promise<boolean>
  handleClickDeleteProject: (arg0: number) => Promise<boolean>
  handleCloseDialog: () => void
  handleOpenEditDialog: () => void
  handleCancelCloseDialog: (arg0: string) => void
  setAddProjectSuccessful: Dispatch<SetStateAction<boolean>>
  setAddProjectFailure:Dispatch<SetStateAction<boolean>>
  setTitle: Dispatch<SetStateAction<string>>
  setDescription: Dispatch<SetStateAction<string>>
  setTechnologies: Dispatch<SetStateAction<string[]>>
  setImageUrl: Dispatch<SetStateAction<string>>
  setDemoUrl: Dispatch<SetStateAction<string>>
  setGithubUrl: Dispatch<SetStateAction<string>>
  setFeatured: Dispatch<SetStateAction<boolean>>
  titleHasError: () => boolean
  descriptionHasError: () => boolean
  technologiesHasError: () => boolean
  imageUrlHasError: () => boolean
  demoUrlHasError: () => boolean
  githubUrlHasError: () => boolean
  featuredHasError: () => boolean
}

function ProjectCard({ project,
    alertMessage,
    addProjectSuccessful,
    addProjectFailure,
    openEditDialog,
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
    handleClickEditProject,
    handleClickDeleteProject,
    // handleOpenEditDialog,
    handleCloseDialog,
    handleCancelCloseDialog,
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
 }: ProjectCardProps): JSX.Element {
    const [currentProject, setCurrentProject] = useState<Project>(project)
    // const handleEditClick = (project: Project) => {
    //   setCurrentProject(project); // Set the project to edit
    //   setOpenDialog(true); // Open the dialog
    // }
  return (
    <>
      <Card
        sx={{ 
          backgroundColor: 'white', 
          borderRadius: 2, 
          boxShadow: 3, 
          overflow: 'hidden', 
          transition: 'transform 0.3s', 
          '&:hover': {
            transform: 'scale(1.05)',
          },
          position: 'relative', 
          padding: 2,
        }}
      >
        {/* Optional: Image Section */}
        {/* <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        /> */}
        {/* {pathname === '/Projects' ? 
          <IconButton sx={{
              position: 'absolute', 
              top: 8, 
              right: 8, 
              backgroundColor: 'white', 
              zIndex: 10,
              '&:hover': { backgroundColor: 'gray.100' } 
            }}
            onClick={handleOpenEditDialog}
            size="small"
          >
            <EditIcon sx={{ fontSize: 20 }}/>
          </IconButton>
        : null} */}
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
                sx={{ color: 'primary.dark', '&:hover': { textDecoration: 'underline' } }}
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
      <Dialog open={openEditDialog} onClose={handleCancelCloseDialog}>
      <ProjectDialog
          project={currentProject}
          alertMessage = {alertMessage}
          addProjectSuccessful = {addProjectSuccessful}
          addProjectFailure = {addProjectFailure}
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
          handleClickEditProject = {handleClickEditProject}
          handleClickDeleteProject={handleClickDeleteProject}
          handleCloseDialog={handleCloseDialog}
          // setAddProjectSuccessful = {setAddProjectSuccessful}
          // setAddProjectFailure = {setAddProjectFailure}
          setCurrentProject = {setCurrentProject}
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
      </Dialog>
    </>
  );
};

export default ProjectCard;