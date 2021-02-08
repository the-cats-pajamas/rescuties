import React from "react";
import { CardGroup, Card, CardBody } from "reactstrap";

import Chart from "react-apexcharts";

const VisitrateView = () => {
  const optionsvisit1 = {
    colors: ["#26c6da"],
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "flat",
        columnWidth: "65%",
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      stroke: {
        show: false,
      },
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      x: {
        show: false,
      },
    },
  };
  const seriesvisit1 = [
    {
      name: "",
      data: [4, 5, 2, 10, 9, 12, 4, 9],
    },
  ];
  // 2
  const optionsvisit2 = {
    colors: ["#7460ee"],
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "flat",
        columnWidth: "65%",
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      stroke: {
        show: false,
      },
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      x: {
        show: false,
      },
    },
  };
  const seriesvisit2 = [
    {
      name: "",
      data: [2, 5, 6, 10, 9, 12, 4, 9],
    },
  ];
  //   3
  const optionsvisit3 = {
    colors: ["#03a9f3"],
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "flat",
        columnWidth: "65%",
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      stroke: {
        show: false,
      },
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      x: {
        show: false,
      },
    },
  };
  const seriesvisit3 = [
    {
      name: "",
      data: [4, 5, 6, 10, 9, 12, 4, 9],
    },
  ];
  //   4
  const optionsvisit4 = {
    colors: ["#f62d51"],
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "flat",
        columnWidth: "65%",
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: { enabled: true },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
      stroke: {
        show: false,
      },
      padding: {
        top: 0,
        bottom: 0,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      x: {
        show: false,
      },
    },
  };
  const seriesvisit4 = [
    {
      name: "",
      data: [2, 5, 6, 10, 9, 12, 4, 9],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-4                                                            */
    /*--------------------------------------------------------------------------------*/
    <CardGroup>
      <Card>
        <CardBody className="text-center">
          <h4 className="text-center">Unique Visit</h4>
          <div style={{ width: "100px", margin: "0 auto" }}>
            <Chart
              options={optionsvisit1}
              series={seriesvisit1}
              type="bar"
              height="65px"
            />
          </div>
        </CardBody>
        <div className="p-2 border-top text-center">
          <h4 className="font-medium mb-0">
            <i className="ti-angle-up text-success" /> 12456
          </h4>
        </div>
      </Card>

      <Card>
        <CardBody className="text-center">
          <h4 className="text-center">Total Visit</h4>
          <div style={{ width: "100px", margin: "0 auto" }}>
            <Chart
              options={optionsvisit2}
              series={seriesvisit2}
              type="bar"
              height="65px"
            />
          </div>
        </CardBody>
        <div className="p-2 border-top text-center">
          <h4 className="font-medium mb-0">
            <i className="ti-angle-down text-primary" /> 456
          </h4>
        </div>
      </Card>
      <Card>
        <CardBody className="text-center">
          <h4 className="text-center">Bounce rate</h4>
          <div style={{ width: "100px", margin: "0 auto" }}>
            <Chart
              options={optionsvisit3}
              series={seriesvisit3}
              type="bar"
              height="65px"
            />
          </div>
        </CardBody>
        <div className="p-2 border-top text-center">
          <h4 className="font-medium mb-0">
            <i className="ti-angle-up text-info" /> 12456
          </h4>
        </div>
      </Card>

      <Card>
        <CardBody className="text-center">
          <h4 className="text-center">Page Views</h4>
          <div style={{ width: "100px", margin: "0 auto" }}>
            <Chart
              options={optionsvisit4}
              series={seriesvisit4}
              type="bar"
              height="65px"
            />
          </div>
        </CardBody>
        <div className="p-2 border-top text-center">
          <h4 className="font-medium mb-0">
            <i className="ti-angle-down text-danger" /> 456
          </h4>
        </div>
      </Card>
    </CardGroup>
  );
};

export default VisitrateView;
