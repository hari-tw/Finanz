/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
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
                <Image
                    source={require('./images/lab.jpg')} style={styles.image}
                />
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
    image:{
        height: 300,
        width: 300,
        borderColor: '#000000',
        borderWidth: 2
    }
});

AppRegistry.registerComponent('Finanz', () => Finanz);
