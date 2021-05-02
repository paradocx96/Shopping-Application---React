import React from "react";
import Welcome from "../components/home/Welcome";
import SearchBar from "../components/home/SearchBar";
import ProductList from "../components/home/ProductList";

const Home: React.FC = () => {
    return (
        <div className="background-color-1 pb-4">
            <Welcome/>
            <SearchBar/>
            <ProductList/>
        </div>
    )
}
export default Home;
