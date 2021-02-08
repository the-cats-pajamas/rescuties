import React, { useState } from "react";

import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';
import img5 from '../../../assets/images/users/5.jpg';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table,
    Tooltip
} from 'reactstrap';

const Projects = () => {


    const [tooltipOpen10, setTooltipOpen10] = useState(false);
    const [tooltipOpen20, setTooltipOpen20] = useState(false);
    const [tooltipOpen30, setTooltipOpen30] = useState(false);
    const [tooltipOpen40, setTooltipOpen40] = useState(false);

    const toggle10 = () => {
        setTooltipOpen10(!tooltipOpen10);
    }

    const toggle20 = () => {
        setTooltipOpen20(!tooltipOpen20);
    }

    const toggle30 = () => {
        setTooltipOpen30(!tooltipOpen30);
    }

    const toggle40 = () => {
        setTooltipOpen40(!tooltipOpen40);
    }

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        <Row>
            <Col lg="12">
                <Card>
                    <CardBody>
                        <div className="d-md-flex align-items-center">
                            <div>
                                <CardTitle>Projects of the Month</CardTitle>
                                <CardSubtitle>Overview of Latest Month</CardSubtitle>
                            </div>
                            <div className="ml-auto d-flex no-block align-items-center">
                                <div className="dl">
                                    <Input type="select" className="custom-select">
                                        <option value="0">Monthly</option>
                                        <option value="1">Daily</option>
                                        <option value="2">Weekly</option>
                                        <option value="3">Yearly</option>
                                    </Input>
                                </div>
                            </div>
                        </div>
                        <Table className="no-wrap v-middle" responsive>
                            <thead>
                                <tr className="border-0">
                                    <th className="border-0">Team Lead</th>
                                    <th className="border-0">Project</th>
                                    <th className="border-0">Team</th>
                                    <th className="border-0">Status</th>
                                    <th className="border-0">Weeks</th>
                                    <th className="border-0">Budget</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex no-block align-items-center">
                                            <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
                                        </div>
                                    </td>
                                    <td>Elite Admin</td>
                                    <td>
                                        <div className="popover-icon">
                                            <a className="btn-circle btn btn-info" href="/">SS</a>
                                            <a className="btn-circle btn btn-cyan text-white popover-item" href="/">DS</a>
                                            <a className="btn-circle btn p-0 popover-item" href="/"><img src={img5} className="rounded-circle" width="39" alt="" /></a>
                                            <a className="btn-circle btn btn-outline-secondary" href="/">+</a>
                                        </div>
                                    </td>
                                    <td>
                                        <i className="fa fa-circle text-orange" id="tlp1"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen10} target="tlp1" toggle={toggle10.bind(null)}>
                                            In Progress
                      </Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex no-block align-items-center">
                                            <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Daniel Kristeen</h5><span>Kristeen@gmail.com</span></div>
                                        </div>
                                    </td>
                                    <td>Elite Admin</td>
                                    <td>
                                        <div className="popover-icon">
                                            <a className="btn-circle btn btn-info" href="/">SS</a>
                                            <a className="btn-circle btn btn-primary text-white popover-item" href="/">DS</a>
                                            <a className="btn-circle btn btn-outline-secondary" href="/">+</a>
                                        </div>
                                    </td>
                                    <td>
                                        <i className="fa fa-circle text-success" id="tlp2"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen20} target="tlp2" toggle={toggle20.bind(null)}>
                                            Success
                      </Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex no-block align-items-center">
                                            <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Julian Josephs</h5><span>Josephs@gmail.com</span></div>
                                        </div>
                                    </td>
                                    <td>Elite Admin</td>
                                    <td>
                                        <div className="popover-icon">
                                            <a className="btn-circle btn btn-info" href="/">SS</a>
                                            <a className="btn-circle btn btn-cyan text-white popover-item" href="/">DS</a>
                                            <a className="btn-circle btn btn-orange text-white popover-item" href="/">RP</a>
                                            <a className="btn-circle btn btn-outline-secondary" href="/">+</a>
                                        </div>
                                    </td>
                                    <td>
                                        <i className="fa fa-circle text-success" id="tlp3"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen30} target="tlp3" toggle={toggle30.bind(null)}>
                                            Success
                      </Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex no-block align-items-center">
                                            <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Jan Petrovic</h5><span>hgover@gmail.com</span></div>
                                        </div>
                                    </td>
                                    <td>Elite Admin</td>
                                    <td>
                                        <div className="popover-icon">
                                            <a className="btn-circle btn btn-orange text-white" href="/">RP</a>
                                            <a className="btn-circle btn btn-outline-secondary" href="/">+</a>
                                        </div>
                                    </td>
                                    <td>
                                        <i className="fa fa-circle text-orange" id="tlp4"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen40} target="tlp4" toggle={toggle40.bind(null)}>
                                            In Progress
                      </Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="blue-grey-text  text-darken-4 font-medium">$96K</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Projects;
