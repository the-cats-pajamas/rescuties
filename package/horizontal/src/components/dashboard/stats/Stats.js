import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Row,
    Input,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import { Line, Bar } from 'react-chartjs-2';
import Chart from 'react-c3-component';
import 'c3/c3.css';

//Line chart
let lineData = {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
    datasets: [{
        label: 'Bounce %',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'transparent'
        ],
        borderColor: [
            '#2961ff'
        ],
        borderWidth: 2
    }]
};

let lineOptions = {
    elements: { point: { radius: 2 } },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            }
        }]
    },
    legend: {
        display: false,
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    }
}

let barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'A',
        backgroundColor: '#fff',
        borderColor: '#fff',
        data: [6, 10, 9, 11, 9, 10, 12]
    }]
};

let barOptions = {
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            },
            barThickness: 5
        }],
        yAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            }
        }]
    },
    legend: {
        display: false,
        labels: {
            fontColor: 'rgb(255, 99, 132)'
        }
    }
}

const Stats = () => {
    return (
        <Row>
            <Col lg="4">
                <Card className="bg-info text-white">
                    <CardBody>
                        <CardTitle>Revenue Statistics</CardTitle>
                        <div className="d-flex align-items-center mt-4">
                            <div>
                                <Bar
                                    data={barData}
                                    width={100}
                                    height={100}
                                    options={barOptions} />
                            </div>
                            <div className="ml-auto">
                                <h2 className="text-white mb-0"><i className="ti-arrow-up"></i>$351</h2><span className="text-white op-5">Jan 10  - Jan  20</span>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="4">
                <Card className="bg-cyan">
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div>
                                <CardTitle className="text-white">Page Views</CardTitle>
                                <h2 className="text-white mb-0"><i className="ti-arrow-up"></i> 6548</h2>
                            </div>
                            <div className="ml-auto">
                                <ListGroup className="mb-0">
                                    <ListGroupItem className="text-white bg-cyan p-0 border-0"><i className="fa fa-circle mr-1 text-white font-12 op-3"></i> Visit</ListGroupItem>
                                    <ListGroupItem className="text-white bg-cyan p-0 border-0"><i className="fa fa-circle mr-1 text-white text-accent-4 font-12"></i> Page Views</ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </CardBody>
                    <div className="mt-3" id="views">
                        <Chart
                            style={{ height: '60px', width: '100%' }}
                            config={{
                                data: {
                                    columns: [
                                        ['Site A', 6, 10, 9, 11, 9, 10, 12]
                                    ],
                                    type: 'area'
                                },
                                axis: {
                                    y: {
                                        show: false,
                                        tick: {
                                            count: 0,
                                            outer: false
                                        }
                                    },
                                    x: {
                                        show: false,
                                    }
                                },
                                padding: {
                                    top: 0,
                                    right: -8,
                                    bottom: -28,
                                    left: -8,
                                },
                                point: {
                                    r: 0,
                                },
                                legend: {
                                    hide: true
                                },
                                color: {
                                    pattern: ['rgba(255, 255, 255, 0.5)']
                                }
                            }}
                        />
                    </div>
                </Card>
            </Col>
            <Col lg="4">
                <Card>
                    <CardBody>
                        <h2 className="m-b-0">56.33%</h2><span className="">Bounce Rate</span>
                        <div className="d-flex align-items-center m-t-10">
                            <div className="dl">
                                <Input type="select" className="custom-select">
                                    <option value="0">Monthly</option>
                                    <option value="1">Daily</option>
                                    <option value="2">Weekly</option>
                                    <option value="3">Yearly</option>
                                </Input>
                            </div>
                            <div className="ml-auto">
                                <div className="chart-wrapper mb-4" style={{ maxWidth: '150px', height: '55px' }}>
                                    <Line data={lineData} options={lineOptions} />
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row >
    );
}

export default Stats;
