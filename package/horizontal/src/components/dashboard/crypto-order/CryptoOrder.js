import React, { useState } from "react";
import classnames from 'classnames';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    FormGroup,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Form,
    InputGroup,
    InputGroupAddon,
    Input,
    InputGroupText,
    Button
} from 'reactstrap';

const CryptoOrder = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-2 [Cryptocurrency]                                           */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <div className="d-md-flex align-items-center">
                    <div>
                        <CardTitle>Place your Order</CardTitle>
                        <CardSubtitle>Buy and Sell Crypto as you Like</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <div className="dl">
                            <FormGroup>
                                <Input type="select" className="custom-select">
                                    <option value="0">Bitcoin</option>
                                    <option value="1">Ethereum</option>
                                    <option value="2">Ripple</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <Nav pills className="custom-pills mt-4">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >Buy</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >Sell</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="mt-3">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Tab-1                                                                          */}
                    {/*--------------------------------------------------------------------------------*/}
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Form>
                                    <InputGroup size="lg" className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="cc BTC"></i></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Amount" />
                                    </InputGroup>
                                    <InputGroup size="lg" className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>$</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Price" />
                                    </InputGroup>
                                    <Button className="btn btn-info mt-4">Buy Bitcoin</Button>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Tab-2                                                                          */}
                    {/*--------------------------------------------------------------------------------*/}
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Form>
                                    <InputGroup size="lg" className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="cc BTC"></i></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Amount" />
                                    </InputGroup>
                                    <InputGroup size="lg" className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>$</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Price" />
                                    </InputGroup>
                                    <Button className="btn btn-success mt-4">Sell Bitcoin</Button>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>

    );
}

export default CryptoOrder;
