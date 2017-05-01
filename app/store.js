/**
 * Created by slash on 2/5/17.
 */

import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

export default function () {

  let initialState = {
    selectedStock: null
  }

  return createStoreWithMiddleware(allReducers, initialState)
}