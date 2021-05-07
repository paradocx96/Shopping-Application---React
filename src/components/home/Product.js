import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import {useDispatch} from "react-redux";
import {addToCart, changeCartedCount} from "../../store/actions/ProductActions";
// import {RootState} from "../../store/reducers";
import AOS from "aos";
import "aos/dist/aos.css";
import {configureStore} from "../../store";

AOS.init();

function Product(props) {
    const {product, setIsStateChange, isStateChange} = props;
    const [cartedItems, setCartedItems] = useState([]);
    const cartedItem = cartedItems.find(cartedItem => cartedItem.product.id === product.id);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(cartedItem === undefined ? 1 : cartedItem.cQty);

    useEffect(() => {
        setCartedItems(configureStore().getState().cartReducer.cartedItems);
        }, []
    );

    useEffect(() => {
        setQty(cartedItem === undefined ? 1 : cartedItem.cQty);
    },[cartedItem])

    /**
     * Change the count of the carted item in redux store.
     * @param event
     */
    const onHandelUpdate = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(changeCartedCount({product: product, cQty: qty}));
        setIsStateChange(!isStateChange);
    }

    /**
     * Add product into redux store cart.
     * @param event
     */
    const onHandelAddToCart = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addToCart({product: product, cQty: qty}));

    }

    return (
        <Col xs={6} sm={4} lg={3} className="p-0" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="product px-2 px-md-2 px-lg-3 pt-1 pb-3 pb-md-4 m-1 m-md-2">

                <Row className="m-0">
                    <Col><Card.Img variant="top" className="product-image mt-2" src={product.image}/></Col>
                </Row>
                <Row className="m-0">
                    <Col className="p-0 m-0"><Card.Title className="title pt-1">{product.title}</Card.Title></Col>
                    {/*<Col className="p-0 m-0"><Card.Title className="title pt-1">{product.title}</Card.Title></Col>*/}
                </Row>

                {product.price !== null && (
                    <Row className="m-0 pb-1 pb-md-3">
                        <Col xs={7} sm={7} className="px-0 selling-price">
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
                    <Col className="selling-price">
                        <NumberFormat displayType={'text'} thousandSeparator={true} prefix={'Rs. '}
                                      value={product.sellPrice.toFixed(2)}/>
                    </Col>
                </Row>
                }

                <Form onSubmit={onHandelAddToCart}>
                    <Row className="m-0">
                        <Col xs={5} className="pl-0 pr-2">
                            <input type="number" className="count-field text-left pl-lg-3"
                                   onChange={(e) => setQty(Number(e.target.value))}
                                   placeholder="" value={qty ? qty : ''} min="1" max={product.stockQty}/>
                        </Col>
                        <Col xs={7} className="px-0">
                            {
                                (cartedItem !== undefined) &&
                                <Button variant="outline-primary" onClick={onHandelUpdate}
                                        className='update-card'>Update</Button>
                            }{
                            (cartedItem === undefined) &&
                            <Button type="submit" className='add-to-card'>Add To Cart</Button>
                        }
                        </Col>
                    </Row>
                </Form>

            </div>
        </Col>
    );
}
export default Product;
