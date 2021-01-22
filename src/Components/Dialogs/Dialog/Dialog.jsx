import cl from "./Dialog.module.css";
import React from "react";
import {BrowserRouter,NavLink} from "react-router-dom";


let Dialog = (props) => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to={"/dialogs/" +  props.url} className={cl.dialogs}>
                    <div className={cl.user__photo__left}>
                        <img className={cl.user__photo__left__inner} src={props.img} alt=""/>
                    </div>
                    <div className={cl.line}>

                        <div className={cl.name__and__timewrite}>
                            <div  className={cl.user__name__left}>{props.name}</div>
                            <div className={cl.last__time__write}>17:53</div>
                        </div>
                        <div className={cl.in__message}>Привет лох</div>
                    </div>
                </NavLink>
            </div>
        </BrowserRouter>
    )

}

export default Dialog