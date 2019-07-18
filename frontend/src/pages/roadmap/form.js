import React from 'react'
import axios from 'axios'

class Form extends React.PureComponent {
    state = {
        title: '',
        description: '',
        priority: 'Low',
        status: false
    }
    componentDidMount() {
        if (this.props.match.params.id) {
            this.fetch()
        }
    }
    fetch = () => {
        axios.get('http://localhost:4001/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    priority: response.data.priority,
                    status: response.data.status
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    add = () => {
        axios.post('http://localhost:4001/todos/add', this.state)
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
    update = () => {
        axios.post('http://localhost:4001/todos/update/' + this.props.match.params.id, this.state)
            .then(response => {
                this.props.history.push('/roadmap')
            })
            .catch(function (error) {
                console.log(error);
            })
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
    onChangeStatus = e => {
        this.setState(prevState => ({ status: !prevState.status }))
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.match.params.id ? this.update() : this.add()
    }
    render() {
        return <div className="card card--container">
            <div className="body">
                <form onSubmit={this.onSubmit}>
                    <div className="h1">Add Roadmap</div>
                    <div className="form-group">
                        <label htmlFor="">Title:</label>
                        <input type="text" className="form-control" onChange={this.onChangeTitle} value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description:</label>
                        <input type="text" className="form-control" onChange={this.onChangeDescription} value={this.state.description} />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <input name="priority" type="radio" className="mr-2" onChange={this.onChangePriority} value="Low" checked={this.state.priority === 'Low'} />
                            <label htmlFor="" className="">Low</label>
                        </div>
                        <div className="col-auto">
                            <input name="priority" type="radio" className="mr-2" onChange={this.onChangePriority} value="Medium" checked={this.state.priority === 'Medium'} />
                            <label htmlFor="" className="">Medium</label>
                        </div>
                        <div className="col-auto">
                            <input name="priority" type="radio" className="mr-2" onChange={this.onChangePriority} value="High" checked={this.state.priority === 'High'} />
                            <label htmlFor="" className="">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Completed?:</label>
                        <input name="status" type="checkbox" className="ml-2" onChange={this.onChangeStatus} checked={this.state.status} />
                    </div>
                    <button type="submit" className="btn btn--primary">Submit</button>
                </form>
            </div>
        </div>
    }
}
export default Form