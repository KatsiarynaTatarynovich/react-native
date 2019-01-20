import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor, buttonMapUnderlayColor } from './styles';

import Location from '../../components/Location';

class Product extends Component {
    state = {
        isMapVisible: false
    };

    redirect() {
        this.props.navigation.navigate('ProductList', {
            screen: 'ProductList'
        });
    }

    openMap = () => {
        this.setState({
            isMapVisible: true
        })
    };

    render() {
        const {navigation} = this.props,
            title = navigation.getParam('title'),
            location = navigation.getParam('location'),
            description = navigation.getParam('description');

        return (
            <React.Fragment>
            { this.state.isMapVisible ? <Location/> : <View style={styles.container}>
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
                        <Text style={styles.productTitle}>{JSON.stringify(title)}</Text>
                    </View>
                    <Text style={styles.productInfo}>{JSON.stringify(description)}</Text>
                </View>
                <TouchableHighlight
                    onPress={this.redirect.bind(this)}
                    underlayColor={buttonUnderlayColor}
                    style={styles.button}>
                    <Text style={styles.buttonText}>All Products</Text>
                </TouchableHighlight>
            </View>}
            </React.Fragment>
        );
    }
}

export default Product;