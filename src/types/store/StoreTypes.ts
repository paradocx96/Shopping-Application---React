import {ICartedItem, IProduct} from "../product";
import {
    ADD_PRODUCT,
    ADD_TO_CART,
    DELETE_PRODUCT,
    REMOVE_FROM_CART,
    CHANGE_CARTED_COUNT,
    UPDATE_PRODUCT,
    SEARCH_PRODUCT,
    SET_DARK_MODE,
    SET_CUSTOMER_LOGED,
    SET_CUSTOMER_LOG_OUT,
    RESET_SELECTED_CATEGORY,
    ADD_ALL_PRODUCTS_FROM_DB, FLUSH_CART
} from "../../constants/storeConstants";


export interface CartState {
    cartedItems: ICartedItem[];
}

export interface OnlineStoreState {
    products: IProduct[];
    searchTerm: string;
    isDarkTheme: boolean;
    isLogged: boolean;
    selectedCategory: string;
}

export interface SetDarkTheme {
    type: typeof SET_DARK_MODE;
    payload: boolean;
}

export interface ResetSelectedCategory {
    type: typeof RESET_SELECTED_CATEGORY;
    payload: string;
}

export interface SetCustomerLogged {
    type: typeof SET_CUSTOMER_LOGED
}

export interface SetCustomerLoggedOut {
    type: typeof SET_CUSTOMER_LOG_OUT
}

/**
 * Cart action types.
 */
export interface AddToCart {
    type: typeof ADD_TO_CART;
    payload: ICartedItem;
}

export interface ChangeCartedQty {
    type: typeof CHANGE_CARTED_COUNT;
    payload: ICartedItem;
}

export interface RemoveFromCart {
    type: typeof REMOVE_FROM_CART;
    payload: IProduct;
}

export interface FlushCart {
    type: typeof FLUSH_CART;
}

/**
 * Still not use Add product, Update product, Delete Product
 * Search product only have implement still this level
 */
export interface AddAllProductsFromDb {
    type: typeof ADD_ALL_PRODUCTS_FROM_DB;
    payload: IProduct[];
}

export interface AddProduct {
    type: typeof ADD_PRODUCT;
    payload: IProduct;
}

export interface UpdateProduct {
    type: typeof UPDATE_PRODUCT;
    payload: IProduct;
}

export interface DeleteProduct {
    type: typeof DELETE_PRODUCT;
    payload: IProduct;
}

export interface SearchProduct {
    type: typeof SEARCH_PRODUCT;
    payload: string;
}


export type OnlineStoreActionTypes =
    AddAllProductsFromDb
    | AddProduct
    | UpdateProduct
    | DeleteProduct
    | SearchProduct
    | SetDarkTheme
    | SetCustomerLogged
    | SetCustomerLoggedOut
    | ResetSelectedCategory

export type CartActionTypes = AddToCart | ChangeCartedQty | RemoveFromCart | FlushCart
