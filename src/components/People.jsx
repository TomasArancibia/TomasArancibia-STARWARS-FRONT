import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const People = ({ id }) => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const characterData = await actions.loadCharacter(id);
                setCharacter(characterData);
            } catch (error) {
                console.error('Error al cargar el personaje:', error);
            }
        };
        fetchCharacter();
    }, [id]);



    return (
        <div className="landing-container">
            <div className="row">
                {character && character.properties && (
                    <>
                        <img src="https://placehold.co/800x600" className="col-md-6" alt="Character Image" />
                        <div className="col-md-6">
                            <h1>{character.properties.name}</h1>
                            <h4 className="text-center mt-2 mb-4">{character.description}</h4>
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
                            <div className='atribute'>Altura: {character.properties.height}</div>
                            <div className='atribute'>Peso: {character.properties.mass}</div>
                            <div className='atribute'>Color de ojos: {character.properties.eye_color}</div>
                            <div className='atribute'>Color de cabello: {character.properties.hair_color}</div>
                            <div className='atribute'>Color de piel: {character.properties.skin_color}</div>
                            <div className='atribute'>Género: {character.properties.gender}</div>
                            <div className='atribute'>Año de naciemiento: {character.properties.birth_year}</div>
                            </div>
                        </div>
                    
                    </>
                )}

            </div>
        </div>
    );
}

export default People;