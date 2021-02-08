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

const OrderStatus = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        <Card className="order-widget">
            <CardBody>
                <Row>
                    <Col sm="12" md="8">
                        <CardTitle>Order Status</CardTitle>
                        <CardSubtitle className="mb-0">Total Earnings of the Month</CardSubtitle>
                        <Row className="mt-3">
                            <Col xs="4" className="border-right">
                                <i className="fa fa-circle text-cyan"></i>
                                <h3 className="mb-0 font-medium">5489</h3>
                                <span>Success</span>
                            </Col>
                            <Col xs="4" className="border-right">
                                <i className="fa fa-circle text-orange"></i>
                                <h3 className="mb-0 font-medium">954</h3>
                                <span>Pending</span>
                            </Col>
                            <Col xs="4">
                                <i className="fa fa-circle text-info"></i>
                                <h3 className="mb-0 font-medium">736</h3>
                                <span>Failed</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12" md="4">
                        <div id="visitor" className="mt-3">
                            <Chart
                                style={{ height: '130px', width: '100%' }}
                                config={{
                                    data: {
                                        columns: [
                                            ['Success', 45],
                                            ['Pending', 15],
                                            ['Failed', 27]
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
                                        title: "75%",
                                        width: 20,
                                    },
                                    legend: {
                                        hide: true
                                    },
                                    color: {
                                        pattern: ['#40c4ff', '#2961ff', '#ff821c']
                                    }
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default OrderStatus;
