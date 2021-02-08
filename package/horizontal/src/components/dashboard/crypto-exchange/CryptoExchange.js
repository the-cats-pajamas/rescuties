import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    Form,
    Input,
    FormGroup,
    Button
} from 'reactstrap';

const CryptoExchange = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-2 [Cryptocurrency]                                           */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody className="pb-2">
                <CardTitle>Currency Exchange</CardTitle>
                <CardSubtitle>exchange currency from here</CardSubtitle>
            </CardBody>
            <CardBody className="bg-light text-center">
                <Form>
                    <Row className="no-gutters">
                        <Col xs="8">
                            <Input type="text" bsSize="lg" defaultValue="1.02458" />
                        </Col>
                        <Col xs="4">
                            <FormGroup className="mb-0">
                                <Input type="select" className="custom-select custom-select-lg">
                                    <option value="1">BTC</option>
                                    <option value="2">ETH</option>
                                    <option value="3">DASH</option>
                                    <option value="4">LTC</option>
                                    <option value="5">NEO</option>
                                    <option value="6">XRP</option>
                                    <option value="7">EOS</option>
                                    <option value="8">NEM</option>
                                    <option value="9">ADA</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="round align-self-center round-danger mt-2 mb-2"><i className="ti-exchange-vertical"></i></div>
                    <Row className="no-gutters">
                        <Col xs="8">
                            <Input type="text" bsSize="lg" defaultValue="9526.39" />
                        </Col>
                        <Col xs="4">
                            <FormGroup className="mb-0">
                                <Input type="select" className="custom-select custom-select-lg">
                                    <option value="1">USD</option>
                                    <option value="2">EUR</option>
                                    <option value="3">INR</option>
                                    <option value="4">AUD</option>
                                    <option value="5">GBP</option>
                                    <option value="6">CAD</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
            <CardBody className="text-center">
                <Button type="button" className="btn waves-effect waves-light btn-info">Exchange Now</Button>
            </CardBody>
        </Card>
    );
}

export default CryptoExchange;
