import React from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

const MaterialForm = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <div className="p-3 border-bottom bg-light">
                    <CardTitle>
                        <i className="mr-2 mdi mdi-cards-outline" />
              Animated line inputs
            </CardTitle>
                    <CardSubtitle>
                        Just add form-material class to the form that&apos;s it.
            </CardSubtitle>
                </div>
                <CardBody>
                    <Form className="form-material">
                        <FormGroup>
                            <Label>Default Text e.g. &quot;George deo&quot;</Label>
                            <Input type="text" placeholder="Some text Value..." />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email e.g. &quot;example@gmail.com&quot;</Label>
                            <Input type="email" placeholder="Email" />
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
                            <Input type="textarea" rows="4" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Input Select</Label>
                            <Input type="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Helping text</Label>
                            <Input type="text" />
                            <FormText>
                                A block of help text that breaks onto a new line and may
                                extend beyond one line.
                </FormText>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <div className="p-3 border-bottom bg-light">
                    <CardTitle>
                        <i className="mr-2 mdi mdi-cards-outline" />
              Input States
            </CardTitle>
                    <CardSubtitle>
                        Just add .has-success, .has-warning, .has-danger class to the
                        .form-group div. Add .form-control-success, .form-control-warning,
                        .form-control-danger class in the input tag.
            </CardSubtitle>
                </div>
                <CardBody>
                    <Form className="form-control-line">
                        <FormGroup className="has-success">
                            <Label className="form-control-label" for="success">
                                Success State
                </Label>
                            <Input
                                type="text"
                                className="form-control-success"
                                id="success"
                            />
                        </FormGroup>
                        <FormGroup className="has-warning">
                            <Label className="form-control-label" for="warning">
                                warning State
                </Label>
                            <Input
                                type="text"
                                className="form-control-warning"
                                id="warning"
                            />
                        </FormGroup>
                        <FormGroup className="has-danger">
                            <Label className="form-control-label" for="danger">
                                danger State
                </Label>
                            <Input
                                type="text"
                                className="form-control-danger"
                                id="danger"
                            />
                        </FormGroup>
                        <FormGroup className="has-success">
                            <Label className="form-control-label" for="success2">
                                Success State with Feedback
                </Label>
                            <Input
                                type="text"
                                className="form-control-success"
                                id="success2"
                            />
                            <div className="form-control-feedback">
                                Success! You&apos;ve done it.
                </div>
                        </FormGroup>
                        <FormGroup className="has-warning">
                            <Label className="form-control-label" for="warning2">
                                Warning State with Feedback
                </Label>
                            <Input
                                type="text"
                                className="form-control-warning"
                                id="warning2"
                            />
                            <div className="form-control-feedback">
                                This is last warning!!
                </div>
                        </FormGroup>
                        <FormGroup className="has-danger">
                            <Label className="form-control-label" for="danger2">
                                Error State with Feedback
                </Label>
                            <Input
                                type="text"
                                className="form-control-danger"
                                id="danger2"
                            />
                            <div className="form-control-feedback">
                                It&apos;s too dangerous!!
                </div>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div >
    );
}

export default MaterialForm;
