import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#76cdd8',
    },
    title: {
        fontSize: 30,
        color: '#fff',
    },
});

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Friday's shop</Text>
            </View>
        );
    }
}

export default Index;