import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    {/* <Route component={Dashboard} path="/" /> */}
    <Route component={Wizard} path="/wizard" />  

    {/* <Route component={Header} path="/about" />  
    <Route component={House} path="/classlist/:class" />   */}
    
  </Switch>
);