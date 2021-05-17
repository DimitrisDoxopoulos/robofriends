import React from 'react';

const SearchBox = ({ searchfield, onSearchChange}) => {
    return (
        <div className="pa2 ba b--green bg-lightest-blue">
            <input
            type='search'
            placeholder='Search Robots' 
            onChange={ onSearchChange }
            />
        </div>
    )
}

export default SearchBox;