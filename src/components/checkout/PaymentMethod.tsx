import React, {useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import cashPaymentImg from "../../assets/images/paymentOptions/cashpayment.png"
import cardPaymentImg from "../../assets/images/paymentOptions/cardpayment.png"


const PaymentMethods: React.FC = () => {
    const [pOption, setPOption] = useState<null | string>(null);


    return (
        <div className="payment-methods py-5 px-2">
            <h4 className="headingTop text-center">Payment Method</h4>
            <p>We do not save the payment details in our cloud. Safe online banking. Trust us. Enjoy.</p>
            <Row>
                <Col>
                    <div className="payment-option-card float-right" onClick={() => setPOption("CardPayment")}>
                        <Image className="payment-option-img" src={cardPaymentImg}/>
                        <p>Credit Card</p>
                    </div>
                </Col>
                <Col>
                    <div className="payment-option-card float-left" onClick={() => setPOption("CashPayment")}>
                        <Image className="payment-option-img" src={cashPaymentImg}/>
                        <p>Cash On Delivery</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default PaymentMethods;
