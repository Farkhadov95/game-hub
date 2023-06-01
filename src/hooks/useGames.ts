import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import ApiClient, { FetchResponse } from '../services/api';
import { GameQuery } from '../App';

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: {};
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: {};
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: {};
  parent_platforms: {platform: Platform}[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: ({pageParam = 1}) => apiClient.getAll({
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam,
    }
  }), 
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length +  1 : undefined;
  },
});

export default useGames