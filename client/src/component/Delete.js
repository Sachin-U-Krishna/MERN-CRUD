import React, { Component } from 'react'
import axios from 'axios'

export default class Delete extends Component {
	constructor(props) {
		super(props)

		this.state = {
			emp: [],
			select: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	componentDidMount() {
		fetch('http://localhost:9000/employee')
			.then((res) => res.json())
			.then((resp) => {
				this.setState({
					emp: resp
				})

			})
	}

	handleChange(e) {
		this.setState({select: e.target.value})
	}

	submitForm() {
		axios.delete('http://localhost:9000/employee/'+this.state.select)
		.then((res) => {
			console.log('Employee successfully deleted!')
			console.log(res)
		}).catch((error) => {
			console.log(error)
		})
	}

	render() {
		return (
			<div className='container'>
				<p className='text-center fw-bold fs-4 my-2 mb-1'>Delete</p>

				<form onSubmit={this.submitForm}>
					<div className="form-row align-items-center">
						<div className="col-12 my-1">
							<label className="mr-sm-2 sr-only" for="empId">Preference</label>
							<select value={this.state.select} onChange={this.handleChange} className="custom-select mr-sm-2 col-12" id="empId" required>
								<option disabled hidden value=''>Choose...</option>
								{this.state.emp.map((e) => {
									return (
										<option value={e._id}>{e.name}</option>
									)
								})}
							</select>
						</div>
						<div className="col-auto my-3 text-center">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
