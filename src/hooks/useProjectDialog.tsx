import React, { Dispatch, SetStateAction, useState } from 'react';

import IDLE_FIELD_STATUS from '@/constants/IdleFieldStatus';
import Status from '@/constants/Status';
import deleteProject from '@/services/deleteProject';
import patchProject from '@/services/patchProject';
import postProject from '@/services/postProject';
import { type FieldStatus } from '@/types/FieldStatus';

interface ProjectDialog {
  alertMessage: string;
  addProjectSuccessful: boolean;
  addProjectFailure: boolean;
  editProjectSuccessful: boolean;
  editProjectFailure: boolean;
  deleteProjectSuccessful: boolean;
  openAddDialog: boolean;
  openEditDialog: boolean;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
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
  handleOpenAddDialog: () => void;
  handleOpenEditDialog: () => void;
  handleCancelCloseDialog: (arg0: string) => void;
  handleCloseDialog: () => void;
  setAlertMessage: Dispatch<SetStateAction<string>>;
  setAddProjectSuccessful: Dispatch<SetStateAction<boolean>>;
  setAddProjectFailure: Dispatch<SetStateAction<boolean>>;
  setEditProjectSuccessful: Dispatch<SetStateAction<boolean>>;
  setEditProjectFailure: Dispatch<SetStateAction<boolean>>;
  setDeleteProjectSuccessful: Dispatch<SetStateAction<boolean>>;
  setOpenAddDialog: Dispatch<SetStateAction<boolean>>;
  setOpenEditDialog: Dispatch<SetStateAction<boolean>>;
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

function useProjectDialog(): ProjectDialog {
  const [alertMessage, setAlertMessage] = useState('');
  const [addProjectSuccessful, setAddProjectSuccessful] = useState(false);
  const [addProjectFailure, setAddProjectFailure] = useState(false);
  const [editProjectSuccessful, setEditProjectSuccessful] = useState(false);
  const [editProjectFailure, setEditProjectFailure] = useState(false);
  const [deleteProjectSuccessful, setDeleteProjectSuccessful] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [featured, setFeatured] = useState(false);

  const [titleStatus, setTitleStatus] =
    useState<FieldStatus>(IDLE_FIELD_STATUS);
  const [descriptionStatus, setDescriptionStatus] =
    useState<FieldStatus>(IDLE_FIELD_STATUS);
  const [technologiesStatus, setTechnologiesStatus] =
    useState<FieldStatus>(IDLE_FIELD_STATUS);
  const [imageUrlStatus, setImageUrlStatus] =
    useState<FieldStatus>(IDLE_FIELD_STATUS);
  const [demoUrlStatus, setDemoUrlStatus] =
    useState<FieldStatus>(IDLE_FIELD_STATUS);
  const [githubUrlStatus, setGithubUrlStatus] =
    useState<FieldStatus>(IDLE_FIELD_STATUS);
  const [featuredStatus, setFeaturedStatus] =
    useState<FieldStatus>(IDLE_FIELD_STATUS);

  const titleHasError = (): boolean => {
    return titleStatus.status === Status.ERROR;
  };
  const descriptionHasError = (): boolean => {
    return descriptionStatus.status === Status.ERROR;
  };
  const technologiesHasError = (): boolean => {
    return technologiesStatus.status === Status.ERROR;
  };
  const imageUrlHasError = (): boolean => {
    return imageUrlStatus.status === Status.ERROR;
  };
  const demoUrlHasError = (): boolean => {
    return demoUrlStatus.status === Status.ERROR;
  };
  const githubUrlHasError = (): boolean => {
    return githubUrlStatus.status === Status.ERROR;
  };
  const featuredHasError = (): boolean => {
    return featuredStatus.status === Status.ERROR;
  };

  const resetFieldStatus = (
    setStatus: React.Dispatch<
      React.SetStateAction<{ status: Status; errorMessage: string }>
    >
  ): void => {
    setStatus(IDLE_FIELD_STATUS);
  };

  const handleTitleFieldChange = (): void => {
    resetFieldStatus(setTitleStatus);
  };
  const handleDescriptionFieldChange = (): void => {
    resetFieldStatus(setDescriptionStatus);
  };
  const handleTechnologiesFieldChange = (): void => {
    resetFieldStatus(setTechnologiesStatus);
  };
  const handleImageUrlFieldChange = (): void => {
    resetFieldStatus(setImageUrlStatus);
  };
  const handleDemoUrlFieldChange = (): void => {
    resetFieldStatus(setDemoUrlStatus);
  };
  const handleGithubUrlFieldChange = (): void => {
    resetFieldStatus(setGithubUrlStatus);
  };
  const handleFeaturedFieldChange = (): void => {
    resetFieldStatus(setFeaturedStatus);
  };

  const handleOpenAddDialog = (): void => {
    setOpenAddDialog(true);
  };
  const handleOpenEditDialog = (): void => {
    setOpenEditDialog(true);
  };

  const handleCancelCloseDialog = (reason: string): void => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') return;
    setOpenAddDialog(false);
    setOpenEditDialog(false);
  };

  const handleCloseDialog = (): void => {
    setOpenAddDialog(false);
    setOpenEditDialog(false);
  };

  const isCreateProjectFormMissingField = (): boolean => {
    let emptyFieldExists = false;
    if (!title) {
      setTitleStatus({
        status: Status.ERROR,
        errorMessage: 'The Title field is required.',
      });
      emptyFieldExists = true;
    }
    if (!description) {
      setDescriptionStatus({
        status: Status.ERROR,
        errorMessage: 'The Description field is required.',
      });
      emptyFieldExists = true;
    }
    if (technologies.length == 0) {
      setTechnologiesStatus({
        status: Status.ERROR,
        errorMessage: 'The Technologies field is required.',
      });
      emptyFieldExists = true;
    }
    return emptyFieldExists;
  };

  const handleClickCreateProject = async (): Promise<boolean> => {
    if (isCreateProjectFormMissingField()) {
      return false;
    }

    const newProject = {
      title: title,
      description: description,
      technologies: technologies,
      featured: featured,
    };

    const response = await postProject(newProject);

    if (!response.ok) {
      const data = response.data;
      let error = '';
      if (Array.isArray(data)) {
        if (data.length < 1) {
          error = 'The data array is empty.';
        } else {
          error = data[0];
          console.log('Fix: Data array has error.');
        }
      } else if (data.title) {
        if (data.title.length < 1) {
          error = 'The Title field is invalid';
        } else {
          setTitleStatus({
            status: Status.ERROR,
            errorMessage: data.title[0],
          });
        }
      } else if (data.description) {
        if (data.description.length < 1) {
          error = 'The Description field is invalid';
        } else {
          setDescriptionStatus({
            status: Status.ERROR,
            errorMessage: data.description[0],
          });
        }
      } else if (data.technologies) {
        if (data.technologies.length < 1) {
          error = 'The Technologies field is invalid';
        } else {
          setTechnologiesStatus({
            status: Status.ERROR,
            errorMessage: data.technologies[0],
          });
        }
      } else if (data.featured) {
        if (data.featured) {
          error = 'The Featured field is invalid';
        } else {
          setFeaturedStatus({
            status: Status.ERROR,
            errorMessage: data.featured[0],
          });
        }
      } else {
        error = 'Sign up is invalid';
      }

      setAlertMessage(error);
      setAddProjectFailure(true);
      return false;
    }
    setOpenAddDialog(false);
    setAddProjectSuccessful(true);
    return true;
  };

  const handleClickEditProject = async (): Promise<boolean> => {
    if (isCreateProjectFormMissingField()) {
      return false;
    }

    const newProject = {
      title: title,
      description: description,
      technologies: technologies,
      featured: featured,
    };

    const response = await patchProject(newProject);

    if (!response.ok) {
      const data = response.data;
      let error = '';
      if (Array.isArray(data)) {
        if (data.length < 1) {
          error = 'The data array is empty.';
        } else {
          error = data[0];
          console.log('Fix: Data array has error.');
        }
      } else if (data.title) {
        if (data.title.length < 1) {
          error = 'The Title field is invalid';
        } else {
          setTitleStatus({
            status: Status.ERROR,
            errorMessage: data.title[0],
          });
        }
      } else if (data.description) {
        if (data.description.length < 1) {
          error = 'The Description field is invalid';
        } else {
          setDescriptionStatus({
            status: Status.ERROR,
            errorMessage: data.description[0],
          });
        }
      } else if (data.technologies) {
        if (data.technologies.length < 1) {
          error = 'The Technologies field is invalid';
        } else {
          setTechnologiesStatus({
            status: Status.ERROR,
            errorMessage: data.technologies[0],
          });
        }
      } else if (data.featured) {
        if (data.featured) {
          error = 'The Featured field is invalid';
        } else {
          setFeaturedStatus({
            status: Status.ERROR,
            errorMessage: data.featured[0],
          });
        }
      } else {
        error = 'Sign up is invalid';
      }

      setAlertMessage(error);
      setEditProjectFailure(true);
      return false;
    }
    setOpenEditDialog(false);
    setEditProjectSuccessful(true);
    return true;
  };

  const handleClickDeleteProject = async (id: number): Promise<boolean> => {
    if (await deleteProject(id)) {
      setOpenEditDialog(false);
    }
    return true;
  };

  return {
    alertMessage,
    addProjectSuccessful,
    addProjectFailure,
    editProjectSuccessful,
    editProjectFailure,
    deleteProjectSuccessful,
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
    handleOpenAddDialog,
    handleOpenEditDialog,
    handleCancelCloseDialog,
    handleCloseDialog,
    setAlertMessage,
    setAddProjectSuccessful,
    setAddProjectFailure,
    setEditProjectSuccessful,
    setEditProjectFailure,
    setDeleteProjectSuccessful,
    setOpenAddDialog,
    setOpenEditDialog,
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
  };
}

export default useProjectDialog;
