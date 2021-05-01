import {SET_DARK_MODE} from "../../constants/storeConstants";
import {SetDarkTheme} from "../../types/store/StoreTypes";

export const setDarkTheme = (isDarkTheme: boolean): SetDarkTheme => ({
    type: SET_DARK_MODE,
    payload: isDarkTheme
})
