import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
 
} from 'reactstrap';

import {
    NavLink

} from "react-router-dom";

export default function NavbarHeader() {
    return (
        <Navbar>
            <Nav>
                <NavItem>
                    <NavLink to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}


