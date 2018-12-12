import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation';

import Login from './screens/Login';
import Product from './screens/Product';
import ProductList from './screens/ProductList';

const App = createStackNavigator({
    Login: {screen: Login},
    Product: {screen: Product},
    ProductList: {screen: ProductList}
});

export default App;