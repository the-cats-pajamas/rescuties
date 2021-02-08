import React, { useState } from "react";
import { Card, CardBody, Form, Input, Row, Col, Button } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import Message from "./Message";

import user1 from "../../../assets/images/users/1.jpg";
import user2 from "../../../assets/images/users/2.jpg";

const Chat = (props) => {
  const [chats, setChats] = useState([
    {
      username: "Kevin Hsu",
      content: "Hello World!",
      img: user1,
      id: 1,
    },
    {
      username: "Alice Chen",
      content: "Love it! :heart:",
      img: user1,
      id: 2,
    },
    {
      username: "Kevin Hsu",
      content: "Check out my Github at https://github.com/WigoHunter",
      img: user1,
      id: 3,
    },
    {
      username: "KevHs",
      content:
        "Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.",
      img: user2,
      id: 4,
    },
    {
      username: "Kevin Hsu",
      content: "So",
      img: user1,
      id: 5,
    },
    {
      username: "Kevin Hsu",
      content:
        "Chilltime is going to be an app for you to view videos with friends",
      img: user1,
      id: 6,
    },
    {
      username: "Kevin Hsu",
      content: "You can sign-up now to try out our private beta!",
      img: user1,
      id: 7,
    },
    {
      username: "Alice Chen",
      content: "Definitely! Sounds great!",
      img: user1,
      id: 8,
    },
  ]);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const submitMessage = (e) => {
    e.preventDefault();
    setChats(
      [
        ...chats,
        {
          username: "Kevin Hsu",
          content: <span>{message}</span>,
          img: user2,
          id: chats.length + 1,
        },
      ],
      setMessage("")
    );
  };
  const username = "Kevin Hsu";
  return (
    <Card>
      <CardBody>
        <h5 className="mb-4">Recent Chats</h5>
        <div className="chat-box" style={{ height: "475px" }}>
          <PerfectScrollbar>
            <ul className="chat-list p-4">
              {chats.map((chat, index) => (
                <Message key={index} chat={chat} user={username} />
              ))}
            </ul>
          </PerfectScrollbar>
        </div>
        <div className="border-top pt-4">
          <Form onSubmit={(e) => submitMessage(e)}>
            <Row>
              <Col xs="9">
                <div className="input-field mt-0 mb-0">
                  <Input
                    type="text"
                    placeholder="Type and enter"
                    className="form-control border-0"
                    value={message}
                    onChange={handleChange}
                  />
                </div>
              </Col>
              <Col xs="3">
                <Button
                  className="btn btn-circle btn-lg btn-cyan float-right text-white"
                  type="submit"
                  value="submit"
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </CardBody>
    </Card>
  );
};
export default Chat;
