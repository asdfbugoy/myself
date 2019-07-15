import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Todos = props => {
    const { data } = props
    return <table className="table table-bordered">
        <thead>
            <tr>
                <td>title</td>
                <td>description</td>
                <td>priority</td>
                <td>status</td>
            </tr>
        </thead>
        <tbody>{data.map((d, i) => <Todo key={i} data={d} />)}</tbody>
    </table>
}

const Todo = props => {
    const { data } = props
    return <tr style={{ textDecoration: data.status ? 'line-through' : '' }}>
        <td>{data.title}</td>
        <td>{data.description}</td>
        <td>{data.priority}</td>
        <td>{data.status ? 'COMPLETED' : 'PENDING'}</td>
    </tr>
}

class List extends React.PureComponent {
    state = {
        todos: []
    }
    componentDidMount() {
        console.log(this.props)
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
    render() {
        return <React.Fragment>
            <div>
                <div className="row">
                    <div className="col"><div className="h1">List</div></div>
                    <div className="col-auto"><Link to={`${this.props.match.url}/create`} className="btn btn--primary">ADD</Link></div>
                </div>
                <Todos data={this.state.todos} />
            </div>
        </React.Fragment>
    }
}
export default List


