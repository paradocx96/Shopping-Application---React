import {ICartedItem, IProduct} from "../product";
import {
    ADD_ALL_PRODUCTS_FROM_DB,
    ADD_PRODUCT,
    ADD_TO_CART,
    CHANGE_CARTED_COUNT,
    FLUSH_CART,
    REMOVE_FROM_CART,
    SEARCH_PRODUCT,
    SET_DARK_MODE
} from "../../constants/storeConstants";

//
// export interface CartState {
//     cartedItems: ICartedItem[];
// }
//
// export interface OnlineStoreState {
//     products: IProduct[];
//     searchTerm: string;
//     isDarkTheme: boolean;
//     isLogged: boolean;
//     selectedCategory: string;
// }
//
// export interface SetDarkTheme {
//     type: typeof SET_DARK_MODE;
//     payload: boolean;
// }
//
//
// /**
//  * Cart action types.
//  */
// export interface AddToCart {
//     type: typeof ADD_TO_CART;
//     payload: ICartedItem;
// }
//
// export interface ChangeCartedQty {
//     type: typeof CHANGE_CARTED_COUNT;
//     payload: ICartedItem;
// }
//
// export interface RemoveFromCart {
//     type: typeof REMOVE_FROM_CART;
//     payload: IProduct;
// }
//
// export interface FlushCart {
//     type: typeof FLUSH_CART;
// }
//
// export interface AddAllProductsFromDb {
//     type: typeof ADD_ALL_PRODUCTS_FROM_DB;
//     payload: IProduct[];
// }
//
//
// export interface AddProduct {
//     type: typeof ADD_PRODUCT;
//     payload: IProduct;
// }
//
// export interface SearchProduct {
//     type: typeof SEARCH_PRODUCT;
//     payload: string;
// }
//
//
// export type OnlineStoreActionTypes =
//     AddAllProductsFromDb
//     | AddProduct
//     | SearchProduct
//     | SetDarkTheme
//
// export type CartActionTypes = AddToCart | ChangeCartedQty | RemoveFromCart | FlushCart
