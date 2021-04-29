import React from 'react';
import './App.css';
import './assets/stylesheets/main.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./views/Home";
import Checkout from "./views/Checkout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/checkout'>
                        <Checkout/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
