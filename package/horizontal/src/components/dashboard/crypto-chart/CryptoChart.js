import React from "react";

import Chart from 'react-c3-component';
import 'c3/c3.css';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    FormGroup,
    Input
} from 'reactstrap';

const CryptoChart = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-2 [Cryptocurrency]                                           */
        /*--------------------------------------------------------------------------------*/
        <Row>
            <Col xs="12">
                <Card>
                    <CardBody>
                        <div className="d-md-flex align-items-center">
                            <div>
                                <CardTitle>BitCoin / Ethereum / Ripple</CardTitle>
                                <CardSubtitle>Overview of Latest Month</CardSubtitle>
                            </div>
                            <div className="ml-auto d-flex align-items-center">
                                <div className="dl">
                                    <FormGroup>
                                        <Input type="select" className="custom-select">
                                            <option value="0">Monthly</option>
                                            <option value="1">Daily</option>
                                            <option value="2">Weekly</option>
                                            <option value="3">Yearly</option>
                                        </Input>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Chart
                                style={{ height: '350px', width: '100%' }}
                                config={{
                                    data: {
                                        columns: [
                                            ['Ripple', 0, 15, 15, 38, 8, 40, 20, 100, 70],
                                            ['Ethereum', 0, 35, 30, 60, 20, 80, 50, 180, 150],
                                            ['Bitcoin', 0, 80, 40, 100, 30, 150, 80, 270, 250]
                                        ],
                                        type: 'area-spline',
                                        groups: [['Ripple', 'Ethereum', 'Bitcoin']]
                                    },
                                    axis: {
                                        y: {
                                            show: true,
                                            tick: {
                                                count: 0,
                                                outer: false
                                            }
                                        },
                                        x: {
                                            show: true
                                        }
                                    },
                                    padding: {
                                        top: 20,
                                        right: 10,
                                        bottom: 0,
                                        left: 30
                                    },
                                    point: {
                                        r: 2
                                    },
                                    legend: {
                                        hide: true
                                    },
                                    color: {
                                        pattern: ['#ff821c', '#40c4ff', '#1240c2']
                                    }
                                }}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default CryptoChart;
