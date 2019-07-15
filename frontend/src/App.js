import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

// import logo from './logo.svg';
// import './App.css';

import Home from 'pages/Home'
import RoadMap from 'pages/roadmap'
import Error404 from 'pages/Error404'

const App = () => <BrowserRouter>
    <div className="header">
        <div className="container py-2">
            <div className="row">
                <div className="col-auto"><Link to="" className="h1"><i className="fa fa-chess"></i></Link></div>
                <div className="col">
                    <ul className="list-unstyled flex">
                        <li><Link to="/roadmap" className="btn btn-link h-100">Roadmap</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="main container py-5">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/roadmap" component={RoadMap} />
            <Route component={Error404} />
        </Switch>
    </div>

    <div className="footer py-4">
        <div className="container">
            <div className="row">
                <div className="col">Francis Samande Declaro::MySelf</div>
                <div className="col-auto">francissd@ncs.com.sg</div>
            </div>
        </div>
    </div>
</BrowserRouter>


export default App
