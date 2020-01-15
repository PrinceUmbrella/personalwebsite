/*jshint esversion: 6 */ 
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText, 
  NavLink
} from 'reactstrap';
import {NavLink as ReactLink} from 'react-router-dom';

export default class Header extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
        this.toggle = this.toggle.bind(this);
    };
    toggle()
    {
        console.log("Before: ", this.state.isOpen);
        this.setState({
            isOpen:!this.state.isOpen
            });
        console.log("Before: ", this.state.isOpen);
        
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Leoul Tilahun</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <ReactLink className="nav-link" to="/projects">Projects</ReactLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="https://github.com/princeUmbrella">
                                <i class="fa fa-github" aria-hidden="true"></i> {" "}GitHub
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="https://www.linkedin.com/in/leoultilahun/">
                                <i class="fa fa-linkedin" aria-hidden="true"></i> {" "}LinkedIn
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>V 0.1</NavbarText>
                    </Collapse>
                    
                </Navbar>
            </div>
        )
    }
}
