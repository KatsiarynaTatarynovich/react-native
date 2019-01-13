import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

class ProductListItem extends Component {
    redirect = () => {
        this.props.redirectToItem(this.props.title, this.props.id, this.props.description);
    };

    render() {
        console.log(this.props.description);
        return (
            <View style={styles.productItem}>
                <View style={styles.productInfo}>
                    <Image
                        source={this.props.image}
                        style={styles.productImage}/>
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

ProductListItem.defaultProps = {
    image: iconImages.emptyJamJar,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid, atque dicta dolores earum eius, eveniet expedita inventore mollitia natus nihil, numquam officiis possimus quae quo reiciendis saepe. Aliquam, necessitatibus.'
};

export default ProductListItem;