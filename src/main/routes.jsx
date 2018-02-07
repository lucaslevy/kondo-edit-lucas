import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router'

//import Dashboard from '../dashboard/dashboard'
//import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from '../main/authOrApp'

export default props => (
    <Router history={browserHistory}>
        <IndexRoute component={AuthOrApp} />
        
        <Route path='/test/' component={AuthOrApp} />
        
        <Redirect from='*' to='/' />
    </Router>
)