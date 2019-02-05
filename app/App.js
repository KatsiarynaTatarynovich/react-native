import React, { Component } from 'react';
import { NetInfo } from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './screens/Login';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import OfflineNotice from './features/OfflineNotice';

const AppNavigator  = createStackNavigator({
    ProductList: {screen: ProductList},
    Product: {screen: Product},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    state = {
        isConnected: true
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = isConnected => {
        this.setState({ isConnected });
    }

    render() {
        return (
            <React.Fragment>
                { this.state.isConnected ?
                    <AppContainer /> :
                    <OfflineNotice />
                }
            </React.Fragment>
        );
    }
}