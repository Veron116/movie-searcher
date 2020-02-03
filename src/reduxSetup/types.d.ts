import { IMovie } from '../typings/IMovie';

type RootStore = { movies: IMovie[] };

type Action<T> = { type: string; payload: T };

type ActionsT = typeof ADD_ELEMENTS | typeof DELETE_ELEMENTS | 'DEFAULT_PLUG';

type RootReducer<T = ActionsT> = (state: RootStore, action: Action<T>) => RootStore;
