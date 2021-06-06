import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
// import {compose} from "redux";

const STORE_STORAGE = 'shopping-application';

export const configureStore = () => {
    let persistedState = {};

    const localStoreState = localStorage.getItem(STORE_STORAGE);
    if (localStoreState) {
        persistedState = JSON.parse(localStoreState);
    }

    //Todo: Change Store in productions. DevTools only for development.
    const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
    // const store = createStore(rootReducer, persistedState, compose(applyMiddleware(thunkMiddleware))); //production

    store.subscribe(() => {
        localStorage.setItem(STORE_STORAGE, JSON.stringify(store.getState()));
    });
    // console.log(store.getState())
    return store;
};




