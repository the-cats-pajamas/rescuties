import React, { useState } from 'react';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';

const FormGroups = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);
    const [splitButtonOpen1, setSplitButtonOpen1] = useState(false);

    const toggleDropDown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const toggleDropDown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    }

    const toggleSplit = () => {
        setSplitButtonOpen(!splitButtonOpen)
    }

    const toggleSplit1 = () => {
        setSplitButtonOpen1(!splitButtonOpen1)
    }

    return (
        <div>
            {/*--------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Input Addons Left
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>
                                Add span with <code>input-group-text</code>
                            </CardSubtitle>
                            <Form className="mt-4">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="UserName" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Input Addons Both Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>
                                Add span with <code>InputGroupAddon</code> class before &
                  after
                </CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>$</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>0.00</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Input Addons Right
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>
                                Add span with <code>input-group-text</code>
                            </CardSubtitle>
                            <Form className="mt-4">
                                <InputGroup>
                                    <Input placeholder="UserName" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>@</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Input Addons Left Icon
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="far fa-user" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="UserName" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Input Addons Both Side Icon
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="far fa-user" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="UserName" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <i className="wi wi-night-cloudy-gusts" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Input Addons Right Icon
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <Input placeholder="UserName" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <i className="far fa-user" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h4 className="mt-5">Addons With Checkbox</h4>
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Checkbox
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>
                                To use add <code>input-group-prepend</code> before input field
                </CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon type="checkbox" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Checkbox &amp; Button
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>
                                To use add <code>input-group-prepend &amp; append</code>{' '}
                  before and afetr input field
                </CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button color="primary">Go!</Button>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <Input addon type="checkbox" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Checkbox
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>
                                To use add <code>input-group-prepend</code> before input field
                </CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <Input addon type="checkbox" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h4 className="mt-5">Addons With Radio Button</h4>
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Radio Button
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <Input addon type="radio" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Radio &amp; Button
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button color="primary">Go!</Button>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <Input addon type="radio" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Radio Button
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <Input addon type="radio" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h4 className="mt-5">Addons With Button</h4>
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Color Button Left
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button color="primary">Go!</Button>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Color Buttons Both
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button color="danger">Love It!</Button>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="primary">Hate It!</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Color Button Right
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="primary">Go!</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With icon Button Left
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button color="primary"><i className="ti-settings"></i></Button>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With icon Buttons Both
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button color="primary"><i className="ti-pencil"></i></Button>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="success"><i className="ti-search"></i></Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With icon Button Right
              </CardTitle>
                        <CardBody>
                            <Form>
                                <InputGroup>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="danger"><i className="ti-heart"></i></Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h4 className="mt-5">Multiple Addons</h4>
            <Row>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Left Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>InputGroupText</code> 2 times in prepend.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>$</InputGroupText>
                                        <InputGroupText>0.00</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>InputGroupText</code> 2 times in append.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>$</InputGroupText>
                                        <InputGroupText>0.00</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h4 className="mt-5">Multiple Inputs with Addons</h4>
            <Row>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Input With Right Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Input</code> 2 times in prepend.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>First and last name</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" />
                                    <Input type="text" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Input</code> 2 times in append.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <Input type="text" />
                                    <Input type="text" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>First and last name</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h4 className="mt-5">Button Addons</h4>
            <Row>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Button With Left Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Button</code> in prepend.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button className="btn btn-outline-secondary">Button</Button>
                                    </InputGroupAddon>
                                    <Input type="text" placeholder="Left Side" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Button With Right Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Button</code> in append.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <Input type="text" placeholder="Right Side" />
                                    <InputGroupAddon addonType="append">
                                        <Button className="btn btn-outline-secondary">Button</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Multiple Buttons With Left Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Button</code> 2 times in prepend.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <Button className="btn btn-outline-secondary">Button</Button>
                                        <Button className="btn btn-outline-secondary">Button</Button>
                                    </InputGroupAddon>
                                    <Input type="text" placeholder="Left Side" />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Multiple Buttons With Right Side
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Button</code> 2 times in append.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <Input type="text" placeholder="Right Side" />
                                    <InputGroupAddon addonType="append">
                                        <Button className="btn btn-outline-secondary">Button</Button>
                                        <Button className="btn btn-outline-secondary">Button</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h4 className="mt-5">Addons With Dropdown Buttons</h4>
            <Row>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Left Side Dropdown
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Dropdown</code> in prepend.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupButtonDropdown addonType="prepend" isOpen={dropdownOpen} toggle={toggleDropDown.bind(null)}>
                                        <DropdownToggle caret>
                                            Dropdown
                      </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </InputGroupButtonDropdown>
                                    <Input />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Side Dropdown
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Dropdown</code> in append.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <Input />
                                    <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen1} toggle={toggleDropDown1.bind(null)}>
                                        <DropdownToggle caret>
                                            Dropdown
                      </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </InputGroupButtonDropdown>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Left Side Dropdown Segments
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Dropdown</code> in prepend.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <InputGroupButtonDropdown addonType="prepend" isOpen={splitButtonOpen} toggle={toggleSplit.bind(null)}>
                                        <Button outline>Split Button</Button>
                                        <DropdownToggle split outline />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </InputGroupButtonDropdown>
                                    <Input />
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6">
                    <Card>
                        <CardTitle className="border-bottom p-3 mb-0">
                            <i className="mdi mdi-rounded-corner mr-2" />
                Addons With Right Side Dropdown Segments
              </CardTitle>
                        <CardBody>
                            <CardSubtitle>To use add <code>Dropdown</code> in append.</CardSubtitle>
                            <Form>
                                <InputGroup>
                                    <Input />
                                    <InputGroupButtonDropdown addonType="append" isOpen={splitButtonOpen1} toggle={toggleSplit1.bind(null)}>
                                        <Button outline>Split Button</Button>
                                        <DropdownToggle split outline />
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </InputGroupButtonDropdown>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/*--------------------------------------------------------------------------------*/}
            {/*End Inner Div*/}
            {/*--------------------------------------------------------------------------------*/}
        </div>
    );
}

export default FormGroups;
