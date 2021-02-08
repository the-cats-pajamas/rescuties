import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import Chart from "react-apexcharts";

const Visitors = () => {
  const optionsvisitors = {
    labels: ["Other", "Desktop", "Tablet", "Mobile"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        left: 0,
        right: 0,
      },
      borderColor: "transparent",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "82px",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "18px",
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: true,
              color: "#99abb4",
            },
            total: {
              show: true,
              label: "Our Visitors",
              color: "#99abb4",
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: "transparent",
    },
    legend: {
      show: false,
    },
    colors: ["#1e88e5", "#26c6da", "#eceff1", "#745af2"],
    tooltip: {
      fillSeriesColor: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  };
  const seriesvisitors = [50, 40, 30, 10];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1,2                                                          */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <CardTitle>Our Visitors</CardTitle>
        <CardSubtitle className="mb-3">
          Different Devices Used to Visit
        </CardSubtitle>
        <Chart
          options={optionsvisitors}
          series={seriesvisitors}
          type="donut"
          height="255px"
        />
      </CardBody>
      <div>
        <hr className="mt-0 mb-0" />
      </div>
      <CardBody>
        <div className="d-flex no-block align-items-center justify-content-center">
          <div>
            <h6 className="text-info">
              <i className="fa fa-circle font-10 mr-2" />
              Mobile
            </h6>
          </div>
          <div className="ml-3">
            <h6 className="text-primary">
              <i className="fa fa-circle font-10 mr-2" />
              Desktop
            </h6>
          </div>
          <div className="ml-3">
            <h6 className="text-success">
              <i className="fa fa-circle font-10 mr-2" />
              Tablet
            </h6>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Visitors;
