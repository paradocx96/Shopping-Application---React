import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, CardImg, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";


const CreateProduct: React.FC = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const [isActiveTitle, setIsActiveTitle] = useState<boolean>(false);
    const [isActivePrice, setIsActivePrice] = useState<boolean>(false);
    const [isActiveSellPrice, setIsActiveSellPrice] = useState<boolean>(false);
    const [isActiveCType, setIsActiveCType] = useState<boolean>(false);
    const [isActiveStockQty, setIsActiveStockQty] = useState<boolean>(false);
    const [title, setTitle] = useState<string | null>(null);
    const [price, setPrice] = useState<number | null>(null);
    const [sellPrice, setSellPrice] = useState<number | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [cType, setCType] = useState<string | null>(null);
    const [stockQty, setStockQty] = useState<number | null>(null);
    const categories: string[] = ["Grocery", "Fruits", "Veggies", "Bakery", "Electronics"];


    const onChangeTitle = (text: string) => {
        setTitle(text);
        (text) ? setIsActiveTitle(true) : setIsActiveTitle(false);
    }

    const onChangePrice = (text: number) => {
        setPrice(text);
        (text) ? setIsActivePrice(true) : setIsActivePrice(false);
    }

    const onChangeSellPrice = (text: number) => {
        setSellPrice(text);
        (text) ? setIsActiveSellPrice(true) : setIsActiveSellPrice(false);
    }

    const onChangeCType = (text: string) => {
        setCType(text);
        // (text) ? setIsActiveCType(true) : setIsActiveCType(false);
    }

    const onChangeStockQty = (text: number) => {
        setStockQty(text);
        (text) ? setIsActiveStockQty(true) : setIsActiveStockQty(false);
    }

    const handleOnSubmit = (event: FormEvent) => {
        try {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            setTitle(null);
            setPrice(null);
            setSellPrice(null);
            setImageUrl(null);
            setCType(null);
            setStockQty(null);
            setIsActiveTitle(false);
            setIsActivePrice(false);
            setIsActiveSellPrice(false);
            setIsActiveCType(false);
            setIsActiveStockQty(false);
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );

            // TODO: Create product in database

        } catch (err) {
            alert(err);
        }
    }

    const onChangeImageInput = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file: File = e.target.files[0];
            //TODO: Create Image upload

            // uploadImage(file).then(r => {
            //     setImageUrl(r.getURL);
            // });
        }
    };
    const history = useHistory();
    const onHandleBackToDashboard = () => history.push('/dashboard')

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
                                                  onChange={(e) => onChangeTitle(e.target.value)}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="formBasicImage">
                                    <Form.Label>Product Image</Form.Label>    <br/>
                                    <input type='file' required className='float-label mt-3' onChange={(e) =>
                                        onChangeImageInput(e)}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formBasicType">
                                    <Form.Label>Product Type</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..."
                                                  onChange={(e) => onChangeCType(e.target.value)}>
                                        {categories.map((val: string) => <option>{val}</option>)}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicPrice">
                                    <Form.Label>Product Price</Form.Label>
                                    <Form.Control type="number" placeholder="Product price" required
                                                  onChange={(e) => onChangePrice(Number(e.target.value))}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="formBasicSellPrice">
                                    <Form.Label>Product Selling Price</Form.Label>
                                    <Form.Control type="number" placeholder="Product selling price" required
                                                  onChange={(e) => onChangeSellPrice(Number(e.target.value))}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicQty">
                                    <Form.Label>Quantity of Product</Form.Label>
                                    <Form.Control type="number" placeholder="Product count" required
                                                  onChange={(e) => onChangeStockQty(Number(e.target.value))}/>
                                    <Form.Control.Feedback type="invalid">
                                        This field can not be empty.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type="submit" className='custom-primary-button my-2'>Create
                                    Now</Button>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreateProduct;
