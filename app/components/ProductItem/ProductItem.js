import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor, buttonMapUnderlayColor } from './styles';

class Product extends Component {
    redirect = () => {
        this.props.redirect();
    };

    openMap = () => {
        this.props.openMap();
    };

    createCard = () => {
        this.props.createCard();
    };

    redirectToCart = () => {
        this.props.redirectToCart();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <View style={styles.titleWrap}>
                        <TouchableHighlight
                            onPress={this.openMap}
                            underlayColor={buttonMapUnderlayColor}
                            style={styles.buttonMap}>
                            <Image
                                source={iconImages.map}
                                style={styles.productImage}/>
                        </TouchableHighlight>
                        <Text style={styles.productTitle}>{this.props.title}</Text>
                    </View>
                    <Text style={styles.productInfo}>{this.props.description}</Text>
                </View>
                <TouchableNativeFeedback
                    onPress={this.createCard}
                    background={TouchableNativeFeedback.Ripple(buttonUnderlayColor)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Create card</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={this.redirectToCart}
                    background={TouchableNativeFeedback.Ripple(buttonUnderlayColor)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Go to cards</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableHighlight
                    onPress={this.redirect}
                    underlayColor={buttonUnderlayColor}
                    style={styles.button}>
                    <Text style={styles.buttonText}>All Products</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Product;