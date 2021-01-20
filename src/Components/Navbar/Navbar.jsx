import React from "react";
import {Music} from "../Profile/Sprite_1";
import {User} from "../Profile/Sprite_1";
import {News} from "../Profile/Sprite_1";
import {Messenger} from "../Profile/Sprite_1";
import {Photos} from "../Profile/Sprite_1";
import {Video} from "../Profile/Sprite_1";
import {Community} from "../Profile/Sprite_1";
import {Friends} from "../Profile/Sprite_1";
import {Settings} from "../Profile/Sprite_1";
import classes from "./Navbar.module.css"

let Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__link}>
                <div className={classes.message}>
                   <User />
                </div>
                <h3 className={classes.nav__name}>Моя страница</h3>
            </div>
            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <News />
                </div>
                <h3 className={classes.nav__name}>Новости</h3>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Messenger />
                </div>
                <h3 className={classes.nav__name}>Мессенджер</h3>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Friends />
                </div>
                <h3 className={classes.nav__name}>Друзья</h3>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Community />
                </div>
                <h3 className={classes.nav__name}>Сообщества</h3>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Photos />
                </div>
                <h3 className={classes.nav__name}>Фотографии</h3>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Music />
                </div>
                <h3 className={classes.nav__name}>Музыка</h3>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Video />
                </div>
                <h3 className={classes.nav__name}>Видео</h3>
            </div>

            <div className={classes.nav__link}>
                <div className={classes.message}>
                    <Settings />
                </div>
                <h3 className={classes.nav__name}>Настройки</h3>
            </div>
        </nav>
    )
}

export default Navbar