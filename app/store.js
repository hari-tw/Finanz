/**
 * Created by slash on 1/5/17.
 */

import { createStore, applyMiddleware } from 'redux'

import enhancers from './enhancer'

import allReducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

export default function () {
  let defaultState = {
    puppy: {likes: 0, dislikes: 0},
    cat: {likes: 0, dislikes: 0},
    catAndPuppy: {likes: 0, dislikes: 0}
  }
  return createStoreWithMiddleware(allReducers, defaultState, enhancers)
}