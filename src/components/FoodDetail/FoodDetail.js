import React from 'react';
import './FoodDetail.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faFile, faPhone, faStar, faThumbtack } from '@fortawesome/free-solid-svg-icons';

// Components
import Spinner from '../Spinner/Spinner';

const FoodDetail = ({ food }) => {
    if(!food) {
        return <Spinner />;
    }

    return (
        <div className='detail'>
            <Link to='/foodyrestaurants-react' className='btn'>&larr; Go back</Link>
            <div className="detail__photos">
                { food.photos ? food.photos.map(photo => <div key={photo} className='detail__photos-item'><img src={photo} alt={food.name} /></div>) : null}
            </div>
            
        
            <div className="detail__info">
                <h2 className="detail__info-name">{food.name}</h2>
                <div className="detail__info-category">
                    Categories: 
                {
                    food.categories ? food.categories.map(category => <span key={category.alias} className='detail__info-category-item'>{category.title}</span>) : null
                }
                </div>
                
                <span className="detail__info-review"><FontAwesomeIcon icon={faFile} size="lg" />review: {food.review_count}</span>
                <span className="detail__info-rating"><FontAwesomeIcon icon={faStar} size="lg" /> {food.rating}</span>
                <span className="detail__info-location"><FontAwesomeIcon icon={faThumbtack} size="lg" /> {food.location.address1}</span>
                <span className="detail__info-phone"><FontAwesomeIcon icon={faPhone} size="lg" /> {food.display_phone}</span>
                <span className="detail__info-distance"><FontAwesomeIcon icon={faCar} size="lg" /> {(food.distance / 1000).toFixed(2)} km</span>
            </div>
        </div>
    )
}

export default FoodDetail
