import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_CHARACTER } from './queries';
import styles from './Search.module.css';

function Search({ setSearch, updatePageNumber }) {
  const setSearchBtn = e => {
    e.preventDefault();
  };
  const [searchFilter, setSearchFilter] = useState('');

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      characterName: searchFilter,
    },
  });

  return (
    <div>
      <form
        className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
      >
        <input
          onChange={e => setSearchFilter(e.target.value)}
          placeholder="Search for characters"
          className={styles.input}
          type="text"
        />
        <button
          onClick={setSearchBtn}
          className={`${styles.btn} btn btn-primary fs-5`}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
