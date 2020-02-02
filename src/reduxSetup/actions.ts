import { ADD_ELEMENT, DELETE_ELEMENT } from './actionTypes';
import { IMovie } from '../typings/IMovie';

export const addMovies = (newElements: IMovie[]) => ({
    type: ADD_ELEMENT,
    payload: newElements,
});

export const deleteMovie = (idToDeleteElement: string) => ({
    type: DELETE_ELEMENT,
    payload: idToDeleteElement,
});
