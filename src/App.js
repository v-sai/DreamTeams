import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/authentication/Login";
import Navbar from "./components/Navbar/Navbar";
import Matches from "./components/Matches/Matches";
// import Players from "./components/Players/Players";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/matches" exact component={Matches} />
          <Route path="/teams/:matchId" exact component={Teams} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
