import React, {useState} from 'react';
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import ImgUpload from "../components/dashboard/ImageUpload";

/**
 * Render Create product page.
 * @constructor
 */
function CreateProduct() {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);
    const [sellPrice, setSellPrice] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [categoryType, setCategoryType] = useState(null);
    const [stockQty, setStockQty] = useState(null);
    const [isCreatingProduct, setIsCreatingProduct] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const categories = ["Grocery", "Fruits", "Veggies", "Bakery", "Electronics"];
    const history = useHistory();
    const onHandleBackToDashboard = () => history.push('/dashboard');

    const handleOnSubmit = (event) => {
        try {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);

            if (title === null || price === null || sellPrice === null || imageUrl === null || categoryType === null ||
                stockQty === null) {
                return;
            }

            /**
             * Create new product in database.
             */
            setIsCreatingProduct(true);
            axios.post(process.env.REACT_APP_BACKEND_STARTING_URL + 'seller/add-product',
                {
                    id: "product" + uuidv4(),
                    title: title,
                    sellPrice: sellPrice,
                    price: price,
                    image: imageUrl + "",
                    categoryType: categoryType,
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
                    setCategoryType(null);
                    setStockQty(null);
                    setValidated(false);
                    Array.from(document.querySelectorAll("input")).forEach(
                        input => (input.value = "")
                    );
                    setIsCreatingProduct(false);
                    window.location.reload();
                });
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className='new-product-dev m-auto  pb-5'>
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

                            <ImgUpload setImageUrl={setImageUrl} imageUrl={imageUrl}
                                       setIsImageUploading={setIsUploadingImage}/>

                            {
                                !imageUrl && validated &&
                                    <small className="text-danger d-block pb-3">This field can not be empty.</small>
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

                                <Form.Group controlId="formBasicType">
                                    <Form.Label>Product Type</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..."
                                                  onChange={(e) => setCategoryType(e.target.value)}>
                                        {categories.map((val) => <option>{val}</option>)}
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

                                <Button type="submit" className='float-right custom-primary-button my-2'
                                        disabled={isCreatingProduct || isUploadingImage}>
                                    Create Now &nbsp;
                                    {
                                        isCreatingProduct &&
                                        <Spinner size="sm" role="status" aria-hidden="true" animation="border"/>
                                    }
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CreateProduct;
