import React, { useState } from 'react';
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

const BtnGroups = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggle1 = () => {
        setIsOpen1(!isOpen1);
    }

    const toggle2 = () => {
        setIsOpen2(!isOpen2);
    }

    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-checkbox-multiple-blank mr-2"> </i>
                Button Group
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <ButtonGroup>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-2*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-checkbox-multiple-blank mr-2"> </i>
                Button Toolbar
              </CardTitle>
                        <CardBody className="">
                            <ButtonToolbar>
                                <ButtonGroup>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <Button>3</Button>
                                    <Button>4</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button>5</Button>
                                    <Button>6</Button>
                                    <Button>7</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button>8</Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-3*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Nesting
              </CardTitle>
                        <CardBody className="">
                            <ButtonGroup>
                                <Button>1</Button>
                                <Button>2</Button>
                                <ButtonDropdown
                                    isOpen={isOpen1}
                                    toggle={toggle1.bind(null)}
                                >
                                    <DropdownToggle caret>Dropdown</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-4*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Sizing
              </CardTitle>
                        <CardBody className="">
                            <ButtonGroup size="lg">
                                <Button>Left</Button>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup className="mt-2">
                                <Button>Left</Button>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                            </ButtonGroup>
                            <br />
                            <ButtonGroup className="mt-2" size="sm">
                                <Button>Left</Button>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                            </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-4*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Vertical variation
              </CardTitle>
                        <CardBody className="">
                            <ButtonGroup vertical>
                                <Button>1</Button>
                                <Button>2</Button>
                                <ButtonDropdown
                                    isOpen={isOpen2}
                                    toggle={toggle2.bind(null)}
                                >
                                    <DropdownToggle caret>Dropdown</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                        <DropdownItem>Dropdown Link</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </ButtonGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default BtnGroups;
