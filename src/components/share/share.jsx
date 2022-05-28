import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"
export default function share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img className="shareProfileImg" src="asserts/1.jpg" alt="" />
                <input placeholder="What is in your mind" className="Shareinput"/>
            </div>
            <hr className="sharehr"/>
            <div className="sharebottom">
                <div className="shareoption">
                    <PermMedia htmlColor="purple" className="shareicon"/>
                    <span className="shareoptiontext">Photo or video</span>
                </div>
                <div className="shareoption">
                    <Label htmlColor="blue"  className="shareicon"/>
                    <span className="shareoptiontext">Tag</span>
                </div>
                <div className="shareoption">
                    <Room htmlColor="Green"  className="shareicon"/>
                    <span className="shareoptiontext">Location</span>
                </div>
                <div className="shareoption">
                    <EmojiEmotions htmlColor="goldenrod"  className="shareicon"/>
                    <span className="shareoptiontext">Fellings</span>
                </div>
                <button className="sharebutton">
                Share
                </button>
            </div>
        </div>
    </div>
  )
}
