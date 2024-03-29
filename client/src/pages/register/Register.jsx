import "./register.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function Register() {
  const[username, setUsername]= useState("")
  const[email, setEmail]= useState("")
  const[password, setPassword]= useState("")
  const[error, setError]= useState(false)



  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError(false);
    try {
      const res =  await axios.post("/auth/register", {
        username, 
        email,
        password
      });
      //if we get a response, meaning we have no error, we redirect to ligin page
      res.data && window.location.replace("/login");
    } catch (error){
      setError(true);
    }
  };

    return (
        <div className="register container">
          <span className="registerTitle">Register</span>
          <form className="registerForm" onSubmit ={handleSubmit}>
          <label>Username</label>
          <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your username..." 
          onChange = {e=>setUsername(e.target.value)}
          />
        <label>Email</label>
        <input 
        className="registerInput" 
        type="text" 
        placeholder="Enter your email..." 
        onChange = {e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input 
        className="registerInput" 
        type="password" 
        placeholder="Enter your password..." 
        onChange = {e=>setPassword(e.target.value)}
        />
        <button className="registerButton" type ="submit"> <Link className="link"to="/register">Register</Link></button>
      </form>
        <button className="registerLoginButton"> <Link className="link"to="/login">Login</Link></button>
      {error &&  <span className ="red">Something went wrong</span>}
    </div>
    )
}