import React from "react";
import cl from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message"
import {Call, Search} from "../Profile/Sprite_1";





const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} url={dialog.id} img={dialog.img}/>)
    let messagesElements = props.state.messages.map(message => <Message name={message.name} message={message.message}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value

    }

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
                    <input ref={newMessageElement} placeholder="Напишите сообщение" className={cl.input__inner} type="text"/>
                    <button onClick={addMessage} className={cl.button} type="button">Отправить</button>
                </div>



            </div>



        </div>
    )
}

export default Dialogs