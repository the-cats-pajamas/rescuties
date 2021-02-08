import React from 'react';
import Chart from 'react-c3-component';
import 'c3/c3.css';


import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

const Chartc3 = () => {

    return <div>
        {/*--------------------------------------------------------------------------------*/}
        {/* Start Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
        <Row>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>C3 Line Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 30, 200, 100, 400, 150, 250],
                                        ["option2", 30, 120, 210, 40, 50, 205]
                                    ]
                                },
                                grid: { y: { show: !0, stroke: "#ff0" } },
                                size: { height: 400 },
                                point: { r: 4 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>C3 Area Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["data1", 130, 100, 150, 200, 100, 50],
                                        ["data2", 0, 350, 200, 150, 50, 0]

                                    ],
                                    types: { data1: "area", data2: "area-spline" }
                                },
                                rid: { y: { show: !0 } },
                                size: { height: 400 },
                                point: { r: 4 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] },
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>C3 Spline Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 30, 200, 100, 250, 100, 250],
                                        ["option2", 130, 300, 140, 200, 150, 50]
                                    ],
                                    type: "spline"
                                },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                point: { r: 4 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] },
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>C3 Line Region Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ['data1', 30, 200, 100, 400, 0, 100],
                                        ['data2', 100, 200, 10, 400, 100, 25]
                                    ],
                                    regions: {
                                        'data1': [{ 'start': 1, 'end': 2, 'style': 'dashed' }, { 'start': 3 }], // currently 'dashed' style only
                                        'data2': [{ 'end': 3 }]
                                    }
                                },
                                grid: {
                                    y: {
                                        show: true
                                    }
                                },
                                size: { height: 400 },
                                point: {
                                    r: 4
                                },
                                color: {
                                    pattern: ['#2962FF', '#4fc3f7']
                                }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>C3 Step Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 250, 300, 200, 150, 120, 100],
                                        ["option2", 100, 150, 120, 250, 180, 50]
                                    ],
                                    types: { option1: "step", option2: "area-step" }
                                },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Simple XY Line Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    x: "x",
                                    columns: [
                                        ["x", 30, 50, 100, 230, 300, 310],
                                        ["option1", 30, 280, 150, 400, 180, 280],
                                        ["option2", 130, 300, 200, 300, 250, 450]
                                    ]
                                },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                point: { r: 4 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Multile XY Line Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    xs: { option1: "x1", option2: "x2" },
                                    columns: [
                                        ["x1", 10, 20, 30, 50, 70, 100],
                                        ["x2", 25, 50, 75, 100, 120],
                                        ["option1", 30, 200, 50, 300, 85, 250],
                                        ["option2", 20, 200, 140, 100, 190]
                                    ]
                                },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                point: { r: 4 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Rotated Axis Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["data1", 50, 250, 90, 400, 300, 150],
                                        ["data2", 30, 100, 85, 50, 15, 25]
                                    ],
                                    types: { data1: "bar" }
                                },
                                axis: { rotated: !0 },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#4fc3f7", "#2962FF"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Category Axis Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["year", 50, 250, 100, 400, 150, 250, 50, 100, 250]
                                    ]
                                },
                                axis: { x: { type: "year", categories: ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009"] } },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>X axis tick culling Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["options", 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 30, 200, 100, 400, 150, 250, 200, 100, 400, 150, 250]
                                    ]
                                },
                                axis: { x: { type: "category", tick: { culling: { max: 4 } } } },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#4fc3f7", "#E91E63"] },
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>X axis tick fitting Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    x: "x",
                                    columns: [
                                        ["x", "2018-01-31", "2018-02-31", "2018-03-31", "2018-04-28"],
                                        ["days", 150, 400, 100, 30]

                                    ]
                                },
                                axis: { x: { type: "timeseries", tick: { fit: !0, format: "%e %b %y" } } },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#E91E63"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>X axis timezone Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    x: "x",
                                    xFormat: "%Y",
                                    columns: [
                                        ["x", "2015", "2014", "2013", "2012", "2011", "2010"],
                                        ["option1", 250, 150, 400, 100, 200, 30],
                                        ["option2", 350, 250, 500, 200, 340, 130]

                                    ]
                                },
                                axis: { x: { type: "timeseries", localtime: !1, tick: { format: "%Y-%m-%d %H:%M:%S" } } },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Y axis Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["Profit", 2500, 150, 1000, 100, 500, 30]
                                    ]
                                },

                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#E91E63"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Range for Y axis Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["Option", 250, 100, 400, 100, 200, 30]
                                    ]
                                },
                                axis: { y: { max: 400, min: -400 } },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#4fc3f7", "#E91E63"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Bar Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 350, 80, 250, 400, 190, 250]
                                    ],
                                    type: "bar"
                                },
                                axis: { rotated: !0 },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Column Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ['option1', 130, -90, 170, 90, 120, 250],
                                        ['option2', 90, 150, 140, -150, 150, 50]
                                    ],
                                    type: 'bar'
                                },
                                bar: {
                                    width: {
                                        ratio: 0.5 // this makes bar width 50% of length between ticks
                                    }
                                    // or
                                    //width: 100 // this makes bar width 100px
                                },
                                grid: {
                                    y: {
                                        show: true
                                    }
                                },
                                size: { height: 400 },
                                color: {
                                    pattern: ['#2962FF', '#343a40', '#4fc3f7']
                                }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Stacked Bar Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", -150, 150, 100, 350, -150, 200],
                                        ["option2", 190, 250, -180, 100, -250, 150],
                                        ["option3", 200, 180, 250, -350, 150, 120]
                                    ],
                                    type: "bar",
                                    groups: [
                                        ["option1", "option2"]
                                    ]
                                },
                                grid: { y: { show: !0 } },
                                axis: { rotated: !0 },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#4fc3f7", "#f62d51", "#343a40"] },
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Stacked Column Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ['option1', -130, 200, 200, 400, 400, 250],
                                        ['option2', 100, 50, -100, 200, -150, 150],
                                        ['option3', -85, 200, 200, -300, 250, 250]
                                    ],
                                    type: 'bar',
                                    groups: [
                                        ['option1', 'option2']
                                    ]
                                },
                                grid: {
                                    y: {
                                        show: true
                                    }
                                },
                                size: { height: 400 },
                                color: {
                                    pattern: ['#2962FF', '#ced4da', '#4fc3f7', '#f62d51']
                                }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Pie Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 50],
                                        ["option2", 100]
                                    ],
                                    type: "pie",
                                    onclick: function (o, n) { console.log("onclick", o, n) },
                                    onmouseover: function (o, n) { console.log("onmouseover", o, n) },
                                    onmouseout: function (o, n) { console.log("onmouseout", o, n) }
                                },
                                color: { pattern: ["#2962FF", "#4fc3f7", "#a1aab2"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Donut Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 30],
                                        ["option2", 120]
                                    ],
                                    type: "donut",
                                    onclick: function (o, n) { console.log("onclick", o, n) },
                                    onmouseover: function (o, n) { console.log("onmouseover", o, n) },
                                    onmouseout: function (o, n) { console.log("onmouseout", o, n) }
                                },
                                donut: { title: "Total Sale" },
                                color: { pattern: ["#2962FF", "#4fc3f7", "#f62d51"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Columns Oriented Data Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 50, 60, 40, 50, 20, 30],
                                        ["option2", 220, 130, 240, 90, 130, 200],
                                        ["option3", 250, 250, 400, 160, 200, 300]
                                    ]
                                },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#4fc3f7", "#f62d51"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Category Data Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    x: "x",
                                    columns: [
                                        ["x", "www.site1.com", "www.site2.com", "www.site3.com", "www.site4.com"],
                                        ["complete", 400, 200, 100, 40],
                                        ["remaining", 190, 100, 140, 90]
                                    ],
                                    groups: [
                                        ["complete", "remaining"]
                                    ],
                                    type: "bar"
                                },
                                axis: { x: { type: "category" } },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#4fc3f7", "#2962FF"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Data Color Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["data1", 130, 200, 150, 40, 360, 50],
                                        ["data2", 100, 130, 100, 240, 130, 350],
                                        ["data3", 300, 240, 360, 400, 250, 250]
                                    ],
                                    type: "bar",
                                    colors: { data1: "#4fc3f7", data2: "#2962FF" }
                                },
                                grid: { y: { show: !0 } },
                                size: { height: 400 }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Data Order Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    columns: [
                                        ["option1", 750, 530, 400, 320, 200, 130],
                                        ["option2", 250, 150, 200, 130, 10, -130],
                                        ["option3", -150, -250, -200, -10, -50, -130]
                                    ],
                                    type: "bar",
                                    groups: [
                                        ["option1", "option2", "option3"]
                                    ],
                                    order: "desc"
                                },
                                grid: { x: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#343a40", "#4fc3f7", "#f62d51", "#2962FF", "#ced4da"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
            <Col md="12">
                <Card>
                    <CardBody>
                        <CardTitle>Row Oriented Data Chart</CardTitle>
                        <Chart
                            config={{
                                data: {
                                    rows: [
                                        ["option1", "option2", "option3"],
                                        [300, 120, 90],
                                        [240, 160, 40],
                                        [290, 200, 50],
                                        [230, 160, 120],
                                        [300, 130, 80],
                                        [320, 220, 90]
                                    ]
                                },
                                grid: { y: { show: !0 } },
                                size: { height: 400 },
                                color: { pattern: ["#2962FF", "#343a40", "#4fc3f7"] }
                            }}
                        />
                    </CardBody>
                </Card>
            </Col>
        </Row>
        {/*--------------------------------------------------------------------------------*/}
        {/*End Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
    </div>
}

export default Chartc3;
