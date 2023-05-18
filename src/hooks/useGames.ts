import useData from './useData';

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
    platforms: {platform: Platform}[];
  }

export interface Platform {
id: number;
name: string;
slug: string;
image_background: string;
}

const useGames = () => useData<Game>("/games");

export default useGames