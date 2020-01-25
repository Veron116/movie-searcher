import React from 'react';
import './Movie.css';

export const MovieRenderFunc = (props: any) => {
    const movie = props.movie;
    return (
        <div className='movies__wrap'>
            {/* <div>{movie.id}</div> */}
            <h3 className='movies__title'>{movie.title}</h3>
            <p className='movies__description'>{movie.overview}</p>
            <p className='movies__genre'>{movie.genres}</p>
            <p className='movies__dur'>{movie.duration} minutes</p>
            {/* <div>{movie.likes}</div> */}
            {/* <div>{movie.vote_average}</div> */}
            <div>{movie.vote_count}</div>
            <div>{movie.release_date}</div>
        </div>
    );
};
