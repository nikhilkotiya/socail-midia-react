import "./rightbar.css"
import {Users} from "../../dummy"
import Online from "../online/online"
import profile from "../../pages/profile/Profile"
export default function rightbar({ profile }) {
  console.log(profile);
  const Homerightbar = () =>{
    return (
      <>
        <div className="birthdaycontainer">
          <img className="birthdayimg" src="asserts/4.jpg" alt="" srcset="" />
          <span className="birthdaytext">
            <b>Hey nikhil your birthday is on 17 </b> and <b> 3 other friends have a birthday today </b>
          </span>
        </div>
        <img className="rightbarad" src="asserts/5.jpg" alt="" />
        <h4 className="rightbartit">Online Friends</h4>          
        <ul className="rightbarfriendlist">
          {Users.map(u=>(
            <Online key={u.id} user ={u}/>
          ))}  
        </ul>
      </>
    );
  };

  const Profilerightbar = () => {
    return (
        <>
        <h4 className="rightbartitile">User Information </h4>        
        <div className="rightbarinfo">
          <div className="righbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfoValue">New York</span>
          </div>
          <div className="righbarinfoitem">
            <span className="rightbarinfokey">From :</span>
            <span className="rightbarinfoValue">unkown</span>
          </div>
          <div className="righbarinfoitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfoValue">Not found</span>
          </div>
        </div>
        <h4 className="rightbartitle">User Friendlist </h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/4.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name
            </span>
          </div> 
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
          <div className="rightbarfollowing">
            <img className="rightbarfollowingimg" src="assets/person/3.jpeg" alt="" />  
            <span className="rightbarfollowingname">
              User name 3
            </span>
          </div>  
        </div>  
        </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {profile ? <Profilerightbar />:<Homerightbar />}
      </div>
    </div>
  )
}
