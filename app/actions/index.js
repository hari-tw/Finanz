/**
 * Created by slash on 2/5/17.
 */

export const SELECT_STOCK = 'SELECT_STOCK'

export const selectStock = (stock) => {
  return {
    type: SELECT_STOCK,
    payload: {
      stock: stock
    }
  }
}