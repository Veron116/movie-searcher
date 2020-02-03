import { ADD_ELEMENTS, DELETE_ELEMENT } from './actionTypes';
import { IMovie } from '../typings/IMovie';

export const addMovies = (newElements: IMovie[]) => ({
    type: ADD_ELEMENTS,
    payload: newElements,
});

export const deleteMovie = (idToDeleteElement: string) => ({
    type: DELETE_ELEMENT,
    payload: idToDeleteElement,
});
