/*jshint esversion: 6 */ 
import React ,{Component} from 'react';
import {
  Row,
  Container,
  Col   
} from 'reactstrap';
import profileImage from "../profileimage.jpg";
import BlinkLable from './blinkComponent';


class CenterImage extends Component{
    constructor(props){
        super(props);
        this.state= {
            clicked:false
        };
    }

    render(){
        return (
          <React.Fragment>
          <div><BlinkLable label=">"/></div>
          
          <div sm="12" md={{ size: 6, offset: 5 }}>
          <Container>
            <Row>
              <Col xs={12} >
                <img src={profileImage} className="rounded" width="100%" alt="test"/>
              </Col>
              <Col xs={12}>
                <div className="container jumbotron">
                  <p>
                    Temperature is the degree of hotness or coldness of an object. When we talk about something feeling hot (like the soup we drink when were sick) or cold (like the snow, especially if youre not wearing gloves), were talking about temperature.
                    The temperature of an object, usually measured in degrees-Fahrenheit or degrees-Celsius, tells us how much heat, or energy, the object has. A boiling cup of water has very active molecules moving around very quickly and producing the heat we feel on our hands and faces. Colder objects dont have as much energy. Their molecules are much less active.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          </div>
          </React.Fragment>
        );
    }

}

export default CenterImage;
