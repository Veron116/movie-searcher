import React from 'react';
import './App.css';
import { ListRenderFunc } from './movies/List';
import { SwitcherFunc } from './movie-switcher/movie-switcher';

const App: React.FC = () => {
    return (
        <div className='App'>
            <ListRenderFunc />
            <SwitcherFunc />
        </div>
    );
};

export default App;
