import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../store/appContext';


const Planet = ({ id }) => {
    const { store, actions } = useContext(Context);
    const [planetData, setPlanetData] = useState(null);


    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const planetData = await actions.loadPlanet(id);
                setPlanetData(planetData);
            } catch (error) {
                console.error('Error al cargar el personaje:', error);
            }
        };
        fetchPlanet();
    }, [id]);



    return (
        <div className="landing-container">
            <div className="row">
                {planetData && planetData.properties && (
                    <>
                        <img src="https://placehold.co/800x600" className="col-md-6" alt="planet Image" />
                        <div className="col-md-6">
                            <h1>{planetData.properties.name}</h1>
                            <h4 className="text-center mt-2 mb-4">{planetData.description}</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className='ps-5 pe-5'>
                            <div className='container-fluid atr d-flex justify-content-between'>
                            <div className='atribute'>Clima: {planetData.properties.climate}</div>
                            <div className='atribute'>Diametro: {planetData.properties.diameter}</div>
                            <div className='atribute'>Gravedad: {planetData.properties.gravity}</div>
                            <div className='atribute'>Perido de Orbita: {planetData.properties.orbital_period}</div>
                            <div className='atribute'>Población: {planetData.properties.population}</div>
                            <div className='atribute'>Periodo de rotación: {planetData.properties.rotation_period}</div>
                            <div className='atribute'>Terreno: {planetData.properties.terrain}</div>
                            </div>
                        </div>
                    
                    </>
                )}

            </div>
        </div>
    )
}

export default Planet;