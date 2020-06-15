import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navbar from './components/nav/Navbar';

import Start from './components/Start';
import Battle from './components/Battle';
import Matchup from './components/Matchup';
import Stats from './components/Stats';
import Upload from './components/Upload';
import BattleParams from './components/BattleParams';

import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/">

              
                <Navbar />

              
            </Route>
          </Switch>
            <main className="hamsterwars-main-container">
            <Switch>
                <Route path="/battle/:id1/:id2">
                  <BattleParams />
                </Route>
                <Route exact path="/battle">
                  <Battle />
                </Route>
                <Route path="/matchup">
                  <Matchup />
                </Route>
                <Route path="/stats">
                  <Stats />
                </Route>
                <Route path="/upload">
                  <Upload />
                </Route>
                <Route path="/">
                   <Start />
                </Route>
              </Switch>
            </main>
        </div>
     </Router>
  );
}

export default App;
