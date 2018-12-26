import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles } from './styles';

class Product extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <Image
                        source={iconImages.emptyJamJar}
                        style={styles.productImage}/>
                    <Text style={styles.productTitle}>Product 1</Text>
                    <Text style={styles.productInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat.
                    </Text>
                </View>
                <TouchableHighlight
                    onPress={() => alert('OK')}
                    underlayColor='#263852'
                    style={styles.button}>
                    <Text style={styles.buttonText}>All Products</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Product;