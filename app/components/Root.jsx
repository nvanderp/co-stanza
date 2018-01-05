import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './Header'
import NewPoem from './NewPoem'
import Poems from './Poems'
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
                    <Route exact path='/new-poem' component={NewPoem} />
                    <Route exact path='/poems' component={Poems} />
                    <Route exact path='/poems/:poemId' component={SavedPoem} />
                    <Redirect to='/new-poem' />
                </Switch>
            </main>
        )
    }
}