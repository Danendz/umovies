import React, { Component } from 'react';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide from './Slide';
import Navigation from './Navigation';
import { Slides } from './Slides';
import { RecommendMoviesFirstPage } from './RecommendMoviesFirstPage';
import RecommendMoviesList from './RecommendMoviesList';
import Delay from './Delay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      class1: '',
      class2: '',
      class3: '',
      class4: '',
      class5: '',
      class6: '',
      slides: Slides,
      recommendFirstPage: RecommendMoviesFirstPage
    }
  }

  entered1 = (event) => {
    this.setState({ class1: 'animated2', class3: 'animated3', class5: 'animated5' })
  }

  entered2 = (event) => {
    this.setState({ class2: 'animated2', class4: 'animated4', class6: 'animated6' })
  }

  leave = (event) => {
    this.setState({ class1: '', class2: '', class3: '', class4: '', class5: '', class6: '' })
  }


  render() {
    const recommendFirstPage = this.state.recommendFirstPage;
    const slides = this.state.slides;
    let classes = [this.state.class1, this.state.class2, this.state.class3, this.state.class4, this.state.class5, this.state.class6];
    return (
      <div>
        <Navigation />
        <Slide slides={slides} onEntered={this.entered1} onEntered2={this.entered2} onLeave={this.leave} classes={classes} />
        <Delay wait={1050}>
          <RecommendMoviesList moviesFirstPage={recommendFirstPage} />
        </Delay>
      </div>
    );
  }
}

export default App;
