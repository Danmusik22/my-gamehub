import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

function useGenres() {
    return useQuery({
        queryKey: CACHE_KEY_GENRES,
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: genres
    });
}

export default useGenres