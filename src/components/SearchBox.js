import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div >
            <input
                className="pa3 br3 ba dib b--purple"
                type="search"
                placeholder="Enter the robot name"
                onChange={searchChange}
            />
        </div>

    )
}
export default SearchBox;