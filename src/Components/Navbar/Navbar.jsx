import React from "react";
import {Music, User, News, Messenger, Photos, Video, Community, Friends, Settings} from "../Profile/Sprite_1";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

let Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <User/>
                </div>
                <NavLink to="/profile" className={classes.nav__name}>Моя страница</NavLink>
            </div>
            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <News/>
                </div>
                <a href="/news"  className={classes.nav__name}>Новости</a>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Messenger/>
                </div>
                <NavLink to="/dialogs" className={classes.nav__name}>Мессенджер</NavLink>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Friends/>
                </div>
                <a href="" className={classes.nav__name}>Друзья</a>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Community/>
                </div>
                <a href="" className={classes.nav__name}>Сообщества</a>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Photos/>
                </div>
                <a href="" className={classes.nav__name}>Фотографии</a>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Music/>
                </div>
                <a href="" className={classes.nav__name}>Музыка</a>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Video/>
                </div>
                <a href="" className={classes.nav__name}>Видео</a>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Settings/>
                </div>
                <a href="" className={classes.nav__name}>Настройки</a>
            </div>
        </nav>
    )
}

export default Navbar