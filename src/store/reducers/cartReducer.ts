import {CartActionTypes, CartState} from "../../types/store/StoreTypes";
import {ADD_TO_CART, CHANGE_CARTED_COUNT, REMOVE_FROM_CART} from "../../constants/storeConstants";
import {ICartedItem} from "../../types/product";

const initialState: CartState = {
    cartedItems: []
}

export const CartReducer =
    (state: CartState = initialState, action: CartActionTypes): CartState => {
        switch (action.type) {
            case ADD_TO_CART:
                return {...state, cartedItems: [...state.cartedItems, action.payload]}

            case CHANGE_CARTED_COUNT:
                return {
                    ...state,
                    cartedItems: state.cartedItems.map((cartedItem: ICartedItem) => {
                        if (cartedItem.product !== action.payload.product) {
                            // This isn't the item we care about - keep it as-is
                            return cartedItem
                        }
                        // Otherwise, this is the one we want - return an updated value
                        return {
                            ...cartedItem,
                            ...action.payload
                        }
                    })
                }

            case REMOVE_FROM_CART:
                return {
                    ...state,
                    cartedItems: state.cartedItems.filter((cItem: ICartedItem) => cItem.product !== action.payload)
                }

            default:
                return state;
        }
    }

