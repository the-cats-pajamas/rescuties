import React from "react";
import { Form, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { chatSearch } from "../../redux/chats/Action";

const ChatSearch = () => {
  const searchTerm = useSelector((state) => state.chatReducer.chatSearch);

  const dispatch = useDispatch();

  return (
    <div className="p-3 border-bottom">
      <h5 className="card-title">Search Contact</h5>
      <Form>
        <div className="position-relative has-icon-left">
          <Input
            className="form-control"
            id="searchUser"
            name="searchUser"
            type="text"
            onChange={(e) => dispatch(chatSearch(e.target.value))}
            value={searchTerm}
            placeholder="Type here to search..."
          />
        </div>
      </Form>
    </div>
  );
};

export default ChatSearch;
