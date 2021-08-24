import React, { StrictMode } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Query from "./components/Query";

import SubQueryComponent from './components/SubQueryComponent';
import Sub from "./components/Sub";

import Home from './components/Home'

import Store from "./contexts/Store";
import { Route, HashRouter, Switch } from "react-router-dom";


const App = () => {
  return (
    <React.StrictMode>
    <Store>
    <HashRouter hashType="slash">
      <Switch>
      
      <Route exact path="/:callid?" component={Home} />

      <Route exact path="/query">
        <div style={{ background: "rgb(247 247 247)", height: "100vh" }}>
        <Navbar />
       <SubQueryComponent />
      </div>
      </Route>
        
      
      <Route exact path="/all">
        <div style={{ background: "rgb(247 247 247)" }}>
        <Navbar />
        <Card />
        <Query />
        <Sub />
        </div>  
      </Route>
      </Switch>
    </HashRouter>
    </Store>
  </React.StrictMode>
  );
};

export default App;
