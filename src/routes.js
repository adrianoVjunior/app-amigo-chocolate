import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './Pages/Logon'
import Principal from './Pages/Principal'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/principal" exact component={Principal} />
            </Switch>
        </BrowserRouter>
    )
}