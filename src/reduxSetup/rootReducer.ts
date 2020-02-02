import { ADD_ELEMENT, DELETE_ELEMENT } from './actionTypes';

const initialState: RootStore = { list: [] };

const actionHandler = new Map<string, RootReducer>([
    [
        ADD_ELEMENT,
        (state, action: Action<ListElement>) => {
            const { list } = state;
            return { list: [...list, action.payload] };
        },
    ],
    [
        DELETE_ELEMENT,
        (state: RootStore, action: Action<string>) => {
            const { list } = state;
            return { list: list.filter(e => e.id !== action.payload) };
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
