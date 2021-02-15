// import React from "react";
// import cl from "./Friends.module.css"
// import axios from "axios";
// import user_photo from "../../img/user_photo.jpg"
// import Friend from "./Friend/Friend";
// import {Search} from "../Profile/Sprite_1";
// import Friends from "./Friends";


// class FriendsC extends React.Component {
//
//     componentDidMount() {
//
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
//             this.props.setUsers(response.data.items)
//             this.props.setTotalUsersCount(response.data.totalCount)
//         })
//     }
//
//     // goToFriends = () => {
//     //     let promise = axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`)
//     //     return promise.then((response) => {
//     //         return response.data.items
//     //     })
//     // }
//
//     f1 = () => {
//         let count = this.props.countFriends + 5
//         this.props.getFriends(count)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`).then((response) =>
//             this.props.setUsers(response.data.items))
//     }
//
//     pageEnd = 0
//     onPageChanged = (page, event) => {
//
//         this.props.setCurrentPage(page)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((response) => {
//             this.props.setUsers(response.data.items)
//         })
//
//             if (page > this.pageEnd + 5) {
//                 this.pageEnd = +event.target.innerHTML - 5
//             }
//
//     }
//
//     activeLink = () => {
//         this.props.updateLine()
//
//     }
//     activeLink2 = () => {
//         this.props.updateLine2()
//
//     }
//
//
//
//
//
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//     }
//
//
//     render() {
//         let activeLine = [cl.active__line__inner, '+', ' ', '+', ]
//         if (this.props.line) {
//             activeLine.push(cl.active__line__now)
//         } else if (this.props.line === false) {
//             activeLine.pop(cl.active__line__now)
//         }
//
//
//        let friends = this.props.friends.map(f => <Friend f = {f} unfollow={this.props.unfollow} follow={this.props.follow} /> )
//         let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize)
//
//         let pages = []
//
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//
//
//
//         let end = this.pageEnd + 10
//         let newPages = pages.slice(this.pageEnd, end)
//
//         // this.pagination(pages)
//
//         return <Friends
//             totalFriendsCount = {this.props.totalFriendsCount}
//             pageSize = {this.props.pageSize}
//             onPageChanged = {this.onPageChanged}
//             friends = {this.props.friends}
//             f1 = {this.f1}
//             activeLink = {this.activeLink}
//             activeLink2 = {this.activeLink2}
//             line = {this.props.line}
//             pageEnd = {this.pageEnd}
//             follow = {this.props.follow}
//             unfollow = {this.props.unfollow}
//         />
//
//     }
//
// }

// export default FriendsC


