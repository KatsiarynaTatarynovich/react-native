import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d35d47',
        padding: 20,
    },
    title: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 60,
        fontFamily: 'vinchHand',
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        alignItems: 'center',
        backgroundColor: '#a54634',
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        padding: 8,
        color: "#fff",
        fontFamily: 'vinchHand',
    }
}),
    buttonUnderlayColor = '#883a2b';

export { styles, buttonUnderlayColor };
