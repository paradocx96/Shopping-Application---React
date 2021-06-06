import React, {useEffect, useState} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import {useDispatch} from "react-redux";
import DashboardItem from "../components/dashboard/DashboardItem";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {addAllProductsFromDb} from "../store/actions/ProductActions";
import {configureStore} from "../store";

/**
/**
 * Show all product list for admin.
 * @constructor
 */
function DashBoard() {
    // const products = useSelector((state) => state.getState);
    const [products, setProducts] = useState([]);
    const history = useHistory();
    const onHandelCreateProduct = () => history.push('/create-product');
    const dispatch = useDispatch();
    const [isDisableButtons, setIsDisableButtons] = useState(false);

    useEffect(() => {
        setProducts(configureStore().getState().onlineStoreReducer.products);
        axios.get(process.env.REACT_APP_BACKEND_STARTING_URL + 'seller/get-all-product')
            .then(function (response) {
                dispatch(addAllProductsFromDb(response.data));
            })
            .catch(function (error) {
                /* handle error.In this, just show the error */
                console.log(error);
            }).then(function (){
            setProducts(configureStore().getState().onlineStoreReducer.products);
        })
    }, [isDisableButtons])

    return (
        <div className='dashboard-page background-color-1  pb-4'>
            <Container>
                <Table responsive className="table-data">
                    <thead>
                    <tr>
                        <td colSpan={7}/>
                        <td colSpan={2}>
                            <Button className="custom-primary-button" onClick={onHandelCreateProduct}>Add new
                                Product</Button>
                        </td>
                    </tr>
                    <tr>
                        <th className="index-col px-0">#</th>
                        <th className="text-center" colSpan={2}>Item</th>
                        <th className="text-center">sellPrice</th>
                        <th className="text-right">Price</th>
                        <th className="text-center">type</th>
                        <th className="text-center">stockQty</th>
                        <th className="text-center" colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((product, index) =>
                            <DashboardItem key={index} index={index} product={product}
                                           isDisableButtons={isDisableButtons}
                                           setIsDisableButtons={setIsDisableButtons}/>)
                    }

                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default DashBoard;
