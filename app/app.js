/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import Home from './screen/Home';
import Cat from './screen/Cat';
import Puppy from './screen/Puppy';
import CatAndPuppy from './screen/CatAndPuppy';

const app = StackNavigator({
	Home: {screen: Home},
	Puppy: {screen: Puppy},
	Cat: {screen: Cat},
	CatAndPuppy: {screen: CatAndPuppy},
});

export default app;

AppRegistry.registerComponent('Finanz', () => app);
