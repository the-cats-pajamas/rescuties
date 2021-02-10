import React, { Component } from 'react';

export default class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.getStore().email,
      name: props.getStore().name,
      phone: props.getStore().phone
    };
    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }
  isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewInput).every(k => {
        return validateNewInput[k] === true;
      })
    ) {
      if (
        this.props.getStore().phone !== userInput.phone ||
        this.props.getStore().email !== userInput.email ||
        this.props.getStore().name !== userInput.name
      ) {
        // only update store of something changed
        this.props.updateStore({
          ...userInput,
          savedToCloud: false, // use this to notify step4 that some changes took place and prompt the user to save again
        }); // Update store here (this is just an example, in reality you will do it via redux or flux)
      }

      isDataValid = true;
    } else {
      // if anything fails then update the UI validation state but NOT the UI Data State
      this.setState(
        Object.assign(
          userInput,
          validateNewInput,
          this._validationErrors(validateNewInput)
        )
      );
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand) return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator

    this.setState(
      Object.assign(
        userInput,
        validateNewInput,
        this._validationErrors(validateNewInput)
      )
    );
  }

  _validateData(data) {
    return {
      nameVal: data.name !== '', // required: anything besides N/A
      emailVal: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        data.email
      ), // required: regex w3c uses in html5
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      nameValMsg: val.nameVal ? '' : 'A name is required',
      emailValMsg: val.emailVal ? '' : 'A valid email is required',
      phoneValMsg: val.phoneVal ? '' : 'A valid phone number is required',

    };
    return errMsgs;
  }

  _grabUserInput() {
    return {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    };
  }
  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    if (typeof this.state.nameVal === 'undefined' || this.state.nameVal) {
      notValidClasses.nameCls = 'form-control';
    } else {
      notValidClasses.nameCls = 'is-invalid form-control';
      notValidClasses.nameValGrpCls = 'text-danger';
    }

    if (typeof this.state.emailVal === 'undefined' || this.state.emailVal) {
      notValidClasses.emailCls = 'form-control';
    } else {
      notValidClasses.emailCls = 'is-invalid form-control';
      notValidClasses.emailValGrpCls = 'text-danger';
    }
    return (
      <div className="step step1 mt-5 ">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="">
              <h4>Welcome, Please Enter your info</h4>
              <form id="Form" className="form-horizontal mt-2">
                <div className="form-group content form-block-holder">
                  <label className="control-label">name</label>
                  <div>
                    <input
                      // ref="name"
                      ref={e => {
                        this.name = e;
                      }}
                      autoComplete="off"
                      className={notValidClasses.nameCls}
                      required
                      placeholder="john smith"
                      defaultValue={this.state.name}
                      onBlur={this.validationCheck}
                    />
                    <div className={notValidClasses.nameValGrpCls}>
                      {this.state.nameValMsg}
                    </div>
                    <div className="form-group content form-block-holder">
                      <label className="control-label ">Email</label>
                      <div>
                        <input
                          // ref="email"
                          ref={f => {
                            this.email = f;
                          }}
                          autoComplete="off"
                          type="email"
                          placeholder="john.smith@example.com"
                          className={notValidClasses.emailCls}
                          required
                          defaultValue={this.state.email}
                          onBlur={this.validationCheck}
                        />
                        <div className={notValidClasses.emailValGrpCls}>
                          {this.state.emailValMsg}
                        </div>
                      </div>
                      <div className="form-group content form-block-holder">
                        <label className="control-label">phone</label>
                        <div>
                          <input
                            // ref="name"
                            ref={e => {
                              this.phone = e;
                            }}
                            autoComplete="off"
                            className={notValidClasses.phoneCls}
                            required
                            placeholder="123-456-7890"
                            defaultValue={this.state.phone}
                            onBlur={this.validationCheck}
                          />
                          <div className={notValidClasses.nameValGrpCls}>
                            {this.state.nameValMsg}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
