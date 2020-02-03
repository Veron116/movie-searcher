import React, { useState } from 'react';
import './AddToFavorite.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../reduxSetup/types';
import { addToFavorites, removeFromFavorites } from '../reduxSetup/actions';

export const AddToFavorite = (props: any) => {
    const dispatch = useDispatch();
    const favoriteIds = useSelector<RootStore, number[]>(state => state.favoriteIds);
    console.log(props);
    const hasFavoriteId = favoriteIds.includes(props.movieId);

    const HandleClickFavorite = () => {
        if (hasFavoriteId) {
            console.log('hasFavoriteId' + hasFavoriteId);
            dispatch(removeFromFavorites(props.movieId));
        } else {
            dispatch(addToFavorites(props.movieId));
            console.log('hasFavoriteId' + hasFavoriteId);
            console.log(favoriteIds);
        }
    };

    return (
        <span onClick={HandleClickFavorite}>
            <div>{favoriteIds.length}</div>
            <FavoriteIcon className={hasFavoriteId ? 'icon-favorite isFavorite' : 'icon-favorite'} />
        </span>
    );
};
