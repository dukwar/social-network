import {UsersAPI} from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS'
let UPDATE_LINE = 'UPDATE_LINE'
let UPDATE_LINE2 = 'UPDATE_LINE2'
let UPDATE_FRIENDS = 'UPDATE_FRIENDS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    friends: [

    ],
    pageSize: 5,
    totalFriendsCount: 20,
    currentPage: 1,
    line: false,
    countFriends: 5,
    isFetching: true,
    followingInProgress: []



}









const friendsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return  {
                ...state,
                // friends: [...state.friends],
                friends: state.friends.map(f => {
                    if (f.id === action.userId ) {
                        return {...f, followed: true}
                    }
                    return f

                })
            }


        case UNFOLLOW:
            return  {
                ...state,
                // friends: [...state.friends],
                friends: state.friends.map(f => {
                    if (f.id === action.userId ) {
                        return {...f, followed: false}
                    }
                    return f

                })
            }

        case SET_USERS:

            return {...state,
                friends: [...action.users]

            }

        case UPDATE_LINE:
            return {
                ...state,
                line: false
            }

        case UPDATE_LINE2:
            return {
                ...state,
                line: true
            }

        case UPDATE_FRIENDS:
            return {
                ...state,
                pageSize: action.count
            }

        case SET_CURRENT_PAGE:

            return {
                ...state,
                currentPage: action.page

            }

            case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.totalCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:

        return {
            ...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)

        }

            // return {...state, friends: [...state.friends, ...action.users]}
        default:
            return state

    }


}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const updateLine = () => ({type: UPDATE_LINE})
export const updateLine2 = () => ({type: UPDATE_LINE2})
export const updateFriends = (count) => ({type: UPDATE_FRIENDS, count})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        UsersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })

    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        UsersAPI.follow(id).then((data) => {

            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })

    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        UsersAPI.unfollow(id).then((data) => {

            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })

    }
}

export default friendsReducer

