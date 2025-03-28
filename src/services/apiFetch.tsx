import HTTPMethods from "@/constants/HTTPMethods";

type Method = (typeof HTTPMethods)[keyof typeof HTTPMethods]

async function apiFetch(
    method: Method,
    endpoint: string,
    body?: string,
): Promise<Response> {
    const response = await fetch (
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        {   
            body, 
            method,
            headers: {
                'Content-Type': 'application/json',
              },
        },
        
    )
    return response
}

export default apiFetch