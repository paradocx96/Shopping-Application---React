import React from "react";
import Welcome from "../components/home/Welcome";
import SearchBar from "../components/home/SearchBar";
import ProductList from "../components/home/ProductList";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Welcome/>
            <SearchBar/>
            <ProductList/>
        </React.Fragment>
    )
}
export default Home;
