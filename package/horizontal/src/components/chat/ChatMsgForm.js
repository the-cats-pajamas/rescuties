import React, { useState } from "react";
import { Form, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sendMsg } from "../../redux/chats/Action";

const ChatMsgForm = () => {
    const [msg, setMsg] = useState("");

    const handleChatMsgChange = e => {
        setMsg(e.target.value);
    };

    const onChatMsgSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(sendMsg(id, msg));
        setMsg("");
    }

    const id = useSelector((state) => state.chatReducer.chatContent);

    const dispatch = useDispatch();

    return (
        <Form onSubmit={onChatMsgSubmit.bind()} className="card-body border-top">
            <div className="d-flex">
                <Input
                    type="text"
                    className="form-control mr-2"
                    placeholder="Type your message"
                    onChange={handleChatMsgChange.bind(null)}
                    value={msg}
                    required
                />
                <button
                    onClick={() => { dispatch(sendMsg(id, msg)); setMsg(""); }}
                    className="btn btn-outline-secondary"
                    type="button"
                    disabled={!msg}
                >
                    <i className="fas fa-paper-plane" />
                </button>
            </div>
        </Form>
    );
}

export default ChatMsgForm;
