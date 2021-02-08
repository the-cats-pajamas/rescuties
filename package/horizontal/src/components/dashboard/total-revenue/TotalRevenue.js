import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import Chart from "react-apexcharts";

const TotalRevenue = () => {
  const optionstotalrevenue = {
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, .3)",
      strokeDashArray: 3,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        endingShape: "flat",
      },
    },
    colors: ["#1e88e5", "#26c6da", "#fc4b6c"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      stacked: true,
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
      ],
      labels: {
        style: {
          cssClass: "text-muted fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          cssClass: "text-muted fill-color",
        },
      },
    },
    stroke: {
      curve: "straight",
      width: 0,
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriestotalrevenue = [
    {
      name: "2015",
      data: [
        800000,
        1200000,
        1400000,
        1300000,
        1200000,
        1400000,
        1300000,
        1300000,
        1200000,
      ],
    },
    {
      name: "2020",
      data: [
        200000,
        400000,
        500000,
        300000,
        400000,
        500000,
        300000,
        300000,
        400000,
      ],
    },
    {
      name: "2025",
      data: [
        100000,
        200000,
        400000,
        600000,
        200000,
        400000,
        600000,
        600000,
        200000,
      ],
    },
  ];
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-4                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <div className="d-flex no-block align-items-center">
          <CardTitle>Total Revenue</CardTitle>
          <div className="ml-auto d-flex no-block align-items-center">
            <ul className="list-inline font-12 dl mr-3 mb-0">
              <li className="border-0 p-0 text-info list-inline-item">
                <h6 className="text-muted">
                  <i className="fa fa-circle mr-1 text-success" />
                  2015
                </h6>
              </li>
              <li className="border-0 p-0 text-primary list-inline-item">
                <h6 className="text-muted">
                  <i className="fa fa-circle mr-1 text-danger" />
                  2016
                </h6>
              </li>
              <li className="border-0 p-0 text-primary list-inline-item">
                <h6 className="text-muted">
                  <i className="fa fa-circle mr-1 text-info" />
                  2017
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-sales">
          <Chart
            options={optionstotalrevenue}
            series={seriestotalrevenue}
            type="bar"
            height="350px"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default TotalRevenue;
