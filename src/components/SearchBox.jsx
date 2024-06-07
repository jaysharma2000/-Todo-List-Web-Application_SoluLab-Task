import React from 'react';

const SearchBox = ({ searchString, setSearchString, handleSearch }) => {
  
  // function to Update search results as user types 
  const handleInputChange = (e) => {
    setSearchString(e.target.value);
    handleSearch(e.target.value); 
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search tasks..." 
        value={searchString} 
        onChange={handleInputChange}
        className='search-box' 
      />
      <button className='search-button' onClick={() => handleSearch(searchString)}>Search</button>
    </div>
  );
};

export default SearchBox;


