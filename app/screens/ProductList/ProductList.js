import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles } from './styles';

class ProductList extends Component {
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
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
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
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
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
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.golang}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 4</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.jam}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 5</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.salami}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 6</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.snitch}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 7</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.productItem}>
                    <View style={styles.productInfo}>
                        <Image
                            source={iconImages.tudorRose}
                            style={styles.productImage}/>
                        <Text style={styles.productTitle}>Product 8</Text>
                    </View>
                    <TouchableHighlight
                        onPress={() => alert('OK')}
                        underlayColor='transparent'
                        style={styles.button}>
                        <Image
                            source={iconImages.arrowRight}
                            style={styles.arrowRightIcon}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default ProductList;