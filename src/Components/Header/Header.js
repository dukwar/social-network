import React from "react";
import IconUmbrella from "../Profile/Sprite_1";
import cl from "./Header.module.css"

let Header = () => {
    return (
        <header className={cl.header}>

            <img src="https://img.icons8.com/officel/80/000000/logo.png"/>
            <div className={cl.logo__name}><h2>вконтакте</h2></div>

        </header>
    )
}

export default Header