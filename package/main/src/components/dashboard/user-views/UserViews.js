import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import Chart from "react-apexcharts";

const UserViews = () => {
  const optionsuserviews = {
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, .3)",
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
  const seriesuserviews = [
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
    /* Used In Dashboard-3                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <div className="d-flex flex-wrap">
          <div>
            <CardTitle>User Views</CardTitle>
            <CardSubtitle>Last 5 Months Views</CardSubtitle>
          </div>
        </div>
        <div className="campaign ct-charts mt-4">
          <Chart
            options={optionsuserviews}
            series={seriesuserviews}
            type="area"
            height="235px"
          />
        </div>
        <div className="d-flex no-block align-items-center justify-content-center mt-4 mb-2">
          <div>
            <h6 className="text-success">
              <i className="fa fa-circle font-10 mr-2" />
              Positive View
            </h6>
          </div>
          <div className="ml-3">
            <h6 className="text-info">
              <i className="fa fa-circle font-10 mr-2" />
              Negative View
            </h6>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserViews;
