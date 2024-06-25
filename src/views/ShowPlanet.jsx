import React from 'react';
import '../views/LandingPage.css';
import  Planet from '../components/Planet.jsx';
import { useParams } from 'react-router-dom';


const ShowPlanet = () => {
    const { id } = useParams();

    return (
        <div className="landing-container">
            <Planet id={id} />
        </div>
    );
};

export default ShowPlanet;