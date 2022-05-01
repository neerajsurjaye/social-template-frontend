import { useState } from "react";
import post from '../services/post';
import get from '../services/get';
import userContext from "../context/userContext";
import { useContext } from "react";
import { useEffect } from "react";
import Success from './Success';
import Error from "./Error";

const Login = () => {

    let [isSignUp, setIsSignUp] = useState(false);
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let [color, setColor] = useState(['', 'primary']);
    let [currentUser, setCurrentUser] = useContext(userContext);
    let [modal, setModal] = useState(false);

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
        let res = (await post.signUp(userName, password));
        if (res.success) {
            setModal({
                success: res.success
            })
        } else {
            setModal({
                err: res.err
            })
        }

    }

    let login = async () => {
        let res = await post.login(userName, password);
        console.log(res);
        if (res.success) {
            localStorage.setItem('Auth', res.success);
            setCurrentUser(res.user);
            setModal({
                success: res.success
            })
        } else {
            localStorage.setItem('Auth', null);
            setModal({
                err: res.err
            })
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

        console.log({ isSignUp });

        if (isSignUp) {
            setColor(['primary', '']);
        } else {
            setColor(['', 'primary']);
        }


    }, [isSignUp])

    console.log({ modal });
    if (modal) {

        if (modal.success) {
            return <div className="post-alert-holder">
                <Success message={"Succesfully Signed in"}></Success>
            </div>
        } else if (modal.err) {
            return <div className="post-alert-holder">
                <Error message={modal.err}></Error>
            </div >
        }

    }

    return <div className="login-container">

        <div className="login-form-cont">

            <div className="login-top-btn">
                <input
                    type="button"
                    className={`log-in-button btn ${color[0]}`}
                    onClick={() => {
                        setSignUp(true);
                    }}
                    value="sign-up"
                />
                <input
                    type="button"
                    className={`log-in-button btn ${color[1]}`}
                    onClick={() => {
                        setSignUp(false);
                    }}
                    value="log-in"
                />

            </div>

            <form className="login-form">
                <div className="form-row">
                    <label htmlFor="username">Username</label>
                    <input className="inp" id="username" type="text" onChange={handleUserName} />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input className="inp" id="password" type="password" onChange={handlePassword} />
                </div>
                <input className="btn primary" type="button" value="Submit" onClick={uploadDetails}></input>

            </form>

        </div>


    </div>

}

export default Login;