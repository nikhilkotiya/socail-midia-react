import { MoreVert } from "@mui/icons-material" 
import "./post.css"
import { useState } from "react";
import {Users} from "../../dummy";
export default function Post({post}) {
    const [like ,setlike]=useState(post.like)
    const [isliked ,setislike]=useState(false)

    const likeHandler =()=>{
        setlike(isliked ? like-1: like+1)
        setislike(!isliked)
    }
    return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img className="postprofileimg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postusername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="posttopright">
                    <MoreVert />
                </div> 
            </div>
            <div className="postcenter">
                <span className="posttext">
                {post.desc}
                </span>
                <div className = "image">
                 <img className="postimg" src={post.photo} alt="" />
                </div>   
            </div>
            <div className="postbottom">
                <div className="postbottomoleft">
                    <img className="likeicon" src="asserts/heart.png" onClick={likeHandler} alt="" />        
                    <img className="likeicon" src="asserts/like.png" onClick={likeHandler} alt="" />
                    <span className="postcounter">{like}</span>
                </div>
                <div className="postbottomright">
                <span className="postcomment">
                {post.comment} commments
                </span>
                </div>
            </div>
        </div>
    </div>
  )
}
