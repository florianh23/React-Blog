import "./login.css"
import { Link } from "react-router-dom"
import {useRef, useContext} from 'react'
import {Context} from "../../context/Context";
import axios from "axios";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching} = useContext(Context)



    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        } catch (err) {
            dispatch({type:"LOGIN_FAILURE"});
            
        }

    };

    return (
        <div className="login container">
            <span className="loginTitle">Login</span>
            <form  className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" 
                className="loginInput" 
                placeholder="enter your username..."
                ref={userRef}
                />
                <label>Password</label>
                <input 
                type="password" 
                className="loginInput" 
                placeholder="enter your password..."
                ref={passwordRef}
                />
                <button 
                className="loginButton" type="submit"  //is disabled if isFetching
                disabled ={isFetching}>
                    Login 
                </button>
            </form>
            <div className="regist">
            <label>New here?</label>
            <button className="loginRegisterButton">
                <Link to="/register">Register</Link>
            </button>
            </div>

        </div>
    )
}
