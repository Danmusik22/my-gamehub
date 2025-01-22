import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { CACHE_KEY_GENRES } from "../constants";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

function useGenres() {
    // return {data: genres, isLoading: false, error: null}

    return useQuery({
        queryKey: CACHE_KEY_GENRES,
        queryFn: () => 
            apiClient
                .get<FetchResponse<Genre>>('/genres')
                .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 timer
        initialData: { count: genres.length, results: genres }
    });
}

export default useGenres