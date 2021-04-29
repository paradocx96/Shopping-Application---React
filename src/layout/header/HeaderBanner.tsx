import React from 'react';
import {Row, Col, Button, OverlayTrigger, Popover} from 'react-bootstrap';
import {useHistory, Link} from 'react-router-dom'
import CartPreview from "./CartPreview";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {ICartedItem} from "../../types/product";

/**
 * Header bottom part.
 * @constructor
 */
const HeaderBanner: React.FC = () => {
    const history = useHistory();

    /**
     * Redirect to checkout page
     */
    const onClickCheckout = () => {
        history.push('/checkout')
    }

    const cartedItems: ICartedItem[] = useSelector((state: RootState) => state.cartReducer.cartedItems)

    /**
     * Get the count of carted items.
     */
    const countOfCartedItem = cartedItems.length

    return (
        <React.Fragment>
            <Row className="m-0 header-banner-area  pr-md-5 ">
                <Col xs={9} sm={7} md={8} lg={9} xl={10} className="pl-3 pl-lg-5 pl-md-4">
                    <Link to="/" className="float-left logo-text pt-1 pl-lg-3 negation">LOGO</Link>
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
                            <span className="count-item float-right negation">{countOfCartedItem}</span>
                            <i className="feather-shopping-cart mr-3"/>
                        </div>
                    </OverlayTrigger>
                    <Button className="checkout-btn d-none d-sm-block negation" variant="success"
                            onClick={onClickCheckout}>Check out</Button>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default HeaderBanner;
