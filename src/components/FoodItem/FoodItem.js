import React from 'react';
import './FoodItem.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faFile, faPhone, faStar, faThumbtack } from '@fortawesome/free-solid-svg-icons'

const FoodItem = ({ food }) => {
    return (
        <div className='food'>
            <div className="food__image">
                <img src={food.image_url} alt={food.name} />
            </div>
            <div className="food__info">
                <h2 className="food__info-name">{food.name}</h2>
                <div className="food__info-category">
                    Categories: 
                {
                    food.categories ? food.categories.map(category => <span key={category.alias} className='food__info-category-item'>{category.title}</span>) : null
                }
                </div>
                
                <span className="food__info-review"><FontAwesomeIcon icon={faFile} size="lg" />review: {food.review_count}</span>
                <span className="food__info-rating"><FontAwesomeIcon icon={faStar} size="lg" /> {food.rating}</span>
                <span className="food__info-location"><FontAwesomeIcon icon={faThumbtack} size="lg" /> {food.location.address1}</span>
                <span className="food__info-phone"><FontAwesomeIcon icon={faPhone} size="lg" /> {food.display_phone}</span>
                <span className="food__info-distance"><FontAwesomeIcon icon={faCar} size="lg" /> {(food.distance / 1000).toFixed(2)} km</span>
            </div>

            <Link to={`/foodyrestaurants-react/${food.id}`} className='btn btn-animation'>Check</Link>
        </div>
    )
}

export default FoodItem;
