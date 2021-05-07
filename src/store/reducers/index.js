import {combineReducers} from "redux";
import {OnlineStoreReducer} from "./storeReducer";
import {CartReducer} from "./cartReducer";


export const rootReducer = combineReducers({
    onlineStoreReducer: OnlineStoreReducer,
    cartReducer: CartReducer
});

// export type
// let RootState;
// RootState = ReturnType<typeof rootReducer>;
