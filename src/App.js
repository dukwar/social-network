import React from "react";
import './App.css';

import MyPosts from "./Components/Profile/MyPosts/MyPosts";
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300;1,400&display=swap');
                </style>
                <Header/>
                <Navbar/>


                <div className="app-wrapper-content">
                    <Route   path="/profile" component={Profile}/>
                    <Route  path="/news" component={News}/>
                    <Route  path="/dialogs" component={Dialogs}/>


                </div>


            </div>

        </BrowserRouter>


    );
}


export default App;
