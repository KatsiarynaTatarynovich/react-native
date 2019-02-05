import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableHighlight, TouchableNativeFeedback, Animated, Easing } from 'react-native';

import { iconImages } from './../../images';

import { styles, buttonUnderlayColor } from './styles';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };
        this.imageRotateValue = new Animated.Value(0);
        this.imageTranslateXValue = new Animated.Value(0);
        this.titleTranslateYValue = new Animated.Value(0);
        this.titleScaleValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.imageTranslateXValue.setValue(0);
        this.titleTranslateYValue.setValue(0);

        Animated.sequence([
            Animated.timing(this.titleTranslateYValue, {
                toValue: 1,
                duration: 400,
                easing: Easing.easing
            }),
            Animated.spring(this.titleScaleValue, {
                toValue: 1,
                friction: 6
            }),
            Animated.parallel([
                Animated.timing(this.imageTranslateXValue, {
                    toValue: 1,
                    duration: 400,
                    easing: Easing.easing
                }),
                Animated.spring(this.imageRotateValue, {
                    toValue: 1,
                    friction: 3
                }),
            ]),
        ]).start();
    }

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
        const imageMoveX = this.imageTranslateXValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 200]
        });
        const imageRotate = this.imageRotateValue.interpolate({
            inputRange: [0, 0.3, 0.5, 0.7, 1],
            outputRange: ["0deg", "360deg", "-360deg", "360deg", "0deg"]
        });
        const titleMoveY = this.titleTranslateYValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 200]
        });
        const titleScale = this.titleScaleValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.25, 0.5, 1]
        });

        let transformImageStyle = { transform: [{ translateX: imageMoveX }, { rotate: imageRotate}] };
        let transformTitleStyle = { transform: [{ translateY: titleMoveY}, { scale: titleScale }] };

        return (
            <View style={styles.container}>
                <Animated.Image
                    source={iconImages.cookieMonster}
                    style={[styles.image, transformImageStyle]}/>
                <Animated.Text style={[styles.title, transformTitleStyle]}>Friday's shop</Animated.Text>
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
                <TouchableNativeFeedback
                    onPress={this.login.bind(this)}
                    background={TouchableNativeFeedback.Ripple(buttonUnderlayColor)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>login</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

export default Login;