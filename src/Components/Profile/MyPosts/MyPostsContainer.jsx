 import React from "react";
 import {addIdPostAC, addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
 import MyPosts from "./MyPosts";
 import {connect} from "react-redux";





 let mapStateToProps = (state) => {
     return {
         posts: state.profilePage.posts,
         newPostText: state.profilePage.newPostText,
         newIdPost: state.profilePage.newIdPost

     }
 }

 let mapDispatchToProps = (dispatch) => {
     return {
         updateNewPostText: (text) => {
             dispatch(updateNewPostTextActionCreator(text))
         },
         addPost: () => {
             dispatch(addPostActionCreator())
         },
         addId: (id) => {
             dispatch(addIdPostAC(id))
         }
     }
 }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


 export default MyPostsContainer