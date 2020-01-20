/*jshint esversion: 6 */ 
import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter, BrowserRouter} from 'react-router-dom';
import {connect} from "react-redux";
import CenterImage from "../src/componet/centerImageComponent";
import Header from "../src/componet/HeaderComponent";
import Experience from "../src/componet/experienceComponent";

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    document.body.style.backgroundColor = "white";
  }
  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <Header/>
          <Switch>
              <Route path="/home" component={()=><CenterImage/>}/>
              <Route exact path="/experience" component={()=><Experience />}/>
              <Redirect to="/home"/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
