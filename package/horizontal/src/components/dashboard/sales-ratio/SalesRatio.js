import React from "react";

import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import Chart from 'react-c3-component';
import 'c3/c3.css';

const SalesRatio = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <CardTitle>Sales Ratio</CardTitle>
                <h4 className="font-bold mt-3 mb-2">35,658</h4>
                <h5 className="card-subtitle mb-0">Total Earnings of the Month</h5>
            </CardBody>
            <div className="earningsbox">
                <Chart
                    style={{ height: '60px', width: '100%' }}
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
                            pattern: ['#2961ff']
                        }
                    }}
                />
            </div>
        </Card >
    );
}

export default SalesRatio;
