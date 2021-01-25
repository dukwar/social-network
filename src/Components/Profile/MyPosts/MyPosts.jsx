import React from "react";
import cl from "./MyPosts.module.css"
import Post from "./Post/MyPost";
import MyPost from "./Post/MyPost";
import l from "../Profile.module.css";
import {Music, News, Photos, Video} from "../Sprite_1";




let MyPosts = (props) => {

   let postElements = props.posts.map(post => <MyPost count={post.count} message={post.message} img={post.img} />
   )

    let newPostElement = React.createRef()

    let addPost = () => {
       let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ""

    }


    return (
       <div>

           {/*===================================COntent-Post =================================*/}
           <div className={l.content__photo + " " + l.content__post}>
               <input ref={newPostElement} placeholder="Что у вас нового?" className={l.content__post__name}></input>
               <button onClick={addPost} className={l.content__post__name}>Опубликовать</button>
               <div className={l.key__input}>
                   <div className={l.key__item}>
                       <Photos/>
                   </div>
                   <div className={l.key__item}>
                       <Music/>
                   </div>
                   <div className={l.key__item}>
                       <Video/>
                   </div>
                   <div className={l.key__item}>
                       <News/>
                   </div>
               </div>
           </div>

           {
               postElements
           }


       </div>
    )
}

export default MyPosts