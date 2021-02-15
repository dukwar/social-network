import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";





// const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState()
//
//                 let addMessage = () => {
//                     // props.addMessage(text)
//                    store.dispatch(addMessageActionCreator())
//                 }
//
//                 let onMessageChange = (text) => {
//
//                     // props.updateNewMessageText(text)
//                     store.dispatch(onMessageChangeActionCreator(text))
//                 }
//
//                 return (
//                     <Dialogs updateNewMessageText={onMessageChange}
//                              addMessage={addMessage}
//                              dialogs={state.messagesPage.dialogs}
//                              messages={state.messagesPage.messages}
//                              newMessageText={state.messagesPage.newMessageText}/>
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
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        messagesPage: state.messagesPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default MessagesContainer