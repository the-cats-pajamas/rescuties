import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import * as data from "./Data.js";

const Messages = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-4 && Widget Page                                             */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <CardTitle>Recent Messages</CardTitle>
        <div className="mailbox">
          <div className="message-center message-body">
            {/*<!-- Message -->*/}
            {data.messages.map((message, index) => {
              return (
                <span className="message-item" key={index}>
                  <span className="user-img">
                    <img
                      src={message.image}
                      alt="user"
                      className="rounded-circle"
                      width=""
                    />
                    <span
                      className={"profile-status pull-right " + message.status}
                    />
                  </span>
                  <div className="mail-contnet">
                    <h5 className="message-title">{message.title}</h5>
                    <span className="mail-desc">{message.desc}</span>
                    <span className="time">{message.time}</span>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Messages;
