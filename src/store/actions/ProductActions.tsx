import {ICartedItem, IProduct} from "../../types/product";
import {
    ADD_PRODUCT,
    ADD_TO_CART,
    CHANGE_CARTED_COUNT,
    DELETE_PRODUCT,
    REMOVE_FROM_CART,
    SEARCH_PRODUCT,
    SET_CUSTOMER_LOG_OUT,
    SET_CUSTOMER_LOGED,
    UPDATE_PRODUCT,
} from "../../constants/storeConstants";
import {CartActionTypes, OnlineStoreActionTypes} from "../../types/store/StoreTypes";

/**
 * Add product into the store
 * Admin have a power to add new item into store. Still not implement
 * @param product
 */
export const addProduct = (product: IProduct): OnlineStoreActionTypes => ({
    type: ADD_PRODUCT,
    payload: product
})

/**
 * Update product quantity the store
 * When place order quantity will reduce.
 * Admin can update stoke. Still not implement
 * @param product
 */
export const updateProduct = (product: IProduct): OnlineStoreActionTypes => ({
    type: UPDATE_PRODUCT,
    payload: product
})

/**
 * Delete product quantity the store
 * Admin can remove selected product from store. Still not implement
 * @param product
 */
export const deleteProduct = (product: IProduct): OnlineStoreActionTypes => ({
    type: DELETE_PRODUCT,
    payload: product
})

/**
 * Search product by search bar
 * @param searchTerm
 */
export const searchProduct = (searchTerm: string): OnlineStoreActionTypes => ({
    type: SEARCH_PRODUCT,
    payload: searchTerm
})



/**
 * add a product into cart
 * @param cartedItem
 */
export const addToCart = (cartedItem: ICartedItem): CartActionTypes => ({
    type: ADD_TO_CART,
    payload: cartedItem
})

/**
 * Change the product buying quantity
 * @param cartedItem
 */
export const changeCartedCount = (cartedItem: ICartedItem): CartActionTypes => ({
    type: CHANGE_CARTED_COUNT,
    payload: cartedItem
})

/**
 * Remove a product from the cart
 * @param product
 */
export const removeFromCart = (product: IProduct): CartActionTypes => ({
    type: REMOVE_FROM_CART,
    payload: product
})


export const setCustomerLogIn = (): OnlineStoreActionTypes => ({
    type: SET_CUSTOMER_LOGED
})

export const setCustomerLogOut= (): OnlineStoreActionTypes => ({
    type: SET_CUSTOMER_LOG_OUT
})


