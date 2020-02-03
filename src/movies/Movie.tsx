import React from 'react';
import './Movie.css';
import { AddToFavorite } from './AddToFavorite';

export const MovieCardFunc = (props: any) => {
    const movie = props.movie;
    const activeCardId = props.activeCardId;
    return (
        <div className={'movies__wrap' + (movie.id === activeCardId ? ' current-card' : '')}>
            <h3 className='movies__title'>{movie.title}</h3>
            <p className='movies__description'>{movie.overview}</p>
            <p className='movies__genre'>{movie.genres.join(', ')}</p>
            <p className='movies__dur'>{movie.duration} minutes</p>
            <div>{movie.vote_count}</div>
            <div>{movie.release_date}</div>
            <AddToFavorite movieId={movie.id} />
        </div>
    );
};
