import React from "react";
import {Music, News, Photos, Video} from "./Sprite_1";
import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import MyPost from "./MyPosts/Post/MyPost";
import Dialog from "../Dialogs/Dialog/Dialog";
import ProfileInfo from "./Profile_Info/Profile_Info";


const infoBirth1 = cl.info__birth + " " + cl.info__birth1


let Profile = () => {
    return (
        // className={cl.content}
        <div>
            <ProfileInfo />



        </div>

    )
}

export default Profile