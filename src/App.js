import React from 'react';
import './App.css';
import './assets/stylesheets/main.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import DashBoard from "./views/Dashboard";
import Footer from './layout/Footer';

import Login from './components/home/login.component';
import Register from './components/home/register.component';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>

                    //Don't change this two path
                    <Route path="/signin" component={Login}/>
                    <Route path="/signup" component={Register}/>

                    <Route path='/checkout'>
                        <Checkout/>
                    </Route>
                    <Route path="/dashboard">
                        <DashBoard/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;