import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import {setDarkTheme} from "../store/actions/CommonStoreActions";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkModeToggleDiv: React.FC = () => {
    const isDark: boolean = useSelector((state: RootState) => state.onlineStoreReducer.isDarkTheme);
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
            size={80}
        />
        // <button onClick={handleOnThemeChange}>Theme</button>
    )

}
export default DarkModeToggleDiv;
