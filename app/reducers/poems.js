import axios from 'axios'

const GET_POEM = 'GET_POEM'
const GET_POEMS = 'GET_POEMS'

export function getPoem(poem) {
    const action = { type: GET_POEM, poem }
    return action
}

export function getPoems(poems) {
    const action = { type: GET_POEMS, poems }
    return action
}

export function fetchPoems() {
    return function thunk(dispatch) {
        return axios.get('/api/poems')
            .then(res => res.data)
            .then(poems => {
                const action = getPoems(poems)
                dispatch(action)
            })
    }
}

export function postPoem(poem, history) {
    return function thunk(dispatch) {
        return axios.post('/api/poems', poem)
            .then(res => res.data)
            .then(newPoem => {
                const action = getPoem(newPoem)
                dispatch(action)
                history.push(`/poems/${newPoem.id}`)
            })
    }
}

export default function reducer(state = [], action) {
    let newState = Object.assign([], state)
    switch(action.type) {
        case GET_POEM:
            return newState.concat(action.poem)
        case GET_POEMS:
            return action.poems
        default: return state
    }
}