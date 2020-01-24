import React from 'react';
import './Movie.css';

export const MovieRenderFunc = (props: any) => {
    const movie = props.movie;
    return (
        <div className='movies__wrap'>
            <div>{movie.id}</div>
            <div>{movie.title}</div>
            <div>{movie.overview}</div>
            <div>{movie.genres}</div>
            <div>{movie.duration} minutes</div>
            <div>{movie.likes}</div>
            <div>{movie.vote_average}</div>
            <div>{movie.vote_count}</div>
            <div>{movie.release_date}</div>
        </div>
    );
};
