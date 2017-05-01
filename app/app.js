/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
} from 'react-native'

import { Provider } from 'react-redux'

import { StackNavigator } from 'react-navigation'

import Home from './screen/Home'
import Cat from './screen/Cat'
import Puppy from './screen/Puppy'
import CatAndPuppy from './screen/CatAndPuppy'

import configureStore from './store'
const store = configureStore()

const Root = StackNavigator({
  Home: {screen: Home},
  Puppy: {screen: Puppy},
  Cat: {screen: Cat},
  CatAndPuppy: {screen: CatAndPuppy},
})

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Finanz', () => App)
