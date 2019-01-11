import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

class ProductListItem extends Component {
    redirect = () => {
        this.props.redirectToItem(this.props.title, this.props.id, this.props.description);
    };

    render() {
        return (
            <View style={styles.productItem}>
                <View style={styles.productInfo}>
                    <Text style={styles.productId}>{this.props.id}</Text>
                    <Text style={styles.productTitle}>{this.props.title}</Text>
                </View>
                <TouchableHighlight
                    onPress={this.redirect}
                    underlayColor={buttonUnderlayColor}
                    style={styles.button}>
                    <Image
                        source={iconImages.arrowRight}
                        style={styles.arrowRightIcon}/>
                </TouchableHighlight>
            </View>
        );
    }
}

export default ProductListItem;