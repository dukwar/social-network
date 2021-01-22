import React from "react";
import cl from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import {Call, Search} from "../Profile/Sprite_1";


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

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name: "Екатерина Ульянова"},
        {id:2, name: "Артур Клопов"},
        {id:3, name: "Дима Биткивский"},

    ]

    let messageData = [
        {id:1, name: "Екатерина Ульянова", message: "Чего молчишь? И да, совсем забыла, отъебись!!!"},
        {id:2, name: "Дмитрий Клопов", message: "Здарова увалень"},
        {id:3, name: "Дима Биткивский", message: "Посмотри очередной тупой мем"},

    ]

    return (
        <div className={cl.container}>
            <div className={cl.dialog__inner__left}>
                <div className={cl.search__left}>
                    <Search/>
                    <div className={cl.search__name}> Поиск</div>
                </div>

                <Dialog name={dialogsData[0].name} url={dialogsData[0].id}
                        img="https://sun9-50.userapi.com/impg/6CSGWMsQ1gPVo1KpQIhQ43UDIM0l1zNEySo_ZQ/Tyer1J43_Gk.jpg?size=1197x1600&quality=96&proxy=1&sign=c0642e1200c3c42501be1af4dadc5583&type=album"/>
                <Dialog name={dialogsData[1].name} url={dialogsData[1].id}
                        img="https://sun9-8.userapi.com/impf/c836123/v836123063/32621/Of8brlF4gz8.jpg?size=810x1080&quality=96&proxy=1&sign=4e482d6fbc823872ff63be1ba5c13358&type=album"/>
                <Dialog name={dialogsData[2].name} url={dialogsData[2].id}
                        img="https://sun9-50.userapi.com/impf/c628025/v628025177/16d86/Ihm8fC6wicM.jpg?size=480x480&quality=96&proxy=1&sign=b3ef286a64e4e50dacda442b8bd774b3&type=album"/>

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
               <Message name={messageData[0].name} message={messageData[0].message}   />
               <Message name={messageData[1].name} message={messageData[1].message}  />
               <Message name={messageData[2].name} message={messageData[2].message}  />
            </div>


        </div>
    )
}

export default Dialogs