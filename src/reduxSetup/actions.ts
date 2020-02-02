import { ADD_ELEMENT, DELETE_ELEMENT } from './actionTypes';

export const addElement = (newElement: ListElement) => ({
    type: ADD_ELEMENT,
    payload: newElement,
});

export const deleteElement = (idToDeleteElement: string) => ({
    type: DELETE_ELEMENT,
    payload: idToDeleteElement,
});
