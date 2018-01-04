import { combineReducers } from 'redux'

import quotes from './quotes'
import poems from './poems'

const rootReducer = combineReducers({
    quotes,
    poems
})

export default rootReducer