import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

const data = [
    {
        key: 1,
        title: 'Product 1',
        image: iconImages.emptyJamJar,
        description: 'Product 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    },
    {
        key: 2,
        title: 'Product 2',
        image: iconImages.flamingo,
        description: 'Product 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    },
    {
        key: 3,
        title: 'Product 3',
        image: iconImages.groceryBag,
        description: 'Product 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    },
    {
        key: 4,
        title: 'Product 4',
        image: iconImages.golang,
        description: 'Product 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    },
    {
        key: 5,
        title: 'Product 5',
        image: iconImages.jam,
        description: 'Product 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    },
    {
        key: 6,
        title: 'Product 6',
        image: iconImages.salami,
        description: 'Product 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    },
    {
        key: 7,
        title: 'Product 7',
        image: iconImages.snitch,
        description: 'Product 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    },
    {
        key: 8,
        title: 'Product 8',
        image: iconImages.tudorRose,
        description: 'Product 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.'
    }
];

class ProductList extends Component {
    redirect(title, image, description) {
        this.props.navigation.navigate('Product', {
            title,
            image,
            description
        });
    }

    renderItems = () => {
        return data.map(({key, title, image, description}) => (
            <View style={styles.productItem}
                    key={key}>
                <View style={styles.productInfo}>
                    <Image
                        source={image}
                        style={styles.productImage}/>
                    <Text style={styles.productTitle}>{title}</Text>
                </View>
                <TouchableHighlight
                    onPress={this.redirect.bind(this, title, image, description)}
                    underlayColor={buttonUnderlayColor}
                    style={styles.button}>
                    <Image
                        source={iconImages.arrowRight}
                        style={styles.arrowRightIcon}/>
                </TouchableHighlight>
            </View>
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>
                {this.renderItems()}
            </View>
        );
    }
}

export default ProductList;