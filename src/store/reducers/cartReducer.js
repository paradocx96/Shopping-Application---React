import {ADD_TO_CART, CHANGE_CARTED_COUNT, FLUSH_CART, REMOVE_FROM_CART} from "../../constants/storeConstants";


const initialState = {
    cartedItems: []
}

export const CartReducer =
    (state= initialState, action) => {
        switch (action.type) {
            case ADD_TO_CART:
                console.log(action.payload)
                return {...state, cartedItems: [...state.cartedItems, action.payload]}

            case CHANGE_CARTED_COUNT:
                console.log(action.payload)
                return {
                    ...state,
                    cartedItems: state.cartedItems.map((cartedItem) => {
                        if (cartedItem.product.id !== action.payload.product.id) {
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
                console.log(action.payload);
                console.log("_________________");
                console.log(state.cartedItems);
                return {
                    ...state,
                    cartedItems: state.cartedItems.filter((cItem) => cItem.product.id !== action.payload.id)
                }

            case FLUSH_CART:
                return {
                    ...state,
                    cartedItems: []
                }

            default:
                return state;
        }
    }

