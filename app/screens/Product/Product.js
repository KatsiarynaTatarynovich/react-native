import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

class Product extends Component {
    redirect() {
        this.props.navigation.navigate('ProductList', {
            screen: 'ProductList'
        });
    }

    render() {
        const {navigation} = this.props,
            title = navigation.getParam('title'),
            image = navigation.getParam('image'),
            description = navigation.getParam('description');

        return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <Image
                        source={image}
                        style={styles.productImage}/>
                    <Text style={styles.productTitle}>{JSON.stringify(title)}</Text>
                    <Text style={styles.productInfo}>{JSON.stringify(description)}</Text>
                </View>
                <TouchableHighlight
                    onPress={this.redirect.bind(this)}
                    underlayColor={buttonUnderlayColor}
                    style={styles.button}>
                    <Text style={styles.buttonText}>All Products</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Product;