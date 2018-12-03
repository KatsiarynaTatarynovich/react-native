import React, { PropTypes } from 'react';
import {
    StyleSheet, Text,
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Button,
    View,
} from 'native-base';

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

const Login = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Friday's shop</Text>
            <Text>Welcome to React Native 2</Text>
            <Text>Welcome to React Native 3</Text>
        </View>
    );
};

export default Login;