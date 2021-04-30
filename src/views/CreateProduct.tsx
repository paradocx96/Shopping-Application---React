import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, CardImg, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../constants/baseUrl";
import { v4 as uuidv4 } from 'uuid';

const CreateProduct: React.FC = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const [title, setTitle] = useState<string | null>(null);
    const [price, setPrice] = useState<number | null>(null);
    const [sellPrice, setSellPrice] = useState<number | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [cType, setCType] = useState<string | null>(null);
    const [stockQty, setStockQty] = useState<number | null>(null);
    const categories: string[] = ["Grocery", "Fruits", "Veggies", "Bakery", "Electronics"];
    const history = useHistory();
    const onHandleBackToDashboard = () => history.push('/dashboard');

    const onChangeImageInput = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file: File = e.target.files[0];
            //TODO: Create Image upload

            // uploadImage(file).then(r => {
            //     setImageUrl(r.getURL);
            // });
            setImageUrl("Imge");
        }
    };

    const handleOnSubmit = (event: FormEvent) => {
        try {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);

            if (title === null || price === null || sellPrice === null || imageUrl === null || cType === null ||
                stockQty === null) {
                return;
            }

            /**
             * Create new product in database.
             */
            axios.post(BASE_URL + 'add-product',
                {
                    id: "product"+ uuidv4(),
                    title: title,
                    sellPrice: sellPrice,
                    price: price,
                    image: imageUrl + "",
                    cType: cType,
                    stockQty: stockQty
                })
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    /* handle error.In this, just show the error */
                    console.log(error);
                })
                .then(function () {
                    setValidated(true);
                    setTitle(null);
                    setPrice(null);
                    setSellPrice(null);
                    setImageUrl(null);
                    setCType(null);
                    setStockQty(null);
                    setValidated(false);
                    Array.from(document.querySelectorAll("input")).forEach(
                        input => (input.value = "")
                    );
                });
        } catch (err) {
            alert(err);
        }
    }


    return (
        <div className='new-product-dev m-auto'>
            <Container>
                <Row>
                    <Col>
                        <Button className="negation back-to-dashboard float-right mt-3 mr-4" variant="outline-dark"
                                onClick={onHandleBackToDashboard}>
                            <i className=" feather-arrow-left"/> Back to Dashboard
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="create-product p-3">
                            <h2 className="pt-5">Create Product</h2>
                            {imageUrl &&
                            <CardImg className="image-preview pt-3 negation" variant="top" src={imageUrl}/>
                            }
                            <Form noValidate validated={validated} onSubmit={handleOnSubmit}>


                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Product name" required
                                                  onChange={(e) => setTitle(e.target.value)}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="formBasicImage">
                                    <Form.Label>Product Image</Form.Label> <br/>
                                    <input type='file' required className='float-label mt-3' onChange={(e) =>
                                        onChangeImageInput(e)}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formBasicType">
                                    <Form.Label>Product Type</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..."
                                                  onChange={(e) => setCType(e.target.value)}>
                                        {categories.map((val: string) => <option>{val}</option>)}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="number" placeholder="Product price" required
                                                  onChange={(e) => setPrice(Number(e.target.value))}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="formBasicSellPrice">
                                    <Form.Label>Product Selling Price</Form.Label>
                                    <Form.Control type="number" placeholder="Product selling price" required
                                                  onChange={(e) => setSellPrice(Number(e.target.value))}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicQty">
                                    <Form.Label>Quantity of Product</Form.Label>
                                    <Form.Control type="number" placeholder="Product count" required
                                                  onChange={(e) => setStockQty(Number(e.target.value))}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit" className='custom-primary-button my-2'>
                                    Create Now</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreateProduct;
