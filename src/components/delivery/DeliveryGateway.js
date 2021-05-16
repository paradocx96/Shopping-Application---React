import React from "react";
import AddressService from './AddressService';
import {Button, Col, Form, Card, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class DeliveryGateway extends React.Component {

    // TODO: Initializing state values and functions
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.calculateAddress = this.calculateAddress.bind(this);
        this.submitAddress = this.submitAddress.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.setOrderData = this.setOrderData.bind(this);
        this.assignAddressHandler = this.assignAddressHandler.bind();
        this.assignProvinceHandler = this.assignProvinceHandler.bind();
        this.assignDistrictHandler = this.assignDistrictHandler.bind();
        this.assignCityHandler = this.assignCityHandler.bind();
        this.assignZipHandler = this.assignZipHandler.bind();
        this.assignPhoneHandler = this.assignPhoneHandler.bind();
        this.assignTitleHandler = this.assignTitleHandler.bind();
    }

    // TODO: Getting initial values from database
    componentDidMount() {
        AddressService.getLastOrder()
            .catch(function (error) {
                console.log(error);
            }).then(result => {
                console.log(result);
                const orderData = result.data;
                this.setState({ orderData });
                this.setOrderData();
            })
    }

    // TODO: Initializing default values
    initialState = {
        orderData : [],
        orderCost: 0.00,
        deliveryCost: 0.00,
        totalCost: 0.00,

        userid: '',
        title: '',
        addresss: '',
        province: '',
        district: '',
        city: '',
        zip: '',
        phone: '',

        title2: '',
        address2: '',
        province2: '',
        district2: '',
        city2: '',
        zip2: '',
        phone2: ''
    }

    // TODO: Set Values for state variables
    assignAddressHandler = (event) => {
        this.setState({addresss: event.target.value})
    }
    assignProvinceHandler = (event) => {
        this.setState({province: event.target.value})
    }
    assignDistrictHandler = (event) => {
        this.setState({district: event.target.value})
    }
    assignCityHandler = (event) => {
        this.setState({city: event.target.value})
    }
    assignZipHandler = (event) => {
        this.setState({zip: event.target.value})
    }
    assignPhoneHandler = (event) => {
        this.setState({phone: event.target.value})
    }
    assignTitleHandler = (event) => {
        this.setState({title: event.target.value})
    }

    // TODO: Reset form values
    resetForm = () => {
        this.setState(() => this.initialState)
    }

    // TODO: Initialing values get from database
    setOrderData = ()=> {
        this.state.orderData.map(order =>
        this.setState({
            userid:  order.orderid,
            orderCost: order.price
        }))
    }

    // TODO: Getting calculated delivery cost
    calculateAddress = (event) => {
        event.preventDefault();

        if (this.state.title == null && this.state.addresss == null) {
            alert("Fill All Data!!!");
        } else {
            let formAddress = {
                userid: this.state.userid,
                title: this.state.title,
                addresss: this.state.addresss,
                province: this.state.province,
                district: this.state.district,
                city: this.state.city,
                zip: this.state.zip,
                phone: this.state.phone
            }
            console.log('Address => ' + JSON.stringify(formAddress));
            AddressService.postCalculateAddress(formAddress)
                .catch(function (error) {
                    console.log(error);
                }).then(res => {
                this.addressShowHandler();
                this.setState({
                    deliveryCost: res,
                    totalCost: (this.state.orderCost * 1) + res
                });
            });
        }
    }

    // TODO: Set values for Show Address
    addressShowHandler() {
        this.setState({
            title2: this.state.title,
            address2: this.state.addresss,
            province2: this.state.province,
            district2: this.state.district,
            city2: this.state.city,
            zip2: this.state.zip,
            phone2: this.state.phone
        })
    }

    // TODO: Implementation of Pay Button
    submitAddress = (event) => {
        event.preventDefault();

        if (this.state.addresss == null) {
            alert("Fill All Data!!!");
        } else {
            let newAddress = {
                userid: this.state.userid,
                title: this.state.title,
                addresss: this.state.addresss,
                province: this.state.province,
                district: this.state.district,
                city: this.state.city,
                zip: this.state.zip,
                phone: this.state.phone
            }

            // TODO: Save new address in database
            AddressService.postAddress(newAddress)
                .catch(function (error) {
                    console.log(error);
                }).then(() => {
                console.log('NEW ADDRESS ADDED TO DATABASE!');
                console.log('Address => ' + JSON.stringify(newAddress));
                // this.props.history.push('/payment');
            });
        }
    }

    // TODO: Display Website
    render() {
        return (
            <div className={'container'}>
                <Card>
                    <Card.Body>
                        <h1 className={'card-header text-center p-3 mb-2 bg-primary text-white'}>RHNA Delivery Service</h1>
                        <br/>
                        <h4 className={'font-weight-bold'}>Enter a Address</h4>
                        <Form id={'addAddressForm'}
                              onSubmit={this.calculateAddress.bind(this)}
                              onReset={this.resetForm.bind(this)}>

                            <Form.Row>
                                <Form.Group as={Col} controlId="FormAddress">
                                    <Form.Control required as="textarea"
                                                  placeholder={'Address Here...'}
                                                  rows={3}
                                                  name={'addresss'}
                                                  value={this.state.addresss}
                                                  onChange={this.assignAddressHandler}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formTitle">
                                    <Form.Label className={'font-weight-bold'}>Delivery Destination</Form.Label>
                                    <Form.Control required as="select"
                                                  name={'title'}
                                                  value={this.state.title}
                                                  onChange={this.assignTitleHandler}>
                                        <option> </option>
                                        <option>Home</option>
                                        <option>Office</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formProvince">
                                    <Form.Label className={'font-weight-bold'}>Province</Form.Label>
                                    <Form.Control required as="select"
                                                  name={'province'}
                                                  value={this.state.province}
                                                  onChange={this.assignProvinceHandler}>
                                        <option> </option>
                                        <option>Central</option>
                                        <option>Eastern</option>
                                        <option>North Central</option>
                                        <option>Northern</option>
                                        <option>North Western</option>
                                        <option>Sabaragamuwa</option>
                                        <option>Southern</option>
                                        <option>Uva</option>
                                        <option>Western</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formDistrict">
                                    <Form.Label className={'font-weight-bold'}>District</Form.Label>
                                    <Form.Control required as="select"
                                                  name={'district'}
                                                  value={this.state.district}
                                                  onChange={this.assignDistrictHandler}>
                                        <option> </option>
                                        <option>Ampara</option>
                                        <option>Anuradhapura</option>
                                        <option>Badulla</option>
                                        <option>Colombo</option>
                                        <option>Galle</option>
                                        <option>Gampaha</option>
                                        <option>Hambantota</option>
                                        <option>Jaffna</option>
                                        <option>Kalutara</option>
                                        <option>Kandy</option>
                                        <option>Kegalle</option>
                                        <option>Kilinochchi</option>
                                        <option>Kurunegala</option>
                                        <option>Mannar</option>
                                        <option>Matale</option>
                                        <option>Matara</option>
                                        <option>Moneragala</option>
                                        <option>Mullaitivu</option>
                                        <option>Nuwara Eliya</option>
                                        <option>Polonnaruwa</option>
                                        <option>Puttalam</option>
                                        <option>Ratnapura</option>
                                        <option>Trincomalee</option>
                                        <option>Vavuniya</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label className={'font-weight-bold'}>City</Form.Label>
                                    <Form.Control required name={'city'}
                                                  value={this.state.city}
                                                  onChange={this.assignCityHandler}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formZip">
                                    <Form.Label className={'font-weight-bold'}>Postcode</Form.Label>
                                    <Form.Control required name={'zip'}
                                                  value={this.state.zip}
                                                  onChange={this.assignZipHandler}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label className={'font-weight-bold'}>Phone No</Form.Label>
                                    <Form.Control required name={'phone'}
                                                  value={this.state.phone}
                                                  onChange={this.assignPhoneHandler}/>
                                </Form.Group>
                            </Form.Row>

                            <div>
                                <Button type={'submit'} className={'btn btn-primary btn-lg'}>Add</Button>{'\u00A0'}
                                <Button type={'reset'} className={'btn btn-warning btn-lg'}>Reset</Button>{'\u00A0'}
                            </div>
                        </Form>

                        <br/>
                        <div className={'container'}>
                            <h4>{this.state.title2}</h4>
                            <p>{this.state.address2}<br/>
                                {this.state.province2}<br/>
                                {this.state.district2}<br/>
                                {this.state.city2}<br/>
                                {this.state.zip2}<br/>
                                {this.state.phone2}</p>
                        </div>
                    </Card.Body>

                    <Card.Footer>
                        <Form id={'submitAddress'} onSubmit={this.submitAddress.bind(this)}>
                            <Form.Control required name={'addresss'} defaultValue={this.state.addresss} hidden={true}/>
                            <Form.Control required name={'province'} defaultValue={this.state.province} hidden={true}/>
                            <Form.Control required name={'district'} defaultValue={this.state.district} hidden={true}/>
                            <Form.Control required name={'city'} defaultValue={this.state.city} hidden={true}/>
                            <Form.Control required name={'zip'} defaultValue={this.state.zip} hidden={true}/>
                            <Form.Control required name={'phone'} defaultValue={this.state.phone} hidden={true}/>
                            <Form.Control required name={'title'} defaultValue={this.state.title} hidden={true}/>

                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <td><Form.Label className={'font-weight-bold'}>Order Price</Form.Label></td>
                                    <td>{this.state.orderCost + '.00'}</td>
                                </tr>
                                <tr>
                                    <td><Form.Label className={'font-weight-bold'}>Delivery Price</Form.Label></td>
                                    <td>{this.state.deliveryCost + '.00'}</td>
                                </tr>
                                <tr>
                                    <td><Form.Label className={'font-weight-bold'}>Total Price</Form.Label></td>
                                    <td>{this.state.totalCost + '.00'}</td>
                                </tr>
                                </tbody>
                            </Table>
                            <Button type={'submit'} className="btn btn-warning btn-lg">Submit Delivery Details</Button>
                        </Form>
                        <hr/>
                        <Link to={'/payment'} className={'btn-primary btn btn-lg'}>Pay</Link>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}

export default DeliveryGateway;