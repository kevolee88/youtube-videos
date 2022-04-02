import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(search);
  }

  return (
    <div className="search-bar ui segment">
      <h2>Video Search</h2>
      <form onSubmit={onSubmit} className="ui form">
        <div className="ui fluid huge icon input">
          <input
            id="video-search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(event) => {setSearch(event.target.value)}}
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  )
};

export default SearchBar;
