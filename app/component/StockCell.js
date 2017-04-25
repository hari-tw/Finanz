/**
 * Created by slash on 25/4/17.
 */

import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
} from 'react-native';

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
});

export default class StockCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStock: null
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    changeSelectedStock(stock) {
        console.log('Selected Stock:', stock);
        this.setState({
            selectedStock: stock,
        });
    }


    render() {
        // console.log(this.state.selectedStock.symbol, this.props.stock.symbol, this.state.selectedStock.symbol === this.props.stock.symbol);
        return (
            <TouchableHighlight
                style={[this.state.selectedStock && this.state.selectedStock.symbol === this.props.stock.symbol ? styles.selected : null]}
                onPress={() => this.changeSelectedStock(this.props.stock)} underlayColor="#202020">
                <View
                    style={[styles.container, this.state.selectedStock && this.state.selectedStock.symbol === this.props.stock.symbol ? styles.selected : null]}
                >
                    <View style={styles.symbol}>
                        <Text style={styles.symbolText}>
                            {this.props.stock.symbol}
                        </Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>
                            {this.props.stock.stockPrice}
                        </Text>
                    </View>

                    <View style={[this.props.stock.change >= 0 ? styles.changeGreen : styles.changeRed]}>
                        <Text style={styles.changeText}>
                            {this.props.stock.change}%
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

StockCell.propTypes = {
    stock: React.PropTypes.shape({
        symbol: React.PropTypes.string,
    }),
};

StockCell.defaultProps = {
    stock: {},
};
