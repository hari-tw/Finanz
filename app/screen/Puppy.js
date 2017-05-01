/**
 * Created by slash on 25/4/17.
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import * as updateActions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Home extends Component {

  constructor ({navigation}) {
    super()
  }

  componentWillMount () {
    console.log('inside componentWillMount')
  }

  componentDidMount () {
    console.log('inside componentDidMount')
  }

  componentWillUpdate () {
    console.log('inside componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('inside componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('inside componentWillUnmount')
  }

  render () {
    console.log('inside render')
    console.log(this.props);
    var {IncrementAction, DecrementAction, likes, dislikes} = this.props
    return (
      <View style={styles.container}>
        <Image source={require('../images/lab.jpg')} style={styles.image}/>

        <View style={{width: 300, flexDirection: 'row', justifyContent: 'space-between'}}>

          <TouchableOpacity onPress={IncrementAction} style={{padding: 10}}>
            <Image source={require('../images/like-icon.png')}/>
            <Text style={{padding: 11}}>{likes} </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={DecrementAction} style={{padding: 10}}>
            <Image source={require('../images/dislike-icon.png')}/>
            <Text style={{padding: 11}}>{dislikes} </Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("inside mapStateToProps");
  console.log(state);
  return {
    likes: state.likes,
    dislikes: state.dislikes
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(updateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.navigationOptions = {title: 'Puppy'}

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
})