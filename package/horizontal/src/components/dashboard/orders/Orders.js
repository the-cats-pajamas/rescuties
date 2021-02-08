import React from "react";

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import Chart from 'react-c3-component';
import 'c3/c3.css';

const Orders = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-3 [Ecommerce]                                                */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody className="border-bottom">
                <CardTitle>Order Stats</CardTitle>
                <CardSubtitle>Overview of orders</CardSubtitle>
                <div className="status mt-4">
                    <Chart
                        style={{ height: '280px', width: '100%' }}
                        config={{
                            data: {
                                columns: [
                                    ['Success', 65],
                                    ['Pending', 15],
                                    ['Failed', 17]
                                ],

                                type: 'donut',
                                tooltip: {
                                    show: true
                                }
                            },
                            donut: {
                                label: {
                                    show: false
                                },
                                title: "Orders",
                                width: 35,
                            },
                            legend: {
                                hide: true
                            },
                            color: {
                                pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb']
                            }
                        }}
                    />
                </div>
            </CardBody>
            <CardBody>
                <Row>
                    <Col className="xs-4">
                        <i className="fa fa-circle text-primary"></i>
                        <h3 className="mb-0 font-medium">5489</h3>
                        <span>Success</span>
                    </Col>
                    <Col className="xs-4">
                        <i className="fa fa-circle text-info"></i>
                        <h3 className="mb-0 font-medium">954</h3>
                        <span>Pending</span>
                    </Col>
                    <Col className="xs-4">
                        <i className="fa fa-circle text-orange"></i>
                        <h3 className="mb-0 font-medium">736</h3>
                        <span>Failed</span>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default Orders;
