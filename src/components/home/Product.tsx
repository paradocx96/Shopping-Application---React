import React, {FormEvent, useEffect, useState} from 'react';
import {Card, Button, Col, Row, Form} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import {useDispatch, useSelector} from "react-redux";
import {ICartedItem, IProduct} from "../../types/product";
import {addToCart, changeCartedCount} from "../../store/actions/ProductActions";
import {RootState} from "../../store/reducers";


type ProductProps = {
    product: IProduct;
}

const Product: React.FC<ProductProps> = (props) => {
    const {product} = props;
    const cartedItems: ICartedItem[] = useSelector((state: RootState) => state.cartReducer.cartedItems);
    const cartedItem = cartedItems.find(cartedItem => cartedItem.product.title === product.title);
    const dispatch = useDispatch();
    const [qty, setQty] = useState<number>(cartedItem === undefined ? 1 : cartedItem.cQty);

    useEffect(() => {
            setQty(cartedItem === undefined ? 1 : cartedItem.cQty);
        }, [cartedItems]
    )

    const onHandelUpdate = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(changeCartedCount({product: product, cQty: qty}))
    }

    const onHandelAddToCart = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addToCart({product: product, cQty: qty}))
    }

    return (
        <Col xs={6} sm={4} lg={3} className="p-0">
            <div className="product px-2 px-md-2 px-lg-3 pt-1 pb-3 pb-md-4 m-1 m-md-2">

                <Row className="m-0 negation">
                    <Col><Card.Img variant="top" className="product-image mt-2" src={product.image}/></Col>
                </Row>
                <Row className="m-0">
                    <Col className="p-0 m-0"><Card.Title className="title pt-1">{product.title}</Card.Title></Col>
                </Row>

                {product.price !== null && (
                    <Row className="m-0 pb-1 pb-md-3">
                        <Col xs={7} sm={7} className="px-0 selling-price negation">
                            <NumberFormat displayType={'text'} thousandSeparator={true} className="float-left"
                                          prefix={'Rs. '} value={product.sellPrice.toFixed(2)}
                            />
                        </Col>
                        <Col xs={5} sm={5} className="px-0 pt-1">
                            <span className="cut-price">
                                <NumberFormat displayType={'text'} thousandSeparator={true} prefix={'Rs. '}
                                              className="float-right" value={product.price.toFixed(2)}/>
                            </span>
                        </Col>
                    </Row>
                )
                }
                {product.price === null &&
                <Row className="m-0 pb-1 pb-md-3">
                    <Col className="selling-price negation">
                        <NumberFormat displayType={'text'} thousandSeparator={true} prefix={'Rs. '}
                                      value={product.sellPrice.toFixed(2)}/>
                    </Col>
                </Row>
                }

                <Form onSubmit={onHandelAddToCart}>
                    <Row className="m-0">
                        <Col xs={5} className="pl-0 pr-2">
                            <input type="number" className="count-field text-left pl-lg-3"
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQty(Number(e.target.value))}
                                   placeholder="" value={qty ? qty : ''}
                                   min="1" max={product.stockQty}/>
                        </Col>
                        <Col xs={7} className="px-0">
                            {
                                (cartedItem !== undefined) &&
                                <Button variant="outline-primary"
                                        onClick={onHandelUpdate}
                                        className='update-card negation'>Update</Button>
                            }{
                            (cartedItem === undefined) &&
                            <Button variant="success" type="submit" className='add-to-card negation'>Add To
                                Cart</Button>
                        }
                        </Col>
                    </Row>
                </Form>

            </div>
        </Col>
    );
}
export default Product;
