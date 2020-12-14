import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from "./App";
import Gift from "./components/Gift/Gift";

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/app">
                    <App/>
                </Route>
                <Route path="/">
                    <Gift/>
                </Route>
            </Switch>
        </Router>
    );
}


