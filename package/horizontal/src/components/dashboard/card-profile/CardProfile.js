import React from "react";
import { Card, CardBody, Col, Row, Button } from "reactstrap";

import img1 from "../../../assets/images/background/profile-bg.jpg";
import img2 from "../../../assets/images/users/8.jpg";

const CardProfile = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1,2,3  and Widget Page                                       */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <img src={img1} alt="" />
      <CardBody className="little-profile text-center">
        <div className="pro-img">
          <img src={img2} alt="user" />
        </div>
        <h3 className="mb-0">Angela Dominic</h3>
        <p>Web Designer &amp; Developer</p>
        <p>
          <small>
            Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit
            orem ipsum dolor sit amet, this is a consectetur adipisicing elit
            orem ipsum dolor sit amet, this is a consectetur adipisicing elit
            orem ipsum dolor sit amet
          </small>
        </p>
        <Button color="primary" className="btn-rounded mt-2" size="lg">
          Follow
        </Button>
        <Row className="text-center mt-2">
          <Col lg="4" md="4" className="mt-2">
            <h3 className="mb-0 font-light">1099</h3>
            <small>Articles</small>
          </Col>
          <Col lg="4" md="4" className="mt-2">
            <h3 className="mb-0 font-light">23,469</h3>
            <small>Followers</small>
          </Col>
          <Col lg="4" md="4" className="mt-2">
            <h3 className="mb-0 font-light">6035</h3>
            <small>Following</small>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CardProfile;
