import React from "react";
import {
    Progress,
    Card,
    CardBody,
    Row,
    Col
} from 'reactstrap';

import img1 from '../../../assets/images/background/active-bg.png';

const ActiveVisitors = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-1 [Classic]                                                  */
        /*--------------------------------------------------------------------------------*/
        <Card className="card-hover">
            <CardBody style={{ background: `url(${img1}) no-repeat top center` }}>
                <div className="pt-3 text-center">
                    <i className="mdi mdi-file-chart display-4 text-orange d-block"></i>
                    <span className="display-4 d-block font-medium">368</span>
                    <span>Active Visitors on Site</span>
                    <Progress multi className="mt-3">
                        <Progress bar color="info" value="15" />
                        <Progress bar color="success" value="30" />
                        <Progress bar color="warning" value="65" />
                    </Progress>
                    <Row className="mt-4 mb-4">
                        <Col xs="4" md="12" lg="4" className="border-right text-left">
                            <h4 className="mb-0 font-medium">60%</h4>Desktop
							</Col>
                        <Col xs="4" md="12" lg="4" className="border-right text-md-left">
                            <h4 className="mb-0 font-medium">28%</h4>Mobile
							</Col>
                        <Col xs="4" md="12" lg="4" className="text-right text-md-left">
                            <h4 className="mb-0 font-medium">12%</h4>Tablet
							</Col>
                    </Row>
                    <a href="/" className="waves-effect waves-light mt-4 mb-2 btn btn-lg btn-info accent-4">View More Details</a>
                </div>
            </CardBody>
        </Card>

    );
}

export default ActiveVisitors;
