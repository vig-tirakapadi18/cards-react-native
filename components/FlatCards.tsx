import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlatCards = (): React.JSX.Element => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.text}>CAT</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.text}>DOG</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.text}>HORSE</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text style={styles.text}>PIGON</Text>
                </View>
            </View>
        </View>
    );
};

export default FlatCards;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: '700',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        margin: 10,
    },
    cardOne: {
        backgroundColor: 'dodgerblue',
    },
    cardTwo: {
        backgroundColor: 'salmon',
    },
    cardThree: {
        backgroundColor: 'seagreen',
    },
    cardFour: {
        backgroundColor: 'royalblue',
    },
    text: {
        color: 'white',
        fontWeight: '700',
    },
});
