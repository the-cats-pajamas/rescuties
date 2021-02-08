import React from "react";
import { Card, CardBody, CardTitle, Input, Table } from "reactstrap";

import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";
import img3 from "../../../assets/images/users/3.jpg";
import img4 from "../../../assets/images/users/4.jpg";
import img5 from "../../../assets/images/users/5.jpg";

import Monthdata from "./MonthData.js";

const MonthTable = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-2 && Widget Page                                             */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <div className="d-flex no-block">
          <CardTitle>Projects of the Month</CardTitle>
          <div className="ml-auto">
            <Input type="select" className="custom-select">
              <option defaultValue="0">January</option>
              <option defaultValue="1">February</option>
              <option defaultValue="2">March</option>
              <option defaultValue="3">April</option>
            </Input>
          </div>
        </div>
        <div>
          <Table className="stylish-table mb-0" responsive>
            <thead>
              <tr>
                <th colSpan="2" className="text-muted font-medium border-top-0">
                  Assigned
                </th>
                <th className="text-muted font-medium border-top-0">Name</th>
                <th className="text-muted font-medium border-top-0">
                  Priority
                </th>
                <th className="text-muted font-medium border-top-0">Budget</th>
              </tr>
            </thead>
            <tbody>
              <Monthdata
                image={img1}
                username="Sunil Joshi"
                smtext="Theme Developer"
                templatename="elite admin"
                badge="Pending"
                badgeColor="primary"
                budget="$234.70"
              />
              <Monthdata
                image={img2}
                username="Andrew"
                smtext="Project Manager"
                templatename="Real Homes"
                badge="Medium"
                badgeColor="info"
                budget="$145.70"
              />
              <Monthdata
                image={img3}
                username="Shaine Nehwal"
                smtext="Developer"
                templatename="Hacker"
                badge="High"
                badgeColor="danger"
                budget="$458.70"
              />
              <Monthdata
                image={img4}
                username="Nirav Joshi"
                smtext="Photographer"
                templatename="elite admin"
                badge="Pending"
                badgeColor="warning"
                budget="$234.70"
              />
              <Monthdata
                image={img5}
                username="Happpsinh"
                smtext="Project Manager"
                templatename="Xtreme admin"
                badge="Medium"
                badgeColor="info"
                budget="$145.70"
              />
             
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default MonthTable;
