import React, {Component} from 'react';

import {createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './screens/Login';
import Product from './screens/Product';
import ProductList from './screens/ProductList';

const AppNavigator  = createStackNavigator({
    Login: {screen: Login},
    Product: {screen: Product},
    ProductList: {screen: ProductList}
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}