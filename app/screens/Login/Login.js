import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableHighlight } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

class Login extends Component {
    state = {
        login: '',
        password: ''
    };

    onChangeText(id, newText) {
        this.setState({ [id]: newText })
    }

    redirect() {
        this.props.navigation.navigate('ProductList', {
            screen: 'ProductList'
        });
    }

    async login() {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.login,
                password: this.state.password
            })
        };

        try {
            const response = await fetch('http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token', config);

            if (response.status >= 200 && response.status < 300) {
                this.redirect();
            }
        } catch (errors) {
            console.log(errors);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={iconImages.cookieMonster}
                    style={styles.image}/>
                <Text style={styles.title}>Friday's shop</Text>
                <TextInput
                    style={styles.input}
                    placeholder='login'
                    onChangeText={this.onChangeText.bind(this, 'login')}
                />
                <TextInput
                    style={[styles.input, styles.inputLast]}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={this.onChangeText.bind(this, 'password')}
                />
                <TouchableHighlight
                    onPress={this.login.bind(this)}
                    underlayColor={buttonUnderlayColor}
                    style={styles.button}>
                    <Text style={styles.buttonText}>login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Login;