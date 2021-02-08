import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

import * as data from "./Data.js";

const CardContact = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1,3 and Widget Page                                          */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody className="bg-info">
        <CardTitle className="text-white">My Contacts</CardTitle>
        <CardSubtitle className="text-white mb-0 op-5">
          Checkout my contacts here
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <div className="mailbox position-relative">
          <h2 className="add-ct-btn">
            <Button size="lg" className="btn btn-circle text-white btn-success">
              +
            </Button>
          </h2>
          <div className="message-center message-body">
            {/*<!-- Message -->*/}
            {data.messages.map((message, index) => {
              return (
                <a href="/" className="message-item" key={index}>
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
                </a>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardContact;
