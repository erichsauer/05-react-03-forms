import React from 'react';
import PropTypes from 'prop-types';

function Controls({ query, onFormSubmit, onQueryChange }) {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="query">
        News Topic
        <input type="text" id="query" value={query} onChange={onQueryChange} />
      </label>
      <button aria-label="search">Search</button>
    </form>
  );
}

Controls.propTypes = {
  query: PropTypes.string,
  onFormSubmit: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
};

export default Controls;
