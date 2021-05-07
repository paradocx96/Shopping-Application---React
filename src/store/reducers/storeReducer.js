
import {
    ADD_ALL_PRODUCTS_FROM_DB,
    ADD_PRODUCT,
    SEARCH_PRODUCT,
    SET_DARK_MODE,
} from "../../constants/storeConstants";

const initialState = {
    products: [],
    searchTerm: '',
    isDarkTheme: true,
    isLogged: false,
    selectedCategory: 'All',
}


export const OnlineStoreReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case ADD_ALL_PRODUCTS_FROM_DB:
                return {...state, products: action.payload}
            case ADD_PRODUCT:
                return {...state, products: [...state.products, action.payload]}
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
            default:
                return state;
        }
    }

