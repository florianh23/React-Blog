import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios"
import {useLocation} from "react-router";

export default function Home() {
     // eslint-disable-next-line no-undef
     const [posts, setPosts] = useState([]);
     const { search } = useLocation();
 
     

    // eslint-disable-next-line no-undef
    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts"+search)
            setPosts(res.data)
        }
        fetchPosts()
    },[search]);

    return (

        <>
        <Header/>
        <div className ="home container">
            <Posts posts = {posts}/>
            <Sidebar/>

        </div>
        </>
    )
}
