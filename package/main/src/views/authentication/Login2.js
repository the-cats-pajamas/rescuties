import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
  Form,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import { Auth } from "../../firebase";
import validators from "./Validators";

import img2 from "../../assets/images/big/auth-bg.jpg";

const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const Login2 = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInputChange = (e) => {
    formValidators([e.target.name], e.target.value);
  };

  const formValidators = (fieldName, value) => {
    validators[fieldName].errors = [];
    validators[fieldName].state = value;
    validators[fieldName].valid = true;
    validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === "function") {
        if (!rule.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      }
    });
  };

  const validForm = () => {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (field === "email" || field === "password") {
        if (!validators[field].valid) {
          status = false;
        }
      }
    });
    return status;
  };

  const showErrors = (fieldName) => {
    const validator = validators[fieldName];
    const result = "";
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return (
          <span className="error" key={index}>
            * {info}
            <br />
          </span>
        );
      });
      return <div className="error mb-2">{errors}</div>;
    }
    return result;
  };

  const doLogin = (event) => {
    const email1 = email;
    const password1 = password;
    Auth.doSignInWithEmailAndPassword(email1, password1)
      .then(() => {
        setEmail(email1);
        setPassword(password1);
        props.history.push("/");
      })
      .catch((error) => {
        alert("Invalid login id or password.");
      });
    event.preventDefault();
  };

  return (
    <div
      className="auth-wrapper  align-items-center d-flex"
      style={sidebarBackground}
    >
      {/*--------------------------------------------------------------------------------*/}
      {/*Login2 Cards*/}
      {/*--------------------------------------------------------------------------------*/}
      <div className="container">
        <div>
          <Row className="no-gutters justify-content-center">
            <Col md="6" lg="4" className="bg-dark text-white">
              <div className="p-4">
                <h2 className="display-5">
                  Hi,
                  <br /> <span className="text-cyan font-bold">Dude</span>
                </h2>
                <p className="op-5 mt-4">
                  This is the Firebase login section. Donec non pharetra ligula,
                  sit amet laoreet arcu.Integer. you can use below username
                  password for login
                </p>
                <p className="mt-5">Username: demo@demo.com</p>
                <p className="align-items-end">Password: demo123</p>
              </div>
            </Col>
            <Col md="6" lg="4" className="bg-white">
              <div className="p-4">
                <h3 className="font-medium mb-3">Sign In to Admin</h3>
                <Form className="mt-3" id="loginform" action="/dashbaord">
                  <Label for="email" className="font-medium">
                    Email
                  </Label>
                  <InputGroup className="mb-2" size="lg">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ti-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        onInputChange(e);
                      }}
                      placeholder="Email"
                    />
                  </InputGroup>
                  {showErrors("email")}
                  <Label for="password" className="mt-3 font-medium">
                    Password
                  </Label>
                  <InputGroup className="mb-3" size="lg">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ti-pencil"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        onInputChange(e);
                      }}
                      placeholder="Password"
                    />
                  </InputGroup>
                  {showErrors("password")}
                  <div className="d-flex no-block align-items-center mb-4 mt-4">
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="Remember Me"
                    />
                  </div>
                  <Row className="mb-3">
                    <Col xs="12">
                      <Button
                        color="primary"
                        onClick={(event) => doLogin(event)}
                        className={`${validForm() ? "" : "disabled"}`}
                        size="lg"
                        type="submit"
                        block
                      >
                        Log In
                      </Button>
                    </Col>
                  </Row>
                  <div className="text-center">
                    Don&apos;t have an account?{" "}
                    <a
                      href="/authentication/register2"
                      className="text-info ml-1"
                    >
                      <b>Sign Up</b>
                    </a>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login2;
