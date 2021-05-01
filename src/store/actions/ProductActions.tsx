import {ICartedItem, IProduct} from "../../types/product";
import {
    ADD_ALL_PRODUCTS_FROM_DB,
    ADD_PRODUCT,
    ADD_TO_CART,
    CHANGE_CARTED_COUNT,
    FLUSH_CART,
    REMOVE_FROM_CART,
    SEARCH_PRODUCT,
    SET_CUSTOMER_LOG_OUT,
    SET_CUSTOMER_LOGED,
} from "../../constants/storeConstants";
import {CartActionTypes, OnlineStoreActionTypes} from "../../types/store/StoreTypes";

/**
 * Get all products from the database through REST API.
 * On load the client side app this funtion works.
 * @param products
 */
export const addAllProductsFromDb = (products: IProduct[]): OnlineStoreActionTypes => ({
    type: ADD_ALL_PRODUCTS_FROM_DB,
    payload: products
})

/**
 * Add product into the database. (Create new product)
 * Admin have a power to add new item into store. Still not implement
 * @param product
 */
export const addProduct = (product: IProduct): OnlineStoreActionTypes => ({
    type: ADD_PRODUCT,
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

/**
 * Remove all products from the cart, and reset cart
 */
export const flushCart = (): CartActionTypes => ({
    type: FLUSH_CART,
})

export const setCustomerLogOut= (): OnlineStoreActionTypes => ({
    type: SET_CUSTOMER_LOG_OUT
})


