import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#76cdd8',
        padding: 20,
    },
    image: {
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 60,
        fontFamily: 'vinchHand',
    },
    input: {
        width: '100%',
        textAlign: 'center',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        color: '#ccc',
        backgroundColor: '#fff',
        fontFamily: 'vinchHand',
        borderRadius: 5,
    },
    button: {
        marginTop: 40,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#008ACE',
        borderRadius: 5,
    },
    buttonText: {
        padding: 8,
        color: "#fff",
        fontFamily: 'vinchHand',
    }
}),
    buttonUnderlayColor = '#263852';

export { styles, buttonUnderlayColor };
