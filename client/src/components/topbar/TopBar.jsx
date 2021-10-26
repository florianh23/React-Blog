import "./topbar.css"
import { Link } from "react-router-dom";
import {Context} from "../../context/Context";
import {useContext} from "react";

export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"});
    };
    const admin =true;
    return (
        <div className = "shadow">
            <div className="top container">
                <div className="topLeft justify-left">
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-linkedin"></i>
                
                </div>
                <div className="topCenter ">
                    <ul className="topList">
                        <li className="topListItem">
                           <Link className="link" to="/">HOME</Link> </li>
                        <li className="topListItem"><Link className="link" to="/categories">CATEGORIES</Link> </li>
                        <li className="topListItem"><Link className="link" to="/about">ABOUT</Link> </li>
                        <li className="topListItem">{user && <li className="topListItem"><Link className="link" to="/write">Write</Link></li>}</li>
                       

                        <li className="topListItem" onClick={handleLogout}>{user && <li className="topListItem">LOGOUT</li>} </li>
                        
                    </ul>
                </div>
                <div className="topRight justify-right">
                    {user ? (
                        <img src={user.profilePic} alt="" className="topImg" />

                    ): ( 
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                           {/* <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>*/}
                        </ul>

                    )}
                    
                    <i className="searchIcon fas fa-search"></i>
                </div>
            </div>
        </div>
    )
}

