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
    flatList: {
        width: '100%',
    },
    flatListMarginTop: {
        marginTop: 85,
    }
});

export { styles };
