import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from './list'
import Form from './form'
import Error404 from 'pages/Error404'

const App = props => {
    const { match } = props
    return <React.Fragment>
        <Switch>
            <Route exact path={match.url} component={List} />
            <Route exact path={`${match.url}/form`} component={Form} />
            <Route path={`${match.url}/form/:id`} component={Form} />
            <Route component={Error404} />
        </Switch>
    </React.Fragment>
}

export default App
