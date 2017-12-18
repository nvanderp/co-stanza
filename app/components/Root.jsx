import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import NavHeader from './NavHeader'
import QuotesList from './QuotesList'

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
                    <Route exact path="/quotes" component={QuotesList} />
                    <Redirect to="/quotes" />
                </Switch>
            </main>
        )
    }
}