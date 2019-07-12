import React from 'react'
import axios from 'axios'

const Todos = props => {
    return <table className="table table-bordered">
        <thead>
            <tr>
                <td>title</td>
                <td>description</td>
                <td>priority</td>
                <td>status</td>
            </tr>
        </thead>
        <tbody>{this.state.todos.map((d, i) => <Todo data={d} />)}</tbody>
    </table>
}

const Todo = props => {
    const { data } = props
    return <tr>
        <td>{data.title}</td>
        <td>{data.description}</td>
        <td>{data.priority}</td>
        <td>{data.status}</td>
    </tr>
}

class RoadMap extends React.Component {
    state = {
        todos: []
    }
    componentDidMount() {
        this.fetchTodo()
    }
    fetchTodo() {
        axios.get('http://localhost:4001/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    todos() {
        return <table className="table table-bordered">
            <thead>
                <tr>
                    <td>title</td>
                    <td>description</td>
                    <td>priority</td>
                    <td>status</td>
                </tr>
            </thead>
            <tbody>{this.state.todos.map((d, i) => <Todo data={d} />)}</tbody>
        </table>
    }
    render() {
        return this.todos()
    }
}
export default RoadMap


