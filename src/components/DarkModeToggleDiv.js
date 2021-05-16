import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function DarkModeToggleDiv() {
    const [isDark, setIsDark] = useState(false);

    const handleOnThemeChange = () => {
        if (isDark) {
            setIsDark(false);
            document.body.classList.remove("dark");
        } else {
            setIsDark(true);
            document.body.classList.add("dark");
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
