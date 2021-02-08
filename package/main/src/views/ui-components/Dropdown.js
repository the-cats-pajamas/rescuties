import React, { useState } from 'react';
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    UncontrolledDropdown,
    ButtonDropdown,
    Button,
    Card,
    CardBody,
    CardTitle,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col
} from 'reactstrap';

const Dropdowns = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);

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

    const toggle5 = () => {
        setIsOpen5(!isOpen5);
    }

    const toggle6 = () => {
        setIsOpen6(!isOpen6);
    }

    const toggle7 = () => {
        setIsOpen7(!isOpen7);
    }

    const toggle8 = () => {
        setIsOpen8(!isOpen8);
    }

    const dropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const dropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
    }

    const toggle9 = () => {
        setIsOpen9(!isOpen9);
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
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Single Button Dropdowns
              </CardTitle>
                        <CardBody className="">
                            <div className="d-flex align-items-center">
                                <UncontrolledDropdown className="ml-2">
                                    <DropdownToggle caret color="primary">
                                        Primary
                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown className="ml-2">
                                    <DropdownToggle caret color="warning">
                                        Warning
                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown className="ml-2">
                                    <DropdownToggle caret color="success">
                                        Success
                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-2*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Split Button Dropdowns
              </CardTitle>
                        <CardBody className="">
                            <div className="d-flex align-items-center">
                                <ButtonDropdown
                                    className="ml-2"
                                    isOpen={isOpen1}
                                    toggle={toggle1.bind(null)}
                                >
                                    <Button id="caret" color="primary">
                                        Primary
                    </Button>
                                    <DropdownToggle caret color="primary" />
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
                                    <Button id="caret" color="warning">
                                        Warning
                    </Button>
                                    <DropdownToggle caret color="warning" />
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
                                        Success
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
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-3*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Sizing Dropdowns
              </CardTitle>
                        <CardBody className="">
                            <div className="d-flex align-items-center">
                                <ButtonDropdown
                                    isOpen={isOpen4}
                                    toggle={toggle4.bind(null)}
                                >
                                    <DropdownToggle caret size="lg">
                                        Large Button
                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <ButtonDropdown
                                    className="ml-2"
                                    isOpen={isOpen5}
                                    toggle={toggle5.bind(null)}
                                >
                                    <DropdownToggle caret size="sm">
                                        Small Button
                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
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
                Drop Direction Variations
              </CardTitle>
                        <CardBody className="">
                            <div className="d-flex align-items-center">
                                <ButtonDropdown
                                    direction="up"
                                    isOpen={isOpen6}
                                    toggle={toggle6.bind(null)}
                                >
                                    <DropdownToggle caret>Dropup</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>

                                <ButtonDropdown
                                    className="ml-2"
                                    direction="left"
                                    isOpen={isOpen7}
                                    toggle={toggle7.bind(null)}
                                >
                                    <DropdownToggle caret>Dropleft</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>

                                <ButtonDropdown
                                    className="ml-2"
                                    direction="right"
                                    isOpen={isOpen8}
                                    toggle={toggle8.bind(null)}
                                >
                                    <DropdownToggle caret>Dropright</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-5*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Dropdown Alignment
              </CardTitle>
                        <CardBody className="">
                            <div className="d-flex align-items-center">
                                <Dropdown
                                    isOpen={dropdownOpen}
                                    toggle={dropdown.bind(null)}
                                >
                                    <DropdownToggle caret>
                                        This dropdowns menu is right-aligned
                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Custom Dropdown
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <UncontrolledDropdown>
                                    <DropdownToggle
                                        tag="span"
                                        onClick={dropdown2.bind(null)}
                                        data-toggle="dropdown"
                                        aria-expanded={dropdownOpen2}
                                    >
                                        Custom Dropdown Content
                    </DropdownToggle>
                                    <DropdownMenu>
                                        <div onClick={dropdown2}>Custom dropdown item</div>
                                        <div onClick={dropdown2}>Custom dropdown item</div>
                                        <div onClick={dropdown2}>Custom dropdown item</div>
                                        <div onClick={dropdown2}>Custom dropdown item</div>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Uncontrolled Dropdown
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>Dropdown</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                Modifiers Dropdown
              </CardTitle>
                        <CardBody className="">
                            <div>
                                <Dropdown isOpen={isOpen9} toggle={toggle9.bind(null)}>
                                    <DropdownToggle>Dropdown</DropdownToggle>
                                    <DropdownMenu
                                        modifiers={{
                                            'setMaxHeight': {
                                                'enabled': true,
                                                'fn': data => ({
                                                    ...data,
                                                    'styles': {
                                                        ...data.styles,
                                                        'overflow': 'auto',
                                                        'maxHeight': 100
                                                    }
                                                }),
                                                'order': 890
                                            }
                                        }}
                                    >
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-6*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-cards-variant mr-2"> </i>
                setActiveFromChild
              </CardTitle>
                        <CardBody className="">
                            <Navbar color="light" light expand="md">
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/components/">Inactive Link</NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown setActiveFromChild>
                                        <DropdownToggle tag="a" className="nav-link" caret>
                                            Dropdown
                      </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag="a" href="/blah" active>
                                                Link
                        </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Navbar>
                        </CardBody>
                    </Card>
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
