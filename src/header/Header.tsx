import React from 'react';
import './Header.css';
import logo from '../images/logo.svg';

export const HeaderComponent = () => {
    return (
        <div className='header'>
            <div className='container'>
                <img src={logo} alt='Logo' />
            </div>
        </div>
    );
};
