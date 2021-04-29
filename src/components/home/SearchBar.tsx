import React, {FormEvent, useState} from 'react';
import {Col, Container, FormControl, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {searchProduct} from "../../store/actions/ProductActions";
import Product from "./Product";
import {RootState} from "../../store/reducers";
import {IProduct} from "../../types/product";

const SearchBar: React.FC = () => {
    const {products, searchTerm} = useSelector((state: RootState) => state.onlineStoreReducer);
    const [search, setSearch] = useState<string>('');

    const dispatch = useDispatch();
    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(searchProduct(search));
    }

    const onChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        dispatch(searchProduct(''));
    }
    const renderSearchProducts = () => {
        return (
            products.map((product: IProduct, index: number) =>
                (product.title.toLowerCase() === searchTerm.toLowerCase()) && <Product key={index} product={product}/>)
        );
    }

    return (
        <Container>
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
