/**
 * Created by slash on 1/5/17.
 */

import {
  applyMiddleware,
  compose
} from 'redux'
import {createLogger} from 'redux-logger'

let middlewares = []

if (__DEV__ === true) {
  middlewares.push(createLogger({}))
}

export default compose(
  applyMiddleware(...middlewares)
)