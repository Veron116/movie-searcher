import React, { useState } from 'react';
import './AddToFavorite.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const AddToFavorite = () => {
    const [favorite, setToFavorite] = useState<string>('');

    const HandleClickFavorite = () => {
        console.log('tyk');
        if (!favorite) {
            setToFavorite('isFavorite');
        } else {
            setToFavorite('');
        }
    };

    return (
        <span onClick={HandleClickFavorite}>
            <FavoriteIcon className='icon-favorite' data-favorite={favorite} />
        </span>
    );
};
