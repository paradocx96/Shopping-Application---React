import React, {Component} from 'react';
import './App.css';
import './assets/stylesheets/main.scss'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import DashBoard from "./views/Dashboard";
import CreateProduct from "./views/CreateProduct";
import Footer from './layout/Footer';
import Login from './components/home/login.component';
import Register from './components/home/register.component';
import DeliveryGateway from './components/delivery/DeliveryGateway';

class App extends Component{
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/signin" component={Login}/>
                        <Route path="/signup" component={Register}/>

                        <Route path='/checkout'>
                            <Checkout/>
                        </Route>
                        <Route path="/dashboard">
                            <DashBoard/>
                        </Route>
                        <Route path="/create-product">
                            <CreateProduct/>
                        </Route>
                        <Route path='/api/delivery'>
                            <DeliveryGateway/>
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
}

export default App;
