import React from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';

import Chart from 'react-c3-component';
import 'c3/c3.css';

const Products = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-3 [Ecommerce]                                                */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <div className="d-md-flex align-items-center">
                    <div>
                        <CardTitle>Product Sales</CardTitle>
                        <CardSubtitle>Total Earnings of the Month</CardSubtitle>
                    </div>
                </div>
                <div className="product-sales">
                    <Chart
                        style={{ height: '400px', width: '100%' }}
                        config={{
                            data: {
                                columns: [
                                    ['Site A', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                                    ['Site B', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                                ],
                                type: 'bar'
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
                            bar: {
                                width: 8
                            },
                            padding: {
                                top: 40,
                                right: 10,
                                bottom: 0,
                                left: 20,
                            },
                            point: {
                                r: 0
                            },
                            legend: {
                                hide: true
                            },
                            color: {
                                pattern: ['#2961ff', '#40c4ff', '#ff821c', '#7e74fb']
                            }
                        }}
                    />
                </div>
            </CardBody>
        </Card>
    );
}

export default Products;
