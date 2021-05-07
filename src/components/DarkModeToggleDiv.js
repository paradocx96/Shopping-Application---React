import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "../store/reducers";
import {setDarkTheme} from "../store/actions/CommonStoreActions";
import DarkModeToggle from "react-dark-mode-toggle";

function DarkModeToggleDiv() {
    // const isDark = useSelector((state) => state.onlineStoreReducer.isDarkTheme);
    const isDark = true;
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            return
        }
        document.documentElement.classList.remove('dark');
    }, [isDark])

    const dispatch = useDispatch();
    const handleOnThemeChange = () => {
        if (isDark) {
            dispatch(setDarkTheme(false));
        } else {
            dispatch(setDarkTheme(true));
        }
    }

    return (
        <DarkModeToggle
            onChange={handleOnThemeChange}
            checked={isDark}
            size={50}
        />
    )
}
export default DarkModeToggleDiv;
