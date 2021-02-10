import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
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

		this.sampleStore = {
			email: '',
			name: '',
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
	}

	render() {
		const steps =
			[
				{ name: 'Welcome', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
				{ name: 'About Your Pet', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> },
				{ name: 'Done', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => { this.updateStore(u) }} /> }
			]

		return (
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

		)
	}
}

export default formSteps;
