'use client'
import React, { ChangeEvent, JSX, useState } from 'react';

import { Project } from '../types';
import { Box, Button, Card, CardContent, Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Link, TextField, Typography, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface ProjectCardProps {
  project: Project
  pathname: string
}

function ProjectCard({ project, pathname }: ProjectCardProps): JSX.Element {
  const theme = useTheme()
  const [openDialog, setOpenDialog] = useState(false)
  const [editedProject, setEditedProject] = useState(project)

  const handleEditClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeleteProject = () => {
    console.log("Project Deleted")
    handleCloseDialog()
  }

  const handleSaveChanges = () => {
    console.log("Project updated:", editedProject);
    handleCloseDialog()
  };

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
        {pathname === '/Projects' ? 
          <IconButton sx={{
              position: 'absolute', 
              top: 8, 
              right: 8, 
              backgroundColor: 'white', 
              zIndex: 10,
              '&:hover': { backgroundColor: 'gray.100' } 
            }}
            onClick={handleEditClick}
            size="small"
          >
            <EditIcon sx={{ fontSize: 20 }}/>
          </IconButton>
        : null}
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
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Project</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={editedProject.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={editedProject.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Technologies (comma separated)"
            name="technologies"
            value={editedProject.technologies.join(', ')}
            onChange={(e) => {
              const newTechnologies = e.target.value.split(',').map((tech) => tech.trim());
              setEditedProject((prevState) => ({
                ...prevState,
                technologies: newTechnologies,
              }));
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="imageUrl"
            value={editedProject.imageUrl}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Demo URL"
            name="demoUrl"
            value={editedProject.demoUrl || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="GitHub URL"
            name="githubUrl"
            value={editedProject.githubUrl || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Featured"
            name="featured"
            value={editedProject.featured ? 'Yes' : 'No'}
            onChange={(e) => {
              setEditedProject((prevState) => ({
                ...prevState,
                featured: e.target.value === 'Yes',
              }));
            }}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{color: theme.palette.primary.main}}>Cancel</Button>
          <Button onClick={handleDeleteProject} sx={{color: theme.palette.error.light}}>Delete</Button>
          <Button onClick={handleSaveChanges} sx={{color: theme.palette.primary.dark}}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectCard;