import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#76cdd8',
        paddingHorizontal: 40,
    },
    product: {
        width: '80%',
    },
    productTitle: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'left',
        paddingTop: 30,
        paddingBottom: 5,
        paddingLeft: 40,
        fontFamily: 'vinchHand',
    },
    productInfo: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'vinchHand',
    },
    productId: {
        position: 'absolute',
        top: 20,
        left: -30,
        fontSize: 30,
    },
    button: {
        marginTop: 25,
        width: 100,
        alignItems: 'center',
        backgroundColor: '#008ACE',
        borderRadius: 5,
    },
    buttonText: {
        padding: 5,
        color: "#fff",
        fontFamily: 'vinchHand',
    }
}),
    buttonUnderlayColor = '#263852';

export { styles, buttonUnderlayColor };
