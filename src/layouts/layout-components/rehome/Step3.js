import React, { Component } from 'react';
import addSubmission from '../../../firebase/database/submissions';
import { Auth } from "../../../firebase";

export default class Step4 extends Component {
	constructor(props) {
		super(props);

    this.state = {
			savedToCloud: props.getStore().savedToCloud,
    };
  }
	
	async handleSubmit(){
		//let store = this.props.getStore();
		let signedIn = await Auth.signedInCurrentUser();
		console.log('Are we signed in? ', signedIn);
		//signedIn ? addSubmission(signedIn, store) : console.log('You must sign in');
		//console.log("here is the store", store);
	}
	
  render() {
		return (
      <div className="step step4 mt-5">
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <form id="Form" className="form-horizontal">
              <div className="form-group">
                <label className="col-md-12 control-label">
                  {this.state.savedToCloud ? (
                    <div>
                      <h1>Thanks!</h1>
                      <h2>Please press save to submit your request</h2>
                    </div>
                  ) : (
                    <div>
                      <h1>Thanks</h1>
                      <h2>Please press save to submit your request</h2>
                      <span
                        className="btn btn-info text-white"
                        onClick={() => {
                          this.handleSubmit();
                        }}
                      >
                        Save
                      </span>
                      {/* <span
                        className="btn btn-info text-white"
                        onClick={() => {
                          this.props.jumpToStep(4);
                        }}
                      >
                        Save
                      </span> */}
                    </div>
                  )}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
