import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import { iconImages } from './../../images';

import { styles, markerColor } from './styles';

class Location extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.props.locationInfo.coordinate}
                >
                    <Marker.Animated
                        key={this.props.locationInfo.id}
                        identifier={this.props.locationInfo.id}
                        coordinate={this.props.locationInfo.coordinate}
                        pinColor={markerColor}
                        title={this.props.locationInfo.name}
                    />
                </MapView>
            </View>
        );
    }
}

export default Location;