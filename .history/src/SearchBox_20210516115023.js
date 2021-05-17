import React from 'react';

const SearchBox = ({ searchfield, onSearchChange}) => {
    return (
        <div>
            <input
             className="pa2 ba b--green bg-lightest-blue"
            type='search'
            placeholder='Search Robots' 
            onChange={ onSearchChange }
            />
        </div>
    )
}

export default SearchBox;