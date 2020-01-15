/*jshint esversion: 6 */ 
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

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
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/princeUmbrella">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>V 0.1</NavbarText>
                    </Collapse>
                    
                </Navbar>
            </div>
        )
    }
}
