import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#76cdd8',
    },
    title: {
        width: '100%',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        fontFamily: 'vinchHand',
    },
    productItem: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
    },
    productInfo: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    productImage: {
        width: 35,
        height: 35,
        marginRight: 30,
    },
    productTitle: {
        fontSize: 20,
        color: '#ccc',
        fontFamily: 'vinchHand',
    },
    input: {
        width: '100%',
        textAlign: 'center',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        color: '#ccc',
        backgroundColor: '#fff',
        fontFamily: 'vinchHand',
        borderRadius: 5,
    },
    button: {
        height: 20,
    },
    arrowRightIcon: {
        width: 20,
        height: 20,
    }
}),
    buttonUnderlayColor = 'transparent';

export { styles, buttonUnderlayColor };
