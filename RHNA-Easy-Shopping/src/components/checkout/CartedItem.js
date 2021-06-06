import React, {useEffect, useState} from 'react';
import NumberFormat from "react-number-format";
import {Image} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {changeCartedCount, removeFromCart} from "../../store/actions/ProductActions";


function CartedItem(props) {
    const {index, cartedItem, setIsStateChange, isStateChange} = props;
    const [qty, setQty] = useState(cartedItem.cQty);
    let quantity;
    const dispatch = useDispatch();

    /**
     * Remove the product from the redux store cart.
     */
    const onHandelRemove = () => {
        dispatch(removeFromCart(cartedItem.product));
        setIsStateChange(!isStateChange);
    }

    /**
     * Increase the carted quantity in redux store.
     */
    const increaseQty = () => {
        qty === cartedItem.product.stockQty ? quantity = qty : quantity = qty + 1
        changeCartedCountOfProduct(quantity);
    }

    /**
     * Decrease the carted quantity in redux store.
     */
    const decreaseQty = () => {
        qty === 1 ? quantity = 1 : quantity = qty - 1
        changeCartedCountOfProduct(quantity);
    }

    /**
     * Change the carted quantity in redux store.
     * @param quantity
     */
    const changeCartedCountOfProduct = (quantity) => {
        dispatch(changeCartedCount({product: cartedItem.product, cQty: quantity}));
        setIsStateChange(!isStateChange);
    }

    useEffect(() => {
            setQty(cartedItem.cQty);
        }, [cartedItem]
    )

    return (
        <React.Fragment>
            <tr className="checkout-page-item">
                <td className="pt-sm-4 pl-0 tbl-col-num">{index + 1}</td>
                <td className="tbl-col-img px-0 pt-0 pb-1 negation"><Image src={cartedItem.product.image}
                                                                           className="checkout-row-image"/>
                </td>
                <td className="pt-sm-4 pl-1 pl-sm-3 pl-md-5 text-left tbl-col-name">{cartedItem.product.title}</td>
                <td className="text-center px-0 pt-sm-4 tbl-col-qty">
                    <i className="feather-minus-circle operators mr-2" onClick={decreaseQty}/>
                    {qty}
                    <i className="feather-plus-circle operators ml-2 mr-4" onClick={increaseQty}/>
                </td>
                <td className="pt-sm-4 tbl-col-unit-price">
                    <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right"
                                  prefix={'Rs. '} value={cartedItem.product.sellPrice.toFixed(2)}/>
                </td>
                <td className="pt-sm-4 tbl-col-unit-amount px-0">
                    <NumberFormat displayType={'text'} thousandSeparator={true} className="float-right" prefix={'Rs. '}
                                  value={(cartedItem.product.sellPrice * qty).toFixed(2)}/>
                </td>
                <td className="pt-sm-4 text-right tbl-col-unit-close pt-2">
                    <i className="feather-x" onClick={onHandelRemove}/>
                </td>
            </tr>
        </React.Fragment>
    );
}

export default CartedItem;



