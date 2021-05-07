import React from 'react';
import {Button, Col, OverlayTrigger, Popover, Row} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'
import CartPreview from "./CartPreview";
import {useSelector} from "react-redux";


/**
 * Header bottom part.
 * @constructor
 */
function HeaderBanner() {
    const history = useHistory();

    /**
     * Redirect to checkout page
     */
    const onClickCheckout = () => {
        history.push('/checkout')
    }

    const cartedItems = useSelector((state) => state.cartReducer.cartedItems);

    /**
     * Get the count of carted items.
     */
    const countOfCartedItem = cartedItems.length

    return (
        <React.Fragment>
            <Row className="m-0 header-banner-area  pr-md-5 ">
                <Col xs={9} sm={7} md={8} lg={9} xl={10} className="pl-3 pl-lg-5 pl-md-4">
                    <Link to="/" className="float-left logo-text pt-1 pl-lg-3 negation">E-SHOP</Link>
                </Col>
                <Col xs={3} sm={5} md={4} lg={3} xl={2}>
                    <OverlayTrigger
                        trigger="click"
                        placement='bottom'
                        overlay={
                            <Popover id="popover-positioned-bottom">
                                <Popover.Content>
                                    <CartPreview/>
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        <div className="cart-component  pr-3">
                            <span className="count-item float-right">{countOfCartedItem}</span>
                            <i className="feather-shopping-cart mr-3"/>
                        </div>
                    </OverlayTrigger>
                    <Button className="custom-primary-button py-1 mt-2 d-none d-sm-block"
                            onClick={onClickCheckout}>Check out</Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default HeaderBanner;
