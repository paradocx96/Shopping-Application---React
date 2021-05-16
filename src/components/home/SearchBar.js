import React, {useEffect, useState} from 'react';
import {Col, Container, Form, FormControl, Row} from "react-bootstrap";
import Product from "./Product";
import {configureStore} from "../../store";


function SearchBar() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        setProducts(configureStore().getState().onlineStoreReducer.products);
    }, [])

    /**
     * Search the product by product name
     * @param event
     */
    const handleOnSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setSearchTerm(search);
    }

    /**
     * Set the user entered text into search term
     * @param e
     */
    const onChangeSearchTerm = (e) => {
        setSearch(e.target.value);
        setSearchTerm('');
    }

    /**
     * Show the products which named matched with search term
     */
    const renderSearchProducts = () => {
        return (
            products.map((product, index) =>
                (product.title.toLowerCase() === searchTerm.toLowerCase()) && <Product key={index} product={product}/>)
        );
    }

    return (
        <Container className="pt-4">
            <Row>
                <Col sm={{span: 10, offset: 1}} md={{span: 8, offset: 2}}>
                    <Form onSubmit={handleOnSubmit}>
                        <Row className="search-bar m-1 mt-4 mb-4">
                            <Col sm={10} xs={10} xl={11}>
                                <FormControl type="text" placeholder="  Search...." className="search-bar-box mr-sm-2"
                                             onChange={onChangeSearchTerm}/>
                            </Col>
                            <Col sm={2} xs={2} xl={1} className="pt-2 pl-0">
                                <i className="feather-search" onClick={handleOnSubmit}/>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className="m-0 category-area justify-content-center">
                {renderSearchProducts()}
            </Row>
        </Container>
    );
}

export default SearchBar;
