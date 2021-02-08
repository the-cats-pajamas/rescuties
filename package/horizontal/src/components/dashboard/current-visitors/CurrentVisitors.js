import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import { VectorMap } from "react-jvectormap";
import "../../../views/maps/VectorMap.css";

class CurrentVisitor extends React.Component {
  render() {
    return (
      /*--------------------------------------------------------------------------------*/
      /* Used In Dashboard-2,3                                                          */
      /*--------------------------------------------------------------------------------*/
      <Card>
        <CardBody>
          <CardTitle>Current Visitors</CardTitle>
          <CardSubtitle>Different Devices Used to Visit</CardSubtitle>
          <VectorMap
            map={"us_aea"}
            backgroundColor="transparent"
            ref={(e) => {
              this.map = e;
            }}
            // ref="map"
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
          <div>
            <ul className="list-inline d-flex justify-content-center mb-0">
              <li>
                <h6 className="text-success">
                  <i className="fa fa-circle font-10 mr-2" />
                  Valley
                </h6>
              </li>
              <li className="ml-3">
                <h6 className="text-info">
                  <i className="fa fa-circle font-10 mr-2" />
                  Newyork
                </h6>
              </li>
              <li className="ml-3">
                <h6 className="text-danger">
                  <i className="fa fa-circle font-10 mr-2" />
                  Kansas
                </h6>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default CurrentVisitor;
