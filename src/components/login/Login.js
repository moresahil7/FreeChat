import { signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email:"",
    password:"",
    error:""
  });

  const {email,password} = user;



    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = (e) =>{
        e.preventDefault();
        setShowPassword(!showPassword);
    }


    const handleChange = (e) =>{
        e.preventDefault();


        setUser({...user,
        [e.target.name]:e.target.value
        })
    }


    const submit = (e)  =>{
      e.preventDefault();
      
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
            <input type="text" name="email" placeholder="Email" id=""  
            value={email}
            onChange={handleChange}
            />
          </div>
          <div className="login_credentials-pwd">
            <input type={showPassword ? "text":"password"} name="password" placeholder="Password" id="" 
            value={password}
            onChange={handleChange}
            />
            {showPassword? <AiFillEye onClick={togglePassword} /> : <AiFillEyeInvisible onClick={togglePassword}/>} 
          </div>
          <div className="login_forgot ">
            <Link to="/">Forgot Password?</Link>
          </div>
          <div className="login_button">
            <input type="button" onClick={submit} value="Login" />
            
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
