import {RESET_SELECTED_CATEGORY, SET_DARK_MODE} from "../../constants/storeConstants";
import {OnlineStoreActionTypes, SetDarkTheme} from "../../types/store/StoreTypes";

export const setDarkTheme = (isDarkTheme: boolean): SetDarkTheme => ({
    type: SET_DARK_MODE,
    payload: isDarkTheme
})


export const resetSelectedCategory = (category: string): OnlineStoreActionTypes => ({
    type: RESET_SELECTED_CATEGORY,
    payload: category
})
