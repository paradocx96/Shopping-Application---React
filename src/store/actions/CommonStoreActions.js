import {SET_DARK_MODE} from "../../constants/storeConstants";

export const setDarkTheme = (isDarkTheme) => ({
    type: SET_DARK_MODE,
    payload: isDarkTheme
})
