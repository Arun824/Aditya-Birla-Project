import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Query from "./components/Query";
import ClaimformComponent from "./components/ClaimformComponent";
import HealthCardComponent from "./components/HealthCardComponent";
import KycComponent from "./components/KycComponent";
import ImplantStikerComponent from "./components/ImplantStikerComponent";
import DocumentComponent from "./components/DocumentComponent";
import InstructionComponent from "./components/InstructionComponent";
import FooterButtonComponent from "./components/FooterButtonComponent";
import SubQueryComponent from './components/SubQueryComponent';
import Sub from "./components/Sub";

import { BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
  return (
  
    <Router>
      
      <Route exact path="/">
        <div style={{ backgroundColor: "rgb(247 247 247)"}}>
          <Navbar />
          <Card />
          <Query />
          <ClaimformComponent />
          <HealthCardComponent />
          <KycComponent />
          <ImplantStikerComponent />
          <DocumentComponent />
          <InstructionComponent />
          <FooterButtonComponent />
        </div>
      </Route>

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
      
    </Router>
  
  );
};

export default App;
