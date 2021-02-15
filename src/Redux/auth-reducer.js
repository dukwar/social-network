let SET_USER_DATA = 'SET_USER_DATA';
let UNFOLLOW = 'UNFOLLOW';




let initialState = {
   userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true



}









const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }



            // return {...state, friends: [...state.friends, ...action.users]}
        default:
            return state

    }


}


export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer

