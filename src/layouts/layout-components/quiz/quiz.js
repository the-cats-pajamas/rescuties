import React, { useState } from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    FormFeedback,
    CustomInput
} from 'reactstrap';

const Basicform = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    const toggleDropDown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const toggleDropDown1 = () => {
        setDropdownOpen1(!dropdownOpen1);
    }

    return <div>
        {/*--------------------------------------------------------------------------------*/}
        {/* Start Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
        <Row>
            {/*--------------------------------------------------------------------------------*/}
            {/* Ordinary Form                                                                  */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>
              Ordinary Form
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="exampleEmail12">Email Address</Label>
                                <Input type="email" name="email" id="exampleEmail12" placeholder="Email address Here" />
                                <FormText color="muted">
                                    We&apos;ll never share your email with anyone else.
                          </FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="examplePassword2">Password</Label>
                                <Input type="password" name="password" id="examplePassword2" placeholder="Password Here" />
                            </FormGroup>
                            <FormGroup>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check Me Out!" />
                            </FormGroup>
                            <Button color="primary">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Default Form                                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Default Form
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Default Text <span className="help"> e.g. &quot;George deo&quot;</span></Label>
                                <Input type="text" defaultValue="George deo..." />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="example-email">Email <span className="help"> e.g. &quot;example@gmail.com&quot;</span></Label>
                                <Input type="email" id="example-email" name="example-email" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" defaultValue="password" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Placeholder</Label>
                                <Input type="text" placeholder="placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Text area</Label>
                                <Input type="textarea" rows="5" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Read only input</Label>
                                <Input type="text" placeholder="Readonly input here…" readOnly />
                            </FormGroup>
                            <FormGroup>
                                <fieldset disabled>
                                    <Label htmlFor="disabledTextInput">Disabled input</Label>
                                    <Input type="text" id="disabledTextInput" placeholder="Disabled input" />
                                </fieldset>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox1" label="Check this custom checkbox" />
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Check this custom checkbox" />
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Check this custom checkbox" />
                                    </Col>
                                    <Col md="4">
                                        <CustomInput type="radio" id="exampleCustomRadio1" name="customRadio" label="Toggle this custom radio" />
                                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Toggle this custom radio" />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Label>Select Years</Label>
                                <Input type="select">
                                    <option>Choose here...</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                    <option>Four</option>
                                    <option>Five</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="exampleFile">Default File</Label>
                                <Input type="file" placeholder="" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Custom File upload</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Upload</InputGroupText>
                                    </InputGroupAddon>
                                    <div className="custom-file">
                                        <Input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                    </div>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="helptext">Help Text</Label>
                                <Input type="text" name="help" id="helptext" placeholder="Helping Text Here" />
                                <FormText color="muted">
                                    A block of help text that breaks onto a new line and may extend beyond one line.
                          </FormText>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Highlighted Header Form                                                        */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0 text-white">
                        <i className="mdi mdi-book mr-2"></i>Highlighted Header Form
                    </CardTitle>
                    <CardBody className="bg-light">
                        <CardTitle className="mb-0">Person Info</CardTitle>
                    </CardBody>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input type="text" placeholder="Shaina nehwal" />
                                        <FormText className="muted">This is inline help</FormText>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input type="text" placeholder="12n" />
                                        <FormText className="muted">This field has error.</FormText>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Select Gender</Label>
                                        <Input type="select" name="Select Gender">
                                            <option>Female</option>
                                            <option>Male</option>
                                        </Input>
                                        <FormText className="muted">Select your gender</FormText>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Date of Birth</Label>
                                        <Input type="date" placeholder="DOB Here" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Category</Label>
                                        <Input type="select" name="Select Category">
                                            <option>Category1</option>
                                            <option>Category2</option>
                                            <option>Category3</option>
                                            <option>Category4</option>
                                            <option>Category5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Membership</Label>
                                        <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="Free" />
                                        <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="Paid" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                    <CardBody className="bg-light">
                        <CardTitle className="mb-0">Address</CardTitle>
                    </CardBody>
                    <CardBody>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                    <Label>Street</Label>
                                    <Input type="text" placeholder="" />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>City</Label>
                                    <Input type="text" placeholder="" />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>State</Label>
                                    <Input type="text" placeholder="" />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Post Code</Label>
                                    <Input type="text" placeholder="" />
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input type="select" name="Select Category">
                                        <option>--Select your Country--</option>
                                        <option>India</option>
                                        <option>Sri Lanka</option>
                                        <option>USA</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardBody className="border-top">
                        <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                        <Button type="button" className="btn btn-dark ml-2">Cancel</Button>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Horizontal Form                                                                */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Horizontal Form
                    </CardTitle>
                    <CardBody>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Text</Label>
                                <Col sm="10">
                                    <Input type="text" defaultValue="Akhsay Kumar" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Search</Label>
                                <Col sm="10">
                                    <Input type="text" defaultValue="How do I shoot web" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Email</Label>
                                <Col sm="10">
                                    <Input type="email" defaultValue="react@example.com" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">URL</Label>
                                <Col sm="10">
                                    <Input type="url" defaultValue="http://wrappixel.com" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Telephone</Label>
                                <Col sm="10">
                                    <Input type="tel" defaultValue="1-(555)-555-5555" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Password</Label>
                                <Col sm="10">
                                    <Input type="password" defaultValue="hunter2" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Number</Label>
                                <Col sm="10">
                                    <Input type="number" defaultValue="6029" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Date and time</Label>
                                <Col sm="10">
                                    <Input type="datetime-local" defaultValue="2011-08-19T13:45:00" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Date</Label>
                                <Col sm="10">
                                    <Input type="date" defaultValue="2011-08-19" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Month</Label>
                                <Col sm="10">
                                    <Input type="month" defaultValue="2011-08" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Week</Label>
                                <Col sm="10">
                                    <Input type="week" defaultValue="2011-W33" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Time</Label>
                                <Col sm="10">
                                    <Input type="time" defaultValue="13:45:00" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Select</Label>
                                <Col sm="10">
                                    <Input type="select" name="Select Category">
                                        <option>Choose...</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </Input>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Color</Label>
                                <Col sm="10">
                                    <Input type="color" defaultValue="#563d7c" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label sm="2">Input Range</Label>
                                <Col sm="10">
                                    <Input type="range" defaultValue="50" />
                                </Col>
                            </Row>
                        </FormGroup>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Input Groups                                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Input Groups
                    </CardTitle>
                    <CardBody>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input placeholder="Username" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <Input placeholder="Recipient's username" />
                                <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">https://example.com/users</InputGroupAddon>
                                <Input type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input placeholder="" type="text" />
                                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>$</InputGroupText>
                                    <InputGroupText>0.00</InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label>Checkboxes and radio addons</Label>
                            <Row>
                                <Col md="6">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="" />
                                    </InputGroup>
                                </Col>
                                <Col md="6">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="radio" aria-label="Checkbox for following text input" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label>Multiple addons</Label>
                            <Row>
                                <Col md="6">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                                            </InputGroupText>
                                            <InputGroupText>0.00</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="" />
                                    </InputGroup>
                                </Col>
                                <Col md="6">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>$</InputGroupText>
                                            <InputGroupText>0.00</InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label>Button addons</Label>
                            <Row>
                                <Col md="6">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <Button color="primary">Go!</Button>
                                        </InputGroupAddon>
                                        <Input placeholder="" />
                                    </InputGroup>
                                </Col>
                                <Col md="6">
                                    <InputGroup>
                                        <Input placeholder="" />
                                        <InputGroupAddon addonType="append">
                                            <Button color="primary">Go!</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <Button color="danger">Hate It</Button>
                                </InputGroupAddon>
                                <Input placeholder="" />
                                <InputGroupAddon addonType="append">
                                    <Button color="success">Love It</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label>Dropdown addons</Label>
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
                                <Input placeholder="" />
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
                        </FormGroup>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Input States                                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Input States
                    </CardTitle>
                    <CardBody>
                        <Row>
                            <Col md="6">
                                <FormGroup>
                                    <Label htmlFor="exampleEmail">Input with success</Label>
                                    <Input valid />
                                    <FormFeedback valid>Success! You&apos;ve done it.</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="examplePassword">Input with danger</Label>
                                    <Input invalid />
                                    <FormFeedback>Sorry, that username&apos;s taken. Try another?</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Label sm="2">Email</Label>
                                        <Col sm="10">
                                            <Input valid placeholder="name@example.com" />
                                            <FormFeedback valid>Success! You&apos;ve done it.</FormFeedback>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Label sm="2">Email</Label>
                                        <Col sm="10">
                                            <Input invalid placeholder="name@example.com" />
                                            <FormFeedback>Sorry, that username&apos;s taken. Try another?</FormFeedback>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="exampleEmail">Valid input</Label>
                                    <Input valid />
                                    <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="mt-3" htmlFor="examplePassword">Invalid input</Label>
                                    <Input invalid />
                                    <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <FormGroup>
                                    <Label>Large</Label>
                                    <Input placeholder="lg size" bsSize="lg" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Default</Label>
                                    <Input placeholder="default size" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Small</Label>
                                    <Input placeholder="sm size" bsSize="sm" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Grid Size</Label>
                                    <Row>
                                        <Col md="4">
                                            <Input placeholder="Col-4" />
                                        </Col>
                                        <Col md="8">
                                            <Input placeholder="Col-8" />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Disabled For                                                                   */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Disabled Form
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="exampleEmail1">Disabled input</Label>
                                <Input type="email" name="email" id="exampleEmail1" placeholder="Email address Here" disabled />
                                <FormText color="muted">
                                    We&apos;ll never share your email with anyone else.
                          </FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="examplePassword">Disabled Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password Here" disabled />
                            </FormGroup>
                            <FormGroup className="mb-3" check disabled>
                                <Label check>
                                    <Input type="checkbox" name="check1" disabled />{' '}
                    Check Me Out !
                          </Label>
                            </FormGroup>
                            <Button color="primary" disabled>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Readonly Form                                                                  */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Readonly Form
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" placeholder="Full Name Here" readOnly />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="email" readOnly id="staticEmail" defaultValue="email@example.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" defaultValue="ilikeios" readOnly />
                            </FormGroup>
                            <Button color="primary" disabled>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Form with Left Icon                                                            */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="6">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Form with Left Icon
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Username</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ti-user"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" placeholder="Username" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ti-email"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="email" placeholder="Email" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ti-lock"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="password" placeholder="Password" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Confirm Password</Label>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ti-lock"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="password" placeholder="Confirm Password" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox11" label="Remember Me!" />
                            </FormGroup>
                            <div className="border-top pt-3 mt-3">
                                <Button type="submit" className="btn btn-success mr-2">Submit</Button>
                                <Button type="submit" className="btn btn-dark">Cancel</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            {/*--------------------------------------------------------------------------------*/}
            {/* Form with Right Icon                                                           */}
            {/*--------------------------------------------------------------------------------*/}
            <Col md="6">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-book mr-2"></i>Form with Right Icon
                    </CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Username</Label>
                                <InputGroup>
                                    <Input type="text" placeholder="Username" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <i className="ti-user"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <InputGroup>
                                    <Input type="email" placeholder="Email" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <i className="ti-email"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <InputGroup>
                                    <Input type="password" placeholder="Password" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <i className="ti-lock"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Confirm Password</Label>
                                <InputGroup>
                                    <Input type="password" placeholder="Confirm Password" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            <i className="ti-lock"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox12" label="Remember Me!" />
                            </FormGroup>
                            <div className="border-top pt-3 mt-3">
                                <Button type="submit" className="btn btn-success mr-2">Submit</Button>
                                <Button type="submit" className="btn btn-dark">Cancel</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        {/*--------------------------------------------------------------------------------*/}
        {/*End Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
    </div>
}

export default Basicform;
