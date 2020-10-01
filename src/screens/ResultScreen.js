import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

// Components
import RecipeList from '../components/FoodList/FoodList';
import SearchBar from '../components/SearchBar/SearchBar';

const ResultScreen = () => {
    const [results, setResults] = useState([]);
    const [term] = useState('noodles');

    const handleSearchTerm = searchTerm => {
        getBusiness(searchTerm);
    }

    const getBusiness = async term => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term: term,
                    location: 'edmonton'
                }
            });
            setResults(response.data.businesses); 
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBusiness(term)
    }, [term])

    return (
        <React.Fragment>
            <SearchBar handleSearchTerm={handleSearchTerm}/>
            <RecipeList foods={results} />
        </React.Fragment>
    )
}

export default ResultScreen;
