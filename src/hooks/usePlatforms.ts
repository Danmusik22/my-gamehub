import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>('/platforms');

function usePlatforms() {

    return useQuery({
            queryKey: CACHE_KEY_PLATFORMS,
            queryFn: apiClient.getAll,
            staleTime: ms("24h"),
            initialData: platforms
        });
}

export default usePlatforms