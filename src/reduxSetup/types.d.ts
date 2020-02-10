import { IMovie } from '../typings/IMovie';

type RootStore = { movies: IMovie[]; favoriteIds: number[] };

type Action<T> = { type: string; payload: T };

type ActionsT = typeof ADD_ELEMENTS | typeof DELETE_ELEMENTS | typeof ADD_TO_FAVORITES | 'DEFAULT_PLUG';

type RootReducer<T = ActionsT> = (state: RootStore, action: Action<T>) => RootStore;
