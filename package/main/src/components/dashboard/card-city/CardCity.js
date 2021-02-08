import React from 'react';
import { Card, Col, Row, CardImgOverlay } from 'reactstrap';

import img1 from '../../../assets/images/background/weatherbg.jpg';
const CardCity = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-1                                                            */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <img src={img1} alt="" />
            <CardImgOverlay>
                <h3 className="text-white">New Delhi</h3>
                <span className="text-white">Sunday 15 March</span>
            </CardImgOverlay>
            <div className="p-3">
                <Row>
                    <Col xs="8" className="border-right align-self-center">
                        <div className="d-flex">
                            <div className="display-6 text-info">
                                <i className="wi wi-day-rain-wind" />
                            </div>
                            <div className="ml-3">
                                <h1 className="font-light text-info mb-0">
                                    32
                    <sup>0</sup>
                                </h1>
                                <small>Sunny day</small>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" className="text-center">
                        <h1 className="font-light mb-0">
                            25
                <sup>0</sup>
                        </h1>
                        <small>Tonight</small>
                    </Col>
                </Row>
            </div>
        </Card>
    );
}

export default CardCity;
