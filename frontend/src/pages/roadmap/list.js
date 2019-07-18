import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Todos = props => {
    const { data, refresh } = props
    return <table className="table table-bordered m-0">
        <thead>
            <tr>
                <td>title</td>
                <td>description</td>
                <td>priority</td>
                <td>status</td>
                <td>action</td>
            </tr>
        </thead>
        <tbody>{data.map((d, i) => <Todo key={i} data={d} refresh={refresh} />)}</tbody>
    </table>
}

const Todo = props => {
    const { data, refresh } = props
    const onClickDelete = props => e => {
        e.preventDefault()

        axios.post('http://localhost:4001/todos/delete/' + data._id)
            .then(response => {
                refresh()
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    const onClickEdit = e => {
        e.preventDefault()

    }
    return <tr style={{ textDecoration: data.status ? 'line-through' : '' }}>
        <td>{data.title}</td>
        <td>{data.description}</td>
        <td>{data.priority}</td>
        <td>{data.status ? 'COMPLETED' : 'PENDING'}</td>
        <td width="115">
            <button className="btn btn--primary-inverted mr-2 is-icon d-none" onClick={onClickEdit}><i className="fa fa-edit"></i></button>
            <Link to={`/roadmap/form/${data._id}`} className="btn btn--primary-inverted mr-2 is-icon"><i className="fa fa-edit"></i></Link>
            <button className="btn btn--default is-icon" onClick={onClickDelete(data)}><i className="fa fa-trash"></i></button>
        </td>
    </tr>
}

class List extends React.PureComponent {
    state = {
        todos: []
    }
    componentDidMount() {
        this.fetchTodo()
    }
    fetchTodo = () => {
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
            <div className="row">
                <div className="col"><div className="h1">List</div></div>
                <div className="col-auto"><Link to={`${this.props.match.url}/form`} className="btn btn--primary">ADD</Link></div>
            </div>
            <div className="card card--container">
                <div className="body">
                    <Todos data={this.state.todos} refresh={this.fetchTodo} />
                </div>
            </div>
        </React.Fragment>
    }
}
export default List


