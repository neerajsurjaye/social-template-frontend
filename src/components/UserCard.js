import { useEffect } from "react";
import { useState } from "react";
import get from '../services/get';
import put from "../services/put";
import CurrPage from "./CurrPage";

let UserCard = (props) => {

    let id = props.id;

    let [currUser, setCurrUser] = useState();

    let updateCurrUser = async () => {
        let res = await get.userById(id);
        setCurrUser(res.success);

    }

    let followUser = async () => {

        let token = localStorage.getItem('Auth');
        let res = await put.follow(id, token);

        console.log(res);

    }

    useEffect(() => {
        updateCurrUser();
    }, []);

    if (!currUser) {
        return <div className="loading">
            Loading
        </div>
    }

    console.log(currUser.likes);

    return <CurrPage name={`user - ${currUser.username}`}></CurrPage>


    return < div className="user-card" >
        <h3>User : {currUser.username}</h3>
        <div className="follow btn" onClick={followUser}>
            Follow
        </div>
    </div >
}

export default UserCard;