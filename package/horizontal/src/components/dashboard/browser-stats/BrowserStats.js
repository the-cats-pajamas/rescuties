import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

import chrome from "../../../assets/images/browser/chrome-logo.png";
import firefox from "../../../assets/images/browser/firefox-logo.png";
import safari from "../../../assets/images/browser/safari-logo.png";
import ie from "../../../assets/images/browser/internet-logo.png";
import opera from "../../../assets/images/browser/opera-logo.png";
import edge from "../../../assets/images/browser/internet-logo.png";

const BrowserStats = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Wizard Page                                                            */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody>
        <CardTitle>Browser Stats</CardTitle>
        <div className="d-flex align-items-center mt-4">
          <img src={chrome} alt="logo" width="40" />
          <span className="ml-3">Google Chrome</span>
          <div className="ml-auto">
            <span className="badge badge-light-info text-info font-medium">
              23%
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <img src={firefox} alt="logo" width="40" />
          <span className="ml-3">Mozila Firefox</span>
          <div className="ml-auto">
            <span className="badge badge-light-warning text-warning font-medium">
              23%
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <img src={safari} alt="logo" width="40" />
          <span className="ml-3">Apple Safari</span>
          <div className="ml-auto">
            <span className="badge badge-light-danger text-danger font-medium">
              23%
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <img src={ie} alt="logo" width="40" />
          <span className="ml-3">Internet Explorer</span>
          <div className="ml-auto">
            <span className="badge badge-light-success text-success font-medium">
              23%
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <img src={opera} alt="logo" width="40" />
          <span className="ml-3">Opera mini</span>
          <div className="ml-auto">
            <span className="badge badge-light-info text-info font-medium">
              23%
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4">
          <img src={edge} alt="logo" width="40" />
          <span className="ml-3">Microsoft edge</span>
          <div className="ml-auto">
            <span className="badge badge-light-danger text-danger font-medium">
              23%
            </span>
          </div>
        </div>
        {/* <Table responsive borderless className="mb-0">
          <tbody>
            <tr>
              <td style={{ width: "40px" }}></td>
              <td></td>
              <td align="right"></td>
            </tr>
            <tr>
              <td>
                <img src={firefox} alt="logo" />
              </td>
              <td>Mozila Firefox</td>
              <td align="right">
                <span className="badge badge-success">15%</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={safari} alt="logo" />
              </td>
              <td>Apple Safari</td>
              <td align="right">
                <span className="badge badge-primary">07%</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={ie} alt="logo" />
              </td>
              <td>Internet Explorer</td>
              <td align="right">
                <span className="badge badge-warning">09%</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={opera} alt="logo" />
              </td>
              <td>Opera mini</td>
              <td align="right">
                <span className="badge badge-danger">23%</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src={edge} alt="logo" />
              </td>
              <td>Microsoft edge</td>
              <td align="right">
                <span className="badge badge-success">09%</span>
              </td>
            </tr>
          </tbody>
        </Table> */}
      </CardBody>
    </Card>
  );
};

export default BrowserStats;
