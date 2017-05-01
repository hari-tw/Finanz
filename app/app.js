/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
} from 'react-native'

import Home from './screen/Home'

import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

export default class WrappedHome extends Component {

  render () {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Finanz', () => WrappedHome)
