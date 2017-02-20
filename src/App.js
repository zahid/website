import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Articles />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <h1><a href="/">Zahid</a></h1>
          <p>
            {/* Put updated resume link here */}
            I am a <a href="https://gist.github.com/zahid/c9766ebea4fbd5898a15#file-resume-md">professional software engineer</a> based in New York City.
          </p>
      </div>
    );
  }
}

class Articles extends Component {
  render() {
    return (
      <div className="Articles">
        <ul>
          <li>
            <time datetime="2017-01-17 12:00">2017-01-17</time> - <a href="https://gist.github.com/zahid/c0287527e3d24df72e71eea86b8aa32f#file-docker-p1-virtual-environment-md">Virtual development environment with Docker</a>
          </li>
          <li>
            <time datetime="2014-11-01 12:00">2014-11-01</time> - <a href="https://gist.github.com/zahid/e4483045fa563d8de63f45e5f32128dc">Writing invent</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
