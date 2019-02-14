import React, { Component } from 'react';
import './App.css';
import MyList from './components/MyList';
import RecomList from './components/RecomList';
import Titles from './components/Titles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyList />
        <RecomList />
        <Titles />
      </div>
    );
  }
}

export default App;
