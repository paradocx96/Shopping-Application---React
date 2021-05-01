import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row, Spinner, Table} from "react-bootstrap";
import NumberFormat from "react-number-format";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import {ICartedItem} from "../types/product";
import CartedItem from "../components/checkout/CartedItem";
import {v4 as uuidv4} from 'uuid';
import axios from "axios";
import {flushCart} from "../store/actions/ProductActions";

/**
 * Render checkout page.
 * @constructor
 */
const Checkout: React.FC = () => {
    const cartedItems: ICartedItem[] = useSelector(((state: RootState) => state.cartReducer.cartedItems))
    const [tot, setTot] = useState<number>(0);
    const [isPlaceOrdering, setIsPlaceOrdering] = useState<boolean>(false);
    const dCharge = 0;
    const dispatch = useDispatch();

    useEffect(() => {
            setTot(cartedItems.reduce((sum: number, cItem: ICartedItem) =>
                sum + cItem.cQty * cItem.product.sellPrice, 0)
            );
        }, [cartedItems]
    )
    const isLogged: boolean = useSelector(((state: RootState) => state.onlineStoreReducer.isLogged))

    /**
     * If the user already logged navigate to payment gateway.
     * Otherwise navigate for login page.
     */
    const onHandlePlaceOrder = () => {
        /*TODO: HAS TO IMPLEMENT*/

        // Otherwise return before execute those.

        const orderId = "order" + uuidv4();

        const getOrderList = () => {
            return cartedItems.map((item: ICartedItem) => {
                    return {
                        orderId: orderId,
                        productId: item.product.id,
                        quantity: item.cQty
                    }
                }
            );
        }

        /**
         * Deduct the stock quantity of items in database. (stock count will update);
         * create order object and save in database.
         *
         */
        //TODO: ADD customer name, and hard coded data.
        setIsPlaceOrdering(true);
        axios.post(process.env.REACT_APP_BACKEND_STARTING_URL + 'place-order',
            {
                orderDetail: {
                    orderId: orderId,
                    orderDate: new Date().toDateString(),
                    customerName: "__CUS_NAME____",
                    customerId: "___CUS_ID____",
                    contactNumber: "0777123123",
                    permanentAddress: "ADDRESS_1",
                    deliveryAddress: "ADDRESS_2",
                    amount: tot,
                    paymentOption: "card"
                },
                orderItems: getOrderList()
            }
        ).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                /* handle error.In this, just show the error */
                console.log(error);
            }).then(function () {
            setIsPlaceOrdering(false);
            dispatch(flushCart())
        })
    }

    return (
        <div className="checkout-page pb-5">
            <Container>
                <h2 className="text-left checkout-page-title py-sm-2 pt-md-4 mx-lg-3">Checkout</h2>
                <div className="table-div p-2 p-md-3 ml-lg-3">
                    <span className="float-left shopping-cart">Shopping cart</span>
                    <Table responsive className="table-data">
                        <thead>
                        <tr>
                            <th className="index-col px-0">#</th>
                            <th className="text-center" colSpan={2}>Item</th>
                            <th className="text-center">Qty</th>
                            <th className="text-right">Unit Price</th>
                            <th className="text-center" colSpan={2}>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cartedItems.map((product: ICartedItem, index: number) =>
                                <CartedItem key={index} index={index} cartedItem={product}/>
                            )}
                        </tbody>
                    </Table>

                    <Row className="calculation-area pr-2 pr-sm-5">
                        <Col className="text-left">Delivery Charge</Col>
                        <Col>
                            <NumberFormat displayType={'text'} thousandSeparator={true} prefix={'Rs. '}
                                          className="float-right" value={dCharge.toFixed(2)}/>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="calculation-area pr-2 pr-sm-5">
                        <Col className="text-left">Total</Col>
                        <Col className="total">
                            <NumberFormat displayType={'text'} thousandSeparator={true} prefix={'Rs. '}
                                          className="float-right" value={(tot + dCharge).toFixed(2)}/>
                        </Col>
                    </Row>

                    {
                        (cartedItems.length>0)  &&
                        <Row className="m-0 mt-3">
                            <Col>
                                <Button className="float-right custom-primary-button" onClick={onHandlePlaceOrder}
                                        disabled={isPlaceOrdering}>Place Order now &nbsp;
                                    {
                                        isPlaceOrdering &&
                                        <Spinner size="sm" role="status" aria-hidden="true" animation="border"/>
                                    }
                                </Button>

                            </Col>
                        </Row>
                    }
                </div>
            </Container>
        </div>
    );
}

export default Checkout;



