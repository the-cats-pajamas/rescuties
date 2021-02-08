import React from 'react';

const Message = ({chat, user}) => (
    
    <li className={`chat ${user === chat.username ? "chat-item odd" : "chat-item"}`}>
    
        <div className="chat-img">
            {user !== chat.username  && <img src={chat.img} alt={`${chat.username}'s profile pic`} />}        
        </div>
        <div className="chat-content">
            <div className="box bg-light-info"> {chat.content}</div>
        </div>
             
    </li>
       
);
  
export default Message;

