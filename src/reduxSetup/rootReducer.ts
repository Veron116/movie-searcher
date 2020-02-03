import { ADD_ELEMENTS, DELETE_ELEMENT } from './actionTypes';
import { IMovie } from '../typings/IMovie';
import { RootStore, RootReducer, Action, ActionsT } from './types';

const initialState: RootStore = { movies: [] };

const actionHandler = new Map<string, RootReducer>([
    [
        ADD_ELEMENTS,
        (state, action: Action<IMovie[]>) => {
            return { movies: action.payload };
        },
    ],
    [
        DELETE_ELEMENT,
        (state: RootStore, action: Action<number>) => {
            const { movies } = state;
            return { movies: movies.filter(e => e.id !== action.payload) };
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
