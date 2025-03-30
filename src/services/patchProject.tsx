'use server'

import HTTPMethods from "@/constants/HTTPMethods"
import apiFetch from "./apiFetch"

interface PatchProjectResponse {
    ok: boolean
    data: string[] | 
        {title?: string
        description?: string
        technologies?: string[]
        featured?: string}
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
export default async function patchProject(projectInfo: projectInfoType): Promise<PatchProjectResponse> {
    const payload = JSON.stringify(projectInfo)

    const response = await apiFetch(HTTPMethods.PATCH, '/projects/', payload)

    const data = await response.json()

    return {
        ok: response.ok,
        data,
    }
}