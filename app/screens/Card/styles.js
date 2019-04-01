import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#76cdd8',
        height: '100%'
    },
    itemWrap: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    cardItem: {
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
    cardInfo: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    cardImage: {
        width: 35,
        height: 35,
        marginRight: 15,
    },
    cardTitle: {
        fontSize: 20,
        color: '#ccc',
        fontFamily: 'vinchHand',
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
