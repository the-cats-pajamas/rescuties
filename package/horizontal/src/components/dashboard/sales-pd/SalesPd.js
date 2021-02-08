import React from "react";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import Chart from "react-apexcharts";

const SalesPd = () => {
  const optionssalesprediction = {
    colors: ["#7460ee"],
    chart: {
      type: "radialBar",
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          shadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ["Average Results"],
    tooltip: {
      theme: "dark",
    },
  };
  const seriessalesprediction = [76];
  //   2
  const optionssalesdifference = {
    labels: ["Increase", "Decrease"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    chart: {},
    plotOptions: {
      pie: {
        donut: {
          size: "60px",
        },
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: false,
    },
    colors: ["rgb(38, 198, 218)", "rgb(242, 244, 248)"],
    tooltip: {
      enabled: false,
      theme: "dark",
    },
  };
  const seriessalesdifference = [25, 10];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-4                                                            */
    /*--------------------------------------------------------------------------------*/
    <Row>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle>Sales Prediction</CardTitle>
            <div className="d-flex mt-4">
              <div className="align-self-center">
                <span className="display-6 text-primary">$3528</span>
                <h6 className="text-muted">10% Increased</h6>
                <h5>(150-165 Sales)</h5>
              </div>
              <div className="ml-auto">
                <div style={{ height: "70px", width: "150px" }}>
                  <Chart
                    options={optionssalesprediction}
                    series={seriessalesprediction}
                    type="radialBar"
                    height="200px"
                    width="150px"
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle className="mb-0">Sales Difference</CardTitle>
            <Row className="mt-3 mb-4">
              <Col lg="6" md="6" className="align-self-center">
                <div className="mt-2">
                  <span className="display-6 text-success">$4316</span>
                  <h6 className="text-muted">10% Increased</h6>
                  <h5>(150-165 Sales)</h5>
                </div>
              </Col>
              <Col lg="6" md="6" className="align-self-center">
                <div className="ml-auto" style={{ height: "80px", width: "150px" }}>
                  <Chart
                    options={optionssalesdifference}
                    series={seriessalesdifference}
                    type="donut"
                    width="140px"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default SalesPd;
