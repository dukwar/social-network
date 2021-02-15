import React from "react";
import Rolling from "../../../img/Rolling.svg";
import cl from "./preloader.module.css"





let Preloader = () => {

    return (
        <div className={cl.preloader}>
            <div className={cl.preloader__inner}>
                <img className={cl.preloader__img} src={Rolling} />
            </div>

        </div>

    )
}

export default Preloader