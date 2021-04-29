import React from 'react';
import Product from "./Product";
import {Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {IProduct} from "../../types/product";

const ProductList: React.FC = () => {
    const products: IProduct[] = useSelector((state: RootState) => state.onlineStoreReducer.products);

    /**
     * Render the product from the redux store.
     */
    const renderProducts = () => {
        return (
            products.map((product: IProduct, index: number) =>
                <Product key={index} product={product}/>)
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
