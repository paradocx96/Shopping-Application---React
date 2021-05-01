import React, {useEffect} from 'react';
import Product from "./Product";
import {Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {IProduct} from "../../types/product";
import axios from "axios";
import {addAllProductsFromDb} from "../../store/actions/ProductActions";

const ProductList: React.FC = () => {
    const products: IProduct[] = useSelector((state: RootState) => state.onlineStoreReducer.products);
    const dispatch = useDispatch();

    /**
     * Render the product from the redux store.
     */
    const renderProducts = () => {
        return (
            products.map((product: IProduct, index: number) =>
                <Product key={index} product={product}/>)
        );
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_STARTING_URL + 'get-all-product')
            .then(function (response) {
                dispatch(addAllProductsFromDb(response.data));
            })
            .catch(function (error) {
                /* handle error.In this, just show the error */
                console.log(error);
            })
            .then(function () {
                /* always executed */
            });
    },[])

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
