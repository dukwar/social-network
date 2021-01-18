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

let Profile = () => {
    return (
        <div className="content">

            {/*===================================COntent 1 =================================*/}
            <div className="content_1">

                <div className="user__photo">
                    <img className="user__photo-2"
                         src="https://i.pinimg.com/originals/8b/0e/b8/8b0eb841d5ec805fe905b0928bc64980.jpg" alt=""/>
                    <div className="redact">
                        <h4 className="redact__name">Редактировать</h4>
                    </div>
                    <div className="redact redact--1">
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </div>
                </div>

                <div className="user__info">
                    <div className="user__name">
                        <h3 className="user__name-1">Дмитрий Клопов</h3>
                        <h5>заходил 20 минут назад</h5>

                    </div>
                    <div className="user__regals">
                        <div className="day__birth">
                            <h5 className="info__birth">День рождения:</h5>

                            <h5 className="info__birth">Город:</h5>

                            <h5 className="info__birth">Место работы:</h5>

                        </div>
                        <div className="day__birth">
                            <h5 className="info__birth info__birth--1">2 февраля</h5>
                            <h5 className="info__birth info__birth--1">Владимир</h5>
                            <h5 className="info__birth info__birth--1">Рифмы и Панчи</h5>
                        </div>

                    </div>

                    <div className="social__info">
                        <div className="social__id">
                            <h3 className="social__number">487</h3>
                            <h4 className="social__name">друзей</h4>
                        </div>
                        <div className="social__id">
                            <h3 className="social__number">261</h3>
                            <h4 className="social__name">подписчик</h4>
                        </div>
                        <div className="social__id">
                            <h3 className="social__number">6</h3>
                            <h4 className="social__name">фотографий</h4>
                        </div>
                        <div className="social__id">
                            <h3 className="social__number">2</h3>
                            <h4 className="social__name">отметки</h4>
                        </div>
                        <div className="social__id">
                            <h3 className="social__number">463</h3>
                            <h4 className="social__name">видеозаписи</h4>
                        </div>

                    </div>
                </div>
            </div>

            {/*===================================COntent 1 =================================*/}




            {/*===================================COntent-FILE =================================*/}

            <div className="content__file">
                {/*===================================COntent-Friends =================================*/}
                <div className="content__friends">
                    <h4 className="friends__names">Друзья</h4>
                    <h4 className="friends__names friends__number">485</h4>
                    <div className="content__friends__inner">
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>
                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>
                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>

                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>

                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>

                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>

                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>

                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>

                        </div>
                        <div className="friends__photo">
                            <h5 className="name__friend">Дима</h5>

                        </div>

                    </div>
                </div>

                {/*===================================COntent-Friends =================================*/}






                {/*===================================COntent-Photo =================================*/}
                <div className="content__photo">
                    <div className="profile__photo"></div>

                    <div className="profile__photo"></div>

                    <div className="profile__photo"></div>

                    <div className="profile__photo"></div>
                </div>
                {/*===================================COntent-Photo =================================*/}






                {/*===================================COntent-Post =================================*/}
                <div className="content__photo content--post">
                    <h5 className="content--post__name">Что у вас нового?</h5>
                    <div className="key__input">
                        <div className="key__item">
                            <Photos/>
                        </div>
                        <div className="key__item">
                            <Music/>
                        </div>
                        <div className="key__item">
                            <Video/>
                        </div>
                        <div className="key__item">
                            <News/>
                        </div>
                    </div>
                </div>
                {/*===================================COntent-Post =================================*/}






                {/*===================================POST =================================*/}

                <div className="content__photo content--post-2">

                </div>

                {/*===================================POST =================================*/}




            </div>


            {/*<div className="content_2">*/}
            {/*    <h1>My posts</h1>*/}
            {/*    <input className="input" type="text" placeholder="your news"/>*/}
            {/*    <button className="button" type="button">Send</button>*/}
            {/*</div>*/}

            {/*===================================COntent-FILE =================================*/}
        </div>

    )
}

export default Profile