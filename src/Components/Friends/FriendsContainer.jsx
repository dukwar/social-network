import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    updateLine,
    updateLine2,
    updateFriends,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
    getFriendsSizeThunkCreator,
} from "../../Redux/friends-reducer";
import Friends from "./Friends";
import axios from "axios";
import cl from "./Friends.module.css";
import Friend from "./Friend/Friend";
import Rolling from '../../img/Rolling.svg'
import Preloader from "../common/Preloader/preloader";
import {UsersAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../HOC/AuthRedirect";
import {compose} from "redux";


class FriendsC extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    count = 10

    f1 = () => {
        this.count = 10
        this.props.updateFriends(this.count)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) =>
            this.props.setUsers(data.items))
    }

    pageEnd = 0
    onPageChanged = (page, event) => {

        this.props.setCurrentPage(page)
        this.props.getUsersThunkCreator(page, this.props.pageSize)


        if (page > this.pageEnd + 5) {
            this.pageEnd = +event.target.innerHTML - 5
        }

    }

    activeLink = () => {
        this.props.updateLine()

    }
    activeLink2 = () => {
        this.props.updateLine2()

    }


    render() {
        let activeLine = [cl.active__line__inner, '+', ' ', '+',]
        if (this.props.line) {
            activeLine.push(cl.active__line__now)
        } else if (this.props.line === false) {
            activeLine.pop(cl.active__line__now)
        }


        let friends = this.props.friends.map(f => <Friend f={f} unfollow={this.props.unfollow}
                                                          follow={this.props.follow}/>)
        let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        let end = this.pageEnd + 10

        let newPages = pages.slice(this.pageEnd, end)

        // this.pagination(pages)

        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Friends
                totalFriendsCount={this.props.totalFriendsCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                friends={this.props.friends}
                f1={this.f1}
                activeLink={this.activeLink}
                activeLink2={this.activeLink2}
                line={this.props.line}
                pageEnd={this.pageEnd}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                followThunkCreator = {this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
                isAuth={this.props.isAuth}
            />
        </>

    }

}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        line: state.friendsPage.line,
        countFriends: state.friendsPage.countFriends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        updateLine,
        updateLine2,
        updateFriends,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator,
        getFriendsSizeThunkCreator,
    }),
    withAuthRedirect

) (FriendsC)





// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//
//         updateLine: () => {
//             dispatch(updateLineAC())
//         },
//
//         updateLine2: () => {
//             dispatch(updateLine2AC())
//         },
//
//         getFriends: (count) => {
//
//             dispatch(updateFriendsAC(count))
//         },
//
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//
//         toggleIsFetching: (isFetching) => {
//             dispatch(isFetchingAC(isFetching))
//         }
//
//
//     }
// }


