import {OnlineStoreActionTypes, OnlineStoreState} from "../../types/store/StoreTypes";
import {
    ADD_ALL_PRODUCTS_FROM_DB,
    ADD_PRODUCT,
    DELETE_PRODUCT, RESET_SELECTED_CATEGORY,
    SEARCH_PRODUCT, SET_CUSTOMER_LOG_OUT, SET_CUSTOMER_LOGED, SET_DARK_MODE,
    UPDATE_PRODUCT,
} from "../../constants/storeConstants";

const initialState: OnlineStoreState = {
    products: [],
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

