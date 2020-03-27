import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomePage from './home/HomePage.jsx';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/home" component={HomePage} />
                </Switch>
            </Router>
        )
    }
}