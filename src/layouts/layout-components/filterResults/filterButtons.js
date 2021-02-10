import React, { useState } from 'react';
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap';

const Dropdowns = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggle1 = () => {
    setIsOpen1(!isOpen1);
  }

  const toggle2 = () => {
    setIsOpen2(!isOpen2);
  }

  const toggle3 = () => {
    setIsOpen3(!isOpen3);
  }

  const toggle4 = () => {
    setIsOpen4(!isOpen4);
  }

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
              <div className="d-flex align-items-center">
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen1}
                  toggle={toggle1.bind(null)}
                >
                  <Button id="caret" color="success">
                    Type
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen2}
                  toggle={toggle2.bind(null)}
                >
                  <Button id="caret" color="success">
                    Age
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen3}
                  toggle={toggle3.bind(null)}
                >
                  <Button id="caret" color="success">
                    Gender
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown
                  className="ml-2"
                  isOpen={isOpen4}
                  toggle={toggle4.bind(null)}
                >
                  <Button id="caret" color="success">
                    Environment
                    </Button>
                  <DropdownToggle caret color="success" />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
        </Col>
        <Col xs="12" md="6">
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
}

export default Dropdowns;
