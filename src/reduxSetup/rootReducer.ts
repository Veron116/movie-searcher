import { ADD_ELEMENTS, DELETE_ELEMENT, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionTypes';
import { IMovie } from '../typings/IMovie';
import { RootStore, RootReducer, Action, ActionsT } from './types';

const initialState: RootStore = { movies: [], favoriteIds: [] };

const actionHandler = new Map<string, RootReducer>([
    [
        ADD_ELEMENTS,
        (state, action: Action<IMovie[]>) => {
            state.movies = action.payload;
            return state;
        },
    ],
    [
        DELETE_ELEMENT,
        (state: RootStore, action: Action<number>) => {
            state.movies = state.movies.filter(e => e.id !== action.payload);
            state.favoriteIds = state.favoriteIds.filter(e => e !== action.payload);
            return state;
        },
    ],
    [
        ADD_TO_FAVORITES,
        (state: RootStore, action: Action<number>) => {
            state.favoriteIds.push(action.payload);
            return state;
        },
    ],
    [
        REMOVE_FROM_FAVORITES,
        (state: RootStore, action: Action<number>) => {
            state.favoriteIds = state.favoriteIds.filter(e => e !== action.payload);
            return state;
        },
    ],
    ['DEFAULT_PLUG', (state: RootStore) => state],
]);

export function rootReducer(state = initialState, action: Action<ActionsT>) {
    const reducerToFire = (actionHandler.has(action.type)
        ? actionHandler.get(action.type)
        : actionHandler.get('DEFAULT_PLUG')) as RootReducer;

    return reducerToFire(state, action);
}
