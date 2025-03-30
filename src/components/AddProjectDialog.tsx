import { ChangeEvent, Dispatch, JSX, SetStateAction, useState } from "react"
import { Button, Chip, DialogActions, DialogContent, DialogTitle, InputAdornment, MenuItem, Stack, TextField, useTheme } from "@mui/material";

import { FieldStatus } from "@/types"
import { Project } from "@/types"

interface Props {
    project: Project
    alertMessage: string
    addProjectSuccessful: boolean
    addProjectFailure: boolean
    title: string
    description: string
    technologies: string[]
    imageUrl: string
    demoUrl: string
    githubUrl: string
    featured: boolean
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
    handleCloseDialog: () => void
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

function AddProjectDialog({
    project,
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
    handleCloseDialog,
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
    featuredHasError,}: Props): JSX.Element {
    const theme = useTheme()

    const [inputValue, setInputValue] = useState<string>('')
    const [isFocused, setIsFocused] = useState(false)

    const handleAddChip = () => {
        const newTech = inputValue.trim();
        if (newTech && !technologies.includes(newTech)) {
            setTechnologies([...technologies, newTech]);
            setInputValue('');
        }
    }

    const handleDeleteChip = (chipToDelete: string) => {
        setTechnologies(project.technologies.filter(tech => tech !== chipToDelete));
    }
    return (
        <>
            <form onSubmit={async (event) => {
                event.preventDefault()
                await handleClickCreateProject()
            }}> 
                <DialogTitle>Add a Project</DialogTitle>
                <DialogContent>
                <TextField
                    label="Title"
                    required
                    name="title"
                    value={title}
                    error={titleHasError()}
                    helperText={titleHasError() && titleStatus.errorMessage}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleTitleFieldChange()
                        setTitle(event.target.value)
                    }}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    required
                    name="description"
                    value={description}
                    error={descriptionHasError()}
                    helperText={descriptionHasError() && descriptionStatus.errorMessage}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleDescriptionFieldChange()
                        setDescription(event.target.value)
                    }}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Technologies (possibly multiple)"
                    required={technologies.length === 0 && inputValue.trim() === ''}
                    name="technologies"
                    value={inputValue}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleTechnologiesFieldChange()
                        setInputValue(event.target.value)
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
                    helperText={technologiesHasError() && technologiesStatus.errorMessage}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Stack direction="row" spacing={1} mt={2}>
                                        {technologies.map((tech, index) => (
                                            <Chip
                                                key={index}
                                                label={tech}
                                                onDelete={() => handleDeleteChip(tech)}
                                            />
                                        ))}
                                    </Stack>
                                </InputAdornment>
                            )
                        },
                        inputLabel: {
                            shrink: inputValue.length>0 || technologies.length>0 || isFocused, 
                        }
                    }}
                />
                
                <TextField
                    label="Image URL"
                    name="imageUrl"
                    value={imageUrl || ''}
                    error={imageUrlHasError()}
                    helperText={imageUrlHasError() && imageUrlStatus.errorMessage}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleImageUrlFieldChange()
                        setImageUrl(event.target.value)
                    }}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Demo URL"
                    name="demoUrl"
                    value={demoUrl || ''}
                    error={demoUrlHasError()}
                    helperText={demoUrlHasError() && demoUrlStatus.errorMessage}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleDemoUrlFieldChange()
                        setDemoUrl(event.target.value)
                    }}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="GitHub URL"
                    name="githubUrl"
                    value={githubUrl || ''}
                    error={githubUrlHasError()}
                    helperText={githubUrlHasError() && githubUrlStatus.errorMessage}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleGithubUrlFieldChange()
                        setGithubUrl(event.target.value)
                    }}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Featured"
                    required
                    select
                    value={featured? 'Yes': 'No'}
                    error={featuredHasError()}
                    helperText={featuredHasError() && featuredStatus.errorMessage}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        handleFeaturedFieldChange()
                        setFeatured(event.target.value === 'Yes')
                    }}
                    fullWidth
                >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} sx={{color: theme.palette.primary.dark}}>Cancel</Button>
                    <Button type="submit" variant="contained" sx={{color: theme.palette.primary.dark, background: theme.palette.secondary.main}}>Create</Button>
                </DialogActions>
            </form>
        </>
    )
}

export default AddProjectDialog