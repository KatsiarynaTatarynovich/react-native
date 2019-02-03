import React, { Component } from 'react';

import { createDrawerNavigator } from 'react-navigation';

const DrawerNavigator = createDrawerNavigator({
        ProductList: {screen: ProductList}
    },
    {
        drawerWidth: 300,
    }
);

const AppContainer = createAppContainer(AppNavigator);
const DrawerContainer = createAppContainer(DrawerNavigator);

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
                <DrawerContainer />
                { this.state.isConnected ?
                    <AppContainer /> :
                    <OfflineNotice />
                }
            </React.Fragment>
        );
    }
}