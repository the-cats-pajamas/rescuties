import { SELECTED_CHAT, SEARCH_USER, MSG_SUBMIT, FETCH_CHAT_SUCCESS } from "../constants";
//import ChatData from "../../data/chat/ChatData";

const INIT_STATE = {
  chatContent: 1,
  chatSearch: "",
  chats:[]
  
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_CHAT_SUCCESS:
      return {
          ...state,
          chats: action.chats,
      } 
    
    case SELECTED_CHAT:
      return {
        ...state,
        chatContent: action.id,
      };
    case MSG_SUBMIT:
      return {
        ...state,
        chats: state.chats.map((chat) =>
          chat.id === action.id
            ? Object.assign(
                {},
                chat,
                chat.chatHistory[0][1]["to"].push(action.chatMsg)
              )
            : chat
        ),
      };
    case SEARCH_USER:
      return {
        ...state,
        chatSearch: action.searchTerm,
      };
    default:
      return state;
  }
};
