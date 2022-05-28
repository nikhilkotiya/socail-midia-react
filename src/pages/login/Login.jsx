import "./login.css"
export default function Login() {
  return (
      <div className="login">
          <div className="loginwrapper">
              <div className="loginleft">
                <h3 className="loginlogo">Socail</h3>
                <span className="logindesc">Connect with your friends</span>
              </div>
                <div className="loginright">
                <div className="loginbox">
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <button className="loginbutton">Log in</button>
                    <span className="loginforgot">Forgot Password?</span>
                    <button className="loginregisterbutton">Create a New account</button>
                  </div>
              </div>
          </div>
      </div>
  )
}
