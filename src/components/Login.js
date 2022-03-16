import { useState } from "react";
import post from '../services/post';
import get from '../services/get';
import userContext from "../context/userContext";
import { useContext } from "react";
import { useEffect } from "react";

const Login = () => {

    let [isSignUp, setIsSignUp] = useState(false);
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    let [currentUser, setCurrentUser] = useContext(userContext);

    let handleUserName = (e) => {
        // console.log(e.target.value);
        setUserName(e.target.value);
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);
    }

    let setSignUp = (setVal) => {
        setIsSignUp(setVal);
    }

    let signUp = async () => {
        console.log(await post.signUp(userName, password));
    }

    let login = async () => {
        let res = await post.login(userName, password);
        // console.log(res);
        if (res.success) {
            localStorage.setItem('Auth', res.success);
        } else {
            localStorage.setItem('Auth', null);
        }

    }

    let uploadDetails = () => {

        if (isSignUp) {
            signUp();
        } else {
            login();
        }

    }

    useEffect(() => {

    }, [])

    return <div className="login">

        <input
            type="button"
            className="sign-up-button btn"
            onClick={() => {
                setSignUp(true);
            }}
            value="sign-up"
        />
        <input
            type="button"
            className="log-in-button btn"
            onClick={() => {
                setSignUp(false);
            }}
            value="log-in"
        />

        <form>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={handleUserName} />
            <label htmlFor="password">Password</label>
            <input id="password" type="text" onChange={handlePassword} />
            <input className="btn" type="button" value="Submit" onClick={uploadDetails}></input>
        </form>


    </div>

}

export default Login;