import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col } from "reactstrap";

import Newsdata from "./NewsData.js";
import Chart from "react-apexcharts";

const NewsleterCompaign = () => {
  const optionsnewslatter = {
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, .2)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      toolbar: {
        show: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#26c6da", "#1e88e5"],
    fill: {
      type: "gradient",
      opacity: ["0.1", "0.1"],
    },
    xaxis: {
      categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    markers: {
      size: 3,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };
  const seriesnewslatter = [
    {
      name: "Open Rate",
      data: [0, 5, 6, 8, 25, 9, 8, 24],
    },
    {
      name: "Recurring Payments",
      data: [0, 3, 1, 2, 8, 1, 5, 1],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1,2                                                          */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <div className="d-flex flex-wrap">
          <div>
            <CardTitle>Newsletter Campaign</CardTitle>
            <CardSubtitle>Overview of Newsletter Campaign</CardSubtitle>
          </div>
          <div className="ml-auto align-self-center">
            <div className="d-flex no-block align-items-center justify-content-center">
              <div>
                <h6 className="text-success">
                  <i className="fa fa-circle font-10 mr-2" />
                  Open Rate
                </h6>
              </div>
              <div className="ml-3">
                <h6 className="text-info">
                  <i className="fa fa-circle font-10 mr-2" />
                  Recurring Payments
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="campaign ct-charts mt-3">
          <Chart
            options={optionsnewslatter}
            series={seriesnewslatter}
            type="area"
            height="250px"
          />
        </div>
        <Row className="text-center">
          <Col lg="4" md="4" className="mt-3">
            <Newsdata texttitle="5098" textsubtitle="Total Sent" />
          </Col>
          <Col lg="4" md="4" className="mt-3">
            <Newsdata texttitle="4156" textsubtitle="Mail Open Rate" />
          </Col>
          <Col lg="4" md="4" className="mt-3">
            <Newsdata texttitle="1369" textsubtitle="Click Rate" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default NewsleterCompaign;
