import React, { useState } from 'react';
import classnames from 'classnames';
import {
    Row,
    Col,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardBody,
    Progress,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/big/img1.jpg';
import img3 from '../../../assets/images/big/img2.jpg';
import img4 from '../../../assets/images/big/img3.jpg';
import img5 from '../../../assets/images/big/img5.jpg';
import img6 from '../../../assets/images/users/2.jpg';
import img7 from '../../../assets/images/users/3.jpg';
import img8 from '../../../assets/images/users/4.jpg';

const TimeLine = () => {

    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-1                                                            */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <Nav pills className="custom-pills border-bottom">
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        Activity
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        Profile
            </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => {
                            toggle('3');
                        }}
                    >
                        Settings
            </NavLink>
                </NavItem>
            </Nav>
            <CardBody>
                <TabContent activeTab={activeTab} className="mt-3">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Tab-1                                                                          */}
                    {/*--------------------------------------------------------------------------------*/}
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div className="profiletimeline">
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img1}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <a href="/" className="link">
                                                    John Doe
                          </a>
                                                <span className="font-12 ml-2 text-muted">
                                                    5 minutes ago
                          </span>
                                                <p>
                                                    assign a new task <a href="/"> Design weblayout</a>
                                                </p>
                                                <Row>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img2}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img3}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img4}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                    <Col lg="3" md="6" className="mb-3">
                                                        <img
                                                            src={img5}
                                                            alt="user"
                                                            className="img-fluid rounded"
                                                        />
                                                    </Col>
                                                </Row>
                                                <div className="like-comm">
                                                    <a href="/" className="link mr-2">
                                                        2 comment
                            </a>
                                                    <a href="/" className="link mr-2">
                                                        <i className="fa fa-heart text-danger" /> 5 Love
                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img6}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div>
                                                    <a href="/" className="link">
                                                        John Doe
                            </a>
                                                    <span className="font-12 ml-2 text-muted">
                                                        5 minutes ago
                            </span>
                                                    <Row className="mt-3">
                                                        <Col md="3" xs="12">
                                                            <img
                                                                src={img2}
                                                                alt="user"
                                                                className="img-fluid rounded"
                                                            />
                                                        </Col>
                                                        <Col md="9" xs="12">
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipiscing elit. Integer nec odio. Praesent
                                                                libero. Sed cursus ante dapibus diam.
                                </p>
                                                            <a
                                                                href="/"
                                                                className="btn btn-success text-white"
                                                            >
                                                                Design weblayout
                                </a>
                                                        </Col>
                                                    </Row>
                                                    <div className="like-comm mt-3">
                                                        <a href="/" className="link mr-2">
                                                            2 comment
                              </a>
                                                        <a href="/" className="link mr-2">
                                                            <i className="fa fa-heart text-danger" /> 5 Love
                              </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img7}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div>
                                                    <a href="/" className="link">
                                                        John Doe
                            </a>
                                                    <span className="font-12 ml-2 text-muted">
                                                        5 minutes ago
                            </span>
                                                    <p className="mt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Integer nec odio. Praesent libero. Sed
                                                        cursus ante dapibus diam. Sed nisi. Nulla quis sem
                                                        at nibh elementum imperdiet. Duis sagittis ipsum.
                                                        Praesent mauris. Fusce nec tellus sed augue semper
                            </p>
                                                </div>
                                                <div className="like-comm m-t-20">
                                                    <a href="/" className="link mr-2">
                                                        2 comment
                            </a>
                                                    <a href="/" className="link mr-2">
                                                        <i className="fa fa-heart text-danger" /> 5 Love
                            </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex">
                                            <div>
                                                <img
                                                    src={img8}
                                                    alt="user"
                                                    className="rounded-circle"
                                                    width="40"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <div>
                                                    <a href="/" className="link">
                                                        John Doe
                            </a>
                                                    <span className="font-12 ml-2 text-muted">
                                                        5 minutes ago
                            </span>
                                                    <blockquote className="blockquote font-14 mt-2">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit, sed do eiusmod tempor incididunt
                            </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Tab-2                                                                          */}
                    {/*--------------------------------------------------------------------------------*/}
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <CardBody className="pt-0">
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
                                        <Col md="3" xs="6">
                                            <strong>Location</strong>
                                            <br />
                                            <p className="text-muted">London</p>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <p className="mt-3">
                                        Donec pede justo, fringilla vel, aliquet nec, vulputate
                                        eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                                        venenatis vitae, justo. Nullam dictum felis eu pede mollis
                                        pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                                        semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                                        ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    </p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry&apos;s
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five
                                        centuries
                    </p>
                                    <p>
                                        It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus
                                        PageMaker including versions of Lorem Ipsum.
                    </p>
                                    <h4 className="font-medium mt-4">Skill Set</h4>
                                    <hr />
                                    <h5 className="mt-4">
                                        Wordpress <span className="float-right">80%</span>
                                    </h5>
                                    <Progress color="success" value="80" />
                                    <h5 className="mt-4">
                                        HTML 5 <span className="float-right">90%</span>
                                    </h5>
                                    <Progress color="info" value="90" />
                                    <h5 className="mt-4">
                                        jQuery <span className="float-right">50%</span>
                                    </h5>
                                    <Progress color="danger" value="50" />
                                    <h5 className="mt-4">
                                        Photoshop <span className="float-right">70%</span>
                                    </h5>
                                    <Progress color="warning" value="70" />
                                </CardBody>
                            </Col>
                        </Row>
                    </TabPane>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Tab-3                                                                          */}
                    {/*--------------------------------------------------------------------------------*/}
                    <TabPane tabId="3">
                        <CardBody className="pt-0">
                            <Form className="form-material">
                                <FormGroup>
                                    <Label>Full Name</Label>
                                    <Input
                                        type="text"
                                        defaultValue="Akhsay Kumar"
                                        className="form-control-line"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="email" defaultValue="react@example.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type="password" placeholder="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Phone No</Label>
                                    <Input type="tel" defaultValue="1-(555)-555-5555" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Messages</Label>
                                    <Input type="textarea" rows="5" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Select Country</Label>
                                    <Input type="select" name="Select Category">
                                        <option>US</option>
                                        <option>India</option>
                                        <option>Africa</option>
                                        <option>Japan</option>
                                    </Input>
                                </FormGroup>

                                <Button className="btn btn-success text-white mt-3">
                                    Update Profile
                  </Button>
                            </Form>
                        </CardBody>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    );
}

export default TimeLine;
