import React, {useContext} from "react";
import AppTheme from "../Colors";
import Themecontext from "../Context/Themecontext";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(Themecontext);
    const theme = useContext(Themecontext)[0]
    const currentTheme =  AppTheme[theme] 

    return (
        <button onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }} style={{
            backgroundColor: "#26ae60",
            padding: "10px 150px",
            fontSize: "20px",
            color: "#FFF",
            border: `${currentTheme.border}`
        }}>
            <span>{themeMode === "light" ? "lights Off" : "lights On"}</span>
        </button>
    )
}

export default ThemeToggler;