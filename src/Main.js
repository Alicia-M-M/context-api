import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import NavbarHeader from './Navbar';

export default function Main() {
    return (
        <Router>
            <NavbarHeader />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
}