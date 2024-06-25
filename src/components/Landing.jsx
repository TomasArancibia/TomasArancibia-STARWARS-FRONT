import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../views/LandingPage.css';
import LogoSVG from '../assets/Star-Wars-Logo-1.png';
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.loadCharacters();
    actions.loadPlanets();
  }, []);

  const details = (character) => {
    navigate(`/details/${character.uid}`);
  }

  const planet_details = (planet) => {
    navigate(`/planet_details/${planet.uid}`);
  }

  const fav = (item, category) => {
    const prefixedUid = `${category}-${item.uid}`;
    if (store.favorites.some(favorite => favorite.prefixedUid === prefixedUid)) {
      actions.removeFavorite(item, category);
    } else {
      actions.addFavorite(item, category);
    }
  }

  return (
    <div className="landing-container">
      <div>
        <h2>Characters</h2>
        <div className="card-feed d-inline-flex ">
          {store.characters && store.characters.map(character => (
            <div className='m-2' key={character.uid}>
              <div className="card p-0 m-1" style={{ width: "18rem" }}>
                <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
                <div className="p-1 m-1">
                  <h5>{character.name}</h5>
                  <div className="btn-toolbar justify-content-between">
                    <button type="button" className="btn btn-outline-primary" onClick={() => details(character)}>Learn More!</button>
                    <button type="button" className={`btn ${store.favorites.some(favorite => favorite.prefixedUid === `character-${character.uid}`) ? "btn-warning" : "btn-outline-warning"}`} onClick={() => fav(character, 'character')}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Planets</h2>
        <div className="card-feed d-inline-flex ">
          {store.planets && store.planets.map(planet => (
            <div className='m-2' key={planet.uid}>
              <div className="card p-0 m-1" style={{ width: "18rem" }}>
                <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
                <div className="p-1 m-1">
                  <h5>{planet.name}</h5>
                  <div className="btn-toolbar justify-content-between">
                    <button type="button" className="btn btn-outline-primary" onClick={() => planet_details(planet)}>Learn More!</button>
                    <button type="button" className={`btn ${store.favorites.some(favorite => favorite.prefixedUid === `planet-${planet.uid}`) ? "btn-warning" : "btn-outline-warning"}`} onClick={() => fav(planet, 'planet')}>
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;