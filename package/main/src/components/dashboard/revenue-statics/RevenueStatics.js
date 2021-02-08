import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";

import Chart from "react-apexcharts";

const RevenueStatics = () => {
  const optionsrevenue = {
    grid: {
      show: true,
      strokeDashArray: 2,
      borderColor: "rgba(0,0,0,.3)",
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        endingShape: "flat",
      },
    },
    colors: ["#1e88e5", "#26c6da"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
     stroke: {
      show: true,
      width: 5,
      colors: ['transparent']
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriesrevenue = [
    {
      name: "Ample",
      data: [9, 5, 3, 7, 5, 10],
    },
    {
      name: "Pixel",
      data: [6, 3, 9, 5, 4, 6],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-3                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <Row>
          <Col xs="12">
            <div className="d-flex flex-wrap">
              <div>
                <CardTitle>Revenue Statistics</CardTitle>
                <CardSubtitle>Xtreme Admin Vs Nice Admin</CardSubtitle>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <Chart
              options={optionsrevenue}
              series={seriesrevenue}
              type="bar"
              height="290px"
            />
          </Col>
        </Row>
        <div className="d-flex no-block align-items-center justify-content-center">
          <div>
            <h6 className="text-success">
              <i className="fa fa-circle font-10 mr-2" />
              Xtreme
            </h6>
          </div>
          <div className="ml-3">
            <h6 className="text-info">
              <i className="fa fa-circle font-10 mr-2" />
              Nice
            </h6>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default RevenueStatics;
