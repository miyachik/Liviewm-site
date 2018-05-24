import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import common from './common-reducer'

export default combineReducers({
  common,
  router: routerReducer
})
