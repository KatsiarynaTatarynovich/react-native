import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles } from './styles';

class Login extends Component {
    state = {
        inputTextEmail: 'email',
        inputTextBox: 'Text box'
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={iconImages.cookieMonster}
                    style={styles.image}/>
                <Text style={styles.title}>Friday's shop</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inputTextEmail) => this.setState({inputTextEmail})}
                    value={this.state.inputTextEmail}
                    />
                <TextInput
                    style={[styles.input, styles.inputLast]}
                    onChangeText={(inputTextBox) => this.setState({inputTextBox})}
                    value={this.state.inputTextBox}
                    />
                <TouchableHighlight
                    onPress={() => alert('OK')}
                    underlayColor='#263852'
                    style={styles.button}>
                    <Text style={styles.buttonText}>login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Login;