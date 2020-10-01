import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="navigation__logo">
                <Link to='/foodyrestaurants-react' style={{ 'textDecoration': 'none' }}>Foody~Restaurants</Link>
            </div>
            <div className="navigation__list">
                {/* <span className="navigation__list-item">Recipes</span>
                <span className="navigation__list-item">Favorites</span> */}
            </div>
        </div>
    )
}

export default Navigation
