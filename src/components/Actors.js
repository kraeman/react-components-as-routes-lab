import React from 'react';
import { actors } from '../data';


// debugger
const makeMovies = (moviesList) => {
  return (moviesList.map(movie => {
    return <li>{movie}</li>
  }))
}

const makeActors = () => {
  // debugger
  return actors.map(actor => {
    return (<div>
      Name: {actor.name}
      Movies: 
      <ul>
      {makeMovies(actor.movies)}
</ul>
    </div>)
  })
}


const Actors = () => {
  // debugger
  return (
    <div>
      <h1>Actors Page</h1>
      {makeActors()}
    </div>
  );
};

export default Actors;
