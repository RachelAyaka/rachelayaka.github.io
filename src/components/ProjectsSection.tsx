'use client';
import { JSX } from 'react';
import { usePathname } from 'next/navigation';

import {
  Alert,
  Box,
  Container,
  Grid2,
  Snackbar,
  Typography,
} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add'

import { projects } from '@/assets/data/projects';
import useProjectDialog from '@/hooks';
// import getProjects from '@/services/getProjects';
// import { type Project } from '@/types';

import DialogContainer from './DialogContainer';
import ProjectCard from './ProjectCard';
import AddProjectDialog from './AddProjectDialog';

function ProjectsSection(): JSX.Element {
  // const [projects, setProjects] = useState<Project[]>();
  // const [loading, setLoading] = useState<boolean>(true);
  const {
    alertMessage,
    addProjectSuccessful,
    addProjectFailure,
    openAddDialog,
    openEditDialog,
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
    handleClickEditProject,
    handleClickDeleteProject,
    // handleOpenAddDialog,
    handleOpenEditDialog,
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
  } = useProjectDialog();
  const pathname = usePathname();

  // useEffect(() => {
  //   const loadProjects = async () => {
  //     try {
  //       setLoading(true);
  //       const projectsData = await getProjects();
  //       setProjects(projectsData);
  //     } catch (error) {
  //       console.error('Failed to load projects:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadProjects();
  // }, []);

  return (
    <section
      id="projects"
      className="project-section"
      style={{
        backgroundColor: '#F8F1E1',
        padding: '5rem 0',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Snackbar
        open={addProjectSuccessful}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        onClose={() => {
          setAddProjectSuccessful(false);
        }}
        sx={{ mt: '3.5rem' }}
      >
        <Alert severity="success">Successfully added a project.</Alert>
      </Snackbar>
      <Snackbar
        open={addProjectFailure}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        onClose={() => {
          setAddProjectFailure(false);
        }}
        sx={{ mt: '3.5rem' }}
      >
        <Alert severity="error">{alertMessage} Please try again.</Alert>
      </Snackbar>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center">
          My Projects
        </Typography>
        {/* <Box display="flex" justifyContent="center" mb={4}>
          <Box display="inline-flex" borderRadius="8px" boxShadow={2}>
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'contained' : 'outlined'}
              sx={{ borderRadius: '8px 0 0 8px', px: 4, py: 2, color: filter === 'all' ? 'primary' : 'default' }}
            >
              Programming Projects
            </Button>
            <Button
              onClick={() => setFilter('featured')}
              variant={filter === 'featured' ? 'contained' : 'outlined'}
              sx={{ borderRadius: '0 8px 8px 0', px: 4, py: 2, color: filter === 'featured' ? 'primary' : 'default'}}
            >
              Featured
            </Button>
          </Box>
        </Box> */}

        <Box sx={{ textAlign: 'center', py: 10 }}>
          {/* {loading ? (
            <Box>
              <CircularProgress size={48} sx={{ color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>Loading projects...</Typography>
            </Box> ) :*/}
          {projects.length === 0 ? (
            <Box>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                No projects yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I&apos;m currently working on some exciting projects. Check back
                soon!!!
              </Typography>
            </Box>
          ) : (
            <Grid2 container spacing={4}>
              {projects.map((project) => (
                <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
                  <ProjectCard
                    key={project.id}
                    project={project}
                    pathname={pathname}
                    alertMessage={alertMessage}
                    addProjectSuccessful={addProjectSuccessful}
                    addProjectFailure={addProjectFailure}
                    openEditDialog={openEditDialog}
                    titleStatus={titleStatus}
                    descriptionStatus={descriptionStatus}
                    technologiesStatus={technologiesStatus}
                    imageUrlStatus={imageUrlStatus}
                    demoUrlStatus={demoUrlStatus}
                    githubUrlStatus={githubUrlStatus}
                    featuredStatus={featuredStatus}
                    handleTitleFieldChange={handleTitleFieldChange}
                    handleDescriptionFieldChange={handleDescriptionFieldChange}
                    handleTechnologiesFieldChange={
                      handleTechnologiesFieldChange
                    }
                    handleImageUrlFieldChange={handleImageUrlFieldChange}
                    handleDemoUrlFieldChange={handleDemoUrlFieldChange}
                    handleGithubUrlFieldChange={handleGithubUrlFieldChange}
                    handleFeaturedFieldChange={handleFeaturedFieldChange}
                    handleClickCreateProject={handleClickCreateProject}
                    handleClickEditProject={handleClickEditProject}
                    handleClickDeleteProject={handleClickDeleteProject}
                    handleOpenEditDialog={handleOpenEditDialog}
                    handleCloseDialog={handleCloseDialog}
                    handleCancelCloseDialog={handleCancelCloseDialog}
                    setAddProjectSuccessful={setAddProjectSuccessful}
                    setAddProjectFailure={setAddProjectFailure}
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
                </Grid2>
              ))}
            </Grid2>
          )}
        </Box>
      </Container>
      <DialogContainer open={openAddDialog} onClose={handleCancelCloseDialog}>
        <Box>
          <AddProjectDialog
            project={{
              id: 0,
              title: '',
              description: '',
              imageUrl: '',
              technologies: [],
              featured: false,
            }}
            alertMessage={alertMessage}
            addProjectSuccessful={addProjectSuccessful}
            addProjectFailure={addProjectFailure}
            title={title}
            description={description}
            technologies={technologies}
            imageUrl={imageUrl}
            demoUrl={demoUrl}
            githubUrl={githubUrl}
            featured={featured}
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
            handleCloseDialog={handleCloseDialog}
            // setAddProjectSuccessful = {setAddProjectSuccessful}
            // setAddProjectFailure = {setAddProjectFailure}
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
        </Box>
      </DialogContainer>
      {/* {pathname==='/Projects' ?
        <Box sx={{ position: 'absolute', bottom: 0,
          right: 0, textAlign: 'right', py: 2,
          pr: 2,}}>
          <IconButton
            sx={{
              align: 'right', 
              '&:hover': { backgroundColor: 'gray.100' } 
            }}
            onClick={handleOpenAddDialog}
          >
            <AddIcon/>
            <Typography>Add new project to display</Typography>
          </IconButton>
        </Box>
      : null} */}
    </section>
  );
}

export default ProjectsSection;
