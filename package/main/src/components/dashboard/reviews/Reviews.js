import React, { useState } from "react";
import {
    Progress,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    ListGroup,
    ListGroupItem,
    Tooltip
} from 'reactstrap';

import img1 from '../../../assets/images/users/1.jpg';
import img2 from '../../../assets/images/users/2.jpg';
import img3 from '../../../assets/images/users/3.jpg';
import img4 from '../../../assets/images/users/4.jpg';

const Reviews = () => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const [tooltipOpen3, setTooltipOpen3] = useState(false);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }

    const toggle1 = () => {
        setTooltipOpen1(!tooltipOpen1);
    }

    const toggle2 = () => {
        setTooltipOpen2(!tooltipOpen2);
    }

    const toggle3 = () => {
        setTooltipOpen3(!tooltipOpen3);
    }

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-3 [Ecommerce]                                                */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <Row>
                <Col sm="12" lg="4">
                    <CardBody>
                        <CardTitle>Reviews</CardTitle>
                        <CardSubtitle>Overview of Review</CardSubtitle>
                        <h2 className="font-medium mt-5 mb-0">25426</h2>
                        <span className="text-muted">This month we got 346 New Reviews</span>
                        <div className="image-box mt-4 mb-4">
                            <a href="/" className="mr-2" id="TooltipExample">
                                <img src={img1} className="rounded-circle" width="45" alt="user" />
                            </a>
                            <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle.bind(null)}>
                                Shraddha
								</Tooltip>
                            <a href="/" className="mr-2" id="TooltipExample1">
                                <img src={img2} className="rounded-circle" width="45" alt="user" />
                            </a>
                            <Tooltip placement="top" isOpen={tooltipOpen1} target="TooltipExample1" toggle={toggle1.bind(null)}>
                                Akhsay
								</Tooltip>
                            <a href="/" className="mr-2" id="TooltipExample2">
                                <img src={img3} className="rounded-circle" width="45" alt="user" />
                            </a>
                            <Tooltip placement="top" isOpen={tooltipOpen2} target="TooltipExample2" toggle={toggle2.bind(null)}>
                                Akhsay
								</Tooltip>
                            <a href="/" className="mr-2" id="TooltipExample3">
                                <img src={img4} className="rounded-circle" width="45" alt="user" />
                            </a>
                            <Tooltip placement="top" isOpen={tooltipOpen3} target="TooltipExample3" toggle={toggle3.bind(null)}>
                                Shraddha
								</Tooltip>
                        </div>
                        <a href="/" className="btn btn-lg btn-info waves-effect waves-light">Checkout All Reviews</a>
                    </CardBody>
                </Col>
                <Col sm="12" lg="8" className="border-left">
                    <CardBody>
                        <ListGroup>
                            <ListGroupItem className="p-0 mt-4 border-0">
                                <div className="d-flex align-items-center">
                                    <i className="mdi mdi-emoticon-happy display-5 text-muted"></i>
                                    <div className="ml-2">
                                        <h5 className="mb-0">Positive Reviews</h5>
                                        <span className="text-muted">25547 Reviews</span></div>
                                </div>
                                <Progress color="success" value="47" />
                            </ListGroupItem>
                            <ListGroupItem className="p-0 mt-5 border-0">
                                <div className="d-flex align-items-center">
                                    <i className="mdi mdi-emoticon-sad display-5 text-muted"></i>
                                    <div className="ml-2">
                                        <h5 className="mb-0">Negative Reviews</h5>
                                        <span className="text-muted">5547 Reviews</span></div>
                                </div>
                                <Progress color="orange" value="33" />
                            </ListGroupItem>
                            <ListGroupItem className="p-0 mt-5 mb-5 border-0">
                                <div className="d-flex align-items-center">
                                    <i className="mdi mdi-emoticon-neutral display-5 text-muted"></i>
                                    <div className="ml-2">
                                        <h5 className="mb-0">Neutral Reviews</h5>
                                        <span className="text-muted">547 Reviews</span></div>
                                </div>
                                <Progress color="info" value="20" />
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    );
}

export default Reviews;
