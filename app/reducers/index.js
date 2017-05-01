/**
 * Created by slash on 1/5/17.
 */

// import { combineReducers } from 'redux'

const likeDisLikeReducer = function likeDisLike (state, action) {
  console.log('inside reducer')
  console.log(action)

  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        likes: state.likes + action.payload
      }

    case 'DISLIKE':
      return {
        ...state,
        dislikes: state.dislikes + action.payload
      }
    default:
      return state
  }
}

//only when you have more than one reducer, need to combine all reducers
// const allReducers = combineReducers({likeDisLikeReducer})
export default likeDisLikeReducer
