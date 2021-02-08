import React, { useState } from 'react';

import {
    Card,
    CardBody,
    Row,
    Col,
    Tooltip
} from 'reactstrap';

import img1 from '../../../assets/images/users/2.jpg';

const UserProfile2 = () => {

    const [tooltipOpen00, setTooltipOpen00] = useState(false);

    const toggle00 = () => {
        setTooltipOpen00(!tooltipOpen00);
    }

    return (
        <Card>
            <CardBody className="text-center">
                <div className="profile-pic mb-3 mt-3">
                    <img src={img1} width="150" className="rounded-circle" alt="user" />
                    <h4 className="mt-3 mb-0">Daniel Kristeen</h4>
                    <a href="/">danielkristeen@gmail.com</a>
                </div>
                <div className="badge badge-pill badge-light font-16">Dashboard</div>
                <div className="badge badge-pill badge-light font-16">UI</div>
                <div className="badge badge-pill badge-light font-16">UX</div>
                <div className="badge badge-pill badge-info font-16" id="tooltip00">+3</div>
                <Tooltip placement="top" isOpen={tooltipOpen00} target="tooltip00" toggle={toggle00.bind(null)}>
                    3 more
                </Tooltip>
            </CardBody>
            <div className="p-4 border-top mt-3">
                <Row className="text-center">
                    <Col xs="6" className="border-right">
                        <a href="/" className="link d-flex align-items-center justify-content-center font-medium"><i className="mdi mdi-message font-20 mr-1"></i>Message</a>
                    </Col>
                    <Col xs="6">
                        <a href="/" className="link d-flex align-items-center justify-content-center font-medium"><i className="mdi mdi-developer-board font-20 mr-1"></i>Portfolio</a>
                    </Col>
                </Row>
            </div>
        </Card>
    );
}

export default UserProfile2;
