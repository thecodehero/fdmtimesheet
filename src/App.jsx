import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Dashboard from './assets/Dashboard.jsx';
import Timesheet from './assets/Timesheet.jsx';
import Personal_details from './assets/Personal_details.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} /> 
            <Route path="/timesheet" component={Timesheet} />
            <Route path="/personal_details" component={Personal_details} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
