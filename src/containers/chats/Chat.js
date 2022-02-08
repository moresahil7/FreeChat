import React from 'react';
import { BsCheck2All} from "react-icons/bs";
import "./chat.css"
import profile from "../../assets/bgimg.svg"


const Chat = ({username,message,time,tick}) => {
  return (
      <div className="chat_container">
        <div className="user_img-name-msg">
            <img src={profile} alt="s" />
            <div className="user_name-msg">
            <div className="user_name">
                <p>{username}</p>
            </div>
            <div className="msg">
                <span>{message}</span>
            </div>
        </div>
        </div>

        

        <div className="msg_time-ticks">
            <div className="msg_time">
                <p>{time}</p>
            </div>
            <div className="msg_ticks">
                <BsCheck2All/>
            </div>
        </div>
      </div>
  )
};

export default Chat;
