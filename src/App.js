import React from 'react';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './Slide';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Slide />
    </div>
  );
}

export default App;
