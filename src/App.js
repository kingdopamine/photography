import React from 'react';

import './App.css';

import Retouch from './components/Retouch/Retouch'
import DSLR from './components/DSLR/DSLR'
import Nishika from './components/Nishika/Nishika'
import Lenticular from './components/Lenticular/Lenticular'
import Contact from './components/Contact/Contact'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
  render(){
   
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Retouch/>
            </Route>
            <Route exact path="/Digital">
              <DSLR/>
            </Route>
            <Route exact path="/nishika-n8000">
              <Nishika/>              
            </Route>
            <Route exact path="/lenticular">
              <Lenticular/>              
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
      </Router>


    );
  }
  
}

export default App;
document.oncontextmenu = new Function("return false;");
