import React from "react";
import "./message.css";

const Message = ({ chats, user1 }) => {
  return (
    <div>
      <div
        className={`${
          chats.from === user1
            ? "chatscreen_sent_msg"
            : "chatscreen_recieved_msg"
        }`}
      >
        {/* <p>{chats.messages}</p> */}
        <div className="msg-text-sent">
          <p>{chats.messages}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
