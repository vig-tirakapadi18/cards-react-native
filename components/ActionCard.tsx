import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ActionCard = (): React.JSX.Element => {
    const openSite = (siteLink: string) => {
        Linking.openURL(siteLink);
    };

    const img = 'https://cdn.pixabay.com/photo/2024/09/27/09/03/bird-9078403_1280.jpg';

    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>A Beautiful Bird</Text>
                </View>
                <Image style={styles.img} source={{
                    uri: img,
                }} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardBodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat nulla, obcaecati officiis magni optio similique ipsam accusamus aliquid esse ut? Quos aliquam dolorum nulla excepturi ipsa eos earum at!</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => openSite('https://pixabay.com/')} style={styles.cardFooter}>
                        <Text style={styles.cardFooterText}>Go to PixaBay</Text>
                        <Text style={styles.cardFooterText}>Stay Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ActionCard;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'black',
    },
    card: {
        margin: 10,
        backgroundColor: '#2ECC72',
        borderRadius: 10,
    },
    elevatedCard: {},
    headingContainer: {},
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
        padding: 10,
    },
    img: {
        height: 200,
    },
    cardBody: {
    },
    cardBodyText: {
        color: 'black',
        fontSize: 16,
        padding: 10,
    },
    cardFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardFooterText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 7,
    },
});
