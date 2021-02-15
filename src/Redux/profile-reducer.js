let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_ID_POST = 'ADD_ID_POST'
let SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {
            id: 1,
            count: "1000",
            message: "У меня поехала кукуха",
            img: "https://thumbs.dfs.ivi.ru/storage4/contents/e/4/079bc6cbd4376fcaef1dbd3f2660ad.jpg"
        },
        {
            id: 2,
            count: "1000",
            message: "Не могу сказать себе хватит плакать",
            img: "https://million-wallpapers.ru/wallpapers/4/23/15306436490395089004.jpg"
        },

    ],
    newPostText: "Dima K",
    newIdPost: null,
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0,
            }

            return  {
                ...state,
                posts: [...state.posts, {id: 5,
                    message: state.newPostText,
                    count: 0
                }],
                newPostText: ""
            }



        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            }
        }

        case ADD_ID_POST:

            return {
                ...state,
                newIdPost: action.newId


            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }




        default:
            return state

    }

    return state
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addIdPostAC = (id) => ({type: ADD_ID_POST, newId: id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})



export default profileReducer

