import React from "react";
import cl from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message"
import {Call, Search} from "../Profile/Sprite_1";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/message-reducer";





const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} url={dialog.id} img={dialog.img}/>)
    let messagesElements = props.messages.map(message => <Message name={message.name} key={message.id} message={message.message}/>)





    return (
        <div className={cl.container}>
            <div className={cl.dialog__inner__left}>
                <div className={cl.search__left}>
                    <Search/>
                    <div className={cl.search__name}> Поиск</div>
                </div>


                {
                    dialogsElements
                }

            </div>


            <div className={cl.dialog__inner__right}>
                <div className={cl.dialogs__right}>
                    <div className={cl.regals__right}>
                        <div className={cl.user__name}> Екатерина Ульянова</div>
                        <div className={cl.last__time__enter}>была в сети только что</div>
                    </div>
                    <div className={cl.connection}>
                        <div className={cl.call}><Call/></div>
                        <div className={cl.search__right}><Search/></div>
                        <div className={cl.burger}>
                            <div className={cl.burger__inner}></div>
                            <div className={cl.burger__inner}></div>
                            <div className={cl.burger__inner}></div>
                        </div>
                        <div className={cl.user__photo__right}></div>
                    </div>
                </div>
            </div>

            <div className={cl.messages}>

                {
                    messagesElements
                }

                <div className={cl.input}>
                    <input onChange={props.onMessageChange} value={props.newMessageText}  placeholder="Напишите сообщение" className={cl.input__inner} type="text"/>
                    <button onClick={props.addMessage} className={cl.button} type="button">Отправить</button>
                </div>



            </div>



        </div>
    )
}

export default Dialogs