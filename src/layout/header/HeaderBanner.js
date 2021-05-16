import React, {Component} from 'react';
import {Col, OverlayTrigger, Popover, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import CartPreview from "./CartPreview";
//import {configureStore} from "../../store";

//import {useSelector} from "react-redux";

import AuthService from "../../services/user.service";
/**
 * Header bottom part.
 * @constructor
 */
class HeaderBanner extends Component{

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showBuyerBoard: false,
            showSellerBoard: false,
            currentUser: undefined

        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showBuyerBoard: user.roles.includes("ROLE_BUYER"),
                showSellerBoard: user.roles.includes("ROLE_SELLER")
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    // const history = useHistory();
    //
    // /**
    //  * Redirect to checkout page
    //  */
    // const onClickCheckout = () => {
    //     history.push('/checkout')
    // }

    render() {

        const { currentUser, showBuyerBoard, showSellerBoard} = this.state;

    return (
        <React.Fragment>
            <Row className="m-1 header-banner-area  pr-md-4 ">
                <Col xs={9} sm={7} md={8} lg={9} xl={10} className="pl-3 pl-lg-5 pl-md-4">
                    <Link to="/" className="float-left logo-text pt-1 pl-lg-3 negation">RHNA Easy Shopping</Link>

                    {/* --- Display dashboard according to the user role dynamically when user log in to the system ---- */}
                    {showSellerBoard && <Link  className="float-right pt-3 pl-lg-3 font-weight-bolder text-light feather-box" to={"/dashboard"}> DashBoard</Link>}

                </Col>

                <br></br>

                <Col xs={3} sm={5} md={4} lg={3} xl={2}>

                    {/* --- Display User cart dynamically when user log in to the system ---- */}

                    {showBuyerBoard &&  <OverlayTrigger
                        trigger="click"
                        placement='bottom'
                        overlay={
                            <Popover id="popover-positioned-bottom">
                                <Popover.Content>
                                    <CartPreview/>
                                </Popover.Content>
                            </Popover>
                        }>

                        <div className="cart-component pr-lg-4">
                            <i className="feather-shopping-cart text-light"/>
                        </div>

                    </OverlayTrigger> }

                    {/*<Button className="custom-primary-button py-1 mt-2 d-none d-sm-block"*/}
                    {/*        onClick="/checkout" >Check out</Button>*/}

                    {/* --- Display Current User name dynamically when user log in to the system ---- */}
                    {currentUser && <Link  className="float-right pl-lg-3 font-weight-bolder text-light feather-user " > {currentUser.username}</Link>}
                    <br></br>
                    {/* --- Logout from the system---- */}
                    <Link className="float-right font-weight-bolder pl-lg-3 text-light feather-log-out" to="/" onClick={this.logOut}> SignOut</Link>


                </Col>


            </Row>
        </React.Fragment>
    );

    }
}

export default HeaderBanner;