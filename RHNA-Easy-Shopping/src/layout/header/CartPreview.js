import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import CartPreviewItem from "./CartPreviewItem";
// import {useSelector} from "react-redux";
// import {RootState} from "../../store/reducers";
import NumberFormat from "react-number-format";
import {configureStore} from "../../store";

/**
 * Cart icon popup box
 * @constructor
 */
function CartPreview() {
    const history = useHistory();

    /**
     * Redirect to checkout page
     */
    const onClickCheckout = () => {
        history.push('/checkout');
    }

    const [tot, setTot] = useState(0);
    const discountPercentage = 0;
    // const cartedItems = useSelector((state) => state.cartReducer.cartedItems);
    const [cartedItems, setCartedItems] = useState([]);

    /**
     * Get the count of carted items.
     */
    const countOfCartedItem = cartedItems.length;

    const subtotal =
        cartedItems.reduce((sum, cItem) => sum + cItem.cQty * cItem.product.sellPrice, 0);

    useEffect(() => {
        setCartedItems(configureStore().getState().cartReducer.cartedItems);
        setTot(subtotal);
        }, [cartedItems]
    )

    return (
        <div className="cart-preview">

            <Container className="overflow-auto ml-md-4 pr-md-4">
                {cartedItems.map((cartedItem, index) => (
                    <CartPreviewItem product={cartedItem.product} cartedQty={cartedItem.cQty} key={index}/>
                ))}
            </Container>

            <Container>
                <Row className="pt-2 pt-md-4 mx-md-2">
                    <Col xs={7} md={7} className="p-0">Subtotal ({countOfCartedItem} items)</Col>
                    <Col xs={5} md={5} className="p-0">
                        <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right"
                                      prefix={'Rs. '} value={tot.toFixed(2)}/>
                    </Col>
                </Row>
                <Row className="text-danger pb-2 mx-md-2">
                    <Col xs={7} md={7} className="p-0">Discount</Col>
                    <Col xs={5} md={5} className="p-0">
                        <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right"
                                      prefix={'Rs. '} value={(tot * discountPercentage).toFixed(2)}/>
                    </Col>
                </Row>
                <Row className="pt-2 mx-md-2 mb-2">
                    <Col xs={7} md={7} className="p-0">Total</Col>
                    <Col xs={5} md={5} className="p-0">
                        <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right"
                                      prefix={'Rs. '} value={(tot * (1 - discountPercentage)).toFixed(2)}/>
                    </Col>
                </Row>
                <Row className="pt-2 mx-md-2 mb-2">
                    <Col>
                        <Button className="custom-primary-button py-1 mt-2 float-right"
                                onClick={onClickCheckout}>Check out</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default CartPreview;
