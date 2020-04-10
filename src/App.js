import React from 'react';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './Slide';
import Navigation from './Navigation';
import RecommendedMovies from './RecommendedMovies';

function App() {
  return (
    <div>
      <Navigation />
      <Slide />
      <RecommendedMovies />
    </div>
  );
}

export default App;
