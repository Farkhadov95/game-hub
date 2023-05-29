import { useQuery } from "@tanstack/react-query";
import ApiCli, { FetchResponse } from "../services/api";
import genres from "../data/genres";
import ApiClient from "../services/api";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    initialData: {count: genres.length, results: genres}, 
});

export default useGenres;
