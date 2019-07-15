import React from 'react'
import { Route, Switch } from 'react-router-dom'

import List from './list'
import Create from './create'
import Error404 from 'pages/Error404'

const App = props => {
    const { match } = props
    return <React.Fragment>
        <Switch>
            <Route exact path={match.url} component={List} />
            <Route path={`${match.url}/create`} component={Create} />
            <Route component={Error404} />
        </Switch>
    </React.Fragment>
}

export default App
