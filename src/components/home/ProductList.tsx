import React from 'react';
import Product from "./Product";
import {Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {IProduct} from "../../types/product";

const ProductList: React.FC = () => {
    const products: IProduct[] = useSelector((state: RootState) => state.onlineStoreReducer.products);
    const selectedCategory: string = useSelector((state: RootState) => state.onlineStoreReducer.selectedCategory);

    const renderProducts = () => {
        return (
            products.map((product: IProduct, index: number) =>
                <Product key={index} product={product}/>)
        );
    }

    const renderSelectedProducts = () => {
        return (
            products.map((product: IProduct, index: number) =>
                (product.cType.trim().toLowerCase() === selectedCategory.trim().toLowerCase()) &&
                <Product key={index} product={product}/>)
        );
    }

    return (
        <Container>
            <Row className="m-0 py-4 product-list">
                {
                    (selectedCategory === 'All') &&
                    renderProducts()
                }{
                (selectedCategory !== 'All') &&
                renderSelectedProducts()
            }
            </Row>
        </Container>
    );
}

export default ProductList;
