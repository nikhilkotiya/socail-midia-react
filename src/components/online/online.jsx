import "./online.css"
export default function online({user}) {
  return (
    <li className="rightbarfriend">
    <div className="rightprofileimgcontainer">
    <img className="rightbarprofileimg" src={user.profilePicture} alt="" />    
    <span className="rightbaronline"></span>    
    </div>
    <span className="rightbarusername">{user.username}</span>
    </li>
  )
}
