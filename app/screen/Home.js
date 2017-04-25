/**
 * Created by slash on 25/4/17.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            likes: 0,
            dislikes: 0
        }

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

    increaseLikeCount() {
        this.setState({likes: this.state.likes + 1});
        console.log("liked by : ", this.state.likes);
    }

    increaseDislikeCount() {
        this.setState({dislikes: this.state.dislikes + 1});
        console.log("liked by : ", this.state.dislikes);
    }

    render() {
        console.log("inside render")
        return (
            <View style={styles.container}>
                <Image source={require('../images/lab.jpg')} style={styles.image}/>

                <View style={{width: 300, flexDirection: 'row', justifyContent: 'space-between'}}>

                    <TouchableOpacity onPress={() => this.increaseLikeCount()} style={{padding: 10}}>
                        <Image source={require('../images/like-icon.png')}/>
                        <Text style={{padding: 11}}>{this.state.likes} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.increaseDislikeCount()} style={{padding: 10}}>
                        <Image source={require('../images/dislike-icon.png')}/>
                        <Text style={{padding: 11}}>{this.state.dislikes} </Text>
                    </TouchableOpacity>

                </View>
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
    image: {
        height: 300,
        width: 300,
        borderColor: '#000000',
        borderWidth: 2
    }
});