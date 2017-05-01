/**
 * Created by slash on 26/4/17.
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

class CatAndPuppy extends Component {

  constructor ({navigation}) {
    super()
  }

  render () {
    var {IncrementAction, DecrementAction, likes, dislikes, id} = this.props

    return (
      <View style={styles.container}>
        <Image source={require('../images/lab-and-cat.jpg')} style={styles.image}/>

        <View style={{width: 300, flexDirection: 'row', justifyContent: 'space-between'}}>

          <TouchableOpacity onPress={() => IncrementAction(id)} style={{padding: 10}}>
            <Image source={require('../images/like-icon.png')}/>
            <Text style={{padding: 11}}>{likes} </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => DecrementAction(id)} style={{padding: 10}}>
            <Image source={require('../images/dislike-icon.png')}/>
            <Text style={{padding: 11}}>{dislikes} </Text>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

CatAndPuppy.navigationOptions = {title: 'Cat & Puppy'}

const mapStateToProps = (state) => {
  return {
    id: 'catAndPuppy',
    likes: state.catAndPuppy.likes,
    dislikes: state.catAndPuppy.dislikes
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(updateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatAndPuppy)

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