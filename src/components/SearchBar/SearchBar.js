import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ handleSearchTerm }) => {
    const [term, setTerm] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        handleSearchTerm(term)
    }

    const handleInput = e => {
        setTerm(e.target.value);
    }

    return (
        <React.Fragment>
            <form className='form--search search' onSubmit={handleSubmit}>
                <input type='text' placeholder="e.g: Salads" className='search__input' onChange={handleInput} />
                <input type='submit' className='search__submit' value='search' />
            </form>
            
        </React.Fragment>
    )
}

export default SearchBar
