import cl from "./Message.module.css"
import React from "react";


const Message = (props) => {
    return (
        <div>
            <div className={cl.messages__inner}>
                <div className={cl.message__photo__right}>
                    <div className={cl.user__photo__right}></div>
                </div>
                <div className={cl.name__and__message}>
                    <div className={cl.message__name}> {props.name}</div>
                    <div className={cl.message__text}>{props.message}</div>
                </div>
            </div>
        </div>
    )
}

export default Message