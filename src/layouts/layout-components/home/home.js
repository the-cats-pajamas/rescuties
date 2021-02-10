import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Jumbotron,
  Button,
} from 'reactstrap';

import logo from '../../../assets/logos/logo.png';
import welcome from '../../../assets/logos/welcome.png';

const JumbotronComponent = () => {
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle className="bg-dark border-bottom p-3 mb-0">
            <img
              src={logo}
              style={{ height: '125px', padding: '0px' }}
              alt="homepage"
              className="dark-logo"
              />
          <img
              src={welcome}
              style={{ height: '125px', padding: '0px' }}
              alt="homepage"
              className="dark-logo"
              />
        </CardTitle>
        <CardBody className="">
          <Jumbotron>
            <p className="lead">
              We are committed to finding loving homes for animals in need. We
              hope you will find the newest addition to your family on our site.
              We feature animals in need all around the US. 
            </p>
            <hr className="my-2" />
            <p>
            If you are considering multiple pets, you can log in or sign up to save pets to your account.
            </p>
            <p className="lead">
              <Button color="primary">My Account</Button>
            </p>
          </Jumbotron>
        </CardBody>
      </Card>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default JumbotronComponent;
