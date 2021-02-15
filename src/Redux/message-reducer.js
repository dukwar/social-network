let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Екатерина Ульянова",
            img: "https://sun9-50.userapi.com/impg/6CSGWMsQ1gPVo1KpQIhQ43UDIM0l1zNEySo_ZQ/Tyer1J43_Gk.jpg?size=1197x1600&quality=96&proxy=1&sign=c0642e1200c3c42501be1af4dadc5583&type=album"
        },
        {
            id: 2,
            name: "Артур Клопов",
            img: "https://sun9-8.userapi.com/impf/c836123/v836123063/32621/Of8brlF4gz8.jpg?size=810x1080&quality=96&proxy=1&sign=4e482d6fbc823872ff63be1ba5c13358&type=album\""
        },
        {
            id: 3,
            name: "Дима Биткивский",
            img: "https://sun9-50.userapi.com/impf/c628025/v628025177/16d86/Ihm8fC6wicM.jpg?size=480x480&quality=96&proxy=1&sign=b3ef286a64e4e50dacda442b8bd774b3&type=album"
        },
        {
            id: 3,
            name: "Дима Биткивский",
            img: "https://sun9-50.userapi.com/impf/c628025/v628025177/16d86/Ihm8fC6wicM.jpg?size=480x480&quality=96&proxy=1&sign=b3ef286a64e4e50dacda442b8bd774b3&type=album"
        },

    ],
    messages: [
        {id: 1, name: "Екатерина Ульянова", message: "Чего молчишь? И да, совсем забыла, отъебись!!!"},
        {id: 2, name: "Дмитрий Клопов", message: "Здарова увалень"},
        {id: 3, name: "Дима Биткивский", message: "Посмотри очередной тупой мем"},
        {id: 3, name: "Дима Биткивский", message: "Посмотри очередной тупой мем"},
        {id: 3, name: "Дима Биткивский", message: "Посмотри очередной тупой мем"},
        {id: 3, name: "Дима Биткивский", message: "Посмотри очередной тупой мем"},
    ],

    newMessageText: "Наташа соси"
}

const messageReducer = (state = initialState, action) => {



    // stateCopy.messages = [...state.messages]

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 0,
                name: "Дмитрий Клопов",
                message: state.newMessageText
            }

            return  {
                ...state,
                newMessageText: "",
                messages: [...state.messages,
                    {id: 0,
                    name: "Дмитрий Клопов",
            message: state.newMessageText}],

            }


            // stateCopy.messages.push(newMessage)
            // stateCopy.newMessageText = ""


        case UPDATE_NEW_MESSAGE_TEXT: {
           return  {
                ...state,
                newMessageText: action.newText

            }

            // stateCopy.newMessageText = action.newText
        }

        default:
            return state
    }


}


export const addMessageActionCreator = (text) => ({type: ADD_MESSAGE, newText: text})

export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messageReducer


