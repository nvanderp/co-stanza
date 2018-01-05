import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './Header'
import NewPoem from './NewPoem'
import SavedPoem from './SavedPoem'

import store from '../store'
import { fetchQuotes } from '../reducers/quotes'
import { fetchPoems } from '../reducers/poems'

export default class Root extends Component {

    componentDidMount() {
        const quotesThunk = fetchQuotes()
        store.dispatch(quotesThunk)
        const poemsThunk = fetchPoems()
        store.dispatch(poemsThunk)
    }

    render() {
        return (
            <main>
                <Header />
                <Switch>
                    <Route exact path='/' component={NewPoem} />
                    <Route exact path='/poems/:poemId' component={SavedPoem} />
                    <Redirect to='/' />
                </Switch>
            </main>
        )
    }
}