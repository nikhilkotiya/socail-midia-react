import "./register.css"
export default function Register() {
  return (
      <div className="login">
          <div className="loginwrapper">
              <div className="loginleft">
                <h3 className="loginlogo">Socail</h3>
                <span className="logindesc">Connect with your friends</span>
              </div>
                <div className="loginright">
                <div className="loginbox">
                    <input placeholder="Username" className="logininput" />
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <input placeholder="Confirm Password" className="logininput" />
                    <button className="loginbutton">Sign up</button>
                    <button className="loginregisterbutton">Login into Account</button>
                  </div>
              </div>
          </div>
      </div>
  )
}
