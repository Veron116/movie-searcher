import React from 'react';

export interface IMovie {
    id: number;
    title: string;
    imdb_id: string;
    overview: string;
    genres: Array<string>;
    revenue: number;
    duration: number;
    likes: number;
    vote_average: number;
    vote_count: number;
    director: string;
    poster_path: string;
    release_date: string;
}
