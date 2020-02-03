import React from 'react';
import './App.css';
import { ListRenderFunc } from './movies/List';
import { HeaderComponent } from './header/Header';

const App: React.FC = () => {
    return (
        <div className='App'>
            <HeaderComponent />
            <ListRenderFunc />
        </div>
    );
};

export default App;
