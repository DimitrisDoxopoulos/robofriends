import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className="pa2 ba b--green bg-lightest-blue">
            <input type='search' placeholder='Search Robots' />
        </div>
    )
}

export default SearchBox;