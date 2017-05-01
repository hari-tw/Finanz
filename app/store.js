/**
 * Created by slash on 1/5/17.
 */

import { createStore, applyMiddleware } from 'redux'

import allReducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

export default function () {
  let defaultState = {likes: 0, dislikes: 0}
  return createStoreWithMiddleware(allReducers, defaultState)
}