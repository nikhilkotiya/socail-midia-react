import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Socail Page</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <Search className="searchbaricon"/>
          <input placeholder="Search for friend ,post and video" className="searchinput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarlinks">
            <span className="topbarlink">Homepage</span>
            <span className="topbarlink">Timeline</span>
          </div>
        <div className="topbarIcon">
          <div className="topbariconItem">
            <Person/>
            <span className="topBarIconBadge">
              1
            </span>
          </div>

          <div className="topbariconItem">
            <Chat/>
            <span className="topBarIconBadge">
              2
            </span>
          </div>

          <div className="topbariconItem">
            <Notifications />
            <span className="topBarIconBadge">3</span>
          </div>
        </div>

        <img src="/asserts/1.jpg" alt="" className="topbarImg" />
    </div>
    </div>
  )
}
