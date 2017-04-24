/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Finanz extends Component {

    constructor() {
        super()
        this.state = {}

        console.log("inside constructor")
    }

    componentWillMount() {
        console.log("inside componentWillMount")
    }

    componentDidMount() {
        console.log("inside componentDidMount")
    }

    componentWillUpdate() {
        console.log("inside componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("inside componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("inside componentWillUnmount")
    }

    render() {
        console.log("inside render")
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native Bootcamp!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Finanz', () => Finanz);
