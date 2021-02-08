import React, { useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";
import { EventData } from "./EventData";
import "./Calendar.css";

//BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [alert, setAlert] = useState(null);
  const [calevents, setCalEvents] = useState(EventData);

  const alertselectedEvent = (event) => {
    alert(
      "\n" +
        event.title +
        " \n\nStart Time: " +
        event.start +
        " \nEnd Time: " +
        event.end
    );
  };

  const addNewEventAlert = (slotInfo) => {
    setAlert(
      <div>
        <SweetAlert
          input
          showCancel
          style={{}}
          title="Create New Event"
          placeHolder="Write Event Title"
          onConfirm={(e) => addNewEvent(e, slotInfo)}
          onCancel={() => hideAlert()}
          cancelBtnBsStyle="danger"
          confirmBtnBsStyle="info"
        ></SweetAlert>
      </div>
    );
  };

  const addNewEvent = (e, slotInfo) => {
    var newEvents = calevents;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
    });

    setAlert(null);
    setCalEvents(newEvents);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  const eventColors = (event) => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor,
    };
  };

  return (
    <div>
      <h5 className="mb-4">Calendar Page</h5>
      {alert}
      <Row>
        <Col xs={12} md={12} className="ml-auto mr-auto">
          <Card className="card-calendar">
            <CardBody>
              <Calendar
                selectable
                events={calevents}
                defaultView="month"
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date()}
                localizer={localizer}
                onSelectEvent={(event) => alertselectedEvent(event)}
                onSelectSlot={(slotInfo) => addNewEventAlert(slotInfo)}
                eventPropGetter={(event) => eventColors(event)}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MyCalendar;
