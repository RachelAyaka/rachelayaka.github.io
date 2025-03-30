'use server'
import HTTPMethods from "@/constants/HTTPMethods";
import { Project } from "@/types";

import apiFetch from "./apiFetch";

export default async function getProjects(): Promise<Project[]> {
    const response = await apiFetch(HTTPMethods.GET, '/projects/');
    if (!response.ok) {
        throw new Error(
            `Network response failure. Response code: ${response.status} ${response.statusText}`
        )
    }
    const data: Project[] = await response.json()
    return data
};