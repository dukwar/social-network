import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../Redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/AuthRedirect";





class DialogsContainer extends React.Component {

    addMessage = () => {
        this.props.addMessage()

    }

   onMessageChange = (event) => {
        let text = event.target.value
        this.props.updateNewMessageText(text)
    }
    render() {



        return (
            <Dialogs
                     addMessage={this.addMessage}
                     dialogs={this.props.dialogs}
                     messages={this.props.messages}
                     newMessageText={this.props.newMessageText}
                     onMessageChange={this.onMessageChange}/>

        )
    }
}




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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)



