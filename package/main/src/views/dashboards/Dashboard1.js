import React from 'react';
import { Row, Col } from 'reactstrap';

import {
    SalesOverview,
    Visitors,
    SocialCards,
    NewsleterCompaign,
    CardBandwidth,
    CardDownload,
    CardProfile,
    CardContact,
    CardCity,
    TimeLine,
    Feeds
} from '../../components/dashboard/index.js';

const FirstDashboard = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-1                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col lg="8" md="12">
                    <SalesOverview />
                </Col>
                <Col lg="4" md="12">
                    <Visitors />
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-2                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col md="12" xl="4" className="col-xlg-3">
                    <Feeds />
                </Col>
                <Col md="12" xl="8" className="col-xlg-9">
                    <NewsleterCompaign />
                </Col>
            </Row>

            <SocialCards />
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-3                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col lg="4" md="12">
                    <CardBandwidth />
                </Col>
                <Col lg="4" md="12">
                    <CardDownload />
                </Col>
                <Col lg="4" md="12">
                    <CardCity />
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-4                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col md="12" xl="4" className="col-xlg-3">
                    <CardProfile />
                    <CardContact />
                </Col>
                <Col md="12" xl="8" className="col-xlg-9">
                    <TimeLine />
                </Col>
            </Row>
        </div>
    );
}

export default FirstDashboard;
