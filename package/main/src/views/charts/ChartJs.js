import React from "react";
import { Doughnut, Line, Bar, Radar, Pie, Polar } from "react-chartjs-2";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import * as d from "./ChartJsData";

//Doughnut Chart
const doughnutData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Orange"],

  datasets: [
    {
      data: d.chartData.doughnutData.data,
      backgroundColor: ["#dc3545", "#2962ff", "#fb6340", "#2dce89", "#4fc3f7"],
      hoverBackgroundColor: [
        "#dc3545",
        "#2962ff",
        "#fb6340",
        "#2dce89",
        "#4fc3f7",
      ],
    },
  ],
};

//Pie Chart
var pieData = {
  labels: ["Green", "Yellow", "Blue"],
  datasets: [
    {
      data: d.chartData.pieData.data,
      backgroundColor: ["#2dce89", "#5e72e4", "#23b7e5"],
      hoverBackgroundColor: ["#2dce89", "#5e72e4", "#23b7e5"],
    },
  ],
};

//Bar Chart
var barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Apple",
      backgroundColor: "#2962ff",
      borderColor: "#2962ff",
      data: d.chartData.barData.data.a,
    },
    {
      label: "Google",
      backgroundColor: "#4fc3f7",
      borderColor: "#4fc3f7",
      data: d.chartData.barData.data.b,
    },
  ],
};

//Line chart
var lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Income",
      backgroundColor: "rgb(79, 195, 247)",
      borderColor: "rgb(79, 195, 247)",
      pointBorderColor: "#fff",
      data: d.chartData.lineData.data.a,
    },
    {
      label: "Outcome",
      backgroundColor: "rgb(246, 249, 252)",
      borderColor: "rgb(246, 249, 252)",
      pointBorderColor: "#fff",
      data: d.chartData.lineData.data.b,
    },
  ],
};

// Rader Chart
var radarData = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "Apple",
      backgroundColor: "rgba(246, 45, 81,0.2)",
      borderColor: "rgba(246, 45, 81,1)",
      data: d.chartData.radarData.data.a,
    },
    {
      label: "Google",
      backgroundColor: "rgba(45, 206, 137,0.2)",
      borderColor: "rgba(45, 206, 137,1)",
      data: d.chartData.radarData.data.b,
    },
  ],
};

//Polar Chart
var polarData = {
  datasets: [
    {
      data: d.chartData.polarData.data,
      backgroundColor: ["#dc3545", "#2962ff", "#fb6340", "#2dce89"],
      label: "My dataset",
    },
  ],
  labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
};

const Chartjs = () => {
  return (
    <div>
      {/*--------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/*--------------------------------------------------------------------------------*/}
      <Row>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle>Pie Chart</CardTitle>
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 350 }}
              >
                <Pie
                  data={pieData}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      labels: { fontFamily: "Poppins" },
                    },
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle>Bar Chart</CardTitle>
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 350 }}
              >
                <Bar
                  data={barData}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      labels: { fontFamily: "Poppins" },
                    },
                    scales: {
                      yAxes: [
                        {
                          gridLines: { display: false },
                          ticks: { fontFamily: "Poppins" },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: { display: false },
                          ticks: { fontFamily: "Poppins" },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle>Doughnut Chart</CardTitle>
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 350 }}
              >
                <Doughnut
                  data={doughnutData}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      labels: { fontFamily: "Poppins" },
                    },
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle>Line Chart</CardTitle>
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 350 }}
              >
                <Line
                  data={lineData}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      labels: { fontFamily: "Poppins" },
                    },
                    scales: {
                      yAxes: [
                        {
                          gridLines: { display: false },
                          ticks: { fontFamily: "Poppins" },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: { display: false },
                          ticks: { fontFamily: "Poppins" },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle>Polar Chart</CardTitle>
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 350 }}
              >
                <Polar
                  data={polarData}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      labels: { fontFamily: "Poppins" },
                    },
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle>Radar Chart</CardTitle>
              <div
                className="chart-wrapper"
                style={{ width: "100%", margin: "0 auto", height: 350 }}
              >
                <Radar
                  data={radarData}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: true,
                      labels: { fontFamily: "Poppins" },
                    },
                  }}
                />
              </div>
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

export default Chartjs;
