import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
    gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
    const platform = usePlatform(gameQuery.platformId)
    const genre = useGenre(gameQuery.genreId)

    const heading = `${platform?.name|| ""} ${
        genre?.name || ""
    } Games`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
        </Heading>
    );
}

export default GameHeading;
