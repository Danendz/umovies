import React, { Component } from 'react';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './Slide';
import Navigation from './Navigation';
import RecommendedMovies from './RecommendedMovies';
/* import Banner from './Banner'; */

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      class1: '',
      class2: '',
      class3: '',
      class4: '',
      class5: '',
      class6: ''
    }
  }

  st = (someValue) =>{
    this.setState({ class: someValue })
  }

  entered1 = (event) => {
    this.setState({ class1: 'animated' })
    this.setState({ class3: 'animated3' })
    this.setState({ class5: 'animated5' })
  }
  entered2 = (event) => {
    this.setState({ class2: 'animated2' })
    this.setState({ class4: 'animated4' })
    this.setState({ class6: 'animated6' })
  }

  leave = (event) => {
    this.setState({ class1: '' })
    this.setState({ class3: '' })
    this.setState({ class5: '' })
    this.setState({ class2: '' })
    this.setState({ class4: '' })
    this.setState({ class6: '' })
  }
  render() {
    let classes = [this.state.class1, this.state.class2, this.state.class3, this.state.class4, this.state.class5, this.state.class6];
    return (
      <div>
        <Navigation />
        <Slide onEntered={this.entered1} onEntered2={this.entered2} onLeave={this.leave} classes={classes} />
        <RecommendedMovies />
      </div>
    );
  }
}

export default App;
