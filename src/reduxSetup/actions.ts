import { ADD_ELEMENTS, DELETE_ELEMENT, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionTypes';
import { IMovie } from '../typings/IMovie';

export const addMovies = (newElements: IMovie[]) => ({
    type: ADD_ELEMENTS,
    payload: newElements,
});

export const addToFavorites = (movieId: number) => ({
    type: ADD_TO_FAVORITES,
    payload: movieId,
});

export const removeFromFavorites = (movieId: number) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: movieId,
});

export const deleteMovie = (idToDeleteElement: string) => ({
    type: DELETE_ELEMENT,
    payload: idToDeleteElement,
});
