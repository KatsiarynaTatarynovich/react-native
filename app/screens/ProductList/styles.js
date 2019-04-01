import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#76cdd8',
    },
    titleWrap: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 85,
        zIndex: 20
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
    button: {
        marginTop: 25,
        marginBottom: 20,
        width: 100,
        backgroundColor: '#008ACE',
        borderRadius: 5,
        position: 'absolute',
        right: 10,
        zIndex: 20
    },
    buttonText: {
        padding: 8,
        color: "#fff",
        fontFamily: 'vinchHand',
        textAlign: 'center',

    },
    flatList: {
        width: '100%',
    },
    flatListMarginTop: {
        marginTop: 85
    },
    greetingMessage: {
        flex: 1,
        justifyContent: 'center',
    }
}),
    buttonUnderlayColor = '#263852';

export { styles, buttonUnderlayColor };
