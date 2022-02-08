import React from "react";
import { BsSearch } from "react-icons/bs";
import Chat from "../../containers/chats/Chat"
import profImg from "../../assets/bgimg.svg"
import './chatlist.css'

const Chatlist = () => {
  return (
    <div className="chatlist_container">
    
        <div className="chatlist_container-topbar">
            <div className="chatlist_img">
                <img src={profImg} alt="" />
            </div>
            <div className="chatlist_chats-calls">
                <div className="chats-calls">
                    <p>Chats</p>
                </div>
                <div className="chats-calls">
                    <p>Calls</p>
                </div>
            </div>

            <div className="chatlist_search">
                <input type="search" name="" placeholder="Search" id="" />
                <BsSearch/>
            </div>
        </div>
        <div className="chatlist-names_container">
            <Chat 
            username="Name Here"
            message="Msg"
            time="04:00 pm"
            tick="x"
            />
          
            
  </div>
  <div className="chatlist_chats-calls-mobile">
                <div className="chats-calls-mobile">
                    <p>Chats</p>
                </div>
                <div className="chats-calls-mobile">
                    <p>Calls</p>
                </div>
            </div>
    </div>
  );
};

export default Chatlist;
