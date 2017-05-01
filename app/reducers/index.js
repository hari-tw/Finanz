/**
 * Created by slash on 2/5/17.
 */


const selectStockReducer = function selectStock (state, action) {

  switch (action.type) {
    case 'SELECT_STOCK':
      return {
        ...state,
        selectedStock: action.payload.stock
      }
    default:
      return state
  }
}

export default selectStockReducer