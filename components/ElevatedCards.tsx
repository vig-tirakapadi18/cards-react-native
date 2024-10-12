import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ElevatedCards = (): React.JSX.Element => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView style={styles.container} horizontal={true}>
                <View style={styles.card}>
                    <Text style={styles.text}>TAP</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>TAP</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>TAP</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>TAP</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>TAP</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>TAP</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ElevatedCards;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
    },
    container: {
    },
    card: {
        backgroundColor: '#e11d48',
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 500,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    cardElevated: {},
    text: {
        color: 'white',
        fontWeight: '700',
    },
});
