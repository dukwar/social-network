import React from "react";
import cl from "./Friends.module.css"
import axios from "axios";
import user_photo from "../../img/user_photo.jpg"
import Friend from "./Friend/Friend";
import {Search} from "../Profile/Sprite_1";
import {followThunkCreator, toggleFollowingProgress} from "../../Redux/friends-reducer";


const Friends = (props) => {

    let activeLine = [cl.active__line__inner, '+', ' ', '+', ]

    if (props.line) {
        activeLine.push(cl.active__line__now)
    } else if (props.line === false) {
        activeLine.pop(cl.active__line__now)
    }


    let friends = props.friends.map(f => <Friend f = {f} followingInProgress={props.followingInProgress}
                                                 unfollow={props.unfollow}
                                                 follow={props.follow}
                                                 toggleFollowingProgress={props.toggleFollowingProgress}
                                                 followThunkCreator={props.followThunkCreator}
                                                 unfollowThunkCreator={props.unfollowThunkCreator}
    /> )
    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let end = props.pageEnd + 10
    let newPages = pages.slice(props.pageEnd, end)




    return (

        <div className={props.isFetching ? cl.displayNone : cl.friends__wrapper}>

            <div className={cl.friends__header}>
                <div className={cl.friends__active}>
                    <div onClick={props.activeLink}  className={cl.all__friends}>Все друзья
                        <div className={cl.friends__number}>438</div>

                    </div>
                    <div onClick={props.activeLink2} className={cl.friends__online}>Друзья онлайн
                        <div className={cl.friends__number}>32</div>

                    </div>
                </div>

                <div className={cl.search__header}>Найти друзей</div>
            </div>
            <div className={cl.active__line}>
                <div className={activeLine.join(' ')}></div>
            </div>
            <div className={cl.line}></div>

            <div className={cl.search__friends}>
                <div className={cl.search__sprite}>
                    <Search />
                </div>
                <input type="text" className={cl.input} placeholder="Поиск друзей"/>
                <div  className={cl.parametrs}>Параметры</div>
            </div>
            <div className={cl.friend__wrapper}>
                {
                    friends
                }

            </div>

            <div className={cl.friends__navigation}>
                <button onClick={props.f1} className={cl.button}>Показать больше</button>
                <div className={cl.pagination}>
                    {newPages.map((page) => {
                        return <a onClick={(event) =>props.onPageChanged(page, event)}
                                  className={props.currentPage === page && cl.selectedPage}>{page}</a>
                    })}
                </div>
            </div>


        </div>

    )
}

export default Friends