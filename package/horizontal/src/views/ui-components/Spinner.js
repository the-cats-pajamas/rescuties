import React from 'react';
import { Card, CardBody, CardTitle, Row, Col, Spinner } from 'reactstrap';

const Spinners = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-3*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Regular Spinners
              </CardTitle>
                        <CardBody>
                            <div>
                                <Spinner color="primary" />
                                <Spinner color="secondary" />
                                <Spinner color="success" />
                                <Spinner color="danger" />
                                <Spinner color="warning" />
                                <Spinner color="info" />
                                <Spinner color="light" />
                                <Spinner color="dark" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-4*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Grow Spinners
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Spinner type="grow" color="primary" />
                                <Spinner type="grow" color="secondary" />
                                <Spinner type="grow" color="success" />
                                <Spinner type="grow" color="danger" />
                                <Spinner type="grow" color="warning" />
                                <Spinner type="grow" color="info" />
                                <Spinner type="grow" color="light" />
                                <Spinner type="grow" color="dark" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-5*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Sizes
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Spinner size="sm" color="primary" />{' '}
                                <Spinner size="sm" color="secondary" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-5*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                Custom Style
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
                                <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div >
    );
}

export default Spinners;
