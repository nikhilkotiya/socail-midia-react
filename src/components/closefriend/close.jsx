import "./close.css"
export default function close({user}) {
  return (
    <li className="sidebarfriend">
    <img className="sidebarfriendimage" src={user.profilePicture} alt="" />
    <span className="friendname">{user.username}</span>
  </li>
  )
}