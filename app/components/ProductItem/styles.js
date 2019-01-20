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
    titleWrap: {
        flexDirection: 'row',
        paddingTop: 40,
        left: -20,
    },
    productTitle: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'left',
        paddingBottom: 5,
        paddingTop: 10,
        paddingLeft: 10,
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
    productImage: {
        width: 60,
        height: 60,
    },
    buttonMap: {
        width: 60,
        height: 60,
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
    buttonUnderlayColor = '#263852',
    buttonMapUnderlayColor = 'transparent';

export { styles, buttonUnderlayColor, buttonMapUnderlayColor };
