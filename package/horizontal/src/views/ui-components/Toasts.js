import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Row, Col, Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

const Toasts = () => {

    const [show, setShow] = useState(false);

    const toggle = () => setShow(!show);

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
                Regular Toast
              </CardTitle>
                        <CardBody>
                            <div>
                                <Toast>
                                    <ToastHeader>
                                        Reactstrap
                    </ToastHeader>
                                    <ToastBody>
                                        This is a toast on a white background — check it out!
                    </ToastBody>
                                </Toast>
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
                Toast with HeaderIcon
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Toast>
                                    <ToastHeader icon="danger">
                                        Reactstrap
                    </ToastHeader>
                                    <ToastBody>
                                        This is a toast with a danger icon — check it out!
                    </ToastBody>
                                </Toast>
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
                Toast with Spinner
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Toast>
                                    <ToastHeader icon={<Spinner size="sm" />}>
                                        Reactstrap
                    </ToastHeader>
                                    <ToastBody>
                                        This is a toast with a custom icon — check it out!
                    </ToastBody>
                                </Toast>
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
                Dismissible Toast
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Button color="primary" onClick={toggle.bind(null)}>Show Toast</Button>
                                <br />
                                <br />
                                <Toast isOpen={show}>
                                    <ToastHeader toggle={toggle.bind(null)}>Toast title</ToastHeader>
                                    <ToastBody>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ToastBody>
                                </Toast>
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
        </div>
    );
}

export default Toasts;
