/*jshint esversion: 6 */ 
import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, 
        CardImg, 
        CardText, 
        CardBody, 
        CardTitle,
        Button} from 'reactstrap';

// TODO Create another component called card where we can pass the properties then load it inside the projectsComponent.js
class FlippingCard extends Component
{
    constructor(props) {
        super(props);
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
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <Card color="dark" text="white" style={{ width: '18rem' }} onClick={this.handleClick}>
              <CardImg object src={this.props.frontImage} alt={"profile"}></CardImg>
              <CardBody>
                <Button color="danger" onClick={this.handleClick}>Click to flip</Button>
              </CardBody>
            </Card>
     
            <Card onClick={this.handleClick}>
              <CardImg object src={this.props.backImage} alt={"profile"}></CardImg>
              <CardBody>
                <Button color="primary" onClick={this.handleClick}>Click to flip</Button>
              </CardBody>
            </Card>
          </ReactCardFlip>
        );
    }
}

export default FlippingCard;
