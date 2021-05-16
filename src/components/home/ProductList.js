import React, {useEffect, useState} from 'react';
import Product from "./Product";
import {Container, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import axios from "axios";
import {addAllProductsFromDb} from "../../store/actions/ProductActions";
import {configureStore} from "../../store";

function ProductList() {
    const [isStateChange, setIsStateChange] = useState(false);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setProducts(configureStore().getState().onlineStoreReducer.products);
        axios.get(process.env.REACT_APP_BACKEND_STARTING_URL + 'seller/get-all-product')
            .then(function (response) {
                dispatch(addAllProductsFromDb(response.data));
                console.log(response.data);
            })
            .catch(function (error) {
                /* handle error.In this, just show the error */
                console.log(error);
            }).then(function () {
            setProducts(configureStore().getState().onlineStoreReducer.products);
        })
    }, [])

    /**
     * Render the product from the redux store.
     */
    const renderProducts = () => {
        return (
            products.map((product, index) =>
                <Product key={index} product={product} isStateChange={isStateChange}
                         setIsStateChange={setIsStateChange}/>)
        );
    }


    return (
        <Container>
            <Row className="m-0 py-4 product-list">
                {
                    renderProducts()
                }
            </Row>
        </Container>
    );
}

export default ProductList;
