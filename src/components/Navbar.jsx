import React from 'react';
import { useContext, useEffect } from 'react';
import LogoSVG from '../assets/Star-Wars-Logo-1.png';
import { useNavigate, Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    

    const getUrl = (item) => {
        if (item.url.includes('people')) {
            console.log(item.url.split("api/")[1])
            return '/details/' + item.url.split("api/")[1];
        } else if (item.url.includes('planets')) {
            return '/planet_details/' + item.url.split("api/planets/")[1];
        }
    }

    const removeFav = (item) => {
        const { prefixedUid, ...filteredItem } = item;
        if (item.url.includes('people')) {
            actions.removeFavorite(filteredItem, 'character');
        } else if (item.url.includes('planets')) {
            actions.removeFavorite(filteredItem, 'planet');
        }
    }

    const favoriteOptions = store.favorites.map((favorite, index) => {
        if (index !== store.favorites.length - 1) {
            return (
                <>
                    <div key={index} className="d-flex justify-content-between p-1 align-middle">
                        <p className='align-middle' onClick={() => navigate(getUrl(favorite))}>{favorite.name}</p>
                        <div onClick={() => removeFav(favorite)}>
                            <FontAwesomeIcon icon={faTrashCan}  />
                        </div>
                    </div>
                    <hr className="dropdown-divider" />
                </>
            );
        } else {
            return (
                <>
                    <div key={index} className="d-flex justify-content-between p-1 align-middle">
                        <p className='align-middle' onClick={() => navigate(getUrl(favorite))}>{favorite.name}</p>
                        <div onClick={() => removeFav(favorite)}>
                            <FontAwesomeIcon icon={faTrashCan}  />
                        </div>
                    </div>
                </>
            )
        }
    });

    return (
        <nav>
            <div className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <Link to="/">
                    <img src={LogoSVG} alt="Pawspective Logo" className="landing-logo" />
                </Link>
                <div className="dropdown">

                    <button className="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className='d-flex justify-content-between'>
                            <div className='me-2'>Favorites</div>
                            <div className='container bg-secondary rounded'>{store.favorites.length}</div>
                        </div>
                    </button>

                    <div className="dropdown-menu dropdown-menu-end drp" aria-labelledby="dropdownMenuButton">
                        {favoriteOptions}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

