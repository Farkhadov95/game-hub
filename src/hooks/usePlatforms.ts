import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "./useData";
import apiClient from "../services/api";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    initialData: {count: platforms.length, results: platforms},
});

export default usePlatforms;
