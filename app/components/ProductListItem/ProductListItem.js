import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

class ProductListItem extends Component {
    redirect = () => {
        this.props.redirectToItem(this.props.title, this.props.locationInfo, this.props.description);
    };

    render() {
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