import React from "react";

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import * as S from "..";

const EarningsOverview = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-3 [Ecommerce]                                                */
    /*--------------------------------------------------------------------------------*/
    <Card>
      <CardBody className="border-bottom">
        <CardTitle>Overview</CardTitle>
        <CardSubtitle className="mb-0">
          Total Earnings of the Month
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <Row className="mt-2">
          <Col md="6" sm="12" lg="4">
            <S.Statistics
              textColor="orange"
              icon="wallet"
              title="Net Profit"
              subtitle="$3,567.53"
            />
          </Col>
          <Col md="6" sm="12" lg="4">
            <S.Statistics
              textColor="primary"
              icon="basket"
              title="Product sold"
              subtitle="5489"
            />
          </Col>
          <Col md="6" sm="12" lg="4">
            <S.Statistics
              icon="account-box"
              title="New Customers"
              subtitle="$23,568.90"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default EarningsOverview;
