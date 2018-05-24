import { applyMiddleware, createStore, Store } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from '../reducers'

export const history = createBrowserHistory()
const reactRouterReduxMiddleware = routerMiddleware(history);
const middlewareEnhancer = applyMiddleware(
  reactRouterReduxMiddleware,
);

const store: Store<any> = (process.env.ENV === "local") ?
  createStore(
    reducer,
    composeWithDevTools(middlewareEnhancer),
  )
  :
  createStore(reducer, middlewareEnhancer);

export default store
