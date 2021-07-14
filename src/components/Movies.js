import React from 'react';
import { movies } from '../data';


const makeGenres = (genresList) => {
  return genresList.map(genre => {
    return <li>{genre}</li>
  })
}

const makeMovies = () => {
  return movies.map(movie => {
    return (<div>
      Title: {movie.title}
      Time: {movie.time}
      Genres:
      <ul>
        {makeGenres(movie.genres)}
      </ul>
    </div>)
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {makeMovies()}
    </div>
  );
};

export default Movies;
