import React from 'react';
import { Col, Row, Card, CardBody, Progress, CardSubtitle } from 'reactstrap';

const ProgressCards = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-3                                                            */
        /*--------------------------------------------------------------------------------*/
        <Row>
            <Col md="6" lg="3">
                <Card>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <h3>86%</h3>
                                <CardSubtitle>Total Product</CardSubtitle>
                            </Col>
                            <Col xs="12">
                                <Progress color="warning" value="30" />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

            <Col md="6" lg="3">
                <Card>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <h3>40%</h3>
                                <CardSubtitle>Pending Product</CardSubtitle>
                            </Col>
                            <Col xs="12">
                                <Progress color="info" value="50" />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

            <Col md="6" lg="3">
                <Card>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <h3>56%</h3>
                                <CardSubtitle>Completed Product</CardSubtitle>
                            </Col>
                            <Col xs="12">
                                <Progress color="success" value="60" />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

            <Col md="6" lg="3">
                <Card>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <h3>26%</h3>
                                <CardSubtitle>Overall Product</CardSubtitle>
                            </Col>
                            <Col xs="12">
                                <Progress color="danger" value="40" />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default ProgressCards;
