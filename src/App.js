/*jshint esversion: 6 */ 
import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import CenterImage from "../src/componet/centerImageComponent";
import Header from "../src/componet/HeaderComponent";
import Experience from "../src/componet/experienceComponent";
import {Helmet} from "react-helmet";

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
          <Helmet>
              <meta charSet="utf-8" />
              <title>Leoul Tilahun</title>
            </Helmet>
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
