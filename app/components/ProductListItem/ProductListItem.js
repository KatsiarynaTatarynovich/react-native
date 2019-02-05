import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Animated, Easing  } from 'react-native';

import { iconImages } from './../../images';

import { styles } from './styles';

class ProductListItem extends Component {
    state = {
        scaleAnimValue: new Animated.Value(0),
    };

    handlePressIn = () => {
        Animated.timing(this.state.scaleAnimValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    };

    handlePressOut = () => {
        Animated.timing(this.state.scaleAnimValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    };

    redirect = () => {
        this.props.redirectToItem(this.props.title, this.props.locationInfo, this.props.description);
    };

    render() {
        const arrowRightScale = this.state.scaleAnimValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.1, 1.2]
        });

        let transformStyle = { transform: [{ scale: arrowRightScale }] };

        return (
            <View style={styles.productItem}>
                <View style={styles.productInfo}>
                    <Image
                        source={this.props.image}
                        style={styles.productImage}/>
                    <Text style={styles.productTitle}>{this.props.title}</Text>
                </View>
                <TouchableWithoutFeedback
                    onPress={this.redirect}
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                    style={styles.button}>
                    <Animated.Image
                        source={iconImages.arrowRight}
                        style={[styles.arrowRightIcon, transformStyle]}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

ProductListItem.defaultProps = {
    image: iconImages.emptyJamJar,
    locationInfo: {
        id: '1',
        name: 'Location Name',
        phoneProvider: '0123456789',
        coordinate: {
            latitude: 37.78925,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
        }
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid, atque dicta dolores earum eius, eveniet expedita inventore mollitia natus nihil, numquam officiis possimus quae quo reiciendis saepe. Aliquam, necessitatibus.'
};

export default ProductListItem;