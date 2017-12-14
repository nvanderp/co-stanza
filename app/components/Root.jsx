import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import NavHeader from './NavHeader'
import QuotesList from './QuotesList'

import store from '../store'
import { fetchQuotes } from '../reducers/quotes'

// import store from '../store'      for component did mount

export default class Root extends Component {

    componentDidMount() {
        const quotesThunk = fetchQuotes()
        store.dispatch(quotesThunk)
    }

    render() {
        return (
            <div>
                <main>
                    <NavHeader />
                    <Switch>
                        <Route exact path="/quotes" component={QuotesList} />
                        <Redirect to="/quotes" />
                    </Switch>
                </main>
            </div>

        )
    }
}