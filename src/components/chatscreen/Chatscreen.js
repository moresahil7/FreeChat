import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import {
  BsTelephone,
  BsFillCameraVideoFill,
  BsSearch,
  BsCheck2All,
  BsMic,
} from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import "./chatscreen.css";
import profile from "../../assets/bgimg.svg";

const Chatscreen = () => {
  const today = new Date();
  const timing =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const [time, setTime] = useState(timing);
  return (
    <div className="chatscreen_container">
      <div className="chatscreen_topbar">
        <div className="chatscreen_back-btn chatscreen_btns">
          <BiArrowBack />
        </div>

        <div className="chatscreen_photo_name">
          <img src={profile} alt="" />
          <p>Name Here</p>
        </div>

        <div className="chatscreen_call-btns">
          <div className="chatscreen_btns">
            <BsTelephone />
          </div>

          <div className="chatscreen_btns">
            <BsFillCameraVideoFill />
          </div>
          <div className="chatscreen_p chatscreen_btns">
            <p>Tele</p>
          </div>
        </div>

        <div className="chatscreen_searchbar">
          <input type="search" name="" placeholder="Search" id="" />
          <BsSearch />
        </div>
      </div>
      <div className="chatscreen_chats">
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
        <div className="chatscreen_recieved_msg">
          <p>Recieved Msg</p>
          <span> {time} </span>
        </div>
        <div className="chatscreen_sent_msg">
          <p>Sent Message</p>
          <span> {time} </span>
          <BsCheck2All />
        </div>
      </div>
      <div className="chat_input">
        <div className="chat_input-msg">
          <input type="text" name="" placeholder="Your Message here!" id="" />
          <MdAttachFile />
        </div>
        <div className="chat_mic"><BsMic/></div>

        
        
      </div>
    </div>
  );
};

export default Chatscreen;
