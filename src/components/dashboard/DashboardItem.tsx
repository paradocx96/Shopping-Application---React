import React, {useEffect, useState} from 'react';
import {Button, Image} from "react-bootstrap";
import NumberFormat from "react-number-format";
import {IProduct} from "../../types/product";
import Swal from 'sweetalert2';
import axios from "axios";
import {BASE_URL} from "../../constants/baseUrl";
import {addAllProductsFromDb} from "../../store/actions/ProductActions";
import {useDispatch} from "react-redux";

type dashboardItemProps = {
    index: number
    product: IProduct;
}

/**
 * Render the product table into dashboard.
 * @param props
 * @constructor
 */
const DashboardItem: React.FC<dashboardItemProps> = (props) => {
    const {index, product} = props;
    const [isUpdatable, setIsUpdatable] = useState<boolean>(false);
    let sellPrice: number = product.sellPrice;
    let price: null | number = product.price ? product.price : product.sellPrice;
    let stockQty: null | number = product.stockQty;

    /**
     * Update product in database
     */
    const handleOnUpdate = () => {
        if (!isUpdatable) {
            setIsUpdatable(true);
            return
        }
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            }
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure to update this?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                //TODO:Update qty product from mongodb db. Recall products form backend into redux store.
                axios.put(BASE_URL + 'update-product',
                    {
                        // id: product.id,
                        id: "product001",
                        title: product.title,
                        sellPrice: sellPrice,
                        price: price,
                        image: product.image,
                        cType: product.cType,
                        stockQty: stockQty
                    }
                ).then(function (response) {
                    console.log(response);
                })
                    .catch(function (error) {
                        /* handle error.In this, just show the error */
                        console.log(error);
                    })
                    .then(function () {
                        /* always executed */
                    });

                setIsUpdatable(false);

                swalWithBootstrapButtons.fire(
                    'Updated!',
                    'Product has been updated.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                setIsUpdatable(false);
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Product is safe :)',
                    'error'
                )
            }
        })
    }

    /**
     * Delete the product form database.
     */
    const handleOnDelete = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            }
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure to delete this?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                //TODO:Delete product from mongodb db. Recall products form backend into redux store.
                axios.get(BASE_URL + 'delete-product/product006')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        /* handle error.In this, just show the error */
                        console.log(error);
                    })
                    .then(function () {
                        /* always executed */
                    });
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Product is safe :)',
                    'error'
                )
            }
        })
    }

    return (
        <React.Fragment>
            <tr className="checkout-page-item">
                <td className="pt-sm-4 pl-0 tbl-col-num">{index + 1}</td>
                <td className="tbl-col-img px-0 pt-0 pb-1 negation"><Image src={product.image}
                                                                           className="checkout-row-image"/>
                </td>
                <td className="pt-sm-4 pl-1 pl-sm-3 pl-md-5 text-left tbl-col-name">{product.title}</td>
                <td className="pt-sm-4 tbl-col-unit-price">
                    <NumberFormat displayType={!isUpdatable ? 'text' : 'input'} thousandSeparator={true}
                                  className="float-right" prefix={'Rs. '}
                                  style={{maxWidth: '120px'}}
                                  onValueChange={(values) => {
                                      sellPrice = Number(values.value);
                                      if (sellPrice === price) {
                                          price = null;
                                      }
                                  }}
                                  value={product.sellPrice.toFixed(2)}/>
                </td>
                <td className="pt-sm-4 tbl-col-unit-price">
                    <NumberFormat displayType={!isUpdatable ? 'text' : 'input'} thousandSeparator={true}
                                  className="float-right" prefix={'Rs. '}
                                  style={{maxWidth: '120px'}}
                                  onValueChange={values => {
                                      price = Number(values.value) === sellPrice ? null : Number(values.value);
                                  }}
                                  value={product.price ? product.price.toFixed(2) :
                                      product.sellPrice.toFixed(2)}/>
                </td>
                <td className="pt-sm-4 tbl-col-unit-amount px-0">
                    {product.cType}
                </td>
                <td className="pt-sm-4 text-right tbl-col-unit-close pt-2">
                    <NumberFormat displayType={!isUpdatable ? 'text' : 'input'} thousandSeparator={true}
                                  onValueChange={values => stockQty = Number(values.value)}
                                  style={{maxWidth: '60px'}}
                                  value={product.stockQty}/>
                </td>
                <td>
                    <Button onClick={handleOnUpdate} className="negation"
                            variant={isUpdatable ? 'primary' : 'warning'}>{isUpdatable ? 'Update' : 'edit'}
                    </Button>
                </td>
                <td>
                    <Button onClick={handleOnDelete} variant='danger' className="negation">Delete</Button>
                </td>

            </tr>
        </React.Fragment>
    );
}

export default DashboardItem;
