import React from 'react';

import { IMGPATH, unSplashFreeImage } from '../config.js';

const setVoteClass = vote => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className='movie'>
    <img
      src={poster_path ? IMGPATH + poster_path : unSplashFreeImage}
      alt={title}
    />
    <div className='movie-info'>
      <h3>{title}</h3>
      <span className={`${setVoteClass(vote_average)}`}>{vote_average}</span>
    </div>
    <div className='movie-over'>
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
  </div>
);
export default Movie;
