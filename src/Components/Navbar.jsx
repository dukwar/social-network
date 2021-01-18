import React from "react";
import {Music} from "./Sprite_1";
import {User} from "./Sprite_1";
import {News} from "./Sprite_1";
import {Messenger} from "./Sprite_1";
import {Photos} from "./Sprite_1";
import {Video} from "./Sprite_1";
import {Community} from "./Sprite_1";
import {Friends} from "./Sprite_1";
import {Settings} from "./Sprite_1";

let Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__link">
                <div className="message">
                   <User />
                </div>
                <h3 className="nav__name">Моя страница</h3>
            </div>
            <div className="nav__link">
                <div className="message">
                    <News />
                </div>
                <h3 className="nav__name">Новости</h3>

            </div>
            <div className="nav__link">

                <div className="message">
                    <Messenger />
                </div>
                <h3 className="nav__name">Мессенджер</h3>
            </div>
            <div className="nav__link">
                <div className="message">
                    <Friends />
                </div>
                <h3 className="nav__name">Друзья</h3>

            </div>
            <div className="nav__link">
                <div className="message">
                    <Community />
                </div>
                <h3 className="nav__name">Сообщества</h3>

            </div>
            <div className="nav__link">
                <div className="message">
                    <Photos />
                </div>
                <h3 className="nav__name">Фотографии</h3>

            </div>
            <div className="nav__link">
               <div className="message">
                   <Music />
               </div>
                <h3 className="nav__name">Музыка</h3>

            </div>
            <div className="nav__link">
                <div className="message">
                    <Video />
                </div>
                <h3 className="nav__name">Видео</h3>

            </div>
            <div className="nav__link">
                <div className="message">
                    <Settings />
                </div>
                <h3 className="nav__name">Настройки</h3>

            </div>
        </nav>
    )
}

export default Navbar