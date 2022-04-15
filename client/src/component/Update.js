import React, { Component } from 'react'
import axios from 'axios'

export default class Update extends Component {
	constructor(props) {
		super(props)

		this.state = {
			emp: [],
			select: '',
			salary: '',
			position: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.onPositionChange = this.onPositionChange.bind(this)
        this.onSalaryChange = this.onSalaryChange.bind(this)
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
		this.setState({ select: e.target.value })
	}

	onPositionChange(e) {
        this.setState({
            position: e.target.value
        })
    }

    onSalaryChange(e) {
        this.setState({
            salary: e.target.value
        })
    }

	submitForm() {
		const newData = {
			position: this.state.position,
			salary: this.state.salary
		}

		axios.put('http://localhost:9000/employee/' + this.state.select, newData)
		.then((res) => {
			console.log('Employee successfully updated!')
			console.log(res)
		}).catch((error) => {
			console.log(error)
		})
	}

	render() {
		return (
			<div className='container'>
				<p className='text-center fw-bold fs-4 my-2 mb-1'>Update</p>

				<form onSubmit={this.submitForm}>
					<div className="form-row align-items-center">
						<div className="col-12 my-1">
							<label className="mr-sm-2 sr-only" for="empId">Preference</label>
							<select value={this.state.select} onChange={this.handleChange} className="custom-select mr-sm-2 col-12 form-control" id="empId" required>
								<option disabled hidden value=''>Choose...</option>
								{this.state.emp.map((e) => {
									return (
										<option value={e._id}>{e.name}</option>
									)
								})}
							</select>
						</div>
						<div className="form-group my-2">
							<label htmlFor="position">Position</label>
							<input type="text" onChange={this.onPositionChange} value={this.state.position} className="form-control" id="position" placeholder="Position" />
						</div>
						<div className="form-group my-2">
							<label htmlFor="salary">Salary</label>
							<input type="number" onChange={this.onSalaryChange} value={this.state.salary} className="form-control" id="salary" min='10000' />
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
