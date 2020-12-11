// Libs
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// CSS
import './App.css';

// Components
import Home from './pages/Home';
import About from './pages/About';

function App () {
  return (
     <div className="App">
        <Router>
           <Switch>
				  <Route exact path='/' component={Home} />
				  <Route path='/about' component={About} />
           </Switch>
        </Router>
     </div>
  );
}

export default App;
