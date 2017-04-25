/**
 * Created by slash on 25/4/17.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    StatusBar
} from 'react-native';

import StockCell from './../component/StockCell'

export default class Home extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{symbol: "APPL", share: "100", stockPrice: "143.64", change: "0.96"},
                {symbol: "GOOG", share: "100", stockPrice: "862.76", change: "2.32"},
                {symbol: "YHOO", share: "100", stockPrice: "48.15", change: "-0.34"},
                {symbol: "DOW J", share: "100", stockPrice: "20763.89", change: "-1.34"},
                {symbol: "S&P/ASX 200", share: "100", stockPrice: "5871.80", change: "0.30"},
                {symbol: "^AORD", share: "100", stockPrice: "5900.70", change: "-0.26"},
                {symbol: "FTSE 100", share: "100", stockPrice: "7283.20", change: "0.25"},
            ]),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="red"
                    barStyle="light-content"
                />
                <View style={styles.stocksBlock}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={stock => <StockCell stock={stock}/>}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingTop: 20
    }
});