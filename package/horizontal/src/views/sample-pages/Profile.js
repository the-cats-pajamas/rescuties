import React, { useState } from "react";
import Iframe from "react-iframe";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import classnames from "classnames";

import img1 from "../../assets/images/users/7.jpg";
import img2 from "../../assets/images/users/3.jpg";
import img3 from "../../assets/images/users/4.jpg";
import img4 from "../../assets/images/users/5.jpg";

import time1 from "../../assets/images/big/img1.jpg";
import time2 from "../../assets/images/big/img2.jpg";
import time3 from "../../assets/images/big/img3.jpg";
import time4 from "../../assets/images/big/img4.jpg";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <Row>
        <Col xs="12" md="12" lg="4">
          <Card>
            <CardBody>
              <div className="text-center mt-4">
                <img src={img1} className="rounded-circle" width="150" alt="" />
                <CardTitle className="mt-2">Hanna Gover</CardTitle>
                <CardSubtitle>Accounts Manager Amix corp</CardSubtitle>
                <Row className="text-center justify-content-md-center">
                  <Col xs="4">
                    <a href="/" className="link">
                      <i className="icon-people"></i>
                      <span className="font-medium ml-2">254</span>
                    </a>
                  </Col>
                  <Col xs="4">
                    <a href="/" className="link">
                      <i className="icon-picture"></i>
                      <span className="font-medium ml-2">54</span>
                    </a>
                  </Col>
                </Row>
              </div>
            </CardBody>
            <CardBody className="border-top">
              <div>
                <small className="text-muted">Email address </small>
                <h6>hannagover@gmail.com</h6>
                <small className="text-muted pt-4 db">Phone</small>
                <h6>+91 654 784 547</h6>
                <small className="text-muted pt-4 db">Address</small>
                <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                <div>
                  <Iframe
                    className="position-relative"
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                    width="280"
                    height="150"
                    frameborder="0"
                    allowfullscreen
                  />
                </div>
                <small className="text-muted pt-4 db">Social Profile</small>
                <br />
                <Button className="btn-circle" color="info">
                  <i className="fab fa-facebook-f"></i>
                </Button>{" "}
                <Button className="btn-circle" color="success">
                  <i className="fab fa-twitter"></i>
                </Button>{" "}
                <Button className="btn-circle" color="danger">
                  <i className="fab fa-youtube"></i>
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="12" lg="8">
          <Card>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Timeline
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Setting
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Card>
                      <CardBody>
                        <div className="steamline mt-0">
                          <div className="sl-item">
                            <div className="sl-left">
                              {" "}
                              <img
                                src={img2}
                                alt="user"
                                className="rounded-circle"
                              />{" "}
                            </div>
                            <div className="sl-right">
                              <div>
                                <a href="/" className="link">
                                  John Doe
                                </a>
                                <span className="sl-date">5 minutes ago</span>
                                <p>
                                  assign a new task{" "}
                                  <a href="/"> Design weblayout</a>
                                </p>
                                <Row>
                                  <Col lg="3" md="6" className="mb-3">
                                    <img
                                      src={time1}
                                      className="img-fluid rounded"
                                      alt=""
                                    />
                                  </Col>
                                  <Col lg="3" md="6" className="mb-3">
                                    <img
                                      src={time2}
                                      className="img-fluid rounded"
                                      alt=""
                                    />
                                  </Col>
                                  <Col lg="3" md="6" className="mb-3">
                                    <img
                                      src={time3}
                                      className="img-fluid rounded"
                                      alt=""
                                    />
                                  </Col>
                                  <Col lg="3" md="6" className="mb-3">
                                    <img
                                      src={time4}
                                      className="img-fluid rounded"
                                      alt=""
                                    />
                                  </Col>
                                </Row>
                                <div className="desc">
                                  <a href="/" className="link mr-2">
                                    2 comment
                                  </a>
                                  <a href="/" className="link mr-2">
                                    <i className="fa fa-heart text-danger"></i>{" "}
                                    5 Love
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sl-item">
                            <div className="sl-left">
                              <img
                                src={img3}
                                alt="user"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="sl-right">
                              <div>
                                <a href="/" className="link">
                                  John Doe
                                </a>
                                <span className="sl-date">5 minutes ago</span>
                                <Row className="mt-3">
                                  <Col md="3" xs="12">
                                    <img
                                      src={time1}
                                      alt="user"
                                      className="img-fluid rounded"
                                    />
                                  </Col>
                                  <Col md="9" xs="12">
                                    <p>
                                      {" "}
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Integer nec odio.
                                      Praesent libero. Sed cursus ante dapibus
                                      diam.{" "}
                                    </p>
                                    <a href="/" className="btn btn-success">
                                      {" "}
                                      Design weblayout
                                    </a>
                                  </Col>
                                </Row>
                                <div className="desc mt-3">
                                  <a href="/" className="link mr-2">
                                    2 comment
                                  </a>
                                  <a href="/" className="link mr-2">
                                    <i className="fa fa-heart text-danger"></i>{" "}
                                    5 Love
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sl-item">
                            <div className="sl-left">
                              <img
                                src={img4}
                                alt="user"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="sl-right">
                              <div>
                                <a href="/" className="link">
                                  John Doe
                                </a>
                                <span className="sl-date">5 minutes ago</span>
                                <p className="mt-2">
                                  {" "}
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Integer nec odio. Praesent
                                  libero. Sed cursus ante dapibus diam. Sed
                                  nisi. Nulla quis sem at nibh elementum
                                  imperdiet. Duis sagittis ipsum. Praesent
                                  mauris. Fusce nec tellus sed augue semper{" "}
                                </p>
                              </div>
                              <div className="desc mt-3">
                                <a href="/" className="link mr-2">
                                  2 comment
                                </a>
                                <a href="/" className="link mr-2">
                                  <i className="fa fa-heart text-danger"></i> 5
                                  Love
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="sl-item">
                            <div className="sl-left">
                              <img
                                src={img1}
                                alt="user"
                                className="rounded-circle"
                              />
                            </div>
                            <div className="sl-right">
                              <div>
                                <a href="/" className="link">
                                  John Doe
                                </a>
                                <span className="sl-date">5 minutes ago</span>
                                <blockquote className="mt-2">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt
                                </blockquote>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Card>
                      <CardBody>
                        <Row>
                          <Col md="3" xs="6" className="border-right">
                            <strong>Full Name</strong>
                            <br />
                            <p className="text-muted">Johnathan Deo</p>
                          </Col>
                          <Col md="3" xs="6" className="border-right">
                            <strong>Mobile</strong>
                            <br />
                            <p className="text-muted">(123) 456 7890</p>
                          </Col>
                          <Col md="3" xs="6" className="border-right">
                            <strong>Email</strong>
                            <br />
                            <p className="text-muted">johnathan@admin.com</p>
                          </Col>
                          <Col md="3" xs="6" className="border-right">
                            <strong>Location</strong>
                            <br />
                            <p className="text-muted">London</p>
                          </Col>
                        </Row>
                        <p className="mt-4">
                          Donec pede justo, fringilla vel, aliquet nec,
                          vulputate eget, arcu. In enim justo, rhoncus ut,
                          imperdiet a, venenatis vitae, justo. Nullam dictum
                          felis eu pede mollis pretium. Integer tincidunt.Cras
                          dapibus. Vivamus elementum semper nisi. Aenean
                          vulputate eleifend tellus. Aenean leo ligula,
                          porttitor eu, consequat vitae, eleifend ac, enim.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&apos;s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book. It has
                          survived not only five centuries{" "}
                        </p>
                        <p>
                          It was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like
                          Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h4 className="font-medium mt-4">Skill Set</h4>
                        <hr />
                        <h5 className="mt-4">
                          Wordpress <span className="float-right">80%</span>
                        </h5>
                        <Progress value={2 * 5} />
                        <h5 className="mt-4">
                          HTML 5 <span className="float-right">90%</span>
                        </h5>
                        <Progress color="success" value="25" />
                        <h5 className="mt-4">
                          jQuery <span className="float-right">50%</span>
                        </h5>
                        <Progress color="info" value={50} />
                        <h5 className="mt-4">
                          Photoshop <span className="float-right">70%</span>
                        </h5>
                        <Progress color="warning" value={75} />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <Card>
                      <CardBody>
                        <Form>
                          <FormGroup>
                            <Label>Full Name</Label>
                            <Input type="text" placeholder="Shaina Agrawal" />
                          </FormGroup>
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              type="email"
                              placeholder="Jognsmith@cool.com"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" placeholder="Password" />
                          </FormGroup>
                          <FormGroup>
                            <Label>Phone No</Label>
                            <Input type="text" placeholder="123 456 1020" />
                          </FormGroup>
                          <FormGroup>
                            <Label>Message</Label>
                            <Input type="textarea" />
                          </FormGroup>
                          <FormGroup>
                            <Label>Select Country</Label>
                            <Input type="select">
                              <option>USA</option>
                              <option>India</option>
                              <option>America</option>
                            </Input>
                          </FormGroup>
                          <Button color="primary">Update Profile</Button>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
