import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    ProgressCards,
    RevenueStatics,
    UserViews,
    CurrentVisitor,
    MonthTable,
    CardProfile,
    CardDownload,
    CardBandwidth,
    CardContact,
    Feeds,
    RecentComment,
    TodoList
} from '../../components/dashboard/index.js';

import img1 from '../../assets/images/users/1.jpg';
import img4 from '../../assets/images/users/4.jpg';
import img5 from '../../assets/images/users/5.jpg';

const ThirdDashboard = () => {
    return (
        <div>
            <ProgressCards />
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-1                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col lg="4" md="12">
                    <RevenueStatics />
                </Col>
                <Col lg="4" md="12">
                    <UserViews />
                </Col>
                <Col lg="4" md="12">
                    <CurrentVisitor />
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-2                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col lg="8">
                    <MonthTable />
                </Col>
                <Col lg="4">
                    <CardProfile />
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-3                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col lg="4" md="12">
                    <CardBandwidth />
                    <CardDownload />
                </Col>
                <Col lg="4" md="12">
                    <Feeds />
                </Col>
                <Col lg="4" md="12">
                    <CardContact />
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row-4                                                                          */}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col lg="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Recent Comments</CardTitle>
                            <CardSubtitle>
                                Latest Comments on users from Material
                </CardSubtitle>
                        </CardBody>
                        <div
                            className="comment-widgets scrollable"
                            style={{ 'height': '382px' }}
                        >
                            <PerfectScrollbar>
                                <RecentComment
                                    image={img1}
                                    badge="Pending"
                                    badgeColor="info"
                                    name="James Anderson"
                                    comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                                    date="April 14, 2016"
                                />
                                <RecentComment
                                    image={img4}
                                    badge="Approved"
                                    badgeColor="success"
                                    name="Michael Jorden"
                                    comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                                    date="April 14, 2016"
                                />
                                <RecentComment
                                    image={img5}
                                    badge="Rejected"
                                    badgeColor="danger"
                                    name="Johnathan Doeting"
                                    comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                                    date="April 14, 2016"
                                />
                                <RecentComment
                                    image={img1}
                                    badge="Pending"
                                    badgeColor="info"
                                    name="James Anderson"
                                    comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                                    date="April 14, 2016"
                                />
                                <RecentComment
                                    image={img4}
                                    badge="Approved"
                                    badgeColor="success"
                                    name="Michael Jorden"
                                    comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
                                    date="April 14, 2016"
                                />
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
                <Col lg="6">
                    <TodoList />
                </Col>
            </Row>
        </div>
    );
}

export default ThirdDashboard;
