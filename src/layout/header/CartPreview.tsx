import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import CartPreviewItem from "./CartPreviewItem";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import NumberFormat from "react-number-format";
import {ICartedItem} from "../../types/product";

/**
 * Cart icon popup box
 * @constructor
 */
const CartPreview: React.FC = () => {
    const history = useHistory();

    /**
     * Redirect to checkout page
     */
    const onClickCheckout = () => {
        history.push('/checkout')
    }

    const [tot, setTot] = useState<number>(0)
    const discountPercentage = 0;
    const cartedItems: ICartedItem[] = useSelector((state: RootState) => state.cartReducer.cartedItems)

    /**
     * Get the count of carted items.
     */
    const countOfCartedItem = cartedItems.length

    const subtotal: number =
        cartedItems.reduce((sum: number, cItem: ICartedItem) => sum + cItem.cQty * cItem.product.sellPrice, 0)

    useEffect(() => {
            setTot(subtotal);
        }, [cartedItems]
    )

    return (
        <div className="cart-preview">

            <Container className="overflow-auto cart-preview-item-list-area ml-md-4 pr-md-4">
                {cartedItems.map((cartedItem: ICartedItem, index: number) => (
                    <CartPreviewItem product={cartedItem.product} cartedQty={cartedItem.cQty} key={index}/>
                ))}
            </Container>

            <Container>
                <Row className="sub-total pt-2 pt-md-4 mx-md-2">
                    <Col xs={7} md={7} className="p-0">Subtotal ({countOfCartedItem} items)</Col>
                    <Col xs={5} md={5} className="p-0">
                        <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right"
                                      prefix={'Rs. '} value={tot.toFixed(2)}/>
                    </Col>
                </Row>
                <Row className="discount pb-2 mx-md-2">
                    <Col xs={7} md={7} className="p-0">Discount</Col>
                    <Col xs={5} md={5} className="p-0">
                        <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right"
                                      prefix={'Rs. '} value={(tot * discountPercentage).toFixed(2)}/>
                    </Col>
                </Row>
                <Row className="total pt-2 mx-md-2 mb-2">
                    <Col xs={7} md={7} className="p-0">Total</Col>
                    <Col xs={5} md={5} className="p-0">
                        <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right"
                                      prefix={'Rs. '} value={(tot * (1 - discountPercentage)).toFixed(2)}/>
                    </Col>
                </Row>
                <Row className="d-sm-none d-xs-block">
                    <Col className="p-0">
                        <Button className="float-right checkout-btn mb-2 negation" variant="success"
                                onClick={onClickCheckout}>Check out</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default CartPreview;
