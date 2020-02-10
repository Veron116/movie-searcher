import React, { useState } from 'react';
import './AddToFavorite.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../reduxSetup/types';
import { addToFavorites, removeFromFavorites } from '../reduxSetup/actions';

export const AddToFavorite = (props: any) => {
    const dispatch = useDispatch();
    const favoriteIds = useSelector<RootStore, number[]>(state => state.favoriteIds);

    const HandleClickFavorite = () => {
        if (favoriteIds.includes(props.movieId)) {
            dispatch(removeFromFavorites(props.movieId));
        } else {
            dispatch(addToFavorites(props.movieId));
        }
    };

    return (
        <span onClick={HandleClickFavorite}>
            <FavoriteIcon
                className={favoriteIds.includes(props.movieId) ? 'icon-favorite isFavorite' : 'icon-favorite'}
            />
        </span>
    );
};
