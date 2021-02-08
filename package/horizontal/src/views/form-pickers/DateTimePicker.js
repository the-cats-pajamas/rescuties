import React from "react";

// Datetime picker plugin file
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Card, CardBody, CardTitle, Row, Col, FormGroup } from "reactstrap";

//var moment = require('moment');
require("moment/locale/fr");
require("moment/locale/de");
require("moment/locale/en-gb");

//var date = new Date();

var yesterday = Datetime.moment().subtract(1, "day");
var valid = function (current) {
  return current.isAfter(yesterday);
};

const DatePicker = () => {
  return (
    <div>
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
      <Row>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-calendar-clock mr-2"></i>Datetime Picker
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Datetime
                  locale="en-gb"
                  inputProps={{ placeholder: "Datetime Picker Here" }}
                />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-calendar-clock mr-2"></i>Date Picker
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Datetime
                  locale="en-gb"
                  timeFormat={false}
                  inputProps={{ placeholder: "Date Picker Here" }}
                />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-calendar-clock mr-2"></i>Time Picker
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Datetime
                  locale="en-gb"
                  dateFormat={false}
                  inputProps={{ placeholder: "Time Picker Here" }}
                />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-calendar-clock mr-2"></i>Franch Datetime
              Picker
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Datetime
                  locale="fr-ca"
                  inputProps={{ placeholder: "Franch Datetime Picker Here" }}
                />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-calendar-clock mr-2"></i>German Datetime
              Picker
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Datetime
                  locale="de"
                  inputProps={{ placeholder: "German Datetime Picker Here" }}
                />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-calendar-clock mr-2"></i>Validation With
              Dates
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Datetime
                  locale="en-gb"
                  isValidDate={valid}
                  inputProps={{
                    placeholder: "Before Today Disabled Dates Here",
                  }}
                />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-calendar-clock mr-2"></i>Month-Year Picker
            </CardTitle>
            <CardBody>
              <FormGroup>
                <Datetime
                  locale="en-gb"
                  dateFormat="YYYY-MM"
                  timeFormat={false}
                  inputProps={{ placeholder: "Month-Year Picker Here" }}
                />
              </FormGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/*--------------------------------------------------------------------------------*/}
      {/*End Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
    </div>
  );
};

export default DatePicker;
