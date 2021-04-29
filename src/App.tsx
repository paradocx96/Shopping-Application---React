import React from 'react';
import './App.css';
import ProductList from "./components/home/ProductList";
import './assets/stylesheets/main.scss'
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
    return (
        <div className="App">
            <DarkModeToggle/>
            <ProductList/>
        </div>
    );
}

export default App;
