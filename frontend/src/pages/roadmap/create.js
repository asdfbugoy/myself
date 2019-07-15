import React from 'react'
import axios from 'axios'

class Create extends React.PureComponent {
    state = {
        title: '',
        description: '',
        priority: 'Low',
        status: false
    }
    onChangeTitle = e => {
        this.setState(({ title: e.target.value }))
    }
    onChangeDescription = e => {
        this.setState(({ description: e.target.value }))
    }
    onChangePriority = e => {
        this.setState(({ priority: e.target.value }))
    }
    onSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:4001/todos/create', this.state)
            .then(response => {
                this.setState(({
                    title: '',
                    description: '',
                    priority: 'Low',
                    status: false
                }))
                this.props.history.push('/roadmap')
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return <form onSubmit={this.onSubmit}>
            <div className="h1">Add Roadmap</div>
            <div className="form-group">
                <label htmlFor="">Title:</label>
                <input type="text" className="form-control" onChange={this.onChangeTitle} />
            </div>
            <div className="form-group">
                <label htmlFor="">Description:</label>
                <input type="text" className="form-control" onChange={this.onChangeDescription} />
            </div>
            <div className="form-group row">
                <div className="col-auto">
                    <input name="priority" type="radio" className="form-check-input" onChange={this.onChangePriority} value="Low" checked={this.state.priority === 'Low'} />
                    <label htmlFor="" className="from-check-label1">Low</label>
                </div>
                <div className="col-auto">
                    <input name="priority" type="radio" className="form-check-input" onChange={this.onChangePriority} value="Medium" checked={this.state.priority === 'Medium'} />
                    <label htmlFor="" className="from-check-label1">Medium</label>
                </div>
                <div className="col-auto">
                    <input name="priority" type="radio" className="form-check-input" onChange={this.onChangePriority} value="High" checked={this.state.priority === 'High'} />
                    <label htmlFor="" className="from-check-label1">High</label>
                </div>
            </div>
            <button type="submit" className="btn btn--primary">Submit</button>
        </form>
    }
}
export default Create