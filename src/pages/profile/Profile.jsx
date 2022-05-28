import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import "./profile.css"
export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar/>
      <div className="profileright">
            <div className="profilerighttop">
              <div className="profilecover">
                  <img className="profilecoverimg" src="assets/post/3.jpeg" alt="" />
                  <img className="profileuserimg" src="assets/person/7.jpeg" alt="" />
                </div>
                <div className="profileinfo">
                    <h4 className="profileinfoname">Nikhil </h4>
                    <span className="profileinfodecs">This is the description of profile</span>
                </div>
            </div>
            <div className="profilerightbottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
    </div>
  </>
  )
}
