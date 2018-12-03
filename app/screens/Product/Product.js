import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles } from './styles';

class Product extends Component {
    state = {
        inputTextEmail: 'email',
        inputTextBox: 'Text box'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.emptyJamJar}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 1</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='#263852'
                        style={styles.button}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.flamingo}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 2</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='#263852'
                        style={styles.button}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.groceryBag}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 3</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='#263852'
                        style={styles.button}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default Product;