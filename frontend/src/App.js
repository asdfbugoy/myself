import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// import logo from './logo.svg';
// import './App.css';

import Home from 'pages/Home'
import RoadMap from 'pages/RoadMap'

const App = () => <BrowserRouter>
    <div className="header">
        <div className="container py-2">
            <div className="row">
                <div className="col-auto"><Link to="" className="h1"><i className="fa fa-chess"></i></Link></div>
                <div className="col">
                    <ul className="list-unstyled flex">
                        <li><Link to="roadmap" className="btn btn-link h-100">Roadmap</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/roadmap" component={RoadMap} />
    </div>
    <div className="footer">
        <div className="container">
            Footer
        </div>
    </div>
</BrowserRouter>


export default App
