import axios, { AxiosRequestConfig } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const client = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: apiKey
    }
})

class APIClient<T> {
    endPoint: string;

    constructor(endPoint: string) {
        this.endPoint = endPoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return client
            .get<FetchResponse<T>>(this.endPoint, config)
            .then(res => res.data)
    }
}

export default APIClient
