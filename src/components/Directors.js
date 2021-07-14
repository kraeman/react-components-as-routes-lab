import React from 'react';
import { directors, movies } from '../data';

const makeMovies = (moviesList) => {
  return moviesList.map(movie => {
    return <li>{movie}</li>
  })
}

const makeDirectors = () => {
  return directors.map(director => {
    return(<div>
      Name: {director.name}
      Movies: 
      <ul>
      {makeMovies(director.movies)}
</ul>
    </div>)
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {makeDirectors()}
    </div>
  );
}

export default Directors
