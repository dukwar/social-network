import React from "react";
import Header from "./Header";
import axios from "axios";
import {setUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {HeadersApi} from "../../api/api";

class HeaderContainer extends React.Component  {

    componentDidMount() {
        HeadersApi.authUser().then((data) => {

           if (data.resultCode === 0) {
               let {id, login, email} = data.data
               this.props.setUserData(id, email, login)
           }
        })
    }

    render() {
        return <Header {...this.props} />

    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login

    }
}

export default connect (mapStateToProps, {setUserData} )(HeaderContainer)