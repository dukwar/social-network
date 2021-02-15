 import React from "react";
import cl from "./MyPosts.module.css"
import Post from "./Post/MyPost";
import MyPost from "./Post/MyPost";
import l from "../Profile.module.css";
import {Music, News, Photos, Video} from "../Sprite_1";
 import axios from "axios";




let MyPosts = (props) => {

    // axios.post("https://repetitora.net/api/JS/Tasks?widgetId=5345236", {
    //     title: "Dima"
    // }).then((response) => {
    //     debugger
    //
    //     console.log(response.data)
    //     props.addId(response.data.task.id)
    //
    // })
    // axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=5345236&id=${props.newIdPost}`).then((response) => {
    //
    //     console.log(response.data.title)
    // })



   let postElements = props.posts.map(post => <MyPost count={post.count} key={post.id} message={post.message} img={post.img} />
   )

    let newPostElement = React.createRef()


    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)


    }

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())



    }


    return (
       <div>

           {/*===================================COntent-Post =================================*/}
           <div className={cl.content__photo + " " + cl.content__post}>
               <input onChange={onPostChange} value={props.newPostText} ref={newPostElement} placeholder="Что у вас нового?" className={cl.input}></input>
               <button onClick={onAddPost} className={cl.button}>Опубликовать</button>
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