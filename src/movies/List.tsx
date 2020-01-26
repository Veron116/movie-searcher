import React, { useState, useEffect } from 'react';
import './List.css';
import { MovieRenderFunc } from './Movie';
import '../movie-switcher/movie-switcher.css';

export const ListRenderFunc = () => {
    const [movies, setMovies] = useState<Array<any>>([]);
    const [activeCardId, setActiveCardId] = useState<number>();

    function getMovieIndex(id: number) {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].props.movie.id === id) {
                return i;
            }
        }
    }
    useEffect(() => {
        fetch('https://devlab.website/v1/movies')
            .then(response => response.json())
            .then(json => {
                if (activeCardId === undefined) {
                    setActiveCardId(json[0].id);
                }

                setMovies(
                    json.map((item: any) => {
                        return <MovieRenderFunc key={item.id} movie={item} activeCardId={activeCardId} />;
                    })
                );
            });
    }, [activeCardId]);
    const handleClickPrev = () => {
        if (activeCardId !== undefined) {
            let index = getMovieIndex(activeCardId);
            if (index !== undefined && index >= 1) {
                index--;
                setActiveCardId(movies[index].props.movie.id);
            }
        }
    };
    const handleClickNext = () => {
        if (activeCardId !== undefined) {
            let index = getMovieIndex(activeCardId);
            if (index !== undefined && index < movies.length - 1) {
                index++;
                setActiveCardId(movies[index].props.movie.id);
            }
        }
    };

    return (
        <div>
            <div className='list__wrap'>{movies}</div>
            <div className='switcher__wrap'>
                <button onClick={handleClickPrev}>Previous</button>
                <button onClick={handleClickNext}>Next</button>
            </div>
        </div>
    );
};
