import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';

const RevenueCards = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-2                                                            */
        /*--------------------------------------------------------------------------------*/
        <Row>
            <Col lg="3" md="6">
                <Card>
                    <CardBody>
                        <div className="d-flex flex-row">
                            <div className="round round-lg align-self-center round-info">
                                <i className="ti-wallet" />
                            </div>
                            <div className="ml-2 align-self-center">
                                <h3 className="mb-0 font-light">$3249</h3>
                                <h5 className="text-muted mb-0">Total Revenue</h5>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg="3" md="6">
                <Card>
                    <CardBody>
                        <div className="d-flex flex-row">
                            <div className="round round-lg align-self-center round-warning">
                                <i className="mdi mdi-cellphone-link" />
                            </div>
                            <div className="ml-2 align-self-center">
                                <h3 className="mb-0 font-lgiht">$2376</h3>
                                <h5 className="text-muted mb-0">Online Revenue</h5>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg="3" md="6">
                <Card>
                    <CardBody>
                        <div className="d-flex flex-row">
                            <div className="round round-lg align-self-center round-primary">
                                <i className="mdi mdi-cart-outline" />
                            </div>
                            <div className="ml-2 align-self-center">
                                <h3 className="mb-0 font-lgiht">$1795</h3>
                                <h5 className="text-muted mb-0">Offline Revenue</h5>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Col lg="3" md="6">
                <Card>
                    <CardBody>
                        <div className="d-flex flex-row">
                            <div className="round round-lg align-self-center round-danger">
                                <i className="mdi mdi-bullseye" />
                            </div>
                            <div className="ml-2 align-self-center">
                                <h3 className="mb-0 font-lgiht">$687</h3>
                                <h5 className="text-muted mb-0">Ad. Expense</h5>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default RevenueCards;
