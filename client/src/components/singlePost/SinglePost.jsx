import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";
import {Context} from "../../context/Context";


export default function SinglePost() {
        const location = useLocation();
        const path = location.pathname.split("/")[2];
        const [post, setPost] = useState({})
        const PF = "http://localhost:5000/images/";
        const {user} = useContext(Context);
        const [title, setTitle] = useState("")
        const [desc, setDesc] = useState("")
        const [updateMode, setUpdateMode] = useState(false)


        useEffect(() => {
            const getPost = async ()=>{
                const res = await axios.get("/posts/"+ path);
                setPost(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
                

            };
            getPost()
        }, [path]);

        const handleDelete = async()=>{
            try{
                await axios.delete(`/posts/${post._id}`, {
                    data: { username:user.username},
                });
                window.location.replace("/");
             } catch(err) {}
            };

        const handleUpdate = async()=>{
            try{
                await axios.put(`/posts/${post._id}`, {
                    username:user.username, 
                    title, 
                    desc,
                });
                //window.location.reload ();
                setUpdateMode(false);
             } catch(err) {}
            };




    

    return (
        <div className ="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                <img className="singlePostImg" src={PF + post.photo} alt="" />
                )}{
                    updateMode ? 
                    <input type="text" 
                    value={title} 
                    className="singlePostTitleInput"
                    autoFocus
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                    : (
                <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (
                <div className="singlePostEdit">
                    <i class="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                    <i class="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
                )}
                </h1>
                 )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link to={`/?user=${post.username}`}className="link">
                            <b>{post.username}</b></Link>
                        
                        </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode? (
                    <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                ): (
                <p className="singlePostDesc">{desc}</p>
                )}
                {updateMode && (
                <button className="singlePostButton brg" onClick={handleUpdate}>Update</button>
                )}
                <button className="singlePostButton blgr">Download</button>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet optio nulla veritatis quisquam magnam ex minus cum, quam vitae ullam quos animi assumenda sint incidunt, voluptates sapiente exercitationem labore iure. Ipsa quisquam atque necessitatibus ipsam excepturi amet at nulla, saepe quas modi quasi pariatur dolorem, 
                accusantium sit officiis obcaecati possimus, culpa autem quos? Itaque repellat consequatur velit deleniti rerum consectetur earum hic vitae iusto voluptatem, incidunt iste veniam, dolorem asperiores delectus sequi officia in neque possimus laudantium. Similique ratione corrupti vero excepturi eius. Voluptatibus porro 
                repellat, possimus saepe asperiores nam non perspiciatis facilis illo? Similique provident deleniti sint quod voluptate.
            
            </div>

        </div>
    )
}
