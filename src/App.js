/*jshint esversion: 6 */ 
import React from 'react';
import {Switch, Route, Redirect, withRouter, BrowserRouter} from 'react-router-dom';
import {connect} from "react-redux";
import CenterImage from "../src/componet/centerImageComponent";
import Header from "../src/componet/HeaderComponent";
import Project from "../src/componet/projectComponent";

import './App.css';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        <Switch>
            <Route path="/home" component={()=><CenterImage/>}/>
            <Route exact path="/projects" component={()=><Project />}/>
            <Redirect to="/home"/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
