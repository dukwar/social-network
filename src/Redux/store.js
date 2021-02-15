import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {

    _state: {
        profilePage: {

            posts: [
                {
                    id: 1,
                    count: "1000",
                    message: " Я люблю Екатерину Ульянову",
                    img: "https://sun9-76.userapi.com/impg/0Gxpq63vs89IcR6oWN_Oarb-nIjyFmUJgsGmqA/33_krHYfvv0.jpg?size=1296x970&quality=96&proxy=1&sign=02c7b1f3014bf5f300c1404208c2433d&type=album"
                },
                {
                    id: 2,
                    count: "1000",
                    message: "Дима, отъебись!!!!",
                    img: "https://sun9-36.userapi.com/impg/70LksF6eD4lsqaicLl3QlsFHXgXsqQLbRDucNw/2yutmu8X-Wk.jpg?size=1197x1600&quality=96&proxy=1&sign=09a7f0d8ed057157b1167cf0619850f5&type=album"
                },

            ],
            newPostText: "Dima K",
        },
        messagesPage: {
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
        },

    },

    _callSubscriber() {

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer

    },

    dispatch(action) {  // { type: "ADD-POST" }

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)

        this._callSubscriber(this.getState())
    }

}



export default store

