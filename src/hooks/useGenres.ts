import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import ApiClient from "../services/api";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1 day"),
    initialData: genres, 
});

export default useGenres;
