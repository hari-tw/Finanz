/**
 * Created by slash on 25/4/17.
 */

import React from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  selected: {
    backgroundColor: '#202020',
  },
  symbol: {
    flex: 3,
  },
  symbolText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  price: {
    flex: 2,
  },
  priceText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  changeRed: {
    backgroundColor: '#FC3D39',
    flex: 2,
    padding: 5,
    borderRadius: 3,
  },
  changeGreen: {
    backgroundColor: '#53D769',
    flex: 2,
    padding: 5,
    borderRadius: 3,
  },
  changeText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
})

export default class StockCell extends React.Component {

  render () {

    var {stock, selectStock, selectedStock} = this.props

    console.log("inside stockcell render");
    console.log(this.props);

    if (selectedStock != null) {
      console.log(selectedStock.symbol, stock.symbol, selectedStock.symbol === stock.symbol)
    }
    return (
      <TouchableHighlight
        style={[selectedStock && selectedStock.symbol === stock.symbol ? styles.selected : null]}
        onPress={() => selectStock(stock)} underlayColor="#202020">
        <View
          style={[styles.container, selectedStock && selectedStock.symbol === stock.symbol ? styles.selected : null]}
        >
          <View style={styles.symbol}>
            <Text style={styles.symbolText}>
              {stock.symbol}
            </Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.priceText}>
              {stock.stockPrice}
            </Text>
          </View>

          <View style={[stock.change >= 0 ? styles.changeGreen : styles.changeRed]}>
            <Text style={styles.changeText}>
              {stock.change}%
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

StockCell.propTypes = {
  stock: React.PropTypes.shape({
    symbol: React.PropTypes.string,
  }),
}

StockCell.defaultProps = {
  stock: {},
}
