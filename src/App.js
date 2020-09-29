import React, { useEffect, useState } from 'react';
import './App.css';

import Movie from './components/Movie';

import { APIURL, IMGPATH, SEARCHAPI } from './config';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = async api => {
    const moviesRep = await fetch(api);
    const _movies = await moviesRep.json();
    setMovies(_movies.results);
  };

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const handleOnSubmit = e => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
      setSearchTerm('');
    }
  };

  const handleOnChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className='search'
            type='text'
            placeholder='search...'
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map(movie => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
