'use server'
import { Project } from "@/types";
import apiFetch from "./apiFetch";
import HTTPMethods from "@/constants/HTTPMethods";

export default async function getProjects(): Promise<Project[]> {
    const response = await apiFetch(HTTPMethods.GET, '/projects/');
    console.log(response)
    if (!response.ok) {
        throw new Error(
            `Network response failure. Response code: ${response.status} ${response.statusText}`
        )
    }
    const data: Project[] = await response.json()
    return data
};