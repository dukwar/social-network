import React from "react";
import cl from "../Profile.module.css";
import {Music, News, Photos, Video} from "../Sprite_1";
import MyPosts from "../MyPosts/MyPosts";
import App from "../../../App";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader/preloader";


let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        // className={cl.content}
        <div>

            {/*===================================COntent 1 =================================*/}
            <div className={cl.content_1}>

                <div className={cl.user__photo}>
                    <div className={cl.user__photo__inner}>
                    <img className={cl.user__photo2}
                         src={props.profile.photos.large} alt=""/>
                    </div>
                    <div className={cl.redact}>
                        <h4 className={cl.redact__name}>Редактировать</h4>
                    </div>
                    <div className={cl.redact + " " + cl.redact1}>
                        <div className={cl.burger}></div>
                        <div className={cl.burger}></div>
                        <div className={cl.burger}></div>
                    </div>
                </div>

                <div className={cl.user__info}>
                    <div className={cl.user__name}>
                        <div className={cl.user_name_about}>
                            <h3 className={cl.user__name1}>{props.profile.fullName}</h3>
                            <div className={cl.user__about}>{props.profile.aboutMe}</div>
                        </div>

                        <h5 className={cl.enter}>заходил 20 минут назад</h5>
                    </div>

                    <div className={cl.user__regals}>
                        <div className={cl.day__birth}>
                            <h5 className={cl.info__birth}>День рождения:</h5>

                            <h5 className={cl.info__birth}>Город:</h5>

                            <h5 className={cl.info__birth}>Место работы:</h5>

                        </div>
                        <div className={cl.day__birth}>
                            <h5 className={cl.info__birth1}>2 февраля</h5>
                            <h5 className={cl.info__birth1}>Владимир</h5>
                            <h5 className={cl.info__birth1}>Рифмы и Панчи</h5>
                        </div>
                    </div>



                    <div className={cl.social__info}>
                        <div className={cl.social__id}>
                            <h3 className={cl.social__number}>487</h3>
                            <h4 className={cl.social__name}>друзей</h4>
                        </div>
                        <div className={cl.social__id}>
                            <h3 className={cl.social__number}>261</h3>
                            <h4 className={cl.social__name}>подписчик</h4>
                        </div>
                        <div className={cl.social__id}>
                            <h3 className={cl.social__number}>6</h3>
                            <h4 className={cl.social__name}>фотографий</h4>
                        </div>
                        <div className={cl.social__id}>
                            <h3 className={cl.social__number}>2</h3>
                            <h4 className={cl.social__name}>отметки</h4>
                        </div>
                        <div className={cl.social__id}>
                            <h3 className={cl.social__number}>463</h3>
                            <h4 className={cl.social__name}>видеозаписи</h4>
                        </div>

                    </div>
                </div>

            </div>

            {/*===================================COntent 1 =================================*/}


            {/*===================================COntent-FILE =================================*/}

            <div className={cl.content__file}>

                <div className={cl.dialog__inner__left}>
                    <div className={cl.content__friends}>
                        <h4 className={cl.friends__names}>Друзья</h4>
                        <h4 className={cl.friends__names + " " + cl.friends__number}>485</h4>
                        <div className={cl.content__friends__inner}>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>
                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>
                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>

                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>

                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>

                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>

                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>

                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>

                            </div>
                            <div className={cl.friends__photo}>
                                <h5 className={cl.name__friend}>Дима</h5>

                            </div>

                        </div>
                    </div>


                </div>

                <div className={cl.dialog__inner__right}>

                    <div className={cl.content__photo}>
                        <div className={cl.profile__photo}></div>

                        <div className={cl.profile__photo}></div>

                        <div className={cl.profile__photo}></div>

                        <div className={cl.profile__photo}></div>
                    </div>




                    {/*===================================POST =================================*/}
                    <MyPostsContainer />

                </div>

                {/*===================================COntent-Friends =================================*/}


                {/*===================================COntent-Friends =================================*/}


                {/*===================================COntent-Photo =================================*/}

                {/*===================================POST =================================*/}
            </div>
            {/*===================================COntent-FILE =================================*/}
        </div>

    )
}

export default ProfileInfo