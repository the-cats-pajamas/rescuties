import React, {useEffect} from "react";
import Chat from "./ChatListItem";
import { Nav } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { openChat, fetchChats } from "../../redux/chats/Action";

const ChatList = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);
  
  const filterChats = (chats, chatSearch) => {
    if (chats)
      return chats.filter((t) =>
        t.name.toLocaleLowerCase().includes(chatSearch.toLocaleLowerCase())
      );
    else return chats;
  };

  const chats = useSelector((state) =>
    filterChats(state.chatReducer.chats, state.chatReducer.chatSearch)
  );
  
   
  return (
    <Nav className="list-unstyled d-block mailbox listing-over">
      <div className="message-center" style={{ height: "calc(100vh - 274px)" }}>
        {chats.map((chat) => (
          <Chat
            key={chat.id}
            {...chat}
            onClick={() => dispatch(openChat(chat.id))}
            thumb={chat.thumb}
            status={chat.status}
            contactName={chat.name}
            chatExcerpt={chat.excerpt}
          />
        ))}
      </div>
    </Nav>
  );
};

export default ChatList;
