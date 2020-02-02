import React, { useState, useEffect } from 'react';
import './List.css';
import { MovieCardFunc } from './Movie';
import '../movie-switcher/movie-switcher.css';
import { IMovie } from '../typings/IMovie';
import { MOVIES_URL } from '../constants';
import { getMovieIndex } from '../utils';
import { addMovies } from '../reduxSetup';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../reduxSetup/types';

export const ListRenderFunc = () => {
    const [activeCardId, setActiveCardId] = useState<number>();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(MOVIES_URL)
            .then(response => response.json())
            .then(json => {
                setActiveCardId(json[0].id);

                dispatch(addMovies(json));
            });
    }, []);
    const handleClickPrev = () => {
        if (activeCardId !== undefined) {
            let index = getMovieIndex(activeCardId, movies);
            if (index !== undefined && index >= 1) {
                index--;
                setActiveCardId(movies[index].id);
            } else if (index !== undefined && index === 0) {
                setActiveCardId(movies[movies.length - 1].id);
            }
        }
    };
    const handleClickNext = () => {
        if (activeCardId !== undefined) {
            let index = getMovieIndex(activeCardId, movies);
            if (index !== undefined && index < movies.length - 1) {
                index++;
                setActiveCardId(movies[index].id);
            } else {
                setActiveCardId(movies[0].id);
            }
        }
    };
    const movies = useSelector<RootStore, IMovie[]>(state => state.movies);

    return (
        <div className='container'>
            <div className='list__wrap'>
                {movies.map((item: IMovie) => {
                    return <MovieCardFunc key={item.id} movie={item} activeCardId={activeCardId} />;
                })}
            </div>
            <div className='switcher__wrap'>
                <button onClick={handleClickPrev}>Previous</button>
                <button onClick={handleClickNext}>Next</button>
            </div>
        </div>
    );
};
