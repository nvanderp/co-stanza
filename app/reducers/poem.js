import axios from 'axios'

const POEM_MADE = 'POEM_MADE'

export function poemMade(poem) {
    const action = { type: POEM_MADE, poem }
    return action
}

export function fetchPoem() {
    return function thunk(dispatch) {
        const random = Math.floor(Math.random() * 2)
        return axios.get(`/api/quotes/${random}`)
            .then(res => res.data)
            .then(poem => {
                const action = poemMade(poem)
                dispatch(action)
            })
    }
}

export default function reducer(state = {}, action) {
    switch(action.type) {
        case POEM_MADE:
            return action.poem
        default: return state
    }
}