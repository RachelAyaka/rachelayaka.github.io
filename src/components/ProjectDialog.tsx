import { ChangeEvent, Dispatch, JSX, SetStateAction, useState } from 'react';
import {
  Button,
  Chip,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  useTheme,
} from '@mui/material';

import { FieldStatus } from '@/types';
import { Project } from '@/types';

interface Props {
  project: Project;
  alertMessage: string;
  addProjectSuccessful: boolean;
  addProjectFailure: boolean;
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
  setCurrentProject: Dispatch<SetStateAction<Project>>;
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

function ProjectDialog({
  project,
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
  handleCloseDialog,
  setCurrentProject,
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
}: Props): JSX.Element {
  const theme = useTheme();

  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);

  const [curTitle, setCurTitle] = useState(project.title);
  const [curDescription, setCurDescription] = useState(project.description);
  const [curTechnologies, setCurTechnologies] = useState<string[]>(
    project.technologies
  );
  const [curImageUrl, setCurImageUrl] = useState(project.imageUrl);
  const [curDemoUrl, setCurDemoUrl] = useState(project.demoUrl);
  const [curGithubUrl, setCurGithubUrl] = useState(project.githubUrl);
  const [curFeatured, setCurFeatured] = useState(project.featured);

  const handleAddChip = () => {
    const newTech = inputValue.trim();
    if (newTech && !curTechnologies.includes(newTech)) {
      setTechnologies([...curTechnologies, newTech]);
      setCurTechnologies([...curTechnologies, newTech]);
      setInputValue('');
    }
  };

  const handleDeleteChip = (chipToDelete: string) => {
    setTechnologies(curTechnologies.filter((tech) => tech !== chipToDelete));
    setCurTechnologies(curTechnologies.filter((tech) => tech !== chipToDelete));
  };

  const handleEditClick = (project: Project) => {
    setCurrentProject(project);
    handleClickEditProject();
  };

  return (
    <>
      {/* <Snackbar open={addProjectSuccessful} 
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                autoHideDuration={5000}
                onClose={() => {
                    setAddProjectSuccessful(false)
                }}
                sx={{mt:'3.5rem'}}
            >
                <Alert severity="error">Successfully added a project.</Alert>
            </Snackbar>
            <Snackbar open={addProjectFailure} 
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                autoHideDuration={5000}
                onClose={() => {
                    setAddProjectFailure(false)
                }}
                sx={{mt:'3.5rem'}}
            >
                <Alert severity="error">{alertMessage} Please try again.</Alert>
            </Snackbar> */}
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await handleClickCreateProject();
        }}
      >
        <DialogTitle>Edit a Project</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            required
            name="title"
            value={curTitle}
            error={titleHasError()}
            helperText={titleHasError() && titleStatus.errorMessage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleTitleFieldChange();
              setTitle(event.target.value);
              setCurTitle(event.target.value);
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            required
            name="description"
            value={curDescription}
            error={descriptionHasError()}
            helperText={descriptionHasError() && descriptionStatus.errorMessage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleDescriptionFieldChange();
              setDescription(event.target.value);
              setCurDescription(event.target.value);
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Technologies (possibly multiple)"
            required={curTechnologies.length === 0 && inputValue.trim() === ''}
            name="technologies"
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleTechnologiesFieldChange();
              setInputValue(event.target.value);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddChip();
              }
            }}
            fullWidth
            margin="normal"
            error={technologiesHasError()}
            helperText={
              technologiesHasError() && technologiesStatus.errorMessage
            }
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Stack direction="row" spacing={1} mt={2}>
                      {curTechnologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          onDelete={() => handleDeleteChip(tech)}
                        />
                      ))}
                    </Stack>
                  </InputAdornment>
                ),
              },
              inputLabel: {
                shrink:
                  inputValue.length > 0 ||
                  project.technologies.length > 0 ||
                  isFocused,
              },
            }}
          />

          <TextField
            label="Image URL"
            name="imageUrl"
            value={curImageUrl || ''}
            error={imageUrlHasError()}
            helperText={imageUrlHasError() && imageUrlStatus.errorMessage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleImageUrlFieldChange();
              setImageUrl(event.target.value);
              setCurImageUrl(event.target.value);
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Demo URL"
            name="demoUrl"
            value={curDemoUrl || ''}
            error={demoUrlHasError()}
            helperText={demoUrlHasError() && demoUrlStatus.errorMessage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleDemoUrlFieldChange();
              setDemoUrl(event.target.value);
              setCurDemoUrl(event.target.value);
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="GitHub URL"
            name="githubUrl"
            value={curGithubUrl || ''}
            error={githubUrlHasError()}
            helperText={githubUrlHasError() && githubUrlStatus.errorMessage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleGithubUrlFieldChange();
              setGithubUrl(event.target.value);
              setCurGithubUrl(event.target.value);
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Featured"
            required
            select
            value={curFeatured ? 'Yes' : 'No'}
            error={featuredHasError()}
            helperText={featuredHasError() && featuredStatus.errorMessage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              handleFeaturedFieldChange();
              setFeatured(event.target.value === 'Yes');
              setCurFeatured(event.target.value === 'Yes');
            }}
            fullWidth
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            sx={{ color: theme.palette.primary.dark }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleClickDeleteProject(project.id)}
            variant="contained"
            sx={{
              color: theme.palette.primary.dark,
              background: theme.palette.secondary.main,
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => handleEditClick(project)}
            variant="contained"
            sx={{
              color: theme.palette.primary.dark,
              background: theme.palette.secondary.main,
            }}
          >
            Edit
          </Button>
        </DialogActions>
      </form>
    </>
  );
}

export default ProjectDialog;
