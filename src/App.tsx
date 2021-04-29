import React from 'react';
import './App.css';
import ProductList from "./components/home/ProductList";
import './assets/stylesheets/main.scss'
import DarkModeToggle from "./components/DarkModeToggleDiv";
import SearchBar from "./components/home/SearchBar";

function App() {
    return (
        <div className="App">
            <DarkModeToggle/>
            <SearchBar/>
            <ProductList/>
        </div>
    );
}

export default App;
