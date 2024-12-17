import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}
function useGames(gameQuery: GameQuery) {
    return useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id, 
            platform: gameQuery.platform?.id 
        }
    }, [gameQuery]
    );
}

export default useGames