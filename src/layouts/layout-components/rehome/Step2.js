import React, { Component } from 'react';

export default class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="step step2 mt-5">
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <form>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-2 col-form-label"
                >
                  Type
                </label>
                <div className="col-sm-2">
                  <select className="custom-select">
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
							<div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Breed
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Breed"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Location
                </label>
                <div className="col-sm-10">
                  <div className="row mb-3">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Street Address"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                      />
                    </div>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="gender" className="col-sm-2 col-form-label">
                  Sex
                </label>
                <div className="col-sm-10">
                  <select className="custom-select">
                    <option>Select Sex</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
							<div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                  />
                </div>
              </div>
							<div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Upload a Photo
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="photo"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
