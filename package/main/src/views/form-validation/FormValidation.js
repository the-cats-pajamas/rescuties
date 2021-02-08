import React, {useState} from 'react';
import {
    Row,
    Col,
    Button,
    FormGroup,
    Card,
    CardBody,
    Label,
    ListGroup, ListGroupItem,
    CardTitle
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import Form from 'react-validation/build/form';

const FormValidate = () => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [Formvalue, setFormvalue] = useState({firstname: "", lastname:"", email:"", age:"", title:"", mobile:"", developer:""});
    const onSubmit = (data) => {
        setFormvalue(data);
    };
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardTitle className="p-3 border-bottom mb-0">
                            <i className="mdi mdi-alert-box mr-2" />
                        Form Validation
                        </CardTitle>
                        <CardBody>
                           
                        <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <label className="control-label" htmlFor="firstname">
                                First name *
                            </label>
                            <div className="mb-2">
                                <input
                                   type="text"
                                    name="firstname" 
                                    ref={register({ required: true })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.firstname && 'First name is required.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="lastname">
                                Last name *
                            </label>
                            <div className="mb-2">
                                <input
                                    
                                    type="text"
                                    name="lastname" 
                                    ref={register({ required: true })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.lastname && 'Last name is required.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="username">
                                Username *
                            </label>
                            <div className="mb-2">
                                <input
                                    
                                    type="text"
                                    name="username" 
                                    ref={register({ required: true })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.username && 'Username is required.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="email">
                                Email *
                            </label>
                            <div className="mb-2">
                                <input
                                    
                                    type="text"
                                    name="email" 
                                    ref={register({
                                        required: true,
                                        pattern: /^\S+@\S+$/i
                                      })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.email && 'Email is required.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="mobile">
                                Mobile No *
                            </label>
                            <div className="mb-2">
                                <input
                                    
                                    type="text"
                                    name="mobile" 
                                    ref={register({ required: true, maxLength: 11, minLength: 8 })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.mobile && 'Enter a Valid mobile number.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="age">
                                Age *
                            </label>
                            <div className="mb-2">
                                <input
                                    
                                    type="number"
                                    name="age" 
                                    ref={register({ required: true , pattern: /\d+/ })}
                                    className="form-control"
                                />
                            </div>
                            <span className="text-danger">{errors.age && 'Please enter number for age.'}</span>
                        </FormGroup>
                        <FormGroup>
                            <label className="control-label" htmlFor="title">
                                Select Gender *
                            </label>
                            <div className="mb-2">
                            <select name="title" className="form-control" ref={register({ required: true })}>
                            <option value="">Select Option</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                
                            </select>
                            </div>
                            <span className="text-danger">{errors.title && 'Please select value.'}</span>
                        </FormGroup>
                        <FormGroup>
                        <label>Are you a developer?</label><br/>
                        <FormGroup>
                             <Label>
                             <input
                            name="developer"
                            type="radio"
                            value="Yes"
                            ref={register({ required: true })}
                            /> Yes
                            </Label>
                        
                            <Label className="ml-3">
                            <input
                            name="developer"
                            type="radio"
                            value="No"
                            ref={register({ required: true })}
                            /> No</Label>
                        </FormGroup>    
                            <span className="text-danger">{errors.developer && 'Please select value.'}</span>
                        </FormGroup>    
                        <FormGroup>
                            <Button className="button btn-info" type="submit">
                                Submit
                            </Button>
                        </FormGroup>
                        </Form> 
                        <hr/>              
                        <h4 className="mt-5">Check Data after form submit</h4> 
                        <ListGroup>
                            <ListGroupItem>Firstname: {Formvalue.firstname}</ListGroupItem>
                            <ListGroupItem>Lirstname: {Formvalue.lastname}</ListGroupItem>
                            <ListGroupItem>Username: {Formvalue.username}</ListGroupItem>
                            <ListGroupItem>Age: {Formvalue.age}</ListGroupItem>
                            <ListGroupItem>Email Id: {Formvalue.email}</ListGroupItem>
                            <ListGroupItem>Mobile No: {Formvalue.mobile}</ListGroupItem>
                            <ListGroupItem>Gender: {Formvalue.title}</ListGroupItem>
                            <ListGroupItem>Are you developer?: {Formvalue.developer}</ListGroupItem>
                        </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }

export default FormValidate;
