'use server';
import HTTPMethods from '@/constants/HTTPMethods';
import apiFetch from './apiFetch';

export default async function deleteProject(id: number): Promise<boolean> {
  const ID = JSON.stringify(id);
  const response = await apiFetch(HTTPMethods.DELETE, `/projects/${ID}/`);
  console.log(response);
  if (!response.ok) {
    throw new Error(
      `Network response failure. Response code: ${response.status} ${response.statusText}`
    );
  }
  return true;
}
