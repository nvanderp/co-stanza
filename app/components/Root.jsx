import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './Header'
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
                <Header />
                <Switch>
                    <Route exact path='/' component={NewPoem} />
                    <Route exact path='/poems/:poemId' component={NewPoem} />
                    <Redirect to='/' />
                </Switch>
            </main>
        )
    }
}