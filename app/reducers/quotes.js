import axios from 'axios'

const GET_QUOTES = 'GET_QUOTES'

export function getQuotes(quotes) {
    const action = { type: GET_QUOTES, quotes }
    return action
}

export function fetchQuotes() {
    return function thunk(dispatch) {
        return axios.get('/api/quotes')
            .then(res => res.data)
            .then(quotes => {
                const action = getQuotes(quotes)
                dispatch(action)
            })
    }
}

export default function reducer(state = [], action) {
    switch(action.type) {
        case GET_QUOTES:
            return action.quotes
        default: return state
    }
}