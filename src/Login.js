import "./style/styles.css";
import sadf from "./Logo.png";
export default function Login() {
  return (
    <>
      <div className="Login_Outer">
        <div className="Login_Outer_row1">
          <div className="Login_Outer_row1_inner">
            <div className="Login_Outer_row1_inner_row1">
              <img src={sadf}></img>
              <label>Logo</label>
            </div>
            <div className="Login_Outer_row1_inner_row2">
              <label>Welcome!</label>
            </div>
            <div className="Login_Outer_row1_inner_row3">
              <label>Please signin to your account</label>
            </div>
            <div className="Login_Outer_row1_inner_row4">
              <input type="text" placeholder="Email" />
            </div>
            <div className="Login_Outer_row1_inner_row5">
              <input type="password" placeholder="Password" />
            </div>
            <div className="Login_Outer_row1_inner_row6">
              <input type="checkbox" />
              <label>Remember me?</label>
              <div className="Login_Outer_row1_inner_row6_text">
                <label>Forgot Passowrd?</label>
              </div>
            </div>
            <div className="Login_Outer_row1_inner_row7">
              <button>Login</button>
            </div>
          </div>
        </div>
       
          <label>
            New Member ? <span >Sign up</span>
          </label>
       
      </div>
    </>
  );
}
