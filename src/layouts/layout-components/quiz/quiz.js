import React, { useState } from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CustomInput,
} from 'reactstrap';

const Basicform = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [quizType, setQuizType] = useState('');

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropDown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const renderQuiz = selection => {
    setQuizType(selection);
  };

  return (
    <>
      {quizType === '' ? (
        <Card>
          <CardTitle className="bg-light border-bottom p-3 mb-0">
            <h1>Pet Matcher Quiz</h1>
          </CardTitle>
          <CardBody className="">
            <Jumbotron>
              <p className="lead">
                Let us help you find your new best friend. With out data-backed
                Pet Matcher Quiz, you will be matched with a pet in need in no
                time!
              </p>
              <hr className="my-2" />
              <p>What type of pet are you looking for?</p>
              <p className="lead">
                <Button
                  style={{ height: '50px', margin: '10px 10px 10px 0px' }}
                  color="primary"
                  value="cat"
                  type="submit"
                  onClick={() => renderQuiz('cat')}
                >
                  I'm looking for a cat.
                </Button>
                <Button
                  style={{ height: '50px', margin: '10px 10px 10px 0px' }}
                  color="primary"
                  value="dog"
                  onClick={() => renderQuiz('dog')}
                >
                  I'm looking for a dog.
                </Button>
              </p>
            </Jumbotron>
          </CardBody>
        </Card>
      ) : quizType === 'cat' ? (
        <Col md="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-book mr-2"></i>Cat Matcher Quiz
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label htmlFor="helptext">
                    Please answer these questions honestly so that we can match
                    you with the purrfect cat.{' '}
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label>I would like a cat that is:</Label>
                  <Col md="4">
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio1"
                      name="gender"
                      label="male"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio2"
                      name="gender"
                      label="female"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio3"
                      name="gender"
                      label="either"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label>I am open to adopting a cat with special needs:</Label>
                  <Col md="4">
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio4"
                      name="needs"
                      label="yes"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio5"
                      name="needs"
                      label="no"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label>I would like a cat that is house-trained:</Label>
                  <Col md="4">
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio6"
                      name="houseTrained"
                      label="agree"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio7"
                      name="houseTrained"
                      label="disagree"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label>I am interested in the following ages:</Label>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox1"
                    label="baby"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox2"
                    label="young"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox3"
                    label="adult"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox4"
                    label="senior"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>I would like a cat that is:</Label>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox5"
                    label="good with kids"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox6"
                    label="good with other cats"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox7"
                    label="good with dogs"
                  />
                </FormGroup>
              </Form>
            </CardBody>
            <CardBody className="border-top">
              <Button type="submit" className="btn btn-success">
                {' '}
                <i className="fa fa-check"></i> Save
              </Button>
              <Button type="button" className="btn btn-dark ml-2">
                Cancel
              </Button>
            </CardBody>
          </Card>
        </Col>
      ) : quizType === 'dog' ? (
        <Col md="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-book mr-2"></i>Dog Matcher Quiz
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label htmlFor="helptext">
                    Please answer these questions honestly so that we can match
                    you with an amazing dog in need.{' '}
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label>I would like a dog that is:</Label>
                  <Col md="4">
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio1"
                      name="gender"
                      label="male"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio2"
                      name="gender"
                      label="female"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio3"
                      name="gender"
                      label="either"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label>I am open to adopting a dog with special needs:</Label>
                  <Col md="4">
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio4"
                      name="needs"
                      label="yes"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio5"
                      name="needs"
                      label="no"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label>I would like a dog that is house-trained:</Label>
                  <Col md="4">
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio6"
                      name="houseTrained"
                      label="agree"
                    />
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio7"
                      name="houseTrained"
                      label="disagree"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label>I am interested in the following ages:</Label>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox1"
                    label="baby"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox2"
                    label="young"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox3"
                    label="adult"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox4"
                    label="senior"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>I would like a cat that is:</Label>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox5"
                    label="good with kids"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox6"
                    label="good with other cats"
                  />
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox7"
                    label="good with dogs"
                  />
                </FormGroup>
              </Form>
            </CardBody>
            <CardBody className="border-top">
              <Button type="submit" className="btn btn-success">
                {' '}
                <i className="fa fa-check"></i> Save
              </Button>
              <Button type="button" className="btn btn-dark ml-2">
                Cancel
              </Button>
            </CardBody>
          </Card>
        </Col>
      ) : null}
    </>
  );
};

export default Basicform;
