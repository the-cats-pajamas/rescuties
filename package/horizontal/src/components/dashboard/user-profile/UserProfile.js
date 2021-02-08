import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Row,
    Col,
    Tooltip
} from 'reactstrap';

import img1 from '../../../assets/images/users/1.jpg';

const UserProfile = () => {

    const [tooltipOpen01, setTooltipOpen01] = useState(false);
    const [tooltipOpen02, setTooltipOpen02] = useState(false);
    const [tooltipOpen03, setTooltipOpen03] = useState(false);

    const toggle01 = () => {
        setTooltipOpen01(!tooltipOpen01);
    }

    const toggle02 = () => {
        setTooltipOpen02(!tooltipOpen02);
    }

    const toggle03 = () => {
        setTooltipOpen03(!tooltipOpen03);
    }

    return (
        <Card>
            <CardBody>
                <div className="d-flex flex-row">
                    <div className=""><img src={img1} alt="user" className="rounded-circle" width="100" /></div>
                    <div className="pl-3">
                        <h3 className="font-medium">Daniel Kristeen</h3>
                        <h6>UIUX Designer</h6>
                        <button className="btn btn-success"><i className="ti-plus"></i> Follow</button>
                    </div>
                </div>
                <Row className="mt-5">
                    <Col className="border-right text-center">
                        <h2 className="font-light">14</h2>
                        <h6>Photos</h6>
                    </Col>
                    <Col className="border-right text-center">
                        <h2 className="font-light">54</h2>
                        <h6>Videos</h6>
                    </Col>
                    <Col className="border-right text-center">
                        <h2 className="font-light">145</h2>
                        <h6>Tasks</h6>
                    </Col>
                </Row>
            </CardBody>
            <div>
                <hr />
            </div>
            <CardBody>
                <p className="text-center aboutscroll">
                    Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididuntt
                  </p>
                <Row className="text-center pt-2">
                    <Col>
                        <a href="/" className="text-muted" id="tooltip1"><i className="fa fa-globe font-20"></i></a>
                        <Tooltip placement="top" isOpen={tooltipOpen01} target="tooltip1" toggle={toggle01.bind(null)}>
                            Website
                      </Tooltip>
                    </Col>
                    <Col>
                        <a href="/" className="text-muted" id="tooltip2"><i className="fab fa-twitter font-20"></i></a>
                        <Tooltip placement="top" isOpen={tooltipOpen02} target="tooltip2" toggle={toggle02.bind(null)}>
                            twitter
                      </Tooltip>
                    </Col>
                    <Col>
                        <a href="/" className="text-muted" id="tooltip3"><i className="fab fa-facebook-square font-20"></i></a>
                        <Tooltip placement="top" isOpen={tooltipOpen03} target="tooltip3" toggle={toggle03.bind(null)}>
                            Facebook
                      </Tooltip>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default UserProfile;
