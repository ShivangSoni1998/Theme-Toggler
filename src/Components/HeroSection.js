import React, {useContext} from "react";
import Themecontext from "../Context/Themecontext";
import AppTheme from "../Colors";
import ThemeToggler from "./ThemeToggler";

const HeroSection = () => {

    const theme = useContext(Themecontext)[0]
    const currentTheme =  AppTheme[theme]

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>
                Context API theme toggler
            </h1>
            <p>This is nice paragraph</p>
            {/* <button
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#FFF",
                    border: `${currentTheme.border}`
                }}
            >Click Me</button> */}
            <ThemeToggler />
        </div>
    )
}

export default HeroSection;