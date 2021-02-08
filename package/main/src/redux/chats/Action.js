import axios from "axios"; 
import { SELECTED_CHAT, SEARCH_USER, MSG_SUBMIT,  FETCH_CHAT_SUCCESS } from "../constants";


export const fetchChats = () => {
  return dispatch => {
    
    axios
      .get("/api/data/chat/ChatData")
      .then(response => {
        dispatch({
          type: FETCH_CHAT_SUCCESS,
          chats: response.data
        })
      })
      .catch(err => console.log(err + "action"))
  }
}

/////////////////////////////////////////////
//Axios part Reducers
////////////////////////////////////////////


export const fetchChatsSuccess = (chats) => {
  return {
    type: FETCH_CHAT_SUCCESS,
    payload: chats,
  };
};

export const openChat = (id) => ({
  type: SELECTED_CHAT,
  id,
});

export const chatSearch = (searchTerm) => ({
  type: SEARCH_USER,
  searchTerm,
});

export const sendMsg = (id, chatMsg) => ({
  type: MSG_SUBMIT,
  id,
  chatMsg,
});
