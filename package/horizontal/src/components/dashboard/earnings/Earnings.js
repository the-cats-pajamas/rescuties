import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import Chart from 'react-c3-component';
import 'c3/c3.css';

const Earnings = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-3 [Ecommerce]                                                */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <CardTitle>Earnings</CardTitle>
                <CardSubtitle>Total Earnings of the Month</CardSubtitle>
                <h2 className="font-medium">$43,567.53</h2>
            </CardBody>
            <div className="earningsbox mt-1">
                <Chart
                    style={{ height: '53px', width: '100%' }}
                    config={{
                        data: {
                            columns: [
                                ['Site A', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8]
                            ],
                            type: 'area-spline'
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
                            pattern: ['#40c4ff']
                        }
                    }}
                />
            </div>
        </Card>
    );
}

export default Earnings;
