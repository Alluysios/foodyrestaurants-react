import React from 'react';
import './FoodList.scss';

import Spinner from '../Spinner/Spinner';
import FoodItem from '../FoodItem/FoodItem';

const RecipeList = ({ foods }) => {
    if(foods.length === 0) {
        return <Spinner />;
    }
    
    return (
        <div className='container recipe-list'>
            { foods && foods.map(food => <FoodItem key={food.id} food={food} />)}
        </div>
    )
}

export default RecipeList
