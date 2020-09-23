import React, { useEffect, useState } from 'react';
import './App.css';

import Movie from './components/Movie';

import { APIURL, IMGPATH, SEARCHAPI } from './config';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const moviesRep = await fetch(APIURL);
    const _movies = await moviesRep.json();
    setMovies(_movies.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {movies.length > 0 && movies.map(movie => <Movie key={movie.id} />)}
    </div>
  );
}

export default App;
