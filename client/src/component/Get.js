import React, { Component } from 'react'

export default class Get extends Component {
	constructor(props) {
		super(props)

		this.state = {
			emp: []
		}
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

	TableCmp() {
		return (
			<div className='container'>
				<table className="table table-secondary table-striped table-hover">
					<thead>
						<tr className='table-active table-dark'>
							<th scope="col">Name</th>
							<th scope="col">Position</th>
							<th scope="col">Salary</th>
						</tr>
					</thead>
					<tbody>
						{this.state.emp.map((e) => {
							return (
								<tr>
									<td> {e.name} </td>
									<td> {e.position} </td>
									<td> {e.salary} </td>
								</tr>
							)
						})}

					</tbody>
				</table>
			</div>
		)

	}

	render() {
		return (
			<>
				<p className='text-center fw-bold fs-4 my-2 mb-3'>Get</p>
				{this.TableCmp()}
			</>
		)
	}
}
