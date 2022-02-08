import React,{useState} from "react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./login.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = (e) =>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }
  return (
    <div className="login_container">
      <div className="login_container-box">
        <div className="login_icon">
          <p>Tele</p>
        </div>
        <div className="login_content">
        <div className="login_heading">
          <h3>Integrated Communications</h3>
        </div>

        <form action="">
          <div className="login_credentials-username">
            <input type="text" name="" placeholder="Username" id="" />
          </div>
          <div className="login_credentials-pwd">
            <input type={showPassword ? "text":"password"} name="" placeholder="Password" id="" />
            {showPassword? <AiFillEye onClick={togglePassword} /> : <AiFillEyeInvisible onClick={togglePassword}/>} 
          </div>
          <div className="login_forgot ">
            <Link to="/">Forgot Password?</Link>
          </div>
          <div className="login_button">
            <input type="button" value="Login" />
            
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
