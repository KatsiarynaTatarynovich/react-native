import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        marginRight: 15,
    },
    productTitle: {
        fontSize: 20,
        color: '#ccc',
        fontFamily: 'vinchHand',
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
