import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    }, []);

    return (
        <div className ="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT</span>
                <img src="https://images.pexels.com/photos/3808243/pexels-photo-3808243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non obcaecati quasi blanditiis, laudantium explicabo amet facere doloribus error quia soluta dolor modi nisi repellat cumque illo odit accusamus. Nihil, fugit?</p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        
                        <Link to={`/?cat=${c.name}`} className="link"> 
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
               
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">UPCOMMING</span>
                <div className="upcomming">
                    <p>Books to come:</p>
                </div>

                
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-instagram"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
               

            </div>
        </div>
    )
}
