/**
 * Created by slash on 1/5/17.
 */

export const LIKE = 'LIKE'
export const DISLIKE = 'DISLIKE'

export const IncrementAction = (id) => {
  return {
    type: LIKE,
    payload: {
      id: id,
      value: 1
    }
  }
}

export const DecrementAction = (id) => {
  return {
    type: DISLIKE,
    payload: {
      id: id,
      value: 1
    }
  }
}