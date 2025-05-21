'use client';
import React, { Dispatch, JSX, SetStateAction, useState } from 'react';

import {
  Box,
  Card,
  CardContent,
  Chip,
  Dialog,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
  Skeleton,
} from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';

import { FieldStatus } from '@/types/FieldStatus';
import ProjectDialog from './ProjectDialog';
import { Project } from '../types';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  pathname: string;
  alertMessage: string;
  addProjectSuccessful: boolean;
  addProjectFailure: boolean;
  openEditDialog: boolean;
  titleStatus: FieldStatus;
  descriptionStatus: FieldStatus;
  technologiesStatus: FieldStatus;
  imageUrlStatus: FieldStatus;
  demoUrlStatus: FieldStatus;
  githubUrlStatus: FieldStatus;
  featuredStatus: FieldStatus;
  handleTitleFieldChange: () => void;
  handleDescriptionFieldChange: () => void;
  handleTechnologiesFieldChange: () => void;
  handleImageUrlFieldChange: () => void;
  handleDemoUrlFieldChange: () => void;
  handleGithubUrlFieldChange: () => void;
  handleFeaturedFieldChange: () => void;
  handleClickCreateProject: () => Promise<boolean>;
  handleClickEditProject: () => Promise<boolean>;
  handleClickDeleteProject: (arg0: number) => Promise<boolean>;
  handleCloseDialog: () => void;
  handleOpenEditDialog: () => void;
  handleCancelCloseDialog: (arg0: string) => void;
  setAddProjectSuccessful: Dispatch<SetStateAction<boolean>>;
  setAddProjectFailure: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setTechnologies: Dispatch<SetStateAction<string[]>>;
  setImageUrl: Dispatch<SetStateAction<string>>;
  setDemoUrl: Dispatch<SetStateAction<string>>;
  setGithubUrl: Dispatch<SetStateAction<string>>;
  setFeatured: Dispatch<SetStateAction<boolean>>;
  titleHasError: () => boolean;
  descriptionHasError: () => boolean;
  technologiesHasError: () => boolean;
  imageUrlHasError: () => boolean;
  demoUrlHasError: () => boolean;
  githubUrlHasError: () => boolean;
  featuredHasError: () => boolean;
}

function ProjectCard({
  project,
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
  const [currentProject, setCurrentProject] = useState<Project>(project);
  const [imageLoaded, setImageLoaded] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Responsive dimensions based on screen size
  const CARD_HEIGHT = isMobile ? 'auto' : 480; // Auto height on mobile, fixed on desktop
  const IMAGE_HEIGHT = 200; // Fixed image height
  const CONTENT_HEIGHT = isMobile
    ? 'auto'
    : CARD_HEIGHT === 'auto'
      ? 'auto'
      : CARD_HEIGHT - IMAGE_HEIGHT;

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          height: CARD_HEIGHT,
          width: '100%',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: isMobile ? 'none' : 'translateY(-8px)',
            boxShadow: isMobile ? theme.shadows[3] : theme.shadows[8],
          },
          position: 'relative', // For potential loading states
        }}
      >
        {/* Image Section with fixed dimensions */}
        <Box sx={{ width: '100%', height: IMAGE_HEIGHT, position: 'relative' }}>
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
              sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            />
          )}
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s',
              display: 'block',
            }}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = '/images/alphaFiber.png'; // fallback
              setImageLoaded(true);
            }}
          />
          {project.imageUrl == '/images/takuto.png' ? (
            <Box
              sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                padding: '4px 8px',
                fontSize: '10px',
                borderRadius: '5px',
                maxWidth: '80%',
              }}
            >
              Signed a NDA so here&apos;s a picture of my grandma&apos;s dog
            </Box>
          ) : null}
        </Box>

        {/* Content Section with fixed height */}
        <CardContent
          sx={{
            height: CONTENT_HEIGHT,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            p: isMobile ? 2 : 3, // Smaller padding on mobile
            '&:last-child': { paddingBottom: isMobile ? 2 : 3 }, // Override MUI's default padding
          }}
        >
          {/* Title with fixed height */}
          <Typography
            variant={isMobile ? 'subtitle1' : 'h6'}
            component="h3"
            sx={{
              fontWeight: 'bold',
              mb: 1,
              whiteSpace: 'normal', // allow wrapping
              wordBreak: 'break-word', // handle long words
            }}
          >
            {project.title}
          </Typography>

          {/* Description with fixed height */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              whiteSpace: 'pre-wrap', // Allows line breaks and preserves spacing
              wordBreak: 'break-word', // Break long words if needed
            }}
          >
            {project.description}
          </Typography>

          {/* Technologies section with fixed height and scroll */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mb: 2,
              height: isMobile ? 'auto' : '60px',
              maxHeight: '80px',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: '#f1f1f1',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#555',
              },
            }}
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: 'gray.200',
                  color: 'text.primary',
                  margin: '2px',
                  fontSize: isMobile ? '0.625rem' : '0.75rem',
                }}
              />
            ))}
          </Box>

          {/* Links section - at the bottom */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 'auto',
              pt: isMobile ? 1 : 2,
            }}
          >
            {
              project.demoUrl ? (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'primary.dark',
                    '&:hover': { textDecoration: 'underline' },
                    fontSize: isMobile ? '0.8rem' : '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo
                </Link>
              ) : (
                <Box />
              ) /* Empty box for spacing when no demo link */
            }
            {
              project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { textDecoration: 'underline' },
                    fontSize: isMobile ? '0.8rem' : '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  GitHub
                </Link>
              ) : (
                <Box />
              ) /* Empty box for spacing when no GitHub link */
            }
          </Box>
        </CardContent>
      </Card>
      <Dialog open={openEditDialog} onClose={handleCancelCloseDialog}>
        <ProjectDialog
          project={currentProject}
          alertMessage={alertMessage}
          addProjectSuccessful={addProjectSuccessful}
          addProjectFailure={addProjectFailure}
          titleStatus={titleStatus}
          descriptionStatus={descriptionStatus}
          technologiesStatus={technologiesStatus}
          imageUrlStatus={imageUrlStatus}
          demoUrlStatus={demoUrlStatus}
          githubUrlStatus={githubUrlStatus}
          featuredStatus={featuredStatus}
          handleTitleFieldChange={handleTitleFieldChange}
          handleDescriptionFieldChange={handleDescriptionFieldChange}
          handleTechnologiesFieldChange={handleTechnologiesFieldChange}
          handleImageUrlFieldChange={handleImageUrlFieldChange}
          handleDemoUrlFieldChange={handleDemoUrlFieldChange}
          handleGithubUrlFieldChange={handleGithubUrlFieldChange}
          handleFeaturedFieldChange={handleFeaturedFieldChange}
          handleClickCreateProject={handleClickCreateProject}
          handleClickEditProject={handleClickEditProject}
          handleClickDeleteProject={handleClickDeleteProject}
          handleCloseDialog={handleCloseDialog}
          // setAddProjectSuccessful = {setAddProjectSuccessful}
          // setAddProjectFailure = {setAddProjectFailure}
          setCurrentProject={setCurrentProject}
          setTitle={setTitle}
          setDescription={setDescription}
          setTechnologies={setTechnologies}
          setImageUrl={setImageUrl}
          setDemoUrl={setDemoUrl}
          setGithubUrl={setGithubUrl}
          setFeatured={setFeatured}
          titleHasError={titleHasError}
          descriptionHasError={descriptionHasError}
          technologiesHasError={technologiesHasError}
          imageUrlHasError={imageUrlHasError}
          demoUrlHasError={demoUrlHasError}
          githubUrlHasError={githubUrlHasError}
          featuredHasError={featuredHasError}
        />
      </Dialog>
    </>
  );
}

export default ProjectCard;
