import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </main>
      </div>
    </Router>
    
  );
}

export default App;
