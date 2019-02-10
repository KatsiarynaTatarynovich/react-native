import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';

import { styles, buttonUnderlayColor } from './styles';

class OfflineNotice extends Component {
    state = {
        modalVisible: true
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={this.setModalVisible.bind(this, false)}>
                <View style={styles.container}>
                    <Text style={styles.title}>No Internet Connection :(</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            onPress={this.setModalVisible.bind(this, true)}
                            underlayColor={buttonUnderlayColor}
                            style={styles.button}>
                            <Text style={styles.buttonText}>try again</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={this.setModalVisible.bind(this, false)}
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

export default OfflineNotice;