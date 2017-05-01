/**
 * Created by slash on 1/5/17.
 */

export const LIKE = 'LIKE'
export const DISLIKE = 'DISLIKE'

export const IncrementAction = () => {
  return {
    type: LIKE,
    payload: 1
  }
}

export const DecrementAction = () => {
  return {
    type: DISLIKE,
    payload: 1
  }
}