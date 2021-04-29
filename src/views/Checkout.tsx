import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import NumberFormat from "react-number-format";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import {ICartedItem} from "../types/product";
import {useHistory} from "react-router-dom";
import CartedItem from "../components/checkout/CartedItem";

const Checkout: React.FC = () => {
    const cartedItems: ICartedItem[] = useSelector(((state: RootState) => state.cartReducer.cartedItems))
    const [tot, setTot] = useState<number>(0)
    const dCharge = 0;

    useEffect(() => {
            setTot(cartedItems.reduce((sum: number, cItem: ICartedItem) =>
                sum + cItem.cQty * cItem.product.sellPrice, 0)
            );
        }, [cartedItems]
    )
    const isLogged:boolean = useSelector(((state: RootState) => state.onlineStoreReducer.isLogged))
    const history = useHistory();
    console.log(isLogged)

    const onHandlePlaceOrder = () =>{
        if(isLogged){
            history.push('/payment');
        }else {
            history.push('/login');
        }
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
                                <Button className="negation float-right" variant="success" onClick={onHandlePlaceOrder}>
                                    Place Order now
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



