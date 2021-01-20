import logo from './logo.svg';
import './App.css';
// import Technologies from "./Technologies";
// import Header from "./Header";
import MyPosts from "./Components/Profile/MyPosts/MyPosts";


import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import React from "react";
import IconUmbrella from "./Components/Profile/Sprite_1";

const App = () => {
    return (







        <div className="app-wrapper">

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,300;1,400&display=swap');
            </style>
            <Header />


            <Navbar />
            <Profile />



        </div>


    );
}


export default App;
