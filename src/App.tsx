import React from 'react';
import './App.css';
import { ListRenderFunc } from './movies/List';

const App: React.FC = () => {
    return (
        <div className='App'>
            <ListRenderFunc />
        </div>
    );
};

export default App;
