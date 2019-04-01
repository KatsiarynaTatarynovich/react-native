import React, { Component } from 'react';
import { Text, View, Image, ScrollView, ActivityIndicator, AsyncStorage, TouchableNativeFeedback } from 'react-native';
import { iconImages } from './../../images';

import { styles, buttonUnderlayColor} from './styles';

class Cart extends Component {
    state = {
        items: [],
        loaded: false
    };

    redirectToList = () => {
        this.props.navigation.navigate('ProductList', {
            screen: 'ProductList'
        });
    };

    componentDidMount() {
        this.loadCart();
    };

    loadCart = async () => {
        try {
            const token = await AsyncStorage.getItem('loginToken');
            const config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };
            const items = await fetch('http://ecsc00a02fb3.epam.com/rest/default/V1/carts/mine/items', config);

            this.setState({ loaded: true, items: JSON.parse(items._bodyInit) });
        } catch (e) {
            console.log(e);
        }
    };

    renderItem = (item) => (
        <View  key={item.item_id} style={styles.cardItem}>
            <View style={styles.cardInfo}>
                <Image
                    source={this.props.image}
                    style={styles.cardImage}/>
                <Text style={styles.cardTitle}>{item.name}</Text>
            </View>
        </View>
    );

    render() {
        const { loaded, items } = this.state;

        return (
            loaded
                ? <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.itemWrap}>
                            {items.map(item => this.renderItem(item))}
                            <TouchableNativeFeedback
                                onPress={this.redirectToList}
                                background={TouchableNativeFeedback.Ripple(buttonUnderlayColor)}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>All products</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </ScrollView>
                </View>
            : <View style={styles.container}><ActivityIndicator size="large" /></View>
        );
    }
}

Cart.defaultProps = {
    image: iconImages.jam,
};

export default Cart;