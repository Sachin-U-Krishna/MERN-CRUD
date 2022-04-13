import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {

    constructor(props) {
        super(props)
        
        this.onNameChange = this.onNameChange.bind(this)
        this.onPositionChange = this.onPositionChange.bind(this)
        this.onSalaryChange = this.onSalaryChange.bind(this)

        this.submitForm = this.submitForm.bind(this)
        this.state = {
            name: '',
            position: '',
            salary: '',
            error: ''
        }

    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
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

    submitForm(e) {
        e.preventDefault()
        console.log(this.state)
        const dataPost = {
            name: this.state.name,
            position: this.state.position,
            salary: this.state.salary
        }
        axios.post('http://localhost:9000/employee', dataPost)
        .then(res => console.log(res.data))
        .catch((err) => {
            this.setState({error: err},()=>console.log('Error hai' + err))
        })
        this.setState({
            name: '',
            position: '',
            salary: ''
        })
    }

    componentDidUpdate() {
        console.log('updating............')
    }

    render() {
        return (
            <>  
                
                <div className='display-4 text-center'>App</div>
                <br />
                <div className='test-center'>
                    <div className='pe-5 ps-5'>
                        <form onSubmit={this.submitForm}>
                            <div className="form-group my-2">
                                <label htmlFor="name">Enter Name</label>
                                <input type="text" value={this.state.name} onChange={this.onNameChange} className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="position">Position</label>
                                <input type="text" onChange={this.onPositionChange} value={this.state.position} className="form-control" id="position" placeholder="Position" />
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="salary">Salary</label>
                                <input type="number" onChange={this.onSalaryChange} value={this.state.salary} className="form-control" id="salary" min='10000' />
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>
                </div>
                
            </>
        )
    }
}
