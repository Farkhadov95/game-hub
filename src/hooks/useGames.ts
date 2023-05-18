import React, { useEffect, useState } from 'react'
import api from '../services/api';
import { CanceledError } from 'axios';

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
  
  interface FetchGames {
    count: number;
    next: string;
    previous: string;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
        
      api
        .get<FetchGames>("/games", {signal: controller.signal})
        .then((res) => {
          setGames(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
          setError(err.message);
            setIsLoading(false);
        });

        return () => {
            controller.abort()
        }
    }, []);

  return { games, error, isLoading }
}

export default useGames