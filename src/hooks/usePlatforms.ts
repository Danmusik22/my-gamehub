import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
function usePlatforms() {
    return {data: platforms, isLoading: false, error: null};
}

export default usePlatforms