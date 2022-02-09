import React, { useState,useEffect } from "react";
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
import { useLocation, useNavigate,useParams } from "react-router-dom";
import { addDoc, collection, onSnapshot, orderBy, query, Timestamp, where } from "firebase/firestore";
import { auth, db } from "../../Services/firebase";
import Message from "../../containers/message/Message";


const Chatscreen = () => {

  console.log(auth.currentUser)

  const location = useLocation();
  const navigate = useNavigate();
  const {from } = location.state;
  const user1 = auth.currentUser.uid;

  const user2 = from.uid;

  // console.log(user2)

  // console.log(from.uid)
  const [messages, setMessages] = useState("")
  const [chat, setChat] = useState([])
  const id = user1>user2 ? `${user1+user2}` : `${user2+user1}`

  useEffect(() => {
    
    const msgRef = collection(db,'messages',id,'chats');
    const q = query(msgRef,orderBy('createdAt','asc'));
    const unsub = onSnapshot(q,querySnapshot => {
      const allChats = []
      querySnapshot.forEach(doc=>{
        allChats.push(doc.data())
      })
      setChat(allChats)
      console.log(allChats)
    });

    return () => unsub();
  
   
  }, [])
  






  const handleSubmit = async e=>{
    e.preventDefault();
    const id = user1>user2 ? `${user1+user2}` : `${user2+user1}`
    await addDoc(collection(db, 'messages',id, 'chats'),{
      messages,
      from:user1,
      to:user2,
      createdAt: Timestamp.fromDate(new Date())
    })
    setMessages(" ");
  }







  



  return (
    <div className="chatscreen_container">
      <div className="chatscreen_topbar">
        <div className="chatscreen_back-btn chatscreen_btns">
          <BiArrowBack 
          onClick={() =>{
            navigate('/chatlist')
          }}
          />
        </div>

        <div className="chatscreen_photo_name">
          <img src={profile} alt="" />
         <p>{from.name}</p>
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
        {chat.length
        ? chat.map((chats,index)=> <Message key = {index} chats = {chats} user1={user1} />):null
        }
      </div>
      <div className="chat_input">
        <div className="chat_input-msg">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={messages} onChange={e => setMessages(e.target.value)} name=""  placeholder="Your Message here!" id="" />
          <button hidden  >Send msg</button>
          <MdAttachFile />
          </form>
        </div>
        <div className="chat_mic">
          <BsMic />
        </div>
      </div>
    </div>
  );
};

export default Chatscreen;
