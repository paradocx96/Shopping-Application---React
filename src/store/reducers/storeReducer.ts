import {OnlineStoreActionTypes, OnlineStoreState} from "../../types/store/StoreTypes";
import {
    ADD_ALL_PRODUCTS_FROM_DB,
    ADD_PRODUCT,
    DELETE_PRODUCT, RESET_SELECTED_CATEGORY,
    SEARCH_PRODUCT, SET_CUSTOMER_LOG_OUT, SET_CUSTOMER_LOGED, SET_DARK_MODE,
    UPDATE_PRODUCT,
} from "../../constants/storeConstants";

import bun1 from '../../assets/images/products/bun1.jpg';
import bun2 from '../../assets/images/products/bun2.jpg';
import bun3 from '../../assets/images/products/bun3.jpg';
import bun4 from '../../assets/images/products/bun4.jpg';
import bun5 from '../../assets/images/products/bun5.jpg';
import cake1 from '../../assets/images/products/cake1.jpg';
import cake2 from '../../assets/images/products/cake2.jpg';
import cake3 from '../../assets/images/products/cake3.jpg';
import cake4 from '../../assets/images/products/cake4.jpg';
import cake5 from '../../assets/images/products/cake5.jpg';

const initialState: OnlineStoreState = {
    products: [
        {title: "Bun-1", sellPrice: 40, price: 45, image: bun1, cType: 'Bakery', stockQty: 10},
        {title: "Bun-2", sellPrice: 40, price: 45, image: bun2, cType: 'Bakery', stockQty: 10},
        {title: "Bun-3", sellPrice: 40, price: 45, image: bun3, cType: 'Bakery', stockQty: 10},
        {title: "Bun-4", sellPrice: 40, price: 45, image: bun4, cType: 'Bakery', stockQty: 10},
        {title: "Bun-5", sellPrice: 40, price: 45, image: bun5, cType: 'Bakery', stockQty: 10},
        {title: "cake-1", sellPrice: 40, price: 45, image: cake1, cType: 'Bakery', stockQty: 10},
        {title: "cake-2", sellPrice: 40, price: 45, image: cake2, cType: 'Bakery', stockQty: 10},
        {title: "cake-3", sellPrice: 40, price: 45, image: cake3, cType: 'Bakery', stockQty: 10},
        {title: "cake-4", sellPrice: 40, price: 45, image: cake4, cType: 'Bakery', stockQty: 40},
        {title: "cake-5", sellPrice: 40, price: 45, image: cake5, cType: 'Bakery', stockQty: 40},
    ],
    searchTerm: '',
    isDarkTheme: true,
    isLogged: false,
    selectedCategory: 'All',

}

export const OnlineStoreReducer =
    (state: OnlineStoreState = initialState, action: OnlineStoreActionTypes): OnlineStoreState => {
        switch (action.type) {
            case ADD_ALL_PRODUCTS_FROM_DB:
                return {...state, products: action.payload}
            case ADD_PRODUCT:
                return {...state, products: [...state.products, action.payload]}
            case UPDATE_PRODUCT:
                return state;
            case DELETE_PRODUCT:
                return state;
            case SEARCH_PRODUCT:
                return {
                    ...state,
                    searchTerm: state.searchTerm = action.payload
                }
            case SET_DARK_MODE:
                return {
                    ...state,
                    isDarkTheme: action.payload
                }
            case SET_CUSTOMER_LOGED:
                return {
                    ...state,
                    isLogged: true
                }
            case SET_CUSTOMER_LOG_OUT:
                return {
                    ...state,
                    isLogged: false
                }
            case RESET_SELECTED_CATEGORY:
                return {
                    ...state,
                    selectedCategory: action.payload
                }
            default:
                return state;
        }
    }

