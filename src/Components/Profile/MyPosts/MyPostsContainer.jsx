 import React from "react";
 import {addIdPostAC, addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
 import MyPosts from "./MyPosts";
 import {connect} from "react-redux";





// let MyPostsContainer = () => {
//     // let state = props.store.getState()
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//                 let onPostChange = (text) => {
//                     // props.updateNewPostText(text)
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }
//
//                 let addPost = () => {
//                     // props.addPost()
//                     store.dispatch(addPostActionCreator())
//                 }
//                 return (
//                     <MyPosts updateNewPostText={onPostChange}
//                              addPost={addPost}
//                              posts={state.profilePage.posts}
//                              newPostText={state.profilePage.newPostText}
//
//                     />
//                 )
//             }
//
//         }
//
//         </StoreContext.Consumer>
//     )
// }

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