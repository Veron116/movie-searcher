import React, { useState, useEffect } from 'react';
import './List.css';
import { MovieRenderFunc } from './Movie';

export const ListRenderFunc = () => {
    const [movies, setMovies] = useState<any>([]);

    useEffect(() => {
        fetch('movies.json')
            .then(response => response.json())
            .then(json => {
                setMovies(
                    json.map((item: any) => {
                        return <MovieRenderFunc key={item.id} movie={item} />;
                    })
                );
            });
    }, []);

    return <div className='list__wrap'>{movies}</div>;
};
