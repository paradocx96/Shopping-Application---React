import React from 'react';
import './App.css';
import ProductList from "./components/home/ProductList";
import './assets/stylesheets/main.scss'
import DarkModeToggle from "./components/DarkModeToggleDiv";
import SearchBar from "./components/home/SearchBar";
import Welcome from "./components/home/Welcome";

function App() {
    return (
        <div className="App">
            <DarkModeToggle/>
            <Welcome/>
            <SearchBar/>
            <ProductList/>
        </div>
    );
}

export default App;
