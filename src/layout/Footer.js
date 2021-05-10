import React from "react";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer py-4 text-center">
            <Row className="m-0">
                <Col xs={12} sm={12} className="py-2">
                    <a href="#"><i className="feather-facebook"/></a>
                    <a href="#"><i className="feather-linkedin"/></a>
                    <a href="#"><i className="feather-youtube"/></a>
                    <a href="#"><i className="feather-twitter"/></a>

                </Col>
                <Col  xs={12} sm={12} className="link-area pb-1">
                    <Link to="/" className="pr-2 px-md-4">Home</Link>
                    <Link to="/checkout" className="px-2 px-md-4">Checkout</Link>
                    <Link to="/seller" className="px-2 px-md-4">Seller</Link>
                    <br/>

                    <div className='line-divider my-1'/>
                </Col>
                <Col xs={12} sm={12} className="py-1">

                    Copyright &copy; 2021. All Rights Reserved. Created by a student group of &nbsp;
                    <a href="https://www.sliit.lk/" rel="noreferrer" target="_blank">
                        SLIIT
                    </a>
                </Col>
            </Row>
        </div>
    )
}
export default Footer;
