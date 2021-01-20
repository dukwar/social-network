import React from "react";

import cl from "./MyPost.module.css"
import {Like, View} from "../../Sprite_1";
import {Share} from "../../Sprite_1";

let Post = (props) => {
    return (
        <div>
            <div className={cl.content__photo + " " + cl.content__post2}>
                <div className={cl.header}>
                    <div className={cl.user__data}>
                        <div className={cl.user__img}></div>
                        <div className={cl.data}>
                            <div className={cl.user__name}> Дмитрий Клопов</div>
                            <div className={cl.user__date}> 17 авг 2020</div>
                        </div>
                    </div>
                    <div className={cl.user__burger}>
                        <div className={cl.burger}></div>
                        <div className={cl.burger}></div>
                        <div className={cl.burger}></div>
                    </div>
                </div>

                <div className={cl.post__data}>
                    <div className={cl.data__text}>{props.message}</div>
                    <div className={cl.data__img}><img className={cl.data__img} src={props.img} alt=""/></div>
                </div>

                <footer className={cl.footer}>
                    <div className={cl.buttons}>
                        <div className={cl.like__button}>
                            <Like />
                            <div className={cl.like__count}>{props.count}</div>
                        </div>
                        <div className={cl.share__button}>
                            <Share />
                        </div>

                    </div>
                    <div className={cl.views}>
                        <div className={cl.views__img}>
                            <View />
                        </div>
                        <div className={cl.views__sum}>5263</div>
                    </div>



                </footer>

            </div>
        </div>
    )
}

export default Post