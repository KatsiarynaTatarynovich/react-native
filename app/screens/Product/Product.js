import React, { Component } from 'react';
import { LayoutAnimation, Platform, UIManager, AsyncStorage } from 'react-native';
import PushNotification from 'react-native-push-notification';

import Location from '../../components/Location';
import ProductItem from '../../components/ProductItem';

const CustomLayoutAnimation = {
  duration: 300,
  create: {
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
  },
  update: {
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
  },
  delete: {
      duration: 200,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.linear,
  }
};

class Product extends Component {
    constructor(props) {
        super(props);

        const {navigation} = this.props;

        this.title = JSON.stringify(navigation.getParam('title'));
        this.locationInfo = navigation.getParam('locationInfo');
        this.description = JSON.stringify(navigation.getParam('description'));

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    state = {
        isMapVisible: false,
        loading: false
    };

    componentDidMount () {
        PushNotification.configure({
            onNotification: () => {
                this.props.navigation.navigate('Card', {
                    screen: 'ProductList'
                });
            }
        });
    }

    redirectToList = () => {
        this.props.navigation.navigate('ProductList', {
            screen: 'ProductList'
        });
    };

    redirectToCart = () => {
        this.props.navigation.navigate('Card', {
            screen: 'ProductList'
        });
    };

    openMap = () => {
        LayoutAnimation.configureNext(CustomLayoutAnimation);

        this.setState({
            isMapVisible: true
        });
    };

    addToCart = (token, sku) => {
        return fetch('http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(quote => {
                const id = quote._bodyText.slice(1, -1);
                const data = {
                    "cartItem": {
                        "sku": sku.slice(1, -1),
                        "qty": 1,
                        "quote_id": id
                    }
                };

                return fetch('http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine/items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(data)
                })
            });
    };

    createCard = async () => {
        this.setState({ loading: true });

        try {
            const token = await AsyncStorage.getItem('loginToken');
            await this.addToCart(token, this.title);
            const items = await fetch('http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine/items', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            this.setState({ loading: false });
            PushNotification.localNotification({
                title: `Product ${this.title} added to cart`,
                message: `New product in cart. Total amount: ${JSON.parse(items._bodyText).length}`,
                smallIcon: 'smallIcon',
                largeIcon: 'largeIcon'
            });
        } catch (error) {
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <React.Fragment>
                { this.state.isMapVisible ?
                    <Location
                        locationInfo={this.locationInfo}
                    /> :
                    <ProductItem
                        redirect={this.redirectToList}
                        openMap={this.openMap}
                        createCard={this.createCard}
                        redirectToCart={this.redirectToCart}
                        title={this.title}
                        description={this.description}
                    />
                }
            </React.Fragment>
        );
    }
}

export default Product;