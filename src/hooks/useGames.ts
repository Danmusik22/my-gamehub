import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
}

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
    pageSize: number;
}

const apiClient = new APIClient<Game>('/games');

function useGames(gameQuery: GameQuery) {


    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam = 1}) => apiClient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam,
            }
        }),
        
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length +1 : undefined
        },
        staleTime: ms("24h"),
    })
}

export default useGames
