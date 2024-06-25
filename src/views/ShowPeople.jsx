import React from 'react';
import '../views/LandingPage.css';
import People from '../components/People';
import { useParams } from 'react-router-dom';


const ShowPeople = () => {
    const { id } = useParams();
    return (
        <div className="landing-container">
            <People id={id} /> {/* Use the ShowPerson component */}
        </div>
    );
};

export default ShowPeople;