/*jshint esversion: 6 */ 
import React, { Component } from 'react';
import FlippingCard from './cardComponent';
import Microsoft from "../MicrosoftLogo.png";
import ReactLogo from "../react.jpg";
import GoogleLogo from "../googleLogo.png";

class Experience extends Component
{
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        this.setState({ isFlipped: !this.state.isFlipped });
      }
    render(){
        return(     
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <FlippingCard frontImage= {Microsoft} backImage={ReactLogo}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <FlippingCard frontImage= {GoogleLogo} backImage={ReactLogo}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <FlippingCard frontImage= {GoogleLogo} backImage={ReactLogo}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <FlippingCard frontImage= {Microsoft} backImage={ReactLogo}/>
                </div>
            </div>
            </div>
        );
    }
}

export default Experience;
