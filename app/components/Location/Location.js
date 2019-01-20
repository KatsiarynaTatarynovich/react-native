import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

class Location extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78925,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                />
            </View>
        );
    }
}

export default Location;