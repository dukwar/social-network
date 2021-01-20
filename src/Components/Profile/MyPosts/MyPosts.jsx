import React from "react";
import cl from "./MyPosts.module.css"
import Post from "./Post/MyPost";
import MyPost from "./Post/MyPost";

let MyPosts = () => {
    return (
       <div>
           <MyPost count="1000" message="Я люблю Екатерину Ульянову" img="https://sun9-76.userapi.com/impg/0Gxpq63vs89IcR6oWN_Oarb-nIjyFmUJgsGmqA/33_krHYfvv0.jpg?size=1296x970&quality=96&proxy=1&sign=02c7b1f3014bf5f300c1404208c2433d&type=album" />
           <MyPost count="2000" message="Hi, how are you" img="https://sun9-36.userapi.com/impg/70LksF6eD4lsqaicLl3QlsFHXgXsqQLbRDucNw/2yutmu8X-Wk.jpg?size=1197x1600&quality=96&proxy=1&sign=09a7f0d8ed057157b1167cf0619850f5&type=album" />

       </div>
    )
}

export default MyPosts