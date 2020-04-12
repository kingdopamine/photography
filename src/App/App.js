import React from 'react';

import './App.css';

import AutoGallery from './AutoGallery/AutoGallery';
import Navigation from './Navigation/Navigation';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <AutoGallery/>
        <Navigation/>
      </div>
    );
  }
  
}

export default App;
