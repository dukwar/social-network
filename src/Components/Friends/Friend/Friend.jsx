import React from "react";
import cl from "./Friend.module.css"
import {NavLink} from "react-router-dom";


let Friend = (props) => {

    let follow = () => {
        props.followThunkCreator(props.f.id)

    }

    let unfollow = () => {
        props.unfollowThunkCreator(props.f.id)

    }


    return (
        <div className={cl.user__wrapper}>
            <div>
                <NavLink to={'/profile/' + props.f.id}>
                    <img className={cl.userPhoto}
                         src="https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png"
                         alt=""/>
                </NavLink>

            </div>
            <div className={cl.user}>
                <div className={cl.user__name}>{props.f.name}</div>
                <div className={cl.user__info}>ВлГУ им. А. Г. и Н. Г. Столетовых</div>
                <div className={cl.user__message}>Написать сообщение</div>
            </div>

            <div>
                {props.f.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.f.id)} className={cl.button}
                              onClick={unfollow}>Отписаться</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.f.id)} className={cl.button}
                              onClick={follow}>Добавить в друзья</button>}
            </div>
            <div className={cl.burger}>
                <div className={cl.burger__inner}></div>
                <div className={cl.burger__inner}></div>
                <div className={cl.burger__inner}></div>
            </div>


        </div>

    )
}


export default Friend