import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DeliveryGateway from './components/pages/DeliveryGateway';

function App() {
  return (
    <>
        <Router>
            <Switch>
                <Route path='/' exact component={DeliveryGateway} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
