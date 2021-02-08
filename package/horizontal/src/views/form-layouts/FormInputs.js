import React from 'react';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Form,
    FormGroup,
    Input,
    FormText,
    Label,
    CustomInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button,
    FormFeedback
} from 'reactstrap';

const FormInputs = () => {
    return <div>
        {/*--------------------------------------------------------------------------------*/}
        {/* Start Inner Div*/}
        {/*--------------------------------------------------------------------------------*/}
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Default Input</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>Input</code> in the form group</CardSubtitle>
                        <Form className="mt-4">
                            <FormGroup>
                                <Input type="text" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input With Helper Text</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>Formtext</code> in the form group</CardSubtitle>
                        <Form className="mt-3">
                            <FormGroup className="mb-0">
                                <Input type="text" placeholder="Name" />
                                <FormText className="text-muted">Helper Text</FormText>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Password</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>type=&quot;password&quot;</code> in the form group</CardSubtitle>
                        <Form className="mt-3">
                            <FormGroup >
                                <Input type="password" placeholder="password" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Disabled Input</CardTitle>
                    <CardBody>
                        <CardSubtitle>Add attribute <code>disabled</code> to disable input field.</CardSubtitle>
                        <Form className="mt-3">
                            <FormGroup >
                                <Input type="text" placeholder="Name" disabled />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Predefined Input Value</CardTitle>
                    <CardBody>
                        <CardSubtitle>Add attribute <code>defaultValue=&quot;VALUE&quot;</code>.</CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" defaultValue="Predefined Value" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Readonly Input Field</CardTitle>
                    <CardBody>
                        <CardSubtitle>Add attribute <code>readonly</code> to set field.</CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" defaultValue="Readonly Text" readOnly />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input With Placeholder</CardTitle>
                    <CardBody>
                        <CardSubtitle>Add attribute <code>placeholder=&quot;...&quot;</code> to input area</CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" placeholder="Placeholder Text" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Maximum Value</CardTitle>
                    <CardBody>
                        <CardSubtitle>Add attribute <code>maxLength=&quot;6&quot;</code> to input area</CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" maxLength="6" placeholder="Text Here" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Minimum Value</CardTitle>
                    <CardBody>
                        <CardSubtitle>Add attribute <code>minLength=&quot;5&quot;</code> to input area</CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" minLength="6" placeholder="Text Here" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">Input Type Options</h4>
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Text</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;text&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" defaultValue="Text Here" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Password</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;password&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="password" defaultValue="Text Here" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Phone Number</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;tel&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="tel" defaultValue="1-(444)-444-4445" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Email</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;email&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="email" defaultValue="abc@example.com" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type URL</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;url&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="url" defaultValue="http://google.com" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Search</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;url&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="search" defaultValue="how to..." />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Numbers</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;number&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="number" defaultValue="6029" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Date Time</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;datetime-local&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="datetime-local" defaultValue="2008-05-13T22:33:00" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Date</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;date&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="date" defaultValue="2018-05-13" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Time</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;time&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="time" defaultValue="22:33:00" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Week</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;week&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="week" defaultValue="2011-W33" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Month</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;month&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="month" defaultValue="1999-08" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Color</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;color&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="color" defaultValue="#563d7c" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Type Range</CardTitle>
                    <CardBody>
                        <CardSubtitle>Using <code>input type=&quot;range&quot;</code></CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="range" defaultValue="1999-08" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">General Textarea</h4>
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Textarea</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Input type="textarea" rows="3" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Textarea With Placeholder</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Input type="textarea" placeholder="Textarea Text" rows="3" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Textarea With Helper Text</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="textarea" placeholder="Textarea Text" rows="3" />
                                <FormText>Helper Text</FormText>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">Inline Checkboxes &amp; Radios</h4>
        <Row>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Inline Default Checkbox</CardTitle>
                    <CardBody>
                        <Form inline>
                            <div className="form-check form-check-inline">
                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <Label for="inlineCheckbox1">1</Label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <Label for="inlineCheckbox2">2</Label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled />
                                <Label for="inlineCheckbox3">3 (disabled)</Label>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Inline Default Radio Button</CardTitle>
                    <CardBody>
                        <Form inline>
                            <div className="form-check form-check-inline">
                                <Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineradio1" value="option1" />
                                <Label for="inlineradio1">1</Label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineradio2" value="option2" />
                                <Label for="inlineradio2">2</Label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineradio3" value="option3" disabled />
                                <Label for="inlineradio3">3 (disabled)</Label>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Inline Custom Checkbox</CardTitle>
                    <CardBody>
                        <Form inline>
                            <div className="form-check form-check-inline">
                                <CustomInput type="checkbox" id="exampleCustomCheckbox1" label="1" />
                            </div>
                            <div className="form-check form-check-inline">
                                <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="2" />
                            </div>
                            <div className="form-check form-check-inline">
                                <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="3" />
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Inline Custom Radio Button</CardTitle>
                    <CardBody>
                        <Form inline>
                            <div className="form-check form-check-inline">
                                <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="1" />
                            </div>
                            <div className="form-check form-check-inline">
                                <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="2" />
                            </div>
                            <div className="form-check form-check-inline">
                                <CustomInput type="radio" id="exampleCustomRadio3" label="3" disabled />
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">General Select</h4>
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Select</CardTitle>
                    <CardBody>
                        <Form className="mt-3">
                            <FormGroup>
                                <Label for="exampleCustomSelect">Select Value</Label>
                                <Input type="select">
                                    <option value="">Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Custom Select</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>.custom-select</code> class</CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Label for="exampleCustomSelect">Select Value</Label>
                                <Input type="select" className="custom-select">
                                    <option value="">Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Multiple Select</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Input type="select" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Select With Addons</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>addonType=&quot;prepend&quot;</code> to the field</CardSubtitle>
                        <Form>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Options</InputGroupText>
                                </InputGroupAddon>
                                <Input type="select" className="custom-select">
                                    <option value="">Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                </Input>
                            </InputGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Select With Buttons</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>addonType=&quot;append&quot;</code> to the field</CardSubtitle>
                        <Form>
                            <InputGroup>
                                <Input type="select" className="custom-select">
                                    <option value="">Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                </Input>
                                <InputGroupAddon addonType="append">
                                    <Button color="primary">Button</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">File Upload</h4>
        <Row>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Default File Upload</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>type=&quot;file&quot;</code> to the input</CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="file" name="file" id="exampleFile" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Custom File Upload</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>.custom-file-input</code> class to the input</CardSubtitle>
                        <Form>
                            <FormGroup className="mb-1">
                                <div className="custom-file">
                                    <Input type="file" className="custom-file-input" id="customFile1" />
                                    <label className="custom-file-label" htmlFor="customFile1">Choose file</label>
                                </div>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Custom File Upload with Button Left</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>addonType=&quot;prepend&quot;</code> class to the div</CardSubtitle>
                        <Form>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <Button className="btn btn-outline-secondary">Button</Button>
                                </InputGroupAddon>
                                <div className="custom-file">
                                    <Input type="file" className="custom-file-input" id="customFile2" />
                                    <label className="custom-file-label" htmlFor="customFile2">Choose file</label>
                                </div>
                            </InputGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Custom File Upload with Button Right</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>addonType=&quot;append&quot;</code> class to the div</CardSubtitle>
                        <Form>
                            <InputGroup>
                                <div className="custom-file">
                                    <Input type="file" className="custom-file-input" id="customFile3" />
                                    <label className="custom-file-label" htmlFor="customFile3">Choose file</label>
                                </div>
                                <InputGroupAddon addonType="append">
                                    <Button className="btn btn-outline-secondary">Button</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">Different Style in Helper Text</h4>
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Left Helper Text</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>float-left</code> class to the text</CardSubtitle>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" />
                                <small className="badge badge-default badge-info text-white float-left">Helper Text</small>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Center Helper Text</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>text-center</code> class to the text</CardSubtitle>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" />
                                <p className="text-center mb-0">
                                    <small className="badge badge-default badge-warning text-white">Helper Text</small>
                                </p>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Right Helper Text</CardTitle>
                    <CardBody>
                        <CardSubtitle>To use add <code>float-right</code> class to the text</CardSubtitle>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" />
                                <small className="badge badge-default badge-danger float-right">Helper Text</small>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Inline Helper Text</CardTitle>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="8">
                                    <Input type="text" placeholder="Helper Text" />
                                </Col>
                                <Col md="4">
                                    <FormText className="text-muted">Helper Text</FormText>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Inline Helper Text With Color</CardTitle>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="8">
                                    <Input type="text" placeholder="Helper Text" />
                                </Col>
                                <Col md="4">
                                    <small className="badge badge-default badge-success text-white">Helper Text</small>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">Input With Validaton</h4>
        <Row>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input With Success</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Input with success</Label>
                                <Input valid />
                                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input With Danger</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Input with Danger</Label>
                                <Input invalid />
                                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input With Success</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Input with success</Label>
                                <Input valid />
                                <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input With Danger</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label>Input with Danger</Label>
                                <Input invalid />
                                <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">Input Text Styles</h4>
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Text Bold</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" className="font-weight-bold" placeholder="Bold Text" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Text Normal</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" className="font-weight-normal" placeholder="Normal Text" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Text Light</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" className="font-weight-light" placeholder="Light Text" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Text Italic</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" className="font-italic" placeholder="Italic Text" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Text Lowercase</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" className="text-lowercase" placeholder="Lowercase" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Input Text Uppercase</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" className="text-uppercase" placeholder="Uppercase" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <h4 className="mt-5">Input Sizing</h4>
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Small Input</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" placeholder="Small" bsSize="sm" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Normal Input</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" placeholder="Normal" />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0"><i className="mdi mdi-priority-low mr-2"></i>Large Input</CardTitle>
                    <CardBody>
                        <Form>
                            <FormGroup className="mb-0">
                                <Input type="text" placeholder="Large" bsSize="lg" />
                            </FormGroup>
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

export default FormInputs;
