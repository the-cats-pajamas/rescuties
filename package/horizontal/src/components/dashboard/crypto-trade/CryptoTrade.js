import React, { useState } from "react";
import classnames from 'classnames';
import {
    Row,
    Col,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Table,
    Input
} from 'reactstrap';

const CryptoTrade = () => {
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
                        <CardTitle>Trade History</CardTitle>
                        <CardSubtitle>History as you Like</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">March</option>
                                <option value="1">April</option>
                                <option value="2">May</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Nav pills className="custom-pills mt-4">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >Market</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >Sell History</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="mt-3">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Tab-1                                                                          */}
                    {/*--------------------------------------------------------------------------------*/}
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div>
                                    <Table className="v-middle" responsive>
                                        <thead>
                                            <tr>
                                                <th className="border-top-0">Price</th>
                                                <th className="border-top-0">Amount</th>
                                                <th className="border-top-0">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="text-success">$12948.89</span></td>
                                                <td><i className="cc BTC mr-1"></i> <span className="font-medium">0.123</span></td>
                                                <td>12:45:09</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-danger">$23135.78</span></td>
                                                <td><i className="cc XRP mr-1"></i> <span className="font-medium">1.123</span></td>
                                                <td>12:43:09</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-success">$43567.98</span></td>
                                                <td><i className="cc ETH mr-1 blue-text"></i> <span className="font-medium">0.123</span></td>
                                                <td>12:45:09</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-success">$12948.89</span></td>
                                                <td><i className="cc BTC mr-1"></i> <span className="font-medium">0.123</span></td>
                                                <td>12:45:09</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-danger">$23135.78</span></td>
                                                <td><i className="cc XRP mr-1"></i> <span className="font-medium">1.123</span></td>
                                                <td>12:43:09</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-success">$43567.98</span></td>
                                                <td><i className="cc ETH mr-1 blue-text"></i> <span className="font-medium">0.123</span></td>
                                                <td>12:45:09</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Tab-2                                                                          */}
                    {/*--------------------------------------------------------------------------------*/}
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Table className="v-middle" responsive>
                                    <thead>
                                        <tr>
                                            <th className="border-top-0">Price</th>
                                            <th className="border-top-0">Amount</th>
                                            <th className="border-top-0">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="text-success">$43567.98</span></td>
                                            <td><i className="cc ETH mr-1"></i> <span className="font-medium">0.123</span></td>
                                            <td>12:45:09</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-success">$12948.89</span></td>
                                            <td><i className="cc BTC mr-1"></i> <span className="font-medium">0.123</span></td>
                                            <td>12:45:09</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-success">$12948.89</span></td>
                                            <td><i className="cc BTC mr-1"></i> <span className="font-medium">0.123</span></td>
                                            <td>12:45:09</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-danger">$23135.78</span></td>
                                            <td><i className="cc XRP mr-1"></i> <span className="font-medium">1.123</span></td>
                                            <td>12:43:09</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-danger">$23135.78</span></td>
                                            <td><i className="cc XRP mr-1"></i> <span className="font-medium">1.123</span></td>
                                            <td>12:43:09</td>
                                        </tr>
                                        <tr>
                                            <td><span className="text-success">$43567.98</span></td>
                                            <td><i className="cc ETH mr-1"></i> <span className="font-medium">0.123</span></td>
                                            <td>12:45:09</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    );
}

export default CryptoTrade;
