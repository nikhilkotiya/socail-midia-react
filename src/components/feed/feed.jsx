import "./feed.css"
import Share from "../share/share"
import Post from "../post/post"
import {Posts} from "../../dummy";
export default function feed() {
  return (
    <div className="feed">
      <div className="feedwraper">
        <Share/>
        {Posts.map(p=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}