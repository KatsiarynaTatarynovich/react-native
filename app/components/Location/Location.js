import React, { Component } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Communications from 'react-native-communications';

import { styles, markerColor } from './styles';

class Location extends Component {
    call = () => {
        Communications.phonecall(this.props.locationInfo.phoneProvider, true);
    };

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
                        onPress={this.call}
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