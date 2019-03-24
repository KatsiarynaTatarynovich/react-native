import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight, Vibration, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import { Sentry } from 'react-native-sentry';

import { styles, buttonUnderlayColor } from './styles';

const DURATION = 600;
const ANIMATION_PATH = '../../assets/animation/4053-crying-smoothymon.json';
const ANIMATION_NETWORK_PATH = '../../assets/animation/3648-no-internet-connection.json';

class ErrorNotice extends Component {
    constructor(props) {
        super(props);

        this.state  = {
            modalVisible: true
        };

        this.progress = new Animated.Value(0);
    }

    componentDidMount() {
        const { errorMessage } = this.props;

        Vibration.vibrate(DURATION);
        Sentry.captureMessage(errorMessage);

        Animated.loop(
            Animated.timing(this.progress, {
                toValue: 1,
                duration: 5000
            })
        ).start();
    }

    open = () => {
        this.setModalVisible(true);
    };

    close = () => {
        this.setModalVisible(false);
    };

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={this.close}>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.errorMessage}</Text>
                    { this.props.isNetworkError ?
                        <LottieView
                            source={require(ANIMATION_NETWORK_PATH)}
                            progress={this.progress}
                            style={styles.animationNetwork}
                        /> :
                        <LottieView
                            source={require(ANIMATION_PATH)}
                            progress={this.progress}
                            style={styles.animation}
                        />
                    }
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            onPress={this.open}
                            underlayColor={buttonUnderlayColor}
                            style={styles.button}>
                            <Text style={styles.buttonText}>try again</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={this.close}
                            underlayColor={buttonUnderlayColor}
                            style={styles.button}>
                            <Text style={styles.buttonText}>close</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default ErrorNotice;