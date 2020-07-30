import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    onSearch(query);
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onSubmit}>
        <div className='field'>
          <label>Search</label>
          <input
            onChange={event => setQuery(event.target.value)}
            type='text'
            value={query}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
