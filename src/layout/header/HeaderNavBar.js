import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import DarkModeToggleDiv from "../../components/DarkModeToggleDiv";
import {CONTACT_NUMBER} from "../../constants/contact";


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
class HeaderNavBar extends Component{

    render() {

    return (

        <React.Fragment>
            <Navbar expand="md" className="header-nav-bar p-0 p-sm-1 m-0  pr-md-5">
                <Navbar.Brand className="d-md-none m-0 p-0">
                    <a className="tel-link mobile-view-nav-brand pl-3" href="tel:+94112123456">
                        <i className="feather-phone-call"/>+94 112 123 456
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle className="basic-navbar-nav pr-2 mr-3" aria-controls="basic-navbar-nav p-0 m-0"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav className="py-1">
                        <Link to="/delivery-areas" className="delivery-area pr-3 d-sm-none d-md-block"><i
                            className="feather-truck"/> Delivery Areas</Link>
                        <a className="tel-link px-2 d-none d-md-inline" href={`tel:${CONTACT_NUMBER}`}><i
                            className="feather-phone-call"/>
                            {CONTACT_NUMBER}</a>

                        <Link className="login px-2 negation" to="/signin">Login</Link>
                        <Link className="login px-2 negation" to="/signup">Sign up</Link>
                        <p className='text-center'>
                            <DarkModeToggleDiv/>
                        </p>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );

    }
}
export default HeaderNavBar;

