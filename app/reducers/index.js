/**
 * Created by slash on 1/5/17.
 */

// import { combineReducers } from 'redux'

const likeDisLikeReducer = function likeDisLike (state, action) {
  console.log('inside reducer')
  console.log(action)

  switch (action.type) {
    case 'LIKE':
      console.log(state)
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          likes: state[action.payload.id].likes + action.payload.value
        }
      }
    case 'DISLIKE':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          dislikes: state[action.payload.id].dislikes + action.payload.value
        }
      }
    default:
      return state
  }
}

//only when you have more than one reducer, need to combine all reducers
// const allReducers = combineReducers({likeDisLikeReducer})
export default likeDisLikeReducer
