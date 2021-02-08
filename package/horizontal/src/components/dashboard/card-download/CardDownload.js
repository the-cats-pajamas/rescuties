import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import Chart from "react-apexcharts";

const CardDownload = () => {
  const optionsdownload = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    colors: "rgba(255, 255, 255, 0.5)",
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
    tooltip: {
      theme: "dark",
    },
  };
  const seriesdownload = [
    {
      name: "",
      data: [4, 5, 2, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9],
    },
  ];
  /*--------------------------------------------------------------------------------*/
  /* Used In Dashboard-1,2,3                                                        */
  /*--------------------------------------------------------------------------------*/
  return (
    <Card className="bg-success">
      <CardBody>
        <div className="d-flex">
          <div className="mr-3 align-self-center">
            <h1 className="text-white">
              <i className="icon-cloud-download" />
            </h1>
          </div>
          <div>
            <CardTitle className="text-white">Download count</CardTitle>
            <CardSubtitle className="text-white op-5">March 2017</CardSubtitle>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <div className="mr-auto">
            <h2 className="font-light text-white">35487</h2>
          </div>
          <div>
            <Chart
              options={optionsdownload}
              series={seriesdownload}
              type="bar"
              height="75px"
              width="150px"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardDownload;
