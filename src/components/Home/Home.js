import React from 'react';
import Activities from '../Activities/Activities';
import './Home.css'

const Home = () => {
    return (
        <div className="home-container overflow-hidden">
            <Activities></Activities>
        </div>
    );
};

export default Home;