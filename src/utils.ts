import { IMovie } from './typings/IMovie';

//function return index of active card movie
export const getMovieIndex = (id: number, array: Array<IMovie>) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            return i;
        }
    }
};
