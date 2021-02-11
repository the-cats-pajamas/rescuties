import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import getSubmissions from '../../../firebase/database/read-submissions'
import {
	Card,
	CardBody,
	CardTitle
} from 'reactstrap';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class formSteps extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.isAdmin = false;

		this.sampleStore = {
			email: '',
			name: '',
			phone: '',
			savedToCloud: false
		};
	}

	getStore() {
		return this.sampleStore;
	}

	updateStore(update) {
		this.sampleStore = {
			...this.sampleStore,
			...update,
		}
		console.log('this.sampleStore is now: ', this.sampleStore);
	}
	
	render() {
		console.log('this.sampleStore is now: ', this.sampleStore);
		const steps =
			[
				{ name: 'Welcome', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
				{ name: 'About Your Pet', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
				{ name: 'Done', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> }
			]

		return (
			(!this.isAdmin ? 
			<Card>
				<CardBody className="border-bottom">
					<CardTitle className="mb-0"><i className="mdi mdi-paw mr-2"></i>Rehome A Pet</CardTitle>
				</CardBody>
				<CardBody>
					<div className='example'>
						<div className='step-progress'>
							<StepZilla
								steps={steps}
								nextTextOnFinalActionStep={"Save"}
							/>
						</div>
					</div>
				</CardBody>
			</Card>
			: <div>
				<p>Welcome, admin! </p>
				{getSubmissions()}
			</div>
			)

		)
	}
}

export default formSteps;
