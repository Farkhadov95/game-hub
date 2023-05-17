import React, { useEffect, useState } from 'react'
import api from '../services/api';
import { CanceledError } from 'axios';

interface ResultGame {
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
    platforms: [{}];
  }
  
  interface FetchGames {
    count: number;
    next: string;
    previous: string;
    results: ResultGame[];
  }

const useGames = () => {
    const [games, setGames] = useState<ResultGame[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
    const controller = new AbortController();
        
      api
        .get<FetchGames>("/games", {signal: controller.signal})
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
          setError(err.message);
        });

        return () => {
            controller.abort()
        }
    }, []);

  return { games, error }
}

export default useGames