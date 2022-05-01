import { useEffect } from "react";
import { useState } from "react";
import get from '../services/get';
import put from "../services/put";
import CurrPage from "./CurrPage";

let UserCard = (props) => {

    let id = props.id;

    let [currUser, setCurrUser] = useState();
    let [follows, setFollows] = props.follows;

    let updateCurrUser = async () => {
        let res = await get.userById(id);
        setCurrUser(res.success);

    }

    let followUser = async () => {

        console.log("following user");
        let token = localStorage.getItem('Auth');
        let res = await put.follow(id, token);

        console.log({ res });
        setFollows(!follows);

        if (props.setReload) {
            props.setReload(Math.random());
        }


    }

    useEffect(() => {
        updateCurrUser();
    }, []);

    if (!currUser) {
        return <div className="loading">
            Loading
        </div>
    }

    // return


    return < div className="user-card" >
        <CurrPage name={`user - ${currUser.username}`}></CurrPage>
        <div className={`follow btn ${!follows ? 'primary' : 'warn'}`} onClick={followUser}>
            {!follows ? 'Follow' : 'Un Follow'}
        </div>
    </div >
}

export default UserCard;