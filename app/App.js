import React, { Component } from 'react';
import { NetInfo } from 'react-native';

import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Login from './screens/Login';
import Product from './screens/Product';
import ProductList from './screens/ProductList';
import OfflineNotice from './features/OfflineNotice';

const Stack = {
    ProductList: {screen: ProductList},
    Product: {screen: Product},
};
const DrawerNavigator = {
    ProductListStack: {
        name: 'ProductListStack',
        screen: createStackNavigator(Stack, { initialRouteName: 'ProductList' })
    },
    ProductStack: {
        name: 'ProductStack',
        screen: createStackNavigator(Stack, { initialRouteName: 'Product' })
    }
};
const RootNavigator =
    createStackNavigator({
            drawer: {
                name: 'drawer',
                screen: createDrawerNavigator(
                    DrawerNavigator,
                ),
            },
            ...Stack
        },
        {
            headerMode: 'none',
            navigationOptions: {
                headerVisible: false,
            }
        }
    );

const AppContainer = createAppContainer(RootNavigator);

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