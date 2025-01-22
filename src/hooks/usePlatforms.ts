import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES, CACHE_KEY_PLATFORMS } from "../constants";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
function usePlatforms() {
    // return { data: platforms, isLoading: false, error: null };

    return useQuery({
            queryKey: CACHE_KEY_PLATFORMS,
            queryFn: () => 
                apiClient
                    .get<FetchResponse<Platform>>('/platforms')
                    .then(res => res.data),
            staleTime: 24 * 60 * 60 * 1000, //24 timer
            initialData: { count: platforms.length, results: platforms }
        });
}

export default usePlatforms