'use server';

import HTTPMethods from '@/constants/HTTPMethods';
import apiFetch from './apiFetch';

interface PostProjectResponse {
  ok: boolean;
  data:
    | string[]
    | {
        title?: string;
        description?: string;
        technologies?: string[];
        featured?: string;
      };
}
interface projectInfoType {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
export default async function postProject(
  projectInfo: projectInfoType
): Promise<PostProjectResponse> {
  const payload = JSON.stringify(projectInfo);

  const response = await apiFetch(HTTPMethods.POST, '/projects/', payload);

  const data = await response.json();

  return {
    ok: response.ok,
    data,
  };
}
