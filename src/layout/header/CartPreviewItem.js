import React from 'react';
import NumberFormat from "react-number-format";
import {Col, Image, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/actions/ProductActions";


/**
 * carted item in cart preview table.
 * @param props
 * @constructor
 */
function CartPreviewItem(props) {
    const {product, cartedQty} = props;
    const dispatch = useDispatch();
    const onHandelRemove = () => {
        dispatch(removeFromCart(product));
        window.location.reload();
    }

    return (
        <React.Fragment>
            <Row className="cart-preview-item mr-md-2">

                <Col xs={3} md={4} className="pl-0 pt-1">
                    <Image src={product.image} className="cart-preview-product-image"/>
                </Col>
                <Col xs={4} md={3} className="pt-1 pt-sm-2 px-0">
                    <div className="cart-preview-item-title">{product.title}</div>
                    <div className="cart-preview-item-qty pb-1 pt-md-2">Qty: {cartedQty}</div>
                </Col>

                <Col xs={5} md={5} className="pt-1 pt-sm-2 px-0">
                    <div className="cart-preview-item-title text-right">
                        <i className="feather-x" onClick={onHandelRemove}/>
                    </div>
                    <div className="text-success pb-1 pt-sm-2 text-right">
                        <NumberFormat displayType={'text'} thousandSeparator={true} prefix={'Rs. '}
                                      value={(cartedQty * product.sellPrice).toFixed(2)}/>
                    </div>
                </Col>

            </Row>
        </React.Fragment>
    );
}

export default CartPreviewItem;
