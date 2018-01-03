import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import NavHeader from './NavHeader'
import NewPoem from './NewPoem'

import store from '../store'
import { fetchQuotes } from '../reducers/quotes'

export default class Root extends Component {

    componentDidMount() {
        const quotesThunk = fetchQuotes()
        store.dispatch(quotesThunk)
    }

    render() {
        return (
            <main>
                <NavHeader />
                <Switch>
                    <Route exact path="/" component={NewPoem} />
                    <Redirect to="/" />
                </Switch>
            </main>
        )
    }
}