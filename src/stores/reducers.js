import {combineReducers} from 'redux'

import clientesReducer from './clientesReducer.js'

const rootReducer = combineReducers({
    dashboard: ()=> ({}),
    clientes: clientesReducer
})

export default rootReducer;