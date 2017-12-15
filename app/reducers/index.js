import { combineReducers } from 'redux'

import quotes from './quotes'
import poem from './poem'

const rootReducer = combineReducers({
    quotes, poem
})

export default rootReducer