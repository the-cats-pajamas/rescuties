import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  CardSubtitle,
  Button,
} from "reactstrap";

import img1 from "../../assets/images/logo-icon.png";

const setbg = {
    backgroundImage: `url(${img1})`,
    height: "26px",
    width: "30px",
  },
  setheight = {
    height: "100px",
  };

const Helperclass = () => {
  return (
    <div>
      <Row>
        <Col xs="12">
          <Card>
            <CardBody>
              <Row>
                <Col xs="12">
                  <CardTitle>Text Color Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.text-muted</code>{" "}
                        </td>
                        <td className="text-muted">
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          nibh.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.text-primary</code>{" "}
                        </td>
                        <td className="text-primary">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.text-success</code>{" "}
                        </td>
                        <td className="text-success">
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          nibh.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.text-info</code>{" "}
                        </td>
                        <td className="text-info">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.text-warning</code>{" "}
                        </td>
                        <td className="text-warning">
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          nibh.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.text-danger</code>{" "}
                        </td>
                        <td className="text-danger">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.text-dark</code>{" "}
                        </td>
                        <td className="text-dark">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col xs="12" className="mt-4 mb-3">
                  <hr />
                </Col>
                <Col xs="12">
                  <CardTitle>Font Weight</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.font-light</code>{" "}
                        </td>
                        <td>Font weight will be light (300).</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.font-normal</code>{" "}
                        </td>
                        <td>Font weight will be normal</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.font-bold </code>{" "}
                        </td>
                        <td>Font weight will be bold (700)</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col xs="12" className="mt-4 mb-3">
                  <hr />
                </Col>
                <Col md="3">
                  <CardTitle>Padding Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.p-0</code>{" "}
                        </td>
                        <td>Padding will be 0px from all side.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.p-1</code>{" "}
                        </td>
                        <td>Padding will be 4px from all side.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.p-2</code>{" "}
                        </td>
                        <td>Padding will be 8px from all side.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.p-3</code>{" "}
                        </td>
                        <td>Padding will be 16px from all side.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.p-4</code>{" "}
                        </td>
                        <td>Padding will be 24px from all side</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.p-5</code>{" "}
                        </td>
                        <td>Padding will be 48px from all side.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="3">
                  <CardTitle>Padding Left Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pl-0</code>{" "}
                        </td>
                        <td>Only Padding Left will be 0px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pl-1</code>{" "}
                        </td>
                        <td>Only Padding Left will be 4px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pl-2</code>{" "}
                        </td>
                        <td>Only Padding Left will be 8px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pl-3</code>{" "}
                        </td>
                        <td>Only Padding Left will be 16px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pl-4</code>{" "}
                        </td>
                        <td>Only Padding Left will be 24px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pl-5</code>{" "}
                        </td>
                        <td>Only Padding Left will be 48px.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="3">
                  <CardTitle>Padding right Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pr-0</code>{" "}
                        </td>
                        <td>Only Padding right will be 0px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pr-1</code>{" "}
                        </td>
                        <td>Only Padding right will be 4px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pr-2</code>{" "}
                        </td>
                        <td>Only Padding right will be 8px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pr-3</code>{" "}
                        </td>
                        <td>Only Padding right will be 16px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pr-4</code>{" "}
                        </td>
                        <td>Only Padding right will be 24px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pr-5</code>{" "}
                        </td>
                        <td>Only Padding right will be 48px.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="3">
                  <CardTitle>Padding top Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pt-0</code>{" "}
                        </td>
                        <td>Only Padding top will be 0px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pt-1</code>{" "}
                        </td>
                        <td>Only Padding top will be 4px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pt-2</code>{" "}
                        </td>
                        <td>Only Padding top will be 8px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pt-3</code>{" "}
                        </td>
                        <td>Only Padding top will be 16px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pt-4</code>{" "}
                        </td>
                        <td>Only Padding top will be 24px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.pt-5</code>{" "}
                        </td>
                        <td>Only Padding top will be 48px.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col xs="12" className="mt-4 mb-3">
                  <hr />
                </Col>
                <Col md="3">
                  <CardTitle>Margin top Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mt-0</code>{" "}
                        </td>
                        <td>Only Margin top will be 0px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mt-1 </code>{" "}
                        </td>
                        <td>Only Margin top will be 4px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mt-2 </code>{" "}
                        </td>
                        <td>Only Margin top will be 8px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mt-3</code>{" "}
                        </td>
                        <td>Only Margin top will be 16px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mt-4</code>{" "}
                        </td>
                        <td>Only Margin top will be 24px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mt-5</code>{" "}
                        </td>
                        <td>Only Margin top will be 48px.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="3">
                  <CardTitle>Margin Bottom Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mb-0</code>{" "}
                        </td>
                        <td>Only Margin Bottom will be 0px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mb-1 </code>{" "}
                        </td>
                        <td>Only Margin Bottom will be 4px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mb-2 </code>{" "}
                        </td>
                        <td>Only Margin Bottom will be 8px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mb-3</code>{" "}
                        </td>
                        <td>Only Margin Bottom will be 16px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mb-4</code>{" "}
                        </td>
                        <td>Only Margin Bottom will be 24px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mb-5</code>{" "}
                        </td>
                        <td>Only Margin Bottom will be 48px.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="3">
                  <CardTitle>Margin Right Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mr-0</code>{" "}
                        </td>
                        <td>Only Margin Right will be 0px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mr-1</code>{" "}
                        </td>
                        <td>Only Margin Right will be 4px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mr-2</code>{" "}
                        </td>
                        <td>Only Margin Right will be 8px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mr-3</code>{" "}
                        </td>
                        <td>Only Margin Right will be 16px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mr-4</code>{" "}
                        </td>
                        <td>Only Margin Right will be 24px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.mr-5</code>{" "}
                        </td>
                        <td>Only Margin Right will be 48px.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="3">
                  <CardTitle>Margin Left Classes</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.ml-0</code>{" "}
                        </td>
                        <td>Only Margin Left will be 0px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.ml-1</code>{" "}
                        </td>
                        <td>Only Margin Left will be 4px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.ml-2 </code>{" "}
                        </td>
                        <td>Only Margin Left will be 8px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.ml-3 </code>{" "}
                        </td>
                        <td>Only Margin Left will be 16px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.ml-4</code>{" "}
                        </td>
                        <td>Only Margin Left will be 24px.</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.ml-5</code>{" "}
                        </td>
                        <td>Only Margin Left will be 48px.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col xs="12" className="mt-4 mb-3">
                  <hr />
                </Col>
                <Col md="4">
                  <CardTitle>Background Colors</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-primary</code>{" "}
                        </td>
                        <td>For Primary background color</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-success</code>{" "}
                        </td>
                        <td>For Success (green) background color</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-info</code>{" "}
                        </td>
                        <td>For info (Blue) background color</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="4">
                  <CardTitle>&nbsp;</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-warning</code>{" "}
                        </td>
                        <td>For Warning (yellow) background color</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-danger</code>{" "}
                        </td>
                        <td>For Danger (red) background color</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-theme</code>{" "}
                        </td>
                        <td>For Theme background color</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md="4">
                  <CardTitle>&nbsp;</CardTitle>
                  <Table className="mb-0" bordered>
                    <thead>
                      <tr>
                        <th className="text-nowrap">Class</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-theme-dark</code>{" "}
                        </td>
                        <td>For theme dark background color</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-inverse </code>{" "}
                        </td>
                        <td>For inverse (dark) background color</td>
                      </tr>
                      <tr>
                        <td className="text-nowrap">
                          {" "}
                          <code>.bg-purple</code>{" "}
                        </td>
                        <td>For Purple background color</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <CardTitle className="mt-2">Bootstrap Classes</CardTitle>
      <Card>
        <CardBody>
          <CardTitle>Borders</CardTitle>
          <CardSubtitle>
            Use border utilities to quickly style the border and border-radius
            of an element. Great for images, buttons, or any other element.
          </CardSubtitle>
          <CardTitle className="mt-4">Additive border</CardTitle>
          <CardSubtitle>
            Use of below classes as per your requiements, which side you want
            border.
          </CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.border</code>
                </td>
                <td>
                  Use to add solid border of 1px on every side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border-top</code>
                </td>
                <td>Use to add solid border top of 1px on obejct.</td>
              </tr>
              <tr>
                <td>
                  <code>.border-bottom</code>
                </td>
                <td>Use to add solid border bottom of 1px on object.</td>
              </tr>
              <tr>
                <td>
                  <code>.border-left</code>
                </td>
                <td>Use to add solid border left of 1px on object.</td>
              </tr>
              <tr>
                <td>
                  <code>.border-right</code>
                </td>
                <td>Use to add solid border right of 1px on object.</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <CardBody>
          <div className="card-text my-1">
            <CardTitle>Subtractive border</CardTitle>
            <CardSubtitle>
              Use of below classes as per your requiements, which side you do
              not want to add border.
            </CardSubtitle>
          </div>
        </CardBody>
        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.no-border</code>
                </td>
                <td>Use when remove border from all side of the object.</td>
              </tr>
              <tr>
                <td>
                  <code>.border-top-0</code>
                </td>
                <td>Use when remove border from the top side of the object.</td>
              </tr>
              <tr>
                <td>
                  <code>.border-bottom-0</code>
                </td>
                <td>
                  Use when remove border from the bottom side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border-left-0</code>
                </td>
                <td>
                  Use when remove border from the left side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border-right-0</code>
                </td>
                <td>
                  Use when remove border from the right side of the object.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <CardBody>
          <CardTitle>Border color</CardTitle>
          <CardSubtitle>
            When you want add color in the border you can choose any of the
            below classes.
          </CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.border border-primary</code>
                </td>
                <td>
                  Use when add primary color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-secondary</code>
                </td>
                <td>
                  Use when add secondary color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-success</code>
                </td>
                <td>
                  Use when add success color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-danger</code>
                </td>
                <td>
                  Use when add danger color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-warning</code>
                </td>
                <td>
                  Use when add warning color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-info</code>
                </td>
                <td>
                  Use when add info color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-light</code>
                </td>
                <td>
                  Use when add light color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-dark</code>
                </td>
                <td>
                  Use when add dark color border to all side of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.border border-white</code>
                </td>
                <td>
                  Use when add white color border to all side of the object.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        <CardBody>
          <CardTitle>Border-radius</CardTitle>
          <CardSubtitle>Use to give rounded corner to the object.</CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.rounded</code>
                </td>
                <td>Add round corners border to all side of the object.</td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-top</code>
                </td>
                <td>
                  Add round corners border to top side only of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-bottom</code>
                </td>
                <td>
                  Add round corners border to bottom side only of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-left</code>
                </td>
                <td>
                  Add round corners border to left side only of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-right</code>
                </td>
                <td>
                  Add round corners border to right side only of the object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-circle</code>
                </td>
                <td>Create round circle border of the object.</td>
              </tr>
              <tr>
                <td>
                  <code>.rounded-0</code>
                </td>
                <td>Remove border corder from the all side of the object.</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Clearfix</CardTitle>
          <CardSubtitle>
            Quickly and easily clear floated content within a container by
            adding a clearfix utility.
          </CardSubtitle>
          <span>
            Easily clear <code>float</code>s by adding <code>.clearfix</code>{" "}
            <strong>to the parent element</strong>. Can also be used as a mixin.
          </span>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;clearfix&quot;&gt;...&lt;/div&gt;
            </code>
          </pre>
          <p className="py-1">
            The following example shows how the clearfix can be used. Without
            the clearfix the wrapping div would not span around the buttons
            which would cause a broken layout.
          </p>
          <div className="bd-example my-3">
            <div className="bg-info clearfix">
              <Button color="secondary" className="float-left">
                Example Button floated left
              </Button>
              <Button color="secondary" className="float-right">
                Example Button floated right
              </Button>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;bg-info clearfix&quot;&gt; &lt;button
              type=&quot;button&quot; className=&quot;btn btn-secondary
              float-left&quot;&gt;Example Button floated left&lt;/button&gt;
              &lt;button type=&quot;button&quot; className=&quot;btn
              btn-secondary float-right&quot;&gt;Example Button floated
              right&lt;/button&gt; &lt;/div&gt;
            </code>
          </pre>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Close icon</CardTitle>
          <CardSubtitle>
            Use a generic close icon for dismissing content like modals and
            alerts.
          </CardSubtitle>
          <span>
            <strong>Be sure to include text for screen readers</strong>, as
            we’ve done with <code>aria-label</code>.
          </span>
          <div className="bd-example d-flex">
            <Button className="close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </Button>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;Button className=&quot;close&quot;
              aria-label=&quot;Close&quot;&gt; &lt;span
              aria-hidden=&quot;true&quot;&gt;&times;&lt;/span&gt;
              &lt;/Button&gt;
            </code>
          </pre>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Display property</CardTitle>
          <CardSubtitle>
            Quickly and responsively toggle the display value of components and
            more with our display utilities. Includes support for some of the
            more common values, as well as some extras for controlling display
            when printing.
          </CardSubtitle>
          <CardTitle className="mt-4">Basic display values</CardTitle>
          <CardSubtitle>
            The{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
              <code>display</code> property
            </a>{" "}
            accepts a handful of values and we support many of them with utility
            classes. We purposefully don’t provide every value as a utility, so
            here’s what we support:
          </CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.d-none</code>
                </td>
                <td>Used for object to hide on all viewports.</td>
              </tr>
              <tr>
                <td>
                  <code>.d-inline</code>
                </td>
                <td>Used for object to behave like an inline object.</td>
              </tr>
              <tr>
                <td>
                  <code>.d-inline-block</code>
                </td>
                <td>Used for object to behave like an inline-block object.</td>
              </tr>
              <tr>
                <td>
                  <code>.d-block</code>
                </td>
                <td>Used for object to behave like an block object.</td>
              </tr>
              <tr>
                <td>
                  <code>.d-table</code>
                </td>
                <td>
                  Used for object to behave like <code>&lt;table&gt;</code>{" "}
                  object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.d-table-cell</code>
                </td>
                <td>
                  Used for object to behave like <code>&lt;td&gt;</code> object.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.d-flex</code>
                </td>
                <td>Used for object as a block-level flex container.</td>
              </tr>
              <tr>
                <td>
                  <code>.d-inline-flex</code>
                </td>
                <td>Used for object as an inline-level flex container.</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <CardBody>
          <p>
            Use above classes as per your requirements. For example, here’s how
            you could use the inline, block, or inline-block utilities.
          </p>
          <div className="bd-example my-3">
            <div className="d-inline bg-info p-1 mr-1 text-white">d-inline</div>
            <div className="d-inline bg-info  p-1 text-white">d-inline</div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-inline
              bg-info&quot;&gt;d-inline&lt;/div&gt; &lt;div
              className=&quot;d-inline bg-info&quot;&gt;d-inline&lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example my-3">
            <span className="d-block bg-info p-1 text-white">d-block</span>
          </div>
          <pre>
            <code className="language-markup">
              &lt;span className=&quot;d-block
              bg-info&quot;&gt;d-block&lt;/span&gt;
            </code>
          </pre>
          <div className="bd-example my-3">
            <div className="d-inline-block bg-info p-1 mr-1 text-white">
              d-inline-block
            </div>
            <div className="d-inline-block bg-info p-1 text-white">
              d-inline-block
            </div>
          </div>
          <pre>
            <code className="language-markup">
              &lt;div className=&quot;d-inline-block
              bg-info&quot;&gt;d-inline-block&lt;/div&gt; &lt;div
              className=&quot;d-inline-block
              bg-info&quot;&gt;d-inline-block&lt;/div&gt;
            </code>
          </pre>
          <p>
            Responsive variations also exist for every single utility mentioned
            above.
          </p>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-inline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-inline-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-table</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-table-cell</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-inline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-inline-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-table</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-table-cell</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-inline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-inline-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-table</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-table-cell</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-inline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-inline-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-table</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-table-cell</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-inline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-inline-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-block</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-table</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-table-cell</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-inline-flex</code>
            </li>
          </ul>
          <CardTitle className="mt-4">Hiding Elements</CardTitle>
          <p>
            For faster mobile-friendly development, use responsive display
            classes for showing and hiding elements by device. Avoid creating
            entirely different versions of the same site, instead hide element
            responsively for each screen size.
          </p>
          <p>
            To hide elements simply use the <code>.d-none</code> class or one of
            the <code>.d-{"sm,md,lg,xl"}-none</code> classes for any responsive
            screen variation.
          </p>
          <p>
            To show an element only on a given interval of screen sizes you can
            combine one <code>.d-*-none</code> class with a <code>.d-*-*</code>{" "}
            class, for example <code>.d-none.d-md-block.d-xl-none</code> will
            hide the element for all screen sizes except on medium and large
            devices.
          </p>
        </CardBody>
        <div className="table-responsive">
          <Table bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Screen Size</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hidden on all</td>
                <td>
                  <code>d-none</code>
                </td>
              </tr>
              <tr>
                <td>Hidden only on xs</td>
                <td>
                  <code>d-none d-sm-block</code>
                </td>
              </tr>
              <tr>
                <td>Hidden only on sm</td>
                <td>
                  <code>d-sm-none d-md-block</code>
                </td>
              </tr>
              <tr>
                <td>Hidden only on md</td>
                <td>
                  <code>d-md-none d-lg-block</code>
                </td>
              </tr>
              <tr>
                <td>Hidden only on lg</td>
                <td>
                  <code>d-lg-none d-xl-block</code>
                </td>
              </tr>
              <tr>
                <td>Hidden only on xl</td>
                <td>
                  <code>d-xl-none</code>
                </td>
              </tr>
              <tr>
                <td>Visible on all</td>
                <td>
                  <code>d-block</code>
                </td>
              </tr>
              <tr>
                <td>Visible only on xs</td>
                <td>
                  <code>d-block d-sm-none</code>
                </td>
              </tr>
              <tr>
                <td>Visible only on sm</td>
                <td>
                  <code>d-none d-sm-block d-md-none</code>
                </td>
              </tr>
              <tr>
                <td>Visible only on md</td>
                <td>
                  <code>d-none d-md-block d-lg-none</code>
                </td>
              </tr>
              <tr>
                <td>Visible only on lg</td>
                <td>
                  <code>d-none d-lg-block d-xl-none</code>
                </td>
              </tr>
              <tr>
                <td>Visible only on xl</td>
                <td>
                  <code>d-none d-xl-block</code>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <CardBody>
          <CardTitle>Display in print</CardTitle>
          <CardSubtitle>
            Change the <code>display</code> value of elements when printing with
            our print display utilities.
          </CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table className="mb-0" bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Class</th>
                <th>Print style</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.d-print-none</code>
                </td>
                <td>
                  Applies <code>display: none</code> to the element when
                  printing
                </td>
              </tr>
              <tr>
                <td>
                  <code>.d-print-inline</code>
                </td>
                <td>
                  Applies <code>display: inline</code> to the element when
                  printing
                </td>
              </tr>
              <tr>
                <td>
                  <code>.d-print-inline-block</code>
                </td>
                <td>
                  Applies <code>display: inline-block</code> to the element when
                  printing
                </td>
              </tr>
              <tr>
                <td>
                  <code>.d-print-block</code>
                </td>
                <td>
                  Applies <code>display: block</code> to the element when
                  printing
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Flex</CardTitle>
          <CardSubtitle>
            Quickly manage the layout, alignment, and sizing of grid columns,
            navigation, components, and more with a full suite of responsive
            flexbox utilities. For more complex implementations, custom CSS may
            be necessary.
          </CardSubtitle>
          <CardTitle className="mt-4">Enable flex behaviors</CardTitle>
          <CardTitle>
            Apply <code>display</code> utilities to create a flexbox container
            and transform <strong>direct children elements</strong> into flex
            items. Flex containers and items are able to be modified further
            with additional flex properties.
          </CardTitle>
          <div className="bd-example">
            <div className="d-flex p-2 bg-info text-white">
              I&apos;m a flexbox container!
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex p-2&quot;&gt;I&apos;m a flexbox
              container!&lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div className="d-inline-flex p-2 bg-info text-white">
              I&apos;m an inline flexbox container!
            </div>
          </div>
          <pre>
            <code className="language-markup">
              &lt;div className=&quot;d-inline-flex p-2&quot;&gt;I&apos;m an
              inline flexbox container!&lt;/div&gt;
            </code>
          </pre>
          <p>
            Responsive variations also exist for <code>.d-flex</code> and{" "}
            <code>.d-inline-flex</code>.
          </p>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-sm-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-md-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-lg-inline-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-flex</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.d-xl-inline-flex</code>
            </li>
          </ul>
        </CardBody>
        <CardBody>
          <CardTitle>Direction</CardTitle>
          <p>
            Set the direction of flex items in a flex container with direction
            utilities. In most cases you can omit the horizontal class here as
            the browser default is <code>row</code>. However, you may encounter
            situations where you needed to explicitly set this value (like
            responsive layouts).
          </p>
          <p>
            Use <code>.flex-row</code> to set a horizontal direction (the
            browser default), or <code>.flex-row-reverse</code> to start the
            horizontal direction from the opposite side.
          </p>
          <div className="bd-example">
            <div className="d-flex flex-row bg-info text-white mb-3">
              <div className="p-2 bg-info border-right">Flex item 1</div>
              <div className="p-2 bg-info border-right">Flex item 2</div>
              <div className="p-2 bg-info border-right">Flex item 3</div>
            </div>
            <div className="d-flex flex-row-reverse bg-info text-white">
              <div className="p-2 bg-info border-left">Flex item 1</div>
              <div className="p-2 bg-info border-left">Flex item 2</div>
              <div className="p-2 bg-info border-left">Flex item 3</div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;d-flex flex-row&quot;&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 1&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 2&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 3&lt;/div&gt; &lt;/div&gt;
              &lt;div className=&quot;d-flex flex-row-reverse&quot;&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 1&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 2&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 3&lt;/div&gt; &lt;/div&gt;
            </code>
          </pre>
          <p>
            Use <code>.flex-column</code> to set a vertical direction, or{" "}
            <code>.flex-column-reverse</code> to start the vertical direction
            from the opposite side.
          </p>
          <div className="bd-example">
            <div className="d-flex flex-column bg-info text-white mb-3">
              <div className="p-2 bg-info border-bottom">Flex item 1</div>
              <div className="p-2 bg-info border-bottom">Flex item 2</div>
              <div className="p-2 bg-info">Flex item 3</div>
            </div>
            <div className="d-flex flex-column-reverse bg-info text-white">
              <div className="p-2 bg-info">Flex item 1</div>
              <div className="p-2 bg-info border-bottom">Flex item 2</div>
              <div className="p-2 bg-info border-bottom">Flex item 3</div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;d-flex flex-column&quot;&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 1&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 2&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item 3&lt;/div&gt; &lt;/div&gt;
              &lt;div className=&quot;d-flex flex-column-reverse&quot;&gt;
              &lt;div className=&quot;p-2&quot;&gt;Flex item 1&lt;/div&gt;
              &lt;div className=&quot;p-2&quot;&gt;Flex item 2&lt;/div&gt;
              &lt;div className=&quot;p-2&quot;&gt;Flex item 3&lt;/div&gt;
              &lt;/div&gt;
            </code>
          </pre>
          <span>
            Responsive variations also exist for <code>flex-direction</code>.
          </span>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-row</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-row-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-column</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-column-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-sm-row</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-sm-row-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-sm-column</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-sm-column-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-md-row</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-md-row-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-md-column</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-md-column-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-lg-row</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-lg-row-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-lg-column</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-lg-column-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-xl-row</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-xl-row-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-xl-column</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-xl-column-reverse</code>
            </li>
          </ul>
        </CardBody>
        <CardBody>
          <div>
            <CardTitle>Justify content</CardTitle>
            <CardSubtitle>
              Use <code>justify-content</code> utilities on flexbox containers
              to change the alignment of flex items on the main axis (the x-axis
              to start, y-axis if <code>flex-direction: column</code>). Choose
              from <code>start</code> (browser default), <code>end</code>,{" "}
              <code>center</code>,<code>between</code>, or <code>around</code>.
            </CardSubtitle>
            <div className="bd-example">
              <div className="d-flex justify-content-start bg-light mb-3 text-white">
                <div className="p-2 bg-info border-right">Flex item</div>
                <div className="p-2 bg-info border-right">Flex item</div>
                <div className="p-2 bg-info border-right">Flex item</div>
              </div>
              <div className="d-flex justify-content-end bg-light mb-3 text-white">
                <div className="p-2 bg-info border-left">Flex item</div>
                <div className="p-2 bg-info border-left">Flex item</div>
                <div className="p-2 bg-info border-left">Flex item</div>
              </div>
              <div className="d-flex justify-content-center bg-light mb-3 text-white">
                <div className="p-2 bg-info border-left border-right">
                  Flex item
                </div>
                <div className="p-2 bg-info border-right">Flex item</div>
                <div className="p-2 bg-info border-right">Flex item</div>
              </div>
              <div className="d-flex justify-content-between bg-light mb-3 text-white">
                <div className="p-2 bg-info border-right">Flex item</div>
                <div className="p-2 bg-info border-left border-right">
                  Flex item
                </div>
                <div className="p-2 bg-info border-left">Flex item</div>
              </div>
              <div className="d-flex justify-content-around bg-light text-white">
                <div className="p-2 bg-info border-left border-right">
                  Flex item
                </div>
                <div className="p-2 bg-info border-left border-right">
                  Flex item
                </div>
                <div className="p-2 bg-info border-left border-right">
                  Flex item
                </div>
              </div>
            </div>
            <pre className="language-markup scrollable">
              <code>
                &lt;div className=&quot;d-flex
                justify-content-start&quot;&gt;...&lt;/div&gt; &lt;div
                className=&quot;d-flex
                justify-content-end&quot;&gt;...&lt;/div&gt; &lt;div
                className=&quot;d-flex
                justify-content-center&quot;&gt;...&lt;/div&gt; &lt;div
                className=&quot;d-flex
                justify-content-between&quot;&gt;...&lt;/div&gt; &lt;div
                className=&quot;d-flex
                justify-content-around&quot;&gt;...&lt;/div&gt;
              </code>
            </pre>
            <span>
              Responsive variations also exist for <code>justify-content</code>.
            </span>
            <ul className="list-style-none">
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-start</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-end</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-center</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-between</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-around</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-sm-start</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-sm-end</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-sm-center</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-sm-between</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-sm-around</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-md-start</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-md-end</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-md-center</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-md-between</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-md-around</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-lg-start</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-lg-end</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-lg-center</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-lg-between</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-lg-around</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-xl-start</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-xl-end</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-xl-center</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-xl-between</code>
              </li>
              <li>
                <i className="mr-2 mdi mdi-arrow-right"></i>
                <code>.justify-content-xl-around</code>
              </li>
            </ul>
          </div>
        </CardBody>
        <CardBody>
          <CardTitle>Align items</CardTitle>
          <CardSubtitle>
            Use <code>align-items</code> utilities on flexbox containers to
            change the alignment of flex items on the cross axis (the y-axis to
            start, x-axis if <code>flex-direction: column</code>). Choose from{" "}
            <code>start</code>, <code>end</code>, <code>center</code>,{" "}
            <code>baseline</code>, or <code>stretch</code> (browser default).
          </CardSubtitle>
          <div className="bd-example">
            <div
              className="d-flex align-items-start bg-light mb-3 text-white"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div
              className="d-flex align-items-end bg-light mb-3 text-white"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div
              className="d-flex align-items-center bg-light mb-3 text-white"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div
              className="d-flex align-items-baseline bg-light mb-3 text-white"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div
              className="d-flex align-items-stretch bg-light text-white"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;d-flex
              align-items-start&quot;&gt;...&lt;/div&gt; &lt;div
              className=&quot;d-flex align-items-end&quot;&gt;...&lt;/div&gt;
              &lt;div className=&quot;d-flex
              align-items-center&quot;&gt;...&lt;/div&gt; &lt;div
              className=&quot;d-flex
              align-items-baseline&quot;&gt;...&lt;/div&gt; &lt;div
              className=&quot;d-flex
              align-items-stretch&quot;&gt;...&lt;/div&gt;
            </code>
          </pre>
          <span>
            Responsive variations also exist for <code>align-items</code>.
          </span>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-sm-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-sm-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-sm-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-sm-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-sm-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-md-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-md-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-md-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-md-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-md-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-lg-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-lg-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-lg-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-lg-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-lg-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-xl-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-xl-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-xl-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-xl-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-items-xl-stretch</code>
            </li>
          </ul>
        </CardBody>
        <CardBody>
          <CardTitle>Align self</CardTitle>
          <CardSubtitle>
            Use <code>align-self</code> utilities on flexbox items to
            individually change their alignment on the cross axis (the y-axis to
            start, x-axis if <code>flex-direction: column</code>). Choose from
            the same options as <code>align-items</code>: <code>start</code>,{" "}
            <code>end</code>, <code>center</code>, <code>baseline</code>, or{" "}
            <code>stretch</code> (browser default).
          </CardSubtitle>
          <div className="bd-example">
            <div className="d-flex bg-light text-white mb-3" style={setheight}>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="align-self-start p-2 bg-info border-right">
                Aligned flex item
              </div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div className="d-flex bg-light text-white mb-3" style={setheight}>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="align-self-end p-2 bg-info border-right">
                Aligned flex item
              </div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div className="d-flex bg-light text-white mb-3" style={setheight}>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="align-self-center p-2 bg-info border-right">
                Aligned flex item
              </div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div className="d-flex bg-light text-white mb-3" style={setheight}>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="align-self-baseline p-2 bg-info border-right">
                Aligned flex item
              </div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div className="d-flex bg-light text-white" style={setheight}>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="align-self-stretch p-2 bg-info border-right">
                Aligned flex item
              </div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;align-self-start&quot;&gt;Aligned flex
              item&lt;/div&gt; &lt;div
              className=&quot;align-self-end&quot;&gt;Aligned flex
              item&lt;/div&gt; &lt;div
              className=&quot;align-self-center&quot;&gt;Aligned flex
              item&lt;/div&gt; &lt;div
              className=&quot;align-self-baseline&quot;&gt;Aligned flex
              item&lt;/div&gt; &lt;div
              className=&quot;align-self-stretch&quot;&gt;Aligned flex
              item&lt;/div&gt;
            </code>
          </pre>
          <span>
            Responsive variations also exist for <code>align-self</code>.
          </span>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-sm-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-sm-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-sm-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-sm-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-sm-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-md-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-md-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-md-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-md-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-md-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-lg-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-lg-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-lg-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-lg-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-lg-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-xl-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-xl-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-xl-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-xl-baseline</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-self-xl-stretch</code>
            </li>
          </ul>
        </CardBody>
        <CardBody>
          <CardTitle>Auto margins</CardTitle>
          <CardSubtitle>
            Flexbox can do some pretty awesome things when you mix flex
            alignments with auto margins. Shown below are three examples of
            controlling flex items via auto margins: default (no auto margin),
            pushing two items to the right (<code>.mr-auto</code>), and pushing
            two items to the left (<code>.ml-auto</code>).
          </CardSubtitle>
          <span>
            <strong>
              Unfortunately, IE10 and IE11 do not properly support auto margins
              on flex items whose parent has a non-default{" "}
              <code>justify-content</code> value.
            </strong>{" "}
            <a href="https://stackoverflow.com/a/37535548">
              See this StackOverflow answer
            </a>{" "}
            for more details.
          </span>
          <div className="bd-example mt-3">
            <div className="d-flex bg-light text-white mb-3">
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
            <div className="d-flex bg-light text-white mb-3">
              <div className="mr-auto p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-left">Flex item</div>
              <div className="p-2 bg-info border-left">Flex item</div>
            </div>
            <div className="d-flex bg-light text-white mb-3">
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="ml-auto p-2 bg-info border-left">Flex item</div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;d-flex&quot;&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;/div&gt;
              &lt;div className=&quot;d-flex&quot;&gt; &lt;div
              className=&quot;mr-auto p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;/div&gt;
              &lt;div className=&quot;d-flex&quot;&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;ml-auto p-2&quot;&gt;Flex item&lt;/div&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </CardBody>
        <CardBody>
          <CardTitle>With align-items</CardTitle>
          <CardSubtitle>
            Vertically move one flex item to the top or bottom of a container by
            mixing <code>align-items</code>, <code>flex-direction: column</code>
            , and <code>margin-top: auto</code> or{" "}
            <code>margin-bottom: auto</code>.
          </CardSubtitle>
          <div className="bd-example">
            <div
              className="d-flex align-items-start flex-column bg-light text-white mb-3"
              style={setheight}
            >
              <div className="mb-auto p-2 bg-info">Flex item</div>
              <div className="p-2 bg-info border-bottom">Flex item</div>
              <div className="p-2 bg-info">Flex item</div>
            </div>
            <div
              className="d-flex align-items-end flex-column bg-light text-white mb-3"
              style={setheight}
            >
              <div className="p-2 bg-info border-bottom">Flex item</div>
              <div className="p-2 bg-info">Flex item</div>
              <div className="mt-auto p-2 bg-info">Flex item</div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;d-flex align-items-start flex-column&quot;
              style=&quot;height: 200px;&quot;&gt; &lt;div
              className=&quot;mb-auto p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;/div&gt;
              &lt;div className=&quot;d-flex align-items-end flex-column&quot;
              style=&quot;height: 200px;&quot;&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;p-2&quot;&gt;Flex item&lt;/div&gt; &lt;div
              className=&quot;mt-auto p-2&quot;&gt;Flex item&lt;/div&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </CardBody>
        <CardBody>
          <CardTitle>Wrap</CardTitle>
          <CardSubtitle>
            Change how flex items wrap in a flex container. Choose from no
            wrapping at all (the browser default) with <code>.flex-nowrap</code>
            , wrapping with <code>.flex-wrap</code>, or reverse wrapping with{" "}
            <code>.flex-wrap-reverse</code>.
          </CardSubtitle>
          <div className="bd-example">
            <div className="d-flex flex-nowrap bg-light">
              <div className="p-2 bg-info text-white">Flex item</div>
              <div className="p-2 bg-info text-white">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
              <div className="p-2">Flex item</div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex flex-nowrap&quot;&gt; ...
              &lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div className="d-flex flex-wrap bg-light text-white">
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right bg-info">Flex item</div>
              <div className="p-2 border-right border-top bg-info">
                Flex item
              </div>
              <div className="p-2 border-right border-top bg-info">
                Flex item
              </div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex flex-wrap&quot;&gt; ...
              &lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div className="d-flex flex-wrap-reverse bg-light text-white">
              <div className="p-2 bg-info border-bottom border-right border-top">
                Flex item
              </div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex flex-wrap-reverse&quot;&gt; ...
              &lt;/div&gt;
            </code>
          </pre>
          <span>
            Responsive variations also exist for <code>flex-wrap</code>.
          </span>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-nowrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-wrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-wrap-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-sm-nowrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-sm-wrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-sm-wrap-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-md-nowrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-md-wrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-md-wrap-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-lg-nowrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-lg-wrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-lg-wrap-reverse</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-xl-nowrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-xl-wrap</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.flex-xl-wrap-reverse</code>
            </li>
          </ul>
        </CardBody>
        <CardBody>
          <CardTitle>Order</CardTitle>
          <CardSubtitle>
            Change the <em>visual</em> order of specific flex items with a
            handful of <code>order</code> utilities. We only provide options for
            making an item first or last, as well as a reset to use the DOM
            order. As <code>order</code> takes any integer value (e.g.,{" "}
            <code>5</code>), add custom CSS for any additional values needed.
          </CardSubtitle>
          <div className="bd-example">
            <div className="d-flex flex-nowrap bg-light text-white">
              <div className="order-3 p-2 bg-info border-right">
                First flex item
              </div>
              <div className="order-2 p-2 bg-info border-right">
                Second flex item
              </div>
              <div className="order-1 p-2 bg-info border-right">
                Third flex item
              </div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;d-flex flex-nowrap&quot;&gt; &lt;div
              className=&quot;order-3 p-2&quot;&gt;First flex item&lt;/div&gt;
              &lt;div className=&quot;order-2 p-2&quot;&gt;Second flex
              item&lt;/div&gt; &lt;div className=&quot;order-1
              p-2&quot;&gt;Third flex item&lt;/div&gt; &lt;/div&gt;
            </code>
          </pre>
          <span>
            Responsive variations also exist for <code>order</code>.
          </span>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-1</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-2</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-3</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-4</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-5</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-6</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-7</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-8</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-9</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-10</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-11</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-12</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-1</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-2</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-3</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-4</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-5</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-6</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-7</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-8</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-9</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-10</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-11</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-sm-12</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-1</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-2</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-3</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-4</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-5</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-6</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-7</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-8</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-9</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-10</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-11</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-md-12</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-1</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-2</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-3</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-4</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-5</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-6</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-7</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-8</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-9</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-10</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-11</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-lg-12</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-1</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-2</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-3</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-4</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-5</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-6</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-7</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-8</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-9</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-10</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-11</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.order-xl-12</code>
            </li>
          </ul>
        </CardBody>
        <CardBody>
          <CardTitle>Align content</CardTitle>
          <CardSubtitle>
            Use <code>align-content</code> utilities on flexbox containers to
            align flex items <em>together</em> on the cross axis. Choose from{" "}
            <code>start</code> (browser default), <code>end</code>,{" "}
            <code>center</code>, <code>between</code>, <code>around</code>, or{" "}
            <code>stretch</code>. To demonstrate these utilities, we’ve enforced{" "}
            <code>flex-wrap: wrap</code> and increased the number of flex items.
          </CardSubtitle>
          <span>
            <strong>Heads up!</strong> This property has no effect on single
            rows of flex items.
          </span>
          <div className="bd-example">
            <div
              className="d-flex align-content-start flex-wrap bg-light text-white mb-3"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex align-content-start
              flex-wrap&quot;&gt; ... &lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div
              className="d-flex align-content-end flex-wrap bg-light text-white mb-3"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex align-content-end
              flex-wrap&quot;&gt; ... &lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div
              className="d-flex align-content-center flex-wrap bg-light text-white mb-3"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex align-content-center
              flex-wrap&quot;&gt; ... &lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div
              className="d-flex align-content-between flex-wrap bg-light text-white mb-3"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex align-content-between
              flex-wrap&quot;&gt; ... &lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div
              className="d-flex align-content-around flex-wrap bg-light text-white mb-3"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex align-content-around
              flex-wrap&quot;&gt; ... &lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example">
            <div
              className="d-flex align-content-stretch flex-wrap bg-light text-white mb-3"
              style={setheight}
            >
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right">Flex item</div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
              <div className="p-2 bg-info border-right border-top">
                Flex item
              </div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;d-flex align-content-stretch
              flex-wrap&quot;&gt; ... &lt;/div&gt;
            </code>
          </pre>
          <span>
            Responsive variations also exist for <code>align-content</code>.
          </span>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-around</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-sm-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-sm-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-sm-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-sm-around</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-sm-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-md-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-md-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-md-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-md-around</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-md-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-lg-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-lg-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-lg-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-lg-around</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-lg-stretch</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-xl-start</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-xl-end</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-xl-center</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-xl-around</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.align-content-xl-stretch</code>
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Float</CardTitle>
          <CardSubtitle>
            Toggle floats on any element, across any breakpoint, using our
            responsive float utilities.
          </CardSubtitle>
          <span>
            These utility classes float an element to the left or right, or
            disable floating, based on the current viewport size using the{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
              CSS <code>float</code> property
            </a>
            .<code>!important</code> is included to avoid specificity issues.
            These use the same viewport breakpoints as our grid system.
          </span>
          <span>Toggle a float with a class:</span>
          <div className="bd-example bg-light mt-3">
            <div className="float-left">Float left on all viewport sizes</div>
            <br />
            <div className="float-right">Float right on all viewport sizes</div>
            <br />
            <div className="float-none">
              Don&apos;t float on all viewport sizes
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;float-left&quot;&gt;Float left on all
              viewport sizes&lt;/div&gt;&lt;br&gt; &lt;div
              className=&quot;float-right&quot;&gt;Float right on all viewport
              sizes&lt;/div&gt;&lt;br&gt; &lt;div
              className=&quot;float-none&quot;&gt;Don&apos;t float on all
              viewport sizes&lt;/div&gt;
            </code>
          </pre>
          <CardTitle className="mt-4">Responsive</CardTitle>
          <CardSubtitle>
            Responsive variations also exist for each <code>float</code> value.
          </CardSubtitle>
          <div className="bd-example bg-light">
            <div className="float-sm-left">
              Float left on viewports sized SM (small) or wider
            </div>
            <br />
            <div className="float-md-left">
              Float left on viewports sized MD (medium) or wider
            </div>
            <br />
            <div className="float-lg-left">
              Float left on viewports sized LG (large) or wider
            </div>
            <br />
            <div className="float-xl-left">
              Float left on viewports sized XL (extra-large) or wider
            </div>
            <br />
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;float-sm-left&quot;&gt;Float left on
              viewports sized SM (small) or wider&lt;/div&gt;&lt;br&gt; &lt;div
              className=&quot;float-md-left&quot;&gt;Float left on viewports
              sized MD (medium) or wider&lt;/div&gt;&lt;br&gt; &lt;div
              className=&quot;float-lg-left&quot;&gt;Float left on viewports
              sized LG (large) or wider&lt;/div&gt;&lt;br&gt; &lt;div
              className=&quot;float-xl-left&quot;&gt;Float left on viewports
              sized XL (extra-large) or wider&lt;/div&gt;&lt;br&gt;
            </code>
          </pre>
          <span>Here are all the support classes;</span>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-left</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-right</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-sm-left</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-sm-right</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-sm-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-md-left</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-md-right</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-md-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-lg-left</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-lg-right</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-lg-none</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-xl-left</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-xl-right</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>.float-xl-none</code>
            </li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Image replacement</CardTitle>
          <CardSubtitle>
            Swap text for background images with the image replacement class.
          </CardSubtitle>
          <span>
            Utilize the <code>.text-hide</code> class or mixin to help replace
            an element’s text content with a background image.
          </span>
          <pre>
            <code className="language-markup">
              &lt;h1 className=&quot;text-hide&quot;&gt;Custom
              heading&lt;/h1&gt;
            </code>
          </pre>
          <span>
            Use the <code>.text-hide</code> class to maintain the accessibility
            and SEO benefits of heading tags, but want to utilize a{" "}
            <code>background-image</code> instead of text.
          </span>
          <div className="bd-example">
            <h1 className="text-hide my-2" style={setbg}>
              Bootstrap
            </h1>
          </div>
          <pre className="language-markup">
            <code>
              &lt;h1 className=&quot;text-hide my-2&quot;
              style=&quot;background-image:
              url(&apos;../../assets/images/logos/logo-icon.png&apos;); width:
              30px; height: 26px;&quot;&gt;Bootstrap&lt;/h1&gt;
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Position</CardTitle>
          <CardSubtitle>
            Use these shorthand utilities for quickly configuring the position
            of an element.
          </CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table bordered>
            <thead>
              <tr>
                <th>Classes</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.position-fixed</code>
                </td>
                <td>Changes object&apos;s position to fixed.</td>
              </tr>
              <tr>
                <td>
                  <code>.position-relative</code>
                </td>
                <td>Changes object&apos;s position to relative.</td>
              </tr>
              <tr>
                <td>
                  <code>.position-absolute</code>
                </td>
                <td>Changes object&apos;s position to absolute.</td>
              </tr>
              <tr>
                <td>
                  <code>.position-static</code>
                </td>
                <td>Changes object&apos;s position to static.</td>
              </tr>
              <tr>
                <td>
                  <code>.position-sticky</code>
                </td>
                <td>Changes object&apos;s position to static.</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <CardBody>
          <CardTitle>Fixed top</CardTitle>
          <CardSubtitle>
            Position an element at the top of the viewport, from edge to edge.
            Be sure you understand the ramifications of fixed position in your
            project; you may need to add aditional CSS.
          </CardSubtitle>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;fixed-top&quot;&gt;...&lt;/div&gt;
            </code>
          </pre>
        </CardBody>
        <CardBody>
          <CardTitle>Fixed bottom</CardTitle>
          <CardSubtitle>
            Position an element at the bottom of the viewport, from edge to
            edge. Be sure you understand the ramifications of fixed position in
            your project; you may need to add aditional CSS.
          </CardSubtitle>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;fixed-bottom&quot;&gt;...&lt;/div&gt;
            </code>
          </pre>
        </CardBody>
        <CardBody>
          <CardTitle>Sticky top</CardTitle>
          <CardSubtitle>
            Position an element at the top of the viewport, from edge to edge,
            but only after you scroll past it. The <code>.sticky-top</code>{" "}
            utility uses CSS’s <code>position: sticky</code>, which isn’t fully
            supported in all browsers.
          </CardSubtitle>
          <span>
            <strong>
              Microsoft Edge and IE11 will render <code>position: sticky</code>{" "}
              as <code>position: relative</code>.
            </strong>{" "}
            As such, we wrap the styles in a <code>@supports</code> query,
            limiting the stickiness to only browsers that properly can render
            it.
          </span>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;sticky-top&quot;&gt;...&lt;/div&gt;
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Screenreaders</CardTitle>
          <CardSubtitle>
            Use screenreader utilities to hide elements on all devices except
            screen readers.
          </CardSubtitle>
          <span>
            Hide an element to all devices{" "}
            <strong>except screen readers</strong> with <code>.sr-only</code>.
            Combine <code>.sr-only</code> with <code>.sr-only-focusable</code>{" "}
            to show the element again when it’s focused (e.g. by a keyboard-only
            user). Can also be used as mixins.
          </span>
          <pre className="language-markup">
            <code>
              &lt;a className=&quot;sr-only sr-only-focusable&quot;
              href=&quot;#content&quot;&gt;Skip to main content&lt;/a&gt;
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Sizing</CardTitle>
          <CardSubtitle>
            Easily make an element as wide or as tall (relative to its parent)
            with our width and height utilities.
          </CardSubtitle>
          <span>
            Width and height utilities are generated from the{" "}
            <code>$sizes</code> Sass map in <code>_variables.scss</code>.
            Includes support for <code>25%</code>,<code>50%</code>,{" "}
            <code>75%</code>, and <code>100%</code> by default. Modify those
            values as you need to generate different utilities here.
          </span>
          <div className="bd-example mt-4">
            <div className="w-25 p-3 bg-light">Width 25%</div>
            <div className="w-50 p-3 bg-light">Width 50%</div>
            <div className="w-75 p-3 bg-light">Width 75%</div>
            <div className="w-100 p-3 bg-light">Width 100%</div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div className=&quot;w-25 p-3 bg-light&quot;&gt;Width
              25%&lt;/div&gt; &lt;div className=&quot;w-50 p-3
              bg-light&quot;&gt;Width 50%&lt;/div&gt; &lt;div
              className=&quot;w-75 p-3 bg-light&quot;&gt;Width 75%&lt;/div&gt;
              &lt;div className=&quot;w-100 p-3 bg-light&quot;&gt;Width
              100%&lt;/div&gt;
            </code>
          </pre>
          <div className="bd-example mt-4">
            <div style={setheight} className="bg-light">
              <div
                className="h-25 d-inline-block bg-info text-white mr-1 p-1"
                style={setheight}
              >
                Height 25%
              </div>
              <div
                className="h-50 d-inline-block bg-info text-white mr-1 p-2"
                style={setheight}
              >
                Height 50%
              </div>
              <div
                className="h-75 d-inline-block bg-info text-white mr-1 p-2"
                style={setheight}
              >
                Height 75%
              </div>
              <div
                className="h-100 d-inline-block bg-info text-white mr-1 p-2"
                style={setheight}
              >
                Height 100%
              </div>
            </div>
          </div>
          <pre className="language-markup scrollable">
            <code>
              &lt;div style=&quot;height: 100px; background-color:
              rgba(255,0,0,0.1);&quot;&gt; &lt;div className=&quot;h-25
              d-inline-block&quot; style=&quot;width: 120px; background-color:
              rgba(0,0,255,.1)&quot;&gt;Height 25%&lt;/div&gt; &lt;div
              className=&quot;h-50 d-inline-block&quot; style=&quot;width:
              120px; background-color: rgba(0,0,255,.1)&quot;&gt;Height
              50%&lt;/div&gt; &lt;div className=&quot;h-75 d-inline-block&quot;
              style=&quot;width: 120px; background-color:
              rgba(0,0,255,.1)&quot;&gt;Height 75%&lt;/div&gt; &lt;div
              className=&quot;h-100 d-inline-block&quot; style=&quot;width:
              120px; background-color: rgba(0,0,255,.1)&quot;&gt;Height
              100%&lt;/div&gt; &lt;/div&gt;
            </code>
          </pre>
          <span>
            You can also use <code>max-width: 100%;</code> and{" "}
            <code>max-height: 100%;</code> utilities as needed.
          </span>
          <pre className="language-markup">
            <code>
              &lt;img className=&quot;mw-100&quot; src=&quot;...&quot;
              alt=&quot;Max-width 100%&quot;&gt;
            </code>
          </pre>
          <div className="bd-example mt-4">
            <div className="bg-light" style={setheight}>
              <div className="mh-100 bg-info text-white" style={setheight}>
                Max-height 100%
              </div>
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div style=&quot;height: 100px; background-color:
              rgba(255,0,0,0.1);&quot;&gt; &lt;div className=&quot;mh-100&quot;
              style=&quot;width: 100px; height: 200px; background-color:
              rgba(0,0,255,0.1);&quot;&gt;Max-height 100%&lt;/div&gt;
              &lt;/div&gt;
            </code>
          </pre>
        </CardBody>
        <CardBody>
          <CardTitle>Fixed Width</CardTitle>
          <CardSubtitle>
            Add one of these to class to set fixed width of the content.
          </CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.width-{"size"}</code>
                </td>
                <td>
                  Set content fixed width in pixel of selected size where size
                  can be 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550,
                  600, 650, 700, 750 and 800. i.e <code>.width-50</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.width-{"size"}-per</code>
                </td>
                <td>
                  Set content fixed width in percentage of selected size where
                  size can be 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%,
                  55%, 60%, 65%, 70%, 75% and 80%. i.e <code>.width-5-per</code>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <CardBody>
          <CardTitle>Fixed Height</CardTitle>
          <CardSubtitle>
            Add one of these to class to set fixed height of the content.
          </CardSubtitle>
        </CardBody>
        <div className="table-responsive">
          <Table bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.height-{"size"}</code>
                </td>
                <td>
                  Set content fixed height in pixel of selected size where size
                  can be 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550,
                  600, 650, 700, 750 and 800. i.e <code>.height-50</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.height-{"size"}-per</code>
                </td>
                <td>
                  Set content fixed height in percentage of selected size where
                  size can be 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%,
                  55%, 60%, 65%, 70%, 75% and 80%. i.e{" "}
                  <code>.height-5-per</code>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Spacing</CardTitle>
          <CardSubtitle>
            Bootstrap includes a wide range of shorthand responsive margin and
            padding utility classes to modify an element&apos;s appearance.
          </CardSubtitle>
          <CardTitle className="mt-4">How it works</CardTitle>
          <p>
            Assign responsive-friendly <code>margin</code> or{" "}
            <code>padding</code> values to an element or a subset of its sides
            with shorthand classes. Includes support for individual properties,
            all properties, and vertical and horizontal properties. Classes are
            built from a default Sass map ranging from <code>.25rem</code> to{" "}
            <code>3rem</code>.
          </p>
          <CardTitle className="mt-4">Notation</CardTitle>
          <span>
            Spacing utilities that apply to all breakpoints, from{" "}
            <code>xs</code> to <code>xl</code>, have no breakpoint abbreviation
            in them. This is because those classes are applied from{" "}
            <code>min-width: 0</code> and up, and thus are not bound by a media
            query. The remaining breakpoints, however, do include a breakpoint
            abbreviation.
          </span>
          <span>
            The classes are named using the format{" "}
            <code>
              {"property"}
              {"sides"}-{"size"}
            </code>{" "}
            for <code>xs</code> and{" "}
            <code>
              {"property"}
              {"sides"}-{"breakpoint"}-{"size"}
            </code>{" "}
            for <code>sm</code>, <code>md</code>, <code>lg</code>, and{" "}
            <code>xl</code>.
          </span>
          <p className="mt-3 mb-0">
            Where <em>property</em> is one of:
          </p>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>m</code> - for classes that set
              <code>margin</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>p</code> - for classes that set
              <code>padding</code>
            </li>
          </ul>
          <p className="mt-3 mb-0">
            Where<em>sides</em> is one of:
          </p>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>t</code> - for classes that set
              <code>margin-top</code> or <code>padding-top</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>b</code> - for classes that set
              <code>margin-bottom</code> or
              <code>padding-bottom</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>l</code> - for classes that set
              <code>margin-left</code> or <code>padding-left</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>r</code> - for classes that set
              <code>margin-right</code> or
              <code>padding-right</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>x</code> - for classes that set both <code>*-left</code> and
              <code>*-right</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>y</code> - for classes that set both <code>*-top</code> and{" "}
              <code>*-bottom</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>blank - for classes
              that set a <code>margin</code> or <code>padding</code> on all 4
              sides of the element
            </li>
          </ul>
          <p className="mt-3 mb-0">
            Where <em>size</em> is one of:
          </p>
          <ul className="list-style-none">
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>0</code> - for classes that eliminate the{" "}
              <code>margin</code> or <code>padding</code> by setting it to{" "}
              <code>0</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>1</code> - (by default) for classes that set the{" "}
              <code>margin</code> or
              <code>padding</code> to <code>$spacer * .25</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>2</code> - (by default) for classes that set the{" "}
              <code>margin</code> or
              <code>padding</code> to <code>$spacer * .5</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>3</code> - (by default) for classes that set the{" "}
              <code>margin</code> or
              <code>padding</code> to <code>$spacer</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>4</code> - (by default) for classes that set the{" "}
              <code>margin</code> or
              <code>padding</code> to <code>$spacer * 1.5</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>5</code> - (by default) for classes that set the{" "}
              <code>margin</code> or
              <code>padding</code> to <code>$spacer * 3</code>
            </li>
            <li>
              <i className="mr-2 mdi mdi-arrow-right"></i>
              <code>auto</code> - for classes that set the <code>margin</code>{" "}
              to auto
            </li>
          </ul>
          <p className="mt-3 mb-0">
            (You can add more sizes by adding entries to the{" "}
            <code>$spacers</code> Sass map variable.)
          </p>
          <h4 className="card-title mt-4">Horizontal centering</h4>
          <h6 className="card-subtitle">
            Additionally, Bootstrap also includes an <code>.mx-auto</code>{" "}
            className for horizontally centering fixed-width block level
            content—that is, content that has <code>display: block</code> and a{" "}
            <code>width</code> set—by setting the horizontal margins to{" "}
            <code>auto</code>.
          </h6>
          <div className="bd-example my-2">
            <div className="mx-auto bg-light" style={setheight}>
              Centered element
            </div>
          </div>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;mx-auto&quot; style=&quot;width:
              200px;&quot;&gt; Centered element &lt;/div&gt;
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Vertical alignment</CardTitle>
          <CardSubtitle>
            Easily change the vertical alignment of inline, inline-block,
            inline-table, and table cell elements.
          </CardSubtitle>
          <p>
            Change the alignment of elements with the{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">
              <code>vertical-alignment</code>
            </a>{" "}
            utilities. Please note that vertical-align only affects inline,
            inline-block, inline-table, and table cell elements.
          </p>
          <p>
            Choose from <code>.align-baseline</code>, <code>.align-top</code>,{" "}
            <code>.align-middle</code>, <code>.align-bottom</code>,{" "}
            <code>.align-text-bottom</code>, and <code>.align-text-top</code> as
            needed.
          </p>
          <div className="bd-example">
            <span className="align-baseline">baseline</span>
            <span className="align-top">top</span>
            <span className="align-middle">middle</span>
            <span className="align-bottom">bottom</span>
            <span className="align-text-top">text-top</span>
            <span className="align-text-bottom">text-bottom</span>
          </div>
        </CardBody>
        <div className="table-responsive">
          <Table bordered>
            <thead className="bg-info text-white">
              <tr>
                <th>Classes</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>.align-top</code>
                </td>
                <td>Changes element&apos;s vertical alignment to top.</td>
              </tr>
              <tr>
                <td>
                  <code>.align-middle</code>
                </td>
                <td>Changes element&apos;s vertical alignment to middle.</td>
              </tr>
              <tr>
                <td>
                  <code>.align-bottom</code>
                </td>
                <td>Changes element&apos;s vertical alignment to bottom.</td>
              </tr>
              <tr>
                <td>
                  <code>.align-baseline</code>
                </td>
                <td>Changes element&apos;s vertical alignment to baseline.</td>
              </tr>
              <tr>
                <td>
                  <code>.align-text-top</code>
                </td>
                <td>
                  Top of the element is aligned with the top of the parent
                  element&apos;s font.
                </td>
              </tr>
              <tr>
                <td>
                  <code>.align-text-bottom</code>
                </td>
                <td>
                  The bottom of the element is aligned with the bottom of the
                  parent element&apos;s font.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <CardBody>
          <div>
            <p>With table cells:</p>
            <div className="bd-example">
              <table className="bg-light" style={setheight}>
                <tbody>
                  <tr>
                    <td className="align-baseline">baseline</td>
                    <td className="align-top">top</td>
                    <td className="align-middle">middle</td>
                    <td className="align-bottom">bottom</td>
                    <td className="align-text-top">text-top</td>
                    <td className="align-text-bottom">text-bottom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <pre className="language-markup scrollable">
              <code>
                &lt;table style=&quot;height: 100px;&quot;&gt; &lt;tbody&gt;
                &lt;tr&gt; &lt;td
                className=&quot;align-baseline&quot;&gt;baseline&lt;/td&gt;
                &lt;td className=&quot;align-top&quot;&gt;top&lt;/td&gt; &lt;td
                className=&quot;align-middle&quot;&gt;middle&lt;/td&gt; &lt;td
                className=&quot;align-bottom&quot;&gt;bottom&lt;/td&gt; &lt;td
                className=&quot;align-text-top&quot;&gt;text-top&lt;/td&gt;
                &lt;td
                className=&quot;align-text-bottom&quot;&gt;text-bottom&lt;/td&gt;
                &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt;
              </code>
            </pre>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Visibility</CardTitle>
          <CardSubtitle>
            Control the visibility, without modifying the display, of elements
            with visibility utilities.
          </CardSubtitle>
          <p>
            Set the <code>visibility</code> of elements with our visibility
            utilities. These do not modify the <code>display</code> value at all
            and are helpful for hiding content from most users, but still
            keeping them for screen readers.
          </p>
          <p>
            Apply <code>.visible</code> or <code>.invisible</code> as needed.
          </p>
          <pre className="language-markup">
            <code>
              &lt;div className=&quot;visible&quot;&gt;...&lt;/div&gt; &lt;div
              className=&quot;invisible&quot;&gt;...&lt;/div&gt;
            </code>
          </pre>
        </CardBody>
      </Card>
    </div>
  );
};

export default Helperclass;
