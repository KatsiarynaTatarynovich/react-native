import React, { Component } from 'react';
import { NetInfo } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'

import Login from './screens/Login';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import ErrorNotice from './components/ErrorNotice';

const AppNavigator  = createStackNavigator({
    Login: {screen: Login},
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
        SplashScreen.hide();

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
            this.state.isConnected
                ? (
                    <AppContainer />
                )
                : (
                    <ErrorNotice
                        errorMessage="No Internet Connection :("
                    />
                )
        );
    }
}