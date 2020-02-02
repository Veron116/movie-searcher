import { IMovie } from '../typings/IMovie';

// type ListElement = { title: string; id: string };
type RootStore = { movies: IMovie[] };

type Action<T> = { type: string; payload: T };

type ActionsT = typeof ADD_ELEMENT | typeof DELETE_ELEMENT | 'DEFAULT_PLUG';

type RootReducer<T = ActionsT> = (state: RootStore, action: Action<T>) => RootStore;
