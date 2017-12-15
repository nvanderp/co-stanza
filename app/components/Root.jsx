import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import NavHeader from './NavHeader'
import QuotesList from './QuotesList'

import store from '../store'
import { fetchQuotes } from '../reducers/quotes'
import { fetchPoem } from '../reducers/poem'

export default class Root extends Component {

    componentDidMount() {
        const quotesThunk = fetchQuotes()
        store.dispatch(quotesThunk)
        const poemThunk = fetchPoem()
        store.dispatch(poemThunk)
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