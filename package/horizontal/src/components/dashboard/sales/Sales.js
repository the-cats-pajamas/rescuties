import React, { useState } from "react";

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Table,
    Tooltip,
    Input
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';

import img1 from '../../../assets/images/product/chair.png';
import img2 from '../../../assets/images/product/chair2.png';
import img3 from '../../../assets/images/product/chair3.png';
import img4 from '../../../assets/images/product/chair4.png';

const Sales = () => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const [tooltipOpen3, setTooltipOpen3] = useState(false);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    }

    const toggle1 = () => {
        setTooltipOpen1(!tooltipOpen1);
    }

    const toggle2 = () => {
        setTooltipOpen2(!tooltipOpen2);
    }

    const toggle3 = () => {
        setTooltipOpen3(!tooltipOpen3);
    }

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-3 [Ecommerce]                                                */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <div className="d-md-flex align-items-center">
                    <div>
                        <CardTitle>Products of the Month</CardTitle>
                        <CardSubtitle>Overview of Latest Month</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <div className="mt-2" style={{ height: '400px' }}>
                    <PerfectScrollbar>
                        <Table className="v-middle">
                            <thead>
                                <tr>
                                    <th className="border-top-0">Products</th>
                                    <th className="border-top-0">Customers</th>
                                    <th className="border-top-0">Status</th>
                                    <th className="border-top-0">Invoice</th>
                                    <th className="border-top-0">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="mr-2"><img src={img1} alt="user" className="circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Orange Shoes</h5></div>
                                        </div>
                                    </td>
                                    <td>Rotating Chair</td>
                                    <td>
                                        <i className="fa fa-circle text-orange" id="TooltipExample11"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample11" toggle={toggle.bind(null)}>
                                            In Progress
											</Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="font-medium">$96K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="mr-2"><img src={img2} alt="user" className="circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Red Sandle</h5></div>
                                        </div>
                                    </td>
                                    <td>Dummy Product</td>
                                    <td>
                                        <i className="fa fa-circle text-success" id="TooltipExample22"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen1} target="TooltipExample22" toggle={toggle1.bind(null)}>
                                            Active
											</Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="font-medium">$96K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="mr-2"><img src={img3} alt="user" className="circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Gourgeous Purse</h5></div>
                                        </div>
                                    </td>
                                    <td>Comfortable Chair</td>
                                    <td>
                                        <i className="fa fa-circle text-success" id="TooltipExample33"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen2} target="TooltipExample33" toggle={toggle2.bind(null)}>
                                            Active
											</Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="font-medium">$96K</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="mr-2"><img src={img4} alt="user" className="circle" width="45" /></div>
                                            <div className="">
                                                <h5 className="mb-0 font-16 font-medium">Puma T-shirt</h5></div>
                                        </div>
                                    </td>
                                    <td>Wooden Chair</td>
                                    <td>
                                        <i className="fa fa-circle text-orange" id="TooltipExample44"></i>
                                        <Tooltip placement="top" isOpen={tooltipOpen3} target="TooltipExample44" toggle={toggle3.bind(null)}>
                                            In Progress
											</Tooltip>
                                    </td>
                                    <td>35</td>
                                    <td className="font-medium">$96K</td>
                                </tr>
                            </tbody>
                        </Table>
                    </PerfectScrollbar>
                </div>
            </CardBody>
        </Card>
    );
}

export default Sales;
