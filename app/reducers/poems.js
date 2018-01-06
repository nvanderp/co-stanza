import axios from 'axios'

const GET_POEM = 'GET_POEM'
const GET_POEMS = 'GET_POEMS'
const DESTROY_POEM = 'DESTROY_POEM'

export function getPoem(poem) {
    const action = { type: GET_POEM, poem }
    return action
}

export function getPoems(poems) {
    const action = { type: GET_POEMS, poems }
    return action
}

export function destroyPoem(poem) {
    const action = { type: DESTROY_POEM, poem }
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

export function deletePoem(poem, history) {
    return function thunk(dispatch) {
        return axios.delete(`/api/poems/${poem.id}`)
            .then(() => {
                const action = destroyPoem(poem)
                dispatch(action)
                history.push(`/poems`)
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
        case DESTROY_POEM:
            return newState.filter(poem => poem.id !== action.poem.id)
        default: 
            return state
    }
}