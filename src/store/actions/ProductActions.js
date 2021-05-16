import {
    ADD_ALL_PRODUCTS_FROM_DB,
    ADD_PRODUCT,
    ADD_TO_CART,
    CHANGE_CARTED_COUNT,
    FLUSH_CART,
    REMOVE_FROM_CART,
    SEARCH_PRODUCT,
} from "../../constants/storeConstants";


/**
 * Get all products from the database through REST API.
 * On load the client side app this funtion works.
 * @param products
 */
export const addAllProductsFromDb = (products) => ({
    type: ADD_ALL_PRODUCTS_FROM_DB,
    payload: products
})

/**
 * Add product into the database. (Create new product)
 * Admin have a power to add new item into store. Still not implement
 * @param product
 */
export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
})

/**
 * Search product by search bar
 * @param searchTerm
 */
export const searchProduct = (searchTerm) => ({
    type: SEARCH_PRODUCT,
    payload: searchTerm
})

/**
 * add a product into cart
 * @param cartedItem
 */
export const addToCart = (cartedItem) => ({
    type: ADD_TO_CART,
    payload: cartedItem
})

/**
 * Change the product buying quantity
 * @param cartedItem
 */
export const changeCartedCount = (cartedItem) => ({
    type: CHANGE_CARTED_COUNT,
    payload: cartedItem
})

/**
 * Remove a product from the cart
 * @param product
 */
export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product
})

/**
 * Remove all products from the cart, and reset cart
 */
export const flushCart = () => ({
    type: FLUSH_CART,
})



