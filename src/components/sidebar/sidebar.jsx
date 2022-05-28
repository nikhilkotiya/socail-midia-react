import "./sidebar.css"
import {  
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,} from  "@mui/icons-material"
import {Users} from "../../dummy"
import Close  from "../closefriend/close"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          {/* 1 */}
          
          <li className="sidebarlistitem">
            <RssFeed className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Feed
            </span>
          </li>
          {/* 2 */}
          
          <li className="sidebarlistitem">
            <Bookmark className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Bookmark
            </span>
          </li>
          {/* 3 */}
          
          <li className="sidebarlistitem">
            <HelpOutline className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Questions
            </span>
          </li>
          {/* 4 */}
          
          <li className="sidebarlistitem">
            <WorkOutline className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Jobs
            </span>
          </li>
          {/* 5 */}
          
          <li className="sidebarlistitem">
            <Event className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Events
            </span>
          </li>
          {/* 6 */}
          <li className="sidebarlistitem">
            <School className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Courses
            </span>
          </li>
          {/* 7 */}
          <li className="sidebarlistitem">
            <Group className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Groups
            </span>
          </li>
          {/* 8 */}
          <li className="sidebarlistitem">
            <Chat className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Chats
            </span>
          </li>
          <li className="sidebarlistitem">
            <PlayCircleFilledOutlined className="sidebaricon"/>
            <span className="sidebarlistitemtext">
              Video
            </span>
          </li>
        </ul>
        <button className="sidebarbutton">
          Show more
        </button>
        <hr className="sidebarhr"/>
        <ul className="sidebarfriendlist">
        {Users.map(u=>(
            <Close key={u.id} user ={u}/>
          ))}  
        </ul>
      </div> 
    </div>
  ) 
} 
