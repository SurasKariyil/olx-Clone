import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import './App.css';
import Login from './Pages/Login'


import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
          <Signup/>
        </Route>
      </Router>

      
    </div>
  );
}

export default App;
