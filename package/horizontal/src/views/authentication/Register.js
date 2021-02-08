import React from 'react';
import {
    Input,
    CustomInput,
    FormGroup,
    Form,
    Row,
    Col,
    Button
} from 'reactstrap';
import img1 from '../../assets/images/logo-icon.png';
import img2 from '../../assets/images/background/login-register.jpg';

const sidebarBackground = {
    backgroundImage: "url(" + img2 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center"
};

const Register = () => {

    return <div className="">
        {/*--------------------------------------------------------------------------------*/}
        {/*Register Cards*/}
        {/*--------------------------------------------------------------------------------*/}
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={sidebarBackground}>
            <div className="auth-box on-sidebar">
                <div id="loginform">
                    <div className="logo">
                        <span className="db"><img src={img1} alt="logo" /></span>
                        <h5 className="font-medium mb-3">Sign Up to Admin</h5>
                    </div>
                    <Row>
                        <Col xs="12">
                            <Form className="mt-3" id="loginform" action="/dashbaord">
                                <FormGroup className="mb-3">
                                    <Input type="text" name="uname" id="uname" placeholder="Name" bsSize="lg" required />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Input type="email" name="email" id="email" placeholder="Email" bsSize="lg" required />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <Input type="password" name="password" id="password" placeholder="Password" bsSize="lg" required />
                                </FormGroup>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="I agree to all Terms" />
                                <Row className="mb-3 mt-3">
                                    <Col xs="12">
                                        <Button color="primary" size="lg" className="text-uppercase" type="submit" block>Sign Up</Button>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    Already have an account? <a href="/authentication/login" className="text-info ml-1"><b>Sign In</b></a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div >;
}

export default Register;
