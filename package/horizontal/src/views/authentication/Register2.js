import React, { useState } from "react";
import { Auth, Db } from "../../firebase";
import validators from "./Validators";
import {
  Input,
  CustomInput,
  FormGroup,
  Form,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import img2 from "../../assets/images/big/auth-bg.jpg";

const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const Register2 = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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

  const isFormValid = () => {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (!validators[field].valid) {
        status = false;
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

  const doRegister = (event) => {
    const email1 = email;
    const password1 = password;
    const username1 = username;
    Auth.doCreateUserWithEmailAndPassword(email1, password1)
      .then((authUser) => {
        Db.doCreateUser(authUser.user.uid, username1, email1)
          .then(() => {
            setEmail(email1);
            setPassword(password1);
            setUsername(username1);
            props.history.push("/authentication/login2");
          })
          .catch((error) => {
            alert("Something went wrong!");
          });
      })
      .catch((error) => {
        alert("Something went wrong!");
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
                  This is the Firebase sign-up section. Donec non pharetra
                  ligula, sit amet laoreet arcu.Integer. you can use below
                  username password for login
                </p>
                <p className="mt-5">Username: demo@demo.com</p>
                <p className="align-items-end">Password: demo123</p>
              </div>
            </Col>
            <Col md="6" lg="4" className="bg-white">
              <div className="p-4">
                <h3 className="font-medium mb-3">Sign Up to Admin</h3>
                <Form className="mt-3" id="loginform" action="/dashbaord">
                  <FormGroup className="mb-3">
                    <Label for="username" className="font-medium">
                      Username
                    </Label>
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        onInputChange(e);
                      }}
                      name="username"
                      id="username"
                      placeholder="Name"
                      bsSize="lg"
                    />
                  </FormGroup>
                  {showErrors("username")}
                  <FormGroup className="mb-3">
                    <Label for="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        onInputChange(e);
                      }}
                      name="email"
                      id="email"
                      placeholder="Email"
                      bsSize="lg"
                    />
                  </FormGroup>
                  {showErrors("email")}
                  <FormGroup className="mb-3">
                    <Label for="password" className="font-medium">
                      Password
                    </Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        onInputChange(e);
                      }}
                      name="password"
                      id="password"
                      placeholder="Password"
                      bsSize="lg"
                    />
                  </FormGroup>
                  {showErrors("password")}
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox"
                    label="I agree to all Terms"
                  />
                  <Row className="mb-3 mt-3">
                    <Col xs="12">
                      <Button
                        onClick={(event) => doRegister(event)}
                        className={`text-uppercase ${
                          isFormValid() ? "" : "disabled"
                        }`}
                        color="primary"
                        size="lg"
                        type="submit"
                        block
                      >
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                  <div className="text-center">
                    Already have an account?{" "}
                    <a href="/authentication/login2" className="text-info ml-1">
                      <b>Sign In</b>
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

export default Register2;
