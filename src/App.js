import React from "react";
import './App.css';

import MyPosts from "./Components/Profile/MyPosts/MyPosts";
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">


                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300;1,400&display=swap');
                </style>
                <HeaderContainer/>
                <Navbar/>


                <div className="app-wrapper-content">
                    <Route path='/profile/:userId' render={() => <ProfileContainer />}/>

                    <Route path="/friends" render={() => <FriendsContainer />}/>

                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/login" render={() => <Login />}/>

                </div>


            </div>

        </BrowserRouter>


    );
}


export default App;
