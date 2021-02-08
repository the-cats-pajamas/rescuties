// react plugin for creating vector maps
import React from "react";
import { VectorMap } from "react-jvectormap";
import "./VectorMap.css";
import { Card, CardBody } from "reactstrap";
var mapData = {
  FR: 540,
  AU: 360,
  GB: 690,
  GE: 200,
  IN: 400,
  RO: 600,
  RU: 300,
  US: 2920,
};
const Vectormap = () => {
  return (
    <div>
      <h5 className="mb-4">Vectormap Page</h5>
      <Card>
        <CardBody>
          <h5 className="mb-4">World Map</h5>
          <VectorMap
            map={"world_mill"}
            backgroundColor="transparent"
            zoomOnScroll={false}
            containerStyle={{
              width: "100%",
              height: "450px",
            }}
            containerClassName="map"
            regionStyle={{
              initial: {
                fill: "#d5e4e4",
                "fill-opacity": 0.9,
                stroke: "1",
                "stroke-width": 1,
                "stroke-opacity": 0.5,
              },
            }}
            series={{
              regions: [
                {
                  values: mapData,
                  scale: ["#2e66ff", "#2962ff"],
                },
              ],
            }}
          />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h5 className="mb-4">USA Map</h5>

          <VectorMap
            map={"us_aea"}
            backgroundColor="transparent"
            //ref="map"
            // ref={(e) => { this.map = e; }}
            containerStyle={{
              width: "100%",
              height: "300px",
            }}
            regionStyle={{
              initial: {
                fill: "#b8e9f1",
                "fill-opacity": 0.9,
                stroke: "1",
                "stroke-width": 1,
                "stroke-opacity": 0.5,
              },
            }}
            containerClassName="map"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Vectormap;
