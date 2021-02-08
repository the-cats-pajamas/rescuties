import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap";

import Chart from "react-apexcharts";

const CardBandwidth = () => {
  const optionsbandwidth = {
    colors: ["#fff"],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: "rgba(255, 255, 255, 0.5)",
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriesbandwidth = [
    {
      name: "",
      data: [5, 0, 12, 1, 8, 3, 12, 15],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1,2,3                                                        */
    /*--------------------------------------------------------------------------------*/
    <Card className="bg-primary">
      <CardBody>
        <div className="d-flex">
          <div className="mr-3 align-self-center">
            <h1 className="text-white">
              <i className="ti-pie-chart" />
            </h1>
          </div>
          <div>
            <CardTitle className="text-white">Bandwidth usage</CardTitle>
            <CardSubtitle className="text-white op-5">March 2017</CardSubtitle>
          </div>
        </div>
        <Row className="mt-2">
          <Col xs="4" className="align-self-center">
            <h2 className="font-light text-white">50 GB</h2>
          </Col>
          <Col xs="8" className="pt-2 pb-3 align-self-center">
            <div className="float-right">
              <Chart
                options={optionsbandwidth}
                series={seriesbandwidth}
                type="line"
                height="70px"
                width="150px"
              />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CardBandwidth;
