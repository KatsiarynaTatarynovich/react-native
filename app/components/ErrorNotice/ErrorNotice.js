import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight, Vibration } from 'react-native';

import { styles, buttonUnderlayColor } from './styles';

const DURATION = 600;

class ErrorNotice extends Component {
    state = {
        modalVisible: true
    };

    componentDidMount() {
        Vibration.vibrate(DURATION);
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