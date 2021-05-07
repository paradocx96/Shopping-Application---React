import React from 'react';
import {Col, Row} from "react-bootstrap";
import HeaderNavBar from "./header/HeaderNavBar";
import HeaderBanner from "./header/HeaderBanner";

/**
 * render Header for all pages.
 * @constructor
 */
function Header() {
    return (
        <React.Fragment>
            <Row className="m-0">
                <Col sm={12} xs={12} className='p-0'>
                    <HeaderNavBar/>
                </Col>
                <Col sm={12} xs={12} className='p-0'>
                    <HeaderBanner/>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Header;
